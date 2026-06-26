import type { ContactInfo, PlacementScore } from "../../types";
import type { StudyEstimate } from "../types";

export type HourBands = Record<string, { min: number; max: number }>;

export function parseScoreRange(range: string) {
  const [rawMin, rawMax] = range.split(/[–-]/).map((item) => Number(item.trim()));
  return {
    min: Number.isFinite(rawMin) ? rawMin : 0,
    max: Number.isFinite(rawMax) ? rawMax : 100,
  };
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function getCurrentEstimatedHours(score: PlacementScore, hourBands: HourBands) {
  const hourBand = hourBands[score.level.label] ?? { min: 0, max: 0 };
  const scoreRange = parseScoreRange(score.level.range);
  const rangeSize = Math.max(1, scoreRange.max - scoreRange.min);
  const positionInBand = clamp((score.estimatedTotalScale - scoreRange.min) / rangeSize, 0, 1);
  return Math.round(hourBand.min + positionInBand * (hourBand.max - hourBand.min));
}

export function getFeasibilityLabel(dailyHours: number, requiredHours: number) {
  if (requiredHours <= 0) return "Already at or above target";
  if (dailyHours <= 0.5) return "Light maintenance";
  if (dailyHours <= 1) return "Comfortable";
  if (dailyHours <= 2) return "Realistic";
  if (dailyHours <= 3) return "Intensive";
  return "High-risk / advisor review needed";
}

export function getFeasibilityNote(label: string, testName: string) {
  switch (label) {
    case "Already at or above target":
      return `The preliminary result is already at or above the selected target. Teacher review should confirm the final ${testName} pathway.`;
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

export function buildStudyEstimate(params: {
  score: PlacementScore;
  contact: ContactInfo;
  hourBands: HourBands;
  testName: string;
  reviewFactor?: number;
  buffer?: number;
  attendanceFactor?: number;
}): StudyEstimate | undefined {
  const targetLevel = params.contact.targetLevel?.trim();
  const targetDate = params.contact.targetDate?.trim();
  const studyDaysPerWeek = Number(params.contact.studyDaysPerWeek || 5);

  if (!targetLevel || !targetDate) return undefined;

  const targetHours = params.hourBands[targetLevel]?.max;
  if (!targetHours) return undefined;

  const currentHours = getCurrentEstimatedHours(params.score, params.hourBands);
  const rawGap = Math.max(0, targetHours - currentHours);
  const reviewFactor = params.reviewFactor ?? 1;
  const buffer = params.buffer ?? 1.15;
  const attendanceFactor = params.attendanceFactor ?? 0.85;
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
    note: getFeasibilityNote(feasibility, params.testName),
  };
}
