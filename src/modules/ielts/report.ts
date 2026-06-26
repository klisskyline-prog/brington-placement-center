import type { ContactInfo, PlacementScore } from "../../types";
import type { ModuleReport } from "../types";
import { buildPlacementConfidence, buildPriorityFocus, buildSectionDiagnostics } from "../shared/diagnostics";
import { buildStudyEstimate } from "../shared/studyTime";

export const IELTS_HOUR_BANDS: Record<string, { min: number; max: number }> = {
  "Foundation 1": { min: 0, max: 120 },
  "Pre-IELTS": { min: 120, max: 240 },
  "IELTS Core": { min: 240, max: 420 },
  "IELTS Target": { min: 420, max: 620 },
  "IELTS Advanced": { min: 620, max: 820 },
  "IELTS Elite": { min: 820, max: 1000 },
};

export function getIeltsSectionComment(sectionId: string, percent: number) {
  if (sectionId === "grammar") {
    if (percent >= 80) return "Student shows strong control of grammar, vocabulary, and IELTS-style academic language.";
    if (percent >= 65) return "Student has a usable grammar and vocabulary base, but should continue accuracy practice.";
    if (percent >= 50) return "Student understands some grammar and vocabulary patterns, but needs more sentence-control support.";
    if (percent >= 35) return "Student needs targeted grammar, vocabulary, and sentence-building practice before higher IELTS tasks.";
    return "Student needs foundation-level grammar and vocabulary support before moving into IELTS-style writing and reading.";
  }

  if (sectionId === "listening") {
    if (percent >= 80) return "Student can follow IELTS-style audio with good accuracy and identify key details.";
    if (percent >= 65) return "Student can understand main ideas, but may miss details, numbers, paraphrases, or speaker signals.";
    if (percent >= 50) return "Student can follow some listening input, but needs practice with keywords, detail tracking, and note completion.";
    if (percent >= 35) return "Student needs guided listening practice with shorter IELTS-style audio and repeated exposure.";
    return "Student needs foundational listening support before attempting longer IELTS listening tasks.";
  }

  if (sectionId === "reading") {
    if (percent >= 80) return "Student can understand IELTS-style reading passages and locate answers with good accuracy.";
    if (percent >= 65) return "Student can handle main ideas and details, but should improve paraphrase, inference, and time control.";
    if (percent >= 50) return "Student can understand some passage information, but needs stronger reading strategies and vocabulary support.";
    if (percent >= 35) return "Student needs guided IELTS reading practice with evidence-finding, keywords, and sentence simplification.";
    return "Student needs foundational reading support before working on full IELTS academic reading tasks.";
  }

  return "This section needs further review by the academic team.";
}

export function getIeltsPriorityReason(sectionId: string) {
  if (sectionId === "grammar") return "Grammar & Vocabulary support should focus on sentence accuracy, word choice, academic vocabulary, and error correction.";
  if (sectionId === "listening") return "Listening support should focus on keywords, details, numbers, paraphrase, and speaker signals.";
  if (sectionId === "reading") return "Reading support should focus on evidence finding, paraphrase, main idea, inference, and time control.";
  return "This area should be reviewed by the academic team.";
}

function buildIeltsSkillProfile(score: PlacementScore, sectionDiagnostics: NonNullable<ModuleReport["sectionDiagnostics"]>) {
  if (!sectionDiagnostics.length) return "IELTS section data is not available yet. Teacher review should confirm the final pathway.";

  const sorted = [...sectionDiagnostics].sort((a, b) => a.percent - b.percent);
  const weakest = sorted[0];
  const strongest = sorted[sorted.length - 1];
  const gap = strongest.percent - weakest.percent;

  if (sectionDiagnostics.every((section) => section.percent >= 80)) {
    return "The student shows balanced and strong performance across the auto-graded IELTS sections. Writing and Speaking review should confirm productive skills before final placement.";
  }

  if (gap >= 30) {
    return `There is a clear skill imbalance. ${strongest.title} is noticeably stronger, while ${weakest.title} needs priority support before the student moves into a higher IELTS pathway.`;
  }

  if (gap >= 18) {
    return `The student shows an uneven IELTS profile. ${strongest.title} is relatively stronger, but ${weakest.title} may limit overall IELTS progress if not supported early.`;
  }

  if (score.percent < 50) {
    return "The student has a relatively balanced IELTS profile, but the overall foundation still needs structured support before higher IELTS pathway work.";
  }

  return "The student’s IELTS section scores are relatively balanced. The main recommendation should be based on the overall level and teacher review of Writing and Speaking.";
}

export function buildIeltsPlacementReport(score: PlacementScore, contact: ContactInfo): ModuleReport {
  const sectionDiagnostics = buildSectionDiagnostics(score.sectionScores, getIeltsSectionComment);

  return {
    sectionDiagnostics,
    skillProfile: buildIeltsSkillProfile(score, sectionDiagnostics),
    priorityFocus: buildPriorityFocus(sectionDiagnostics, getIeltsPriorityReason),
    placementConfidence: buildPlacementConfidence(score, sectionDiagnostics),
    studyEstimate: buildStudyEstimate({ score, contact, hourBands: IELTS_HOUR_BANDS, testName: "IELTS" }),
  };
}
