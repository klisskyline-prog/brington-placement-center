import { eslPlacementLevels } from "../data/eslPlacementData";
import { ieltsPlacementLevels } from "../data/ieltsPlacementData";
import { satPlacementLevels } from "../data/satPlacementData";
import { chinesePlacementLevels } from "../data/chinesePlacementData";
import { k12PlacementLevels } from "../data/k12PlacementData";
import type { AnswerMap, PlacementLevel, PlacementQuestion, PlacementScore, SectionScore, TestId } from "../types";

function normalizeText(value: unknown) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ");
}

function isQuestionCorrect(question: PlacementQuestion, answer: number | string | undefined) {
  if (answer === undefined) return false;

  if (question.questionType === "text") {
    const normalizedAnswer = normalizeText(answer);
    return (question.correctTextAnswers ?? []).some((item) => normalizeText(item) === normalizedAnswer);
  }

  return Number(answer) === question.correctAnswerIndex;
}

export function calculateScore(questions: PlacementQuestion[], answers: AnswerMap, testId: TestId = "esl"): PlacementScore {
  const total = questions.length;
  const correct = questions.reduce((sum, question) => {
    return sum + (isQuestionCorrect(question, answers[question.id]) ? 1 : 0);
  }, 0);
  const rawPercent = total > 0 ? Math.round((correct / total) * 100) : 0;
  const sectionScores = getSectionScores(questions, answers);
  const estimatedTotalScale =
    testId === "chinese"
      ? getChineseWeightedAutoGradeScale(sectionScores)
      : rawPercent;
  const percent = estimatedTotalScale;
  const level = getPlacementLevel(testId, estimatedTotalScale);
  return { correct, total, percent, estimatedTotalScale, level, sectionScores };
}

export function getPlacementLevel(testId: TestId, scoreOn100Scale: number): PlacementLevel {
  if (testId === "ielts") return getIeltsPlacementLevel(scoreOn100Scale);
  if (testId === "sat") return getSatPlacementLevel(scoreOn100Scale);
  if (testId === "chinese") return getChinesePlacementLevel(scoreOn100Scale);
  if (testId === "diploma") return getK12PlacementLevel(scoreOn100Scale);
  return getEslPlacementLevel(scoreOn100Scale);
}

export function getEslPlacementLevel(scoreOn100Scale: number): PlacementLevel {
  if (scoreOn100Scale <= 24) return eslPlacementLevels[0];
  if (scoreOn100Scale <= 39) return eslPlacementLevels[1];
  if (scoreOn100Scale <= 54) return eslPlacementLevels[2];
  if (scoreOn100Scale <= 69) return eslPlacementLevels[3];
  if (scoreOn100Scale <= 82) return eslPlacementLevels[4];
  if (scoreOn100Scale <= 92) return eslPlacementLevels[5];
  return eslPlacementLevels[6];
}

export function getIeltsPlacementLevel(scoreOn100Scale: number): PlacementLevel {
  if (scoreOn100Scale <= 29) return ieltsPlacementLevels[0];
  if (scoreOn100Scale <= 44) return ieltsPlacementLevels[1];
  if (scoreOn100Scale <= 59) return ieltsPlacementLevels[2];
  if (scoreOn100Scale <= 74) return ieltsPlacementLevels[3];
  if (scoreOn100Scale <= 87) return ieltsPlacementLevels[4];
  return ieltsPlacementLevels[5];
}


export function getK12PlacementLevel(scoreOn100Scale: number): PlacementLevel {
  if (scoreOn100Scale <= 30) return k12PlacementLevels[0];
  if (scoreOn100Scale <= 50) return k12PlacementLevels[1];
  if (scoreOn100Scale <= 70) return k12PlacementLevels[2];
  if (scoreOn100Scale <= 85) return k12PlacementLevels[3];
  return k12PlacementLevels[4];
}

export function getChinesePlacementLevel(scoreOn100Scale: number): PlacementLevel {
  if (scoreOn100Scale <= 20) return chinesePlacementLevels[0];
  if (scoreOn100Scale <= 40) return chinesePlacementLevels[1];
  if (scoreOn100Scale <= 60) return chinesePlacementLevels[2];
  if (scoreOn100Scale <= 80) return chinesePlacementLevels[3];
  return chinesePlacementLevels[4];
}

const CHINESE_AUTO_SECTION_POINTS: Record<string, number> = {
  listening: 20,
  pinyin: 15,
  vocabulary: 20,
  grammar: 20,
  reading: 15,
};

export function getChineseWeightedAutoGradeScale(sectionScores: SectionScore[]) {
  const maxAutoPoints = Object.values(CHINESE_AUTO_SECTION_POINTS).reduce((sum, value) => sum + value, 0);
  if (!maxAutoPoints) return 0;

  const weightedPoints = sectionScores.reduce((sum, section) => {
    const sectionPoints = CHINESE_AUTO_SECTION_POINTS[section.sectionId] ?? 0;
    return sum + (section.percent / 100) * sectionPoints;
  }, 0);

  return Math.round((weightedPoints / maxAutoPoints) * 100);
}

export function getSatPlacementLevel(scoreOn100Scale: number): PlacementLevel {
  if (scoreOn100Scale <= 15) return satPlacementLevels[0];
  if (scoreOn100Scale <= 30) return satPlacementLevels[1];
  if (scoreOn100Scale <= 45) return satPlacementLevels[2];
  if (scoreOn100Scale <= 62) return satPlacementLevels[3];
  if (scoreOn100Scale <= 75) return satPlacementLevels[4];
  if (scoreOn100Scale <= 87) return satPlacementLevels[5];
  return satPlacementLevels[6];
}

export function getSectionScores(questions: PlacementQuestion[], answers: AnswerMap): SectionScore[] {
  const sectionMap = new Map<string, { title: string; questions: PlacementQuestion[] }>();

  questions.forEach((question) => {
    const current = sectionMap.get(question.sectionId) ?? { title: question.sectionTitle, questions: [] };
    current.questions.push(question);
    sectionMap.set(question.sectionId, current);
  });

  return Array.from(sectionMap.entries()).map(([sectionId, section]) => {
    const correct = section.questions.reduce((sum, question) => {
      return sum + (isQuestionCorrect(question, answers[question.id]) ? 1 : 0);
    }, 0);
    const total = section.questions.length;
    return {
      sectionId,
      title: section.title,
      correct,
      total,
      percent: total > 0 ? Math.round((correct / total) * 100) : 0
    };
  });
}

export function getMissingQuestionIds(questions: PlacementQuestion[], answers: AnswerMap): string[] {
  return questions
    .filter((question) => {
      const value = answers[question.id];
      return value === undefined || String(value).trim() === "";
    })
    .map((question) => question.id);
}
