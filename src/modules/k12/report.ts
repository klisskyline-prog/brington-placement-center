import type { AnswerMap, ContactInfo, PlacementScore, TeacherReview } from "../../types";
import type { ModuleReport, PlacementConfidence, SectionDiagnostic } from "../types";
import { k12GradeBandLabels, k12SupportTimeBands, type K12GradeBand } from "../../data/k12PlacementData";
import { buildPriorityFocus, buildSectionDiagnostics, getDiagnosticLabel } from "../shared/diagnostics";
import { parseScoreRange } from "../shared/studyTime";

export type K12SupportPlan = {
  label: string;
  weeks: string;
  weeklyHours: string;
  supportLevel: "ready" | "support" | "bridge" | "intensive" | "advisor";
  focus: string[];
  note: string;
};

export type K12Report = ModuleReport & {
  gradeBand: K12GradeBand;
  gradeBandLabel: string;
  recommendedStartingPoint: string;
  supportPlan: K12SupportPlan;
  guardrails: string[];
  manualReviewRequired: boolean;
  recordsReviewRequired: boolean;
};

function extractGradeNumber(value: string) {
  const normalized = value.toLowerCase();
  const gradeMatch = normalized.match(/(?:grade|gr|g|lớp)\s*(\d{1,2})/i);
  const firstNumber = normalized.match(/\d{1,2}/);
  const raw = gradeMatch?.[1] ?? firstNumber?.[0];
  const grade = raw ? Number(raw) : 0;
  return Number.isFinite(grade) ? grade : 0;
}

export function resolveK12GradeBand(contact: Pick<ContactInfo, "gradeLevel" | "targetLevel" | "studentAge">): K12GradeBand {
  const entryGrade = extractGradeNumber(contact.targetLevel);
  const currentGrade = extractGradeNumber(contact.gradeLevel);
  const age = extractGradeNumber(contact.studentAge);
  const grade = entryGrade || currentGrade;

  if (grade >= 9) return "g9_12";
  if (grade >= 6) return "g6_8";
  if (grade >= 3) return "g3_5";
  if (grade >= 1) return "g1_2";

  if (age >= 14) return "g9_12";
  if (age >= 11) return "g6_8";
  if (age >= 8) return "g3_5";
  return "g1_2";
}

export function getK12SectionComment(sectionId: string, percent: number) {
  const label = getDiagnosticLabel(percent);

  if (sectionId === "reading") {
    if (label === "Strong") return "The student can understand grade-band academic passages with strong accuracy.";
    if (label === "Secure") return "The student can handle many grade-band reading tasks, but should keep building evidence and vocabulary skills.";
    if (label === "Developing") return "The student needs guided reading practice before handling heavier U.S.-standard coursework independently.";
    if (label === "Needs Support") return "Academic reading may limit independent progress; add reading bridge and vocabulary support.";
    return "Reading is a priority support area. Do not confirm full independent grade-band study without ELA support.";
  }

  if (sectionId === "language") {
    if (label === "Strong") return "The student shows strong grammar, sentence control, and academic vocabulary for the selected band.";
    if (label === "Secure") return "The student has usable language control, with some accuracy and academic vocabulary gaps to monitor.";
    if (label === "Developing") return "The student needs sentence, grammar, and academic vocabulary support during entry.";
    if (label === "Needs Support") return "Language use may affect reading, writing, and content learning; add structured English support.";
    return "Academic English language control is a priority area before heavier grade-band work.";
  }

  if (sectionId === "math") {
    if (label === "Strong") return "The student shows strong math readiness for the selected grade band.";
    if (label === "Secure") return "The student can handle many math foundations, with some review recommended.";
    if (label === "Developing") return "The student should review key math foundations before or alongside grade-band math.";
    if (label === "Needs Support") return "Math bridge support is recommended before core math placement is finalized.";
    return "Math is a priority support area. Do not place the student too high based on language scores alone.";
  }

  if (sectionId === "science") {
    if (label === "Strong") return "The student understands science/social studies informational text and subject vocabulary well.";
    if (label === "Secure") return "The student can follow many content-reading tasks, with vocabulary support recommended.";
    if (label === "Developing") return "The student needs practice reading subject text, charts, evidence, and key content vocabulary.";
    if (label === "Needs Support") return "Subject-reading support is needed to help the student access science/social studies courses.";
    return "Subject vocabulary and informational reading are priority support areas.";
  }

  return "This area should be reviewed by the academic team.";
}

