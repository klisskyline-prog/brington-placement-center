import type { ContactInfo, PlacementScore } from "../../types";
import type { ModuleReport } from "../types";
import { buildPlacementConfidence, buildPriorityFocus, buildSectionDiagnostics } from "../shared/diagnostics";
import { buildStudyEstimate } from "../shared/studyTime";

export const CHINESE_HOUR_BANDS: Record<string, { min: number; max: number }> = {
  "Level 0 — Mandarin Starter": { min: 0, max: 40 },
  "Level 1 — Foundation A": { min: 40, max: 100 },
  "Level 2 — Foundation B": { min: 100, max: 180 },
  "Level 3 — Elementary Communication": { min: 180, max: 260 },
  "Level 3+ / Review Interview Required": { min: 260, max: 360 },
};

export const CHINESE_SECTION_WEIGHTS: Record<string, number> = {
  listening: 20,
  pinyin: 15,
  vocabulary: 20,
  grammar: 20,
  reading: 15,
};

export function getChineseSectionComment(sectionId: string, percent: number) {
  if (sectionId === "listening") {
    if (percent >= 80) return "Student understands beginner Mandarin listening input with strong accuracy.";
    if (percent >= 65) return "Student can follow short Mandarin audio, but should continue listening detail practice.";
    if (percent >= 50) return "Student understands some short audio but needs repeated exposure and guided listening.";
    if (percent >= 35) return "Student needs structured listening practice with short, slow audio and clear repetition.";
    return "Student needs foundational listening support before moving into independent Mandarin audio tasks.";
  }

  if (sectionId === "pinyin") {
    if (percent >= 80) return "Student shows strong pinyin and tone awareness for beginner-level Mandarin.";
    if (percent >= 65) return "Student has usable pinyin awareness, but tones and sound-symbol mapping still need review.";
    if (percent >= 50) return "Student recognizes some pinyin and tones, but needs systematic pronunciation practice.";
    if (percent >= 35) return "Student needs pinyin and tone bridge support before higher vocabulary or reading work.";
    return "Student needs a clear pinyin, tone, and pronunciation foundation from the beginning.";
  }

  if (sectionId === "vocabulary") {
    if (percent >= 80) return "Student recognizes core beginner vocabulary and simple sentence meanings well.";
    if (percent >= 65) return "Student knows some common words and sentence meanings, but should build broader topic vocabulary.";
    if (percent >= 50) return "Student can recognize some basic vocabulary but needs more review and recycling.";
    if (percent >= 35) return "Student needs guided vocabulary building with pictures, audio, pinyin, and short phrases.";
    return "Student needs first-word vocabulary support before sentence-level Mandarin tasks.";
  }

  if (sectionId === "grammar") {
    if (percent >= 80) return "Student handles simple Mandarin sentence patterns and basic word order with strong accuracy.";
    if (percent >= 65) return "Student can use some basic sentence patterns, but should practice particles and sentence control.";
    if (percent >= 50) return "Student understands some sentence patterns but needs more grammar and word-order practice.";
    if (percent >= 35) return "Student needs sentence-building support before moving into longer dialogues or writing.";
    return "Student needs foundation-level sentence pattern support from the beginning.";
  }

  if (sectionId === "reading") {
    if (percent >= 80) return "Student can understand short beginner Mandarin reading passages with strong accuracy.";
    if (percent >= 65) return "Student can read short controlled passages, but should strengthen detail and vocabulary recognition.";
    if (percent >= 50) return "Student can understand some short reading input but needs guided reading support.";
    if (percent >= 35) return "Student needs controlled reading practice with short texts, pinyin support, and vocabulary review.";
    return "Student needs foundational character/word recognition before independent Mandarin reading.";
  }

  return "This skill area should be reviewed by the academic team.";
}

export function getChinesePriorityReason(sectionId: string) {
  if (sectionId === "listening") return "Listening support should focus on short audio, repeated exposure, numbers, classroom words, and familiar phrases.";
  if (sectionId === "pinyin") return "Pinyin and tone support should focus on sound-symbol mapping, tone marks, and pronunciation confidence.";
  if (sectionId === "vocabulary") return "Vocabulary support should focus on core words, meaning recognition, and repeated use in simple sentences.";
  if (sectionId === "grammar") return "Grammar support should focus on 是, 有, 不, 吗, basic word order, and simple sentence building.";
  if (sectionId === "reading") return "Reading support should focus on short controlled texts, key details, and beginner character/word recognition.";
  return "This area should be reviewed by the academic team.";
}

function buildChineseSkillProfile(score: PlacementScore, sectionDiagnostics: NonNullable<ModuleReport["sectionDiagnostics"]>) {
  if (!sectionDiagnostics.length) return "Mandarin section data is not available yet. Teacher/advisor review should confirm final placement.";

  const sorted = [...sectionDiagnostics].sort((a, b) => a.percent - b.percent);
  const weakest = sorted[0];
  const strongest = sorted[sorted.length - 1];
  const gap = strongest.percent - weakest.percent;

  if (sectionDiagnostics.every((section) => section.percent >= 80)) {
    return "The student shows a strong beginner Mandarin profile across the auto-graded sections. A speaking review should confirm pronunciation, tones, and oral confidence before final grouping.";
  }

  if (gap >= 30) {
    return `The student has an uneven Mandarin profile. ${strongest.title} is stronger, while ${weakest.title} needs priority support before the student is placed too high.`;
  }

  if (score.estimatedTotalScale <= 40) {
    return "The student should build a careful Mandarin foundation first, especially pinyin, tones, core vocabulary, and simple speaking confidence.";
  }

  if (score.estimatedTotalScale <= 60) {
    return "The student has some beginner Mandarin foundation and should continue with structured theme-based lessons, sentence building, and guided speaking practice.";
  }

  return "The student appears ready for elementary Mandarin communication work, but final placement should still consider speaking, pronunciation, and confidence.";
}

export function buildChinesePlacementReport(score: PlacementScore, contact: ContactInfo): ModuleReport {
  const sectionDiagnostics = buildSectionDiagnostics(score.sectionScores, getChineseSectionComment);

  return {
    sectionDiagnostics,
    skillProfile: buildChineseSkillProfile(score, sectionDiagnostics),
    priorityFocus: buildPriorityFocus(sectionDiagnostics, getChinesePriorityReason),
    placementConfidence: buildPlacementConfidence(score, sectionDiagnostics),
    studyEstimate: buildStudyEstimate({
      score,
      contact,
      hourBands: CHINESE_HOUR_BANDS,
      testName: "Mandarin",
    }),
    scoringNote:
      "Preliminary score uses Sections A-E only. Full Mandarin placement model is 100 points: A-E auto-grade = 90 points, Speaking interview = 10 points. This is an internal placement tool, not an official HSK/YCT score.",
  };
}
