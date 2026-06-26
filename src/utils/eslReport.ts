import type { ContactInfo, EslPlacementReport, EslStudyEstimate, PlacementScore, SectionDiagnostic, SectionScore } from "../types";

const ESL_HOUR_BANDS: Record<string, { min: number; max: number }> = {
  "Starter / Pre-A1 Support": { min: 0, max: 60 },
  "A1 Foundation": { min: 60, max: 120 },
  "A2 Entry with Support": { min: 120, max: 180 },
  "A2 Core": { min: 180, max: 240 },
  "B1 Entry / B1 Core": { min: 240, max: 400 },
  "B1+ / B2 Support": { min: 400, max: 550 },
  "B2 Core": { min: 550, max: 700 }
};

const SECTION_FOCUS_REASON: Record<string, string> = {
  listening: "Listening support should focus on keywords, details, similar-sounding words, and repeated exposure to short audio.",
  language: "Language Use support should focus on grammar accuracy, sentence control, vocabulary, and error correction.",
  reading: "Reading support should focus on vocabulary in context, main ideas, details, and evidence-based answers."
};

const SECTION_NAMES: Record<string, string> = {
  listening: "Listening",
  language: "Language Use",
  reading: "Reading"
};

function getSectionLabel(percent: number) {
  if (percent >= 80) return "Strong";
  if (percent >= 65) return "Secure";
  if (percent >= 50) return "Developing";
  if (percent >= 35) return "Needs Support";
  return "Priority Support";
}

function getSectionComment(sectionId: string, percent: number) {
  if (sectionId === "listening") {
    if (percent >= 80) return "Student can understand short spoken information with good accuracy.";
    if (percent >= 65) return "Student can understand main ideas but may miss details or similar-sounding words.";
    if (percent >= 50) return "Student can follow simple audio, but needs more practice with keywords and details.";
    if (percent >= 35) return "Student needs guided listening practice with short audio and repeated exposure.";
    return "Student needs foundational listening support before moving to longer tasks.";
  }

  if (sectionId === "language") {
    if (percent >= 80) return "Student shows strong control of basic grammar and vocabulary.";
    if (percent >= 65) return "Student has a usable grammar foundation but still needs accuracy practice.";
    if (percent >= 50) return "Student understands some patterns but needs support with sentence structure.";
    if (percent >= 35) return "Student needs targeted grammar and vocabulary rebuilding.";
    return "Student needs foundation-level language support before academic tasks.";
  }

  if (percent >= 80) return "Student can understand short texts and locate details effectively.";
  if (percent >= 65) return "Student can read simple passages but may need support with inference or main idea.";
  if (percent >= 50) return "Student can understand some details but needs stronger reading strategy.";
  if (percent >= 35) return "Student needs guided reading with vocabulary and sentence support.";
  return "Student needs foundational reading support with short controlled texts.";
}

