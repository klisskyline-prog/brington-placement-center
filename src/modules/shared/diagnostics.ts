import type { PlacementScore, SectionScore } from "../../types";
import type { DiagnosticLabel, PlacementConfidence, PriorityFocus, SectionDiagnostic } from "../types";
import { parseScoreRange } from "./studyTime";

export function getDiagnosticLabel(percent: number): DiagnosticLabel {
  if (percent >= 80) return "Strong";
  if (percent >= 65) return "Secure";
  if (percent >= 50) return "Developing";
  if (percent >= 35) return "Needs Support";
  return "Priority Support";
}

export function buildSectionDiagnostics(
  sectionScores: SectionScore[],
  commentBuilder: (sectionId: string, percent: number) => string,
): SectionDiagnostic[] {
  return sectionScores.map((section) => ({
    ...section,
    label: getDiagnosticLabel(section.percent),
    comment: commentBuilder(section.sectionId, section.percent),
  }));
}

export function buildPriorityFocus(
  diagnostics: SectionDiagnostic[],
  reasonBuilder: (sectionId: string) => string,
): PriorityFocus {
  if (!diagnostics.length) return [];
  const sorted = [...diagnostics].sort((a, b) => a.percent - b.percent);
  const first = sorted[0];
  const second = sorted[1];
  const focus = [first];

  if (second && second.percent - first.percent <= 8) focus.push(second);

  return focus.map((section) => ({
    sectionId: section.sectionId,
    title: section.title,
    reason: reasonBuilder(section.sectionId),
  }));
}

export function buildPlacementConfidence(score: PlacementScore, diagnostics: SectionDiagnostic[]): PlacementConfidence {
  if (!diagnostics.length) {
    return {
      label: "Needs teacher confirmation",
      reason: "Section scores are not available, so the academic team should confirm the pathway manually.",
    };
  }

  const percents = diagnostics.map((section) => section.percent);
  const gap = Math.max(...percents) - Math.min(...percents);
  const range = parseScoreRange(score.level.range);
  const nearBoundary = Math.min(
    Math.abs(score.estimatedTotalScale - range.min),
    Math.abs(score.estimatedTotalScale - range.max),
  ) <= 3;

  if (gap <= 14 && !nearBoundary) {
    return {
      label: "High confidence",
      reason: "The section scores are relatively balanced and the total score is not too close to a band boundary.",
    };
  }

  if (gap <= 25 || nearBoundary) {
    return {
      label: "Medium confidence",
      reason: nearBoundary
        ? "The total score is close to a band boundary, so teacher review should confirm the final level."
        : "One section is noticeably stronger or weaker, so teacher review should confirm the final level.",
    };
  }

  return {
    label: "Needs teacher confirmation",
    reason: "The section scores are uneven, so writing and speaking review are important before final placement.",
  };
}