export function getK12PriorityReason(sectionId: string) {
  if (sectionId === "reading") return "Academic reading support should focus on main idea, evidence, vocabulary in context, and informational text comprehension.";
  if (sectionId === "language") return "Language support should focus on sentence control, grammar accuracy, academic vocabulary, and writing readiness.";
  if (sectionId === "math") return "Math support should target prerequisite skills before or alongside grade-band math.";
  if (sectionId === "science") return "Science/social studies support should focus on subject vocabulary, evidence language, charts, and short informational texts.";
  return "Advisor should review this area before confirming placement.";
}

function buildK12Confidence(score: PlacementScore, diagnostics: SectionDiagnostic[], guardrails: string[]): PlacementConfidence {
  if (!diagnostics.length) return {
    label: "Needs teacher confirmation",
    reason: "This route uses advisor-guided placement, so records and advisor review should confirm the starting point.",
  };

  const range = parseScoreRange(score.level.range);
  const nearBoundary = Math.min(
    Math.abs(score.estimatedTotalScale - range.min),
    Math.abs(score.estimatedTotalScale - range.max),
  ) <= 3;
  const percents = diagnostics.map((section) => section.percent);
  const gap = Math.max(...percents) - Math.min(...percents);

  if (guardrails.length >= 2) return {
    label: "Needs teacher confirmation",
    reason: "Multiple section guardrails were triggered, so the advisor should review the pathway before confirming placement.",
  };

  if (nearBoundary || gap >= 30 || guardrails.length === 1) return {
    label: "Medium confidence",
    reason: nearBoundary
      ? "The score is close to a recommendation boundary, so advisor review should confirm the starting point."
      : "One section is much stronger or weaker than the others, so support planning should be confirmed manually.",
  };

  return {
    label: "High confidence",
    reason: "The score is not near a boundary and the section profile is reasonably balanced. Records and writing review are still required for final placement.",
  };
}

function buildGuardrails(diagnostics: SectionDiagnostic[], gradeBand: K12GradeBand) {
  const guardrails: string[] = [];
  const reading = diagnostics.find((section) => section.sectionId === "reading");
  const language = diagnostics.find((section) => section.sectionId === "language");
  const math = diagnostics.find((section) => section.sectionId === "math");
  const science = diagnostics.find((section) => section.sectionId === "science");
  const lowCoreCount = [reading, language, math, science].filter((section) => section && section.percent < 45).length;

  if (reading && reading.percent < 40) guardrails.push("Academic English Reading is below 40%; add ELA/reading support before independent grade-band study.");
  if (language && language.percent < 40) guardrails.push("Language Use is below 40%; add academic English grammar and vocabulary support.");
  if (math && math.percent < 40) guardrails.push("Math Readiness is below 40%; add math bridge/remediation before or alongside core math.");
  if (science && science.percent < 40) guardrails.push("Science/Social Studies Reading is below 40%; add subject vocabulary and informational reading support.");
  if (lowCoreCount >= 2) guardrails.push("Two or more core sections are below 45%; cap the recommendation at Conditional Entry until advisor review.");
  if (gradeBand === "g9_12") guardrails.push("Grade 9–12 placement requires transcript/credit review before final course or graduation-pathway confirmation.");

  return guardrails;
}

