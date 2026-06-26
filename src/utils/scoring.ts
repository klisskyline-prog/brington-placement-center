import { eslPlacementLevels } from "../data/eslPlacementData";
import { ieltsPlacementLevels } from "../data/ieltsPlacementData";
import { satPlacementLevels } from "../data/satPlacementData";
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
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
  const estimatedTotalScale = percent;
  const level = getPlacementLevel(testId, estimatedTotalScale);
  const sectionScores = getSectionScores(questions, answers);
  return { correct, total, percent, estimatedTotalScale, level, sectionScores };
}

export function getPlacementLevel(testId: TestId, scoreOn100Scale: number): PlacementLevel {
  if (testId === "ielts") return getIeltsPlacementLevel(scoreOn100Scale);
  if (testId === "sat") return getSatPlacementLevel(scoreOn100Scale);
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
