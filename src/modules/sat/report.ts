import type { AnswerMap, ContactInfo, PlacementQuestion, PlacementScore, TeacherReview } from "../../types";
import type { DiagnosticLabel, ModuleReport, PlacementConfidence, SectionDiagnostic } from "../types";
import {
  satAllQuestions,
  satCommentBank,
  satLevelDuration,
  satPlacementLevels,
  satStage1MathQuestions,
  satStage1Questions,
  satStage1RwQuestions,
  satStage2LowerMathQuestions,
  satStage2LowerRwQuestions,
  satStage2UpperMathQuestions,
  satStage2UpperRwQuestions,
  type SatPlacementQuestion,
  type SatSectionKey,
  type SatTrack,
} from "../../data/satPlacementData";

function normalizeText(value: unknown) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ");
}

export function isSatQuestionCorrect(question: PlacementQuestion, answer: number | string | undefined) {
  if (answer === undefined) return false;
  if (question.questionType === "text") {
    const normalizedAnswer = normalizeText(answer);
    return (question.correctTextAnswers ?? []).some((item) => normalizeText(item) === normalizedAnswer);
  }
  return Number(answer) === question.correctAnswerIndex;
}

function isAnswered(question: PlacementQuestion, answers: AnswerMap) {
  const value = answers[question.id];
  return value !== undefined && String(value).trim() !== "";
}

export function areSatStage1QuestionsComplete(answers: AnswerMap) {
  return satStage1Questions.every((question) => isAnswered(question, answers));
}

function rawScore(questions: SatPlacementQuestion[], answers: AnswerMap) {
  return questions.reduce((sum, question) => sum + (isSatQuestionCorrect(question, answers[question.id]) ? 1 : 0), 0);
}

export function getSatStage1RawScores(answers: AnswerMap) {
  return {
    rw: rawScore(satStage1RwQuestions, answers),
    math: rawScore(satStage1MathQuestions, answers),
  };
}

export function routeSatTrack(stage1Raw: number): Extract<SatTrack, "lower" | "upper"> {
  return stage1Raw <= 5 ? "lower" : "upper";
}

export function getSatVisibleQuestions(answers: AnswerMap): SatPlacementQuestion[] {
  if (!areSatStage1QuestionsComplete(answers)) return satStage1Questions;

  const stage1 = getSatStage1RawScores(answers);
  const rwTrack = routeSatTrack(stage1.rw);
  const mathTrack = routeSatTrack(stage1.math);

  return [
    ...satStage1Questions,
    ...(rwTrack === "lower" ? satStage2LowerRwQuestions : satStage2UpperRwQuestions),
    ...(mathTrack === "lower" ? satStage2LowerMathQuestions : satStage2UpperMathQuestions),
  ];
}

function getStage2Questions(section: SatSectionKey, track: Extract<SatTrack, "lower" | "upper">) {
  if (section === "rw") return track === "lower" ? satStage2LowerRwQuestions : satStage2UpperRwQuestions;
  return track === "lower" ? satStage2LowerMathQuestions : satStage2UpperMathQuestions;
}

function levelByLabel(label: string) {
  return satPlacementLevels.find((level) => level.label === label) ?? satPlacementLevels[0];
}

function levelIndex(label: string) {
  return satPlacementLevels.findIndex((level) => level.label === label);
}

function mapSatSectionLevel(track: Extract<SatTrack, "lower" | "upper">, compositeRaw: number) {
  if (track === "lower") {
    if (compositeRaw <= 3) return levelByLabel("L0 SAT Bridge");
    if (compositeRaw <= 6) return levelByLabel("L1 SAT Foundation");
    if (compositeRaw <= 9) return levelByLabel("L2 SAT Pre-Core");
    return levelByLabel("L3 SAT Core");
  }

  if (compositeRaw <= 9) return levelByLabel("L3 SAT Core");
  if (compositeRaw <= 13) return levelByLabel("L4 SAT Target");
  if (compositeRaw <= 16) return levelByLabel("L5 SAT Advanced");
  return levelByLabel("L6 SAT Elite Bootcamp");
}