function buildSupportPlan(score: PlacementScore, diagnostics: SectionDiagnostic[], guardrails: string[]): K12SupportPlan {
  const lowest = diagnostics.length ? [...diagnostics].sort((a, b) => a.percent - b.percent)[0] : undefined;
  const lowCount = diagnostics.filter((section) => section.percent < 45).length;
  let supportLevel: K12SupportPlan["supportLevel"] = "ready";

  if (score.estimatedTotalScale <= 30) supportLevel = "intensive";
  else if (score.estimatedTotalScale <= 50) supportLevel = "bridge";
  else if (score.estimatedTotalScale <= 70) supportLevel = "support";
  else supportLevel = "ready";

  if (lowCount >= 2 || guardrails.length >= 3) supportLevel = "advisor";
  else if (lowest && lowest.percent < 40 && supportLevel === "ready") supportLevel = "support";
  else if (lowest && lowest.percent < 35 && supportLevel === "support") supportLevel = "bridge";

  const band = k12SupportTimeBands[supportLevel];
  const focus = diagnostics
    .filter((section) => section.percent < 65)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 3)
    .map((section) => section.title);

  return {
    supportLevel,
    label: band.label,
    weeks: band.weeks,
    weeklyHours: band.weeklyHours,
    focus: focus.length ? focus : ["Orientation, pacing, and normal academic check-ins"],
    note: "This is an internal support/bridge estimate based on placement results and section weaknesses. It is not a graduation timeline and does not use a parent-entered target date.",
  };
}

function buildStartingPoint(score: PlacementScore, supportPlan: K12SupportPlan, gradeBand: K12GradeBand) {
  const bandLabel = k12GradeBandLabels[gradeBand];
  if (gradeBand === "g1_2") return "Advisor-guided early elementary readiness check";
  if (supportPlan.supportLevel === "ready") return `${bandLabel} — start with orientation and normal monitoring`;
  if (supportPlan.supportLevel === "support") return `${bandLabel} — supported entry recommended`;
  if (supportPlan.supportLevel === "bridge") return `${bandLabel} — bridge support recommended before or alongside entry`;
  if (supportPlan.supportLevel === "intensive") return `${bandLabel} — intensive bridge recommended before grade-band entry`;
  return `${bandLabel} — advisor review required before confirmation`;
}

function buildSkillProfile(score: PlacementScore, diagnostics: SectionDiagnostic[], supportPlan: K12SupportPlan) {
  if (!diagnostics.length) return "This student should complete an advisor-guided readiness check. Young learners should not be placed by an auto-grade test alone.";
  const sorted = [...diagnostics].sort((a, b) => a.percent - b.percent);
  const weakest = sorted[0];
  const strongest = sorted[sorted.length - 1];
  const gap = strongest.percent - weakest.percent;

  if (supportPlan.supportLevel === "ready") return `The student shows grade-band readiness across the auto-graded sections. ${strongest.title} is the strongest area, and normal orientation should be enough unless writing or records review shows otherwise.`;
  if (gap >= 30) return `The profile is uneven. ${strongest.title} is much stronger, while ${weakest.title} needs targeted support before the pathway is confirmed.`;
  if (score.estimatedTotalScale < 51) return "The student has several foundation gaps. A bridge plan is recommended before independent grade-band coursework.";
  return `The student may enter the grade band with support. The first support focus should be ${weakest.title}.`;
}

export function buildK12PlacementReport(params: {
  score: PlacementScore;
  contact: ContactInfo;
  answers: AnswerMap;
  teacherReview: TeacherReview;
}): K12Report {
  const gradeBand = resolveK12GradeBand(params.contact);
  const sectionDiagnostics = buildSectionDiagnostics(params.score.sectionScores, getK12SectionComment);
  const guardrails = buildGuardrails(sectionDiagnostics, gradeBand);
  const supportPlan = buildSupportPlan(params.score, sectionDiagnostics, guardrails);
  const placementConfidence = buildK12Confidence(params.score, sectionDiagnostics, guardrails);
  const recommendedStartingPoint = buildStartingPoint(params.score, supportPlan, gradeBand);

  return {
    gradeBand,
    gradeBandLabel: k12GradeBandLabels[gradeBand],
    sectionDiagnostics,
    skillProfile: buildSkillProfile(params.score, sectionDiagnostics, supportPlan),
    priorityFocus: buildPriorityFocus(sectionDiagnostics, getK12PriorityReason),
    placementConfidence,
    supportPlan,
    recommendedStartingPoint,
    guardrails,
    manualReviewRequired: true,
    recordsReviewRequired: gradeBand === "g9_12",
  };
}