function parseScoreRange(range: string) {
  const [rawMin, rawMax] = range.split(/[–-]/).map((item) => Number(item.trim()));
  return {
    min: Number.isFinite(rawMin) ? rawMin : 0,
    max: Number.isFinite(rawMax) ? rawMax : 100
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getCurrentEstimatedHours(score: PlacementScore) {
  const hourBand = ESL_HOUR_BANDS[score.level.label] ?? { min: 0, max: 0 };
  const scoreRange = parseScoreRange(score.level.range);
  const rangeSize = Math.max(1, scoreRange.max - scoreRange.min);
  const positionInBand = clamp((score.estimatedTotalScale - scoreRange.min) / rangeSize, 0, 1);
  return Math.round(hourBand.min + positionInBand * (hourBand.max - hourBand.min));
}

function getTargetHours(targetLevel: string) {
  return ESL_HOUR_BANDS[targetLevel]?.max ?? null;
}

function getFeasibilityLabel(dailyHours: number, requiredHours: number) {
  if (requiredHours <= 0) return "Already at or above target";
  if (dailyHours <= 0.5) return "Light maintenance";
  if (dailyHours <= 1) return "Comfortable";
  if (dailyHours <= 2) return "Realistic";
  if (dailyHours <= 3) return "Intensive";
  return "High-risk / advisor review needed";
}

function getFeasibilityNote(label: string) {
  switch (label) {
    case "Already at or above target":
      return "The preliminary result is already at or above the selected target. Teacher review should confirm the final placement.";
    case "Light maintenance":
      return "The target looks achievable with a light, consistent routine if the student maintains attendance.";
    case "Comfortable":
      return "The target looks comfortable with regular weekly study and review.";
    case "Realistic":
      return "The target looks realistic if the student studies consistently and completes assigned practice.";
    case "Intensive":
      return "The target is intensive. The student will need strong consistency, teacher support, and parent follow-up.";
    default:
      return "The target is very demanding. Consider extending the target date or setting an intermediate milestone first.";
  }
}

function buildStudyEstimate(score: PlacementScore, contact: ContactInfo): EslStudyEstimate | undefined {
  const targetLevel = contact.targetLevel?.trim();
  const targetDate = contact.targetDate?.trim();
  const studyDaysPerWeek = Number(contact.studyDaysPerWeek || 5);

  if (!targetLevel || !targetDate) return undefined;

  const targetHours = getTargetHours(targetLevel);
  if (targetHours === null) return undefined;

  const currentHours = getCurrentEstimatedHours(score);
  const rawGap = Math.max(0, targetHours - currentHours);
  const reviewFactor = 1;
  const buffer = 1.15;
  const attendanceFactor = 0.85;
  const requiredHours = Math.ceil(rawGap * reviewFactor * buffer);

  const today = new Date();
  const target = new Date(`${targetDate}T23:59:59`);
  const daysUntilTarget = Math.max(0, Math.ceil((target.getTime() - today.getTime()) / 86400000));
  const availableStudyDays = daysUntilTarget > 0 ? daysUntilTarget * (studyDaysPerWeek / 7) * attendanceFactor : 0;
  const dailyHours = availableStudyDays > 0 ? requiredHours / availableStudyDays : 0;
  const feasibility = getFeasibilityLabel(dailyHours, requiredHours);

  return {
    currentHours,
    targetHours,
    requiredHours,
    daysUntilTarget,
    studyDaysPerWeek,
    availableStudyDays: Math.round(availableStudyDays * 10) / 10,
    dailyHours: Math.round(dailyHours * 10) / 10,
    reviewFactor,
    buffer,
    attendanceFactor,
    feasibility,
    note: getFeasibilityNote(feasibility)
  };
}

function buildSectionDiagnostics(sectionScores: SectionScore[]): SectionDiagnostic[] {
  return sectionScores.map((section) => ({
    ...section,
    label: getSectionLabel(section.percent),
    comment: getSectionComment(section.sectionId, section.percent)
  }));
}

function buildSkillProfile(diagnostics: SectionDiagnostic[]) {
  const sorted = [...diagnostics].sort((a, b) => a.percent - b.percent);
  const weakest = sorted[0];
  const strongest = sorted[sorted.length - 1];
  const gap = strongest.percent - weakest.percent;

  if (diagnostics.every((section) => section.percent >= 80)) {
    return "The student shows balanced and strong performance across the auto-graded sections. Teacher review should confirm productive skills before final placement.";
  }

  if (gap >= 20) {
    return `The student's skill profile is uneven. ${SECTION_NAMES[strongest.sectionId] ?? strongest.title} is stronger, while ${SECTION_NAMES[weakest.sectionId] ?? weakest.title} needs priority support.`;
  }

  if (diagnostics.every((section) => section.percent >= 65)) {
    return "The student has a generally secure foundation across the auto-graded sections, with some areas still needing accuracy and practice.";
  }

  if (diagnostics.some((section) => section.percent < 50)) {
    return "The student shows partial understanding, but at least one core skill needs structured support before moving into a higher level.";
  }

  return "The student shows developing performance across the auto-graded sections. A structured study plan should focus on consistency, sentence control, and review.";
}

function buildPriorityFocus(diagnostics: SectionDiagnostic[]) {
  const sorted = [...diagnostics].sort((a, b) => a.percent - b.percent);
  const first = sorted[0];
  const second = sorted[1];
  const focus = [first];

  if (second && second.percent - first.percent <= 8) {
    focus.push(second);
  }

  return focus.map((section) => ({
    sectionId: section.sectionId,
    title: section.title,
    reason: SECTION_FOCUS_REASON[section.sectionId] ?? "This section should receive focused support in the first learning plan."
  }));
}

function buildPlacementConfidence(score: PlacementScore, diagnostics: SectionDiagnostic[]) {
  const percents = diagnostics.map((section) => section.percent);
  const gap = Math.max(...percents) - Math.min(...percents);
  const range = parseScoreRange(score.level.range);
  const nearBoundary = Math.min(
    Math.abs(score.estimatedTotalScale - range.min),
    Math.abs(score.estimatedTotalScale - range.max)
  ) <= 3;

  if (gap <= 14 && !nearBoundary) {
    return {
      label: "High confidence" as const,
      reason: "The section scores are relatively balanced and the total score is not too close to a band boundary."
    };
  }

  if (gap <= 25 || nearBoundary) {
    return {
      label: "Medium confidence" as const,
      reason: nearBoundary
        ? "The total score is close to a band boundary, so teacher review should confirm the final level."
        : "One section is noticeably stronger or weaker, so teacher review should confirm the final level."
    };
  }

  return {
    label: "Needs teacher confirmation" as const,
    reason: "The section scores are uneven, so writing and speaking review are important before final placement."
  };
}

export function buildEslPlacementReport(score: PlacementScore, contact: ContactInfo): EslPlacementReport {
  const sectionDiagnostics = buildSectionDiagnostics(score.sectionScores);

  return {
    sectionDiagnostics,
    skillProfile: buildSkillProfile(sectionDiagnostics),
    priorityFocus: buildPriorityFocus(sectionDiagnostics),
    placementConfidence: buildPlacementConfidence(score, sectionDiagnostics),
    studyEstimate: buildStudyEstimate(score, contact)
  };
}