function diagnosticLabel(percent: number): DiagnosticLabel {
  if (percent >= 80) return "Strong";
  if (percent >= 65) return "Secure";
  if (percent >= 50) return "Developing";
  if (percent >= 35) return "Needs Support";
  return "Priority Support";
}

function getSectionComment(section: SatSectionKey, percent: number, levelLabel: string) {
  if (section === "rw") {
    if (percent >= 80) return `Reading & Writing is a relative strength. The student is ready for ${levelLabel} RW work with more timing and trap analysis.`;
    if (percent >= 60) return `Reading & Writing is developing. The student should strengthen evidence, inference, grammar, and transition control.`;
    return `Reading & Writing needs priority support. Start with core academic reading, vocabulary-in-context, grammar boundaries, and evidence-finding.`;
  }

  if (percent >= 80) return `Math is a relative strength. The student is ready for ${levelLabel} Math work with harder mixed practice and pacing.`;
  if (percent >= 60) return `Math is developing. The student should strengthen algebra, data analysis, advanced math, and geometry foundations.`;
  return `Math needs priority support. Start with linear equations, percentages/rates, data interpretation, and basic geometry before harder SAT sets.`;
}

function buildPriorityFocus(answers: AnswerMap, selectedQuestions: SatPlacementQuestion[]) {
  const misses = selectedQuestions.filter((question) => !isSatQuestionCorrect(question, answers[question.id]));
  const counts = new Map<string, { sectionId: string; title: string; reason: string; count: number }>();

  misses.forEach((question) => {
    const title = `${question.satSection === "rw" ? "Reading & Writing" : "Math"}: ${question.domain}`;
    const key = `${question.satSection}-${question.domain}`;
    const current = counts.get(key) ?? {
      sectionId: key,
      title,
      reason: `Review ${question.subskill || question.domain} items and keep an error log for repeated mistakes.`,
      count: 0,
    };
    current.count += 1;
    counts.set(key, current);
  });

  return Array.from(counts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map(({ count: _count, ...item }) => item);
}

function buildConfidence(flags: string[]): PlacementConfidence {
  if (flags.length >= 2) {
    return {
      label: "Needs teacher confirmation",
      reason: "The result has multiple routing/borderline flags, so the advisor should confirm the final level before placement.",
    };
  }
  if (flags.length === 1) {
    return {
      label: "Medium confidence",
      reason: "The result has one routing or boundary flag. Use the recommendation as a preliminary placement and confirm with advisor review.",
    };
  }
  return {
    label: "High confidence",
    reason: "RW and Math routing produced a stable preliminary result. Advisor review should still confirm schedule and goals.",
  };
}

function sectionResult(section: SatSectionKey, answers: AnswerMap) {
  const stage1Questions = section === "rw" ? satStage1RwQuestions : satStage1MathQuestions;
  const s1Raw = rawScore(stage1Questions, answers);
  const track = routeSatTrack(s1Raw);
  const stage2Questions = getStage2Questions(section, track);
  const s2Raw = rawScore(stage2Questions, answers);
  const compositeRaw = s1Raw + s2Raw;
  const level = mapSatSectionLevel(track, compositeRaw);
  const percent = Math.round((compositeRaw / 20) * 100);
  const flags: string[] = [];

  if (s1Raw === 5 || s1Raw === 6) flags.push(`${section.toUpperCase()} Stage 1 borderline route (${s1Raw}/10).`);
  if (track === "lower" && s2Raw >= 9) flags.push(`${section.toUpperCase()} ceiling on Lower track; consider Upper re-test if advisor sees strong readiness.`);
  if (track === "upper" && s2Raw <= 3) flags.push(`${section.toUpperCase()} may be over-routed to Upper; place carefully at L3 or review Lower track evidence.`);

  return { section, s1Raw, track, s2Raw, compositeRaw, level, percent, flags, stage2Questions };
}

function buildOverall(rwLevel: string, mathLevel: string) {
  const rwIndex = levelIndex(rwLevel);
  const mathIndex = levelIndex(mathLevel);
  const gap = Math.abs(rwIndex - mathIndex);

  if (rwLevel === mathLevel) {
    return {
      label: rwLevel,
      splitPathway: false,
      note: `RW and Math are aligned at ${rwLevel}. Place the student in this SAT pathway.`
    };
  }

  const lower = rwIndex < mathIndex ? rwLevel : mathLevel;
  const stronger = rwIndex > mathIndex ? "Reading & Writing" : "Math";

  if (gap === 1) {
    return {
      label: lower,
      splitPathway: false,
      note: `RW and Math differ by one level. Place at the lower level (${lower}) and enrich the stronger ${stronger} section.`
    };
  }

  return {
    label: `Split Pathway: RW ${rwLevel} / Math ${mathLevel}`,
    splitPathway: true,
    note: "RW and Math differ by two or more levels. Use a split pathway so the stronger section is not held back and the weaker section receives support."
  };
}

export type SatPlacementReport = ModuleReport & {
  sat: {
    rw: ReturnType<typeof sectionResult>;
    math: ReturnType<typeof sectionResult>;
    overall: ReturnType<typeof buildOverall>;
    selectedStage2: {
      rw: "lower" | "upper";
      math: "lower" | "upper";
    };
    flags: string[];
    plan: {
      level: string;
      duration?: string;
      moodleHours?: number;
      dailyStudy?: string;
      strength?: string;
      growth?: string;
      encouragement?: string;
    };
  };
};

export function buildSatPlacementReport({ score, answers }: {
  score: PlacementScore;
  contact: ContactInfo;
  answers: AnswerMap;
  teacherReview: TeacherReview;
}): SatPlacementReport {
  const selectedQuestions = getSatVisibleQuestions(answers);
  const rw = sectionResult("rw", answers);
  const math = sectionResult("math", answers);
  const overall = buildOverall(rw.level.label, math.level.label);
  const flags = [...rw.flags, ...math.flags];
  const finalLevelForPlan = overall.splitPathway ? (levelIndex(rw.level.label) < levelIndex(math.level.label) ? rw.level.label : math.level.label) : overall.label;
  const duration = satLevelDuration[finalLevelForPlan as keyof typeof satLevelDuration];
  const comments = satCommentBank[finalLevelForPlan as keyof typeof satCommentBank];

  const sectionDiagnostics: SectionDiagnostic[] = [
    {
      sectionId: "sat_rw_total",
      title: "Reading & Writing",
      correct: rw.compositeRaw,
      total: 20,
      percent: rw.percent,
      label: diagnosticLabel(rw.percent),
      comment: getSectionComment("rw", rw.percent, rw.level.label),
    },
    {
      sectionId: "sat_math_total",
      title: "Math",
      correct: math.compositeRaw,
      total: 20,
      percent: math.percent,
      label: diagnosticLabel(math.percent),
      comment: getSectionComment("math", math.percent, math.level.label),
    },
  ];

  const gap = Math.abs(levelIndex(rw.level.label) - levelIndex(math.level.label));
  const skillProfile = gap >= 2
    ? `The student shows a split SAT profile. Reading & Writing is ${rw.level.label}, while Math is ${math.level.label}. A split pathway is recommended.`
    : gap === 1
      ? `The student shows a slightly uneven SAT profile. Reading & Writing is ${rw.level.label}, while Math is ${math.level.label}. Place at the lower level and enrich the stronger section.`
      : `The student has a balanced SAT profile. Both Reading & Writing and Math are aligned at ${rw.level.label}.`;

  const bridgeFlag = rw.level.label.startsWith("L0") || math.level.label.startsWith("L0")
    ? ["L0 appears in at least one section. SAT Bridge support is recommended for that section."]
    : [];

  return {
    sectionDiagnostics,
    skillProfile,
    priorityFocus: buildPriorityFocus(answers, selectedQuestions),
    placementConfidence: buildConfidence([...flags, ...bridgeFlag]),
    studyEstimate: undefined,
    sat: {
      rw,
      math,
      overall,
      selectedStage2: { rw: rw.track, math: math.track },
      flags: [...flags, ...bridgeFlag],
      plan: {
        level: finalLevelForPlan,
        duration: duration?.duration,
        moodleHours: duration?.moodleHours,
        dailyStudy: duration?.dailyStudy,
        strength: comments?.strength,
        growth: comments?.growth,
        encouragement: comments?.encouragement,
      },
    },
    rawScore: score,
  };
}
