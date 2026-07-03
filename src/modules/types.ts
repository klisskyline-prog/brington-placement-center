import type { ComponentType } from "react";
import type {
  ContactInfo,
  PlacementLevel,
  PlacementQuestion,
  PlacementScore,
  PlacementTestCard,
  TeacherReview,
  TestSection,
  TestVersion,
} from "../types";

export type PlacementMode = "auto_grade" | "intake_only";

export type TeacherReviewPromptSet = {
  sentenceTitle: string;
  sentencePrompt: string;
  paragraphTitle: string;
  paragraphPrompt: string;
  speakingPrompts: readonly string[];
};

export type StudyEstimate = {
  currentHours: number;
  targetHours: number;
  requiredHours: number;
  daysUntilTarget: number;
  studyDaysPerWeek: number;
  availableStudyDays: number;
  dailyHours: number;
  reviewFactor: number;
  buffer: number;
  attendanceFactor: number;
  feasibility: string;
  note: string;
};

export type DiagnosticLabel =
  | "Strong"
  | "Secure"
  | "Developing"
  | "Needs Support"
  | "Priority Support";

export type SectionDiagnostic = {
  sectionId: string;
  title: string;
  correct: number;
  total: number;
  percent: number;
  label: DiagnosticLabel;
  comment: string;
};

export type PlacementConfidence = {
  label: "High confidence" | "Medium confidence" | "Needs teacher confirmation";
  reason: string;
};

export type PriorityFocus = Array<{
  sectionId: string;
  title: string;
  reason: string;
}>;

export type ModuleReport = {
  sectionDiagnostics?: SectionDiagnostic[];
  skillProfile?: string;
  priorityFocus?: PriorityFocus;
  placementConfidence?: PlacementConfidence;
  studyEstimate?: StudyEstimate;
  [key: string]: unknown;
};

export type ResultViewProps = {
  module: PlacementModule;
  contact: ContactInfo;
  score: PlacementScore | undefined;
  report: ModuleReport | undefined;
  submitMessage: string;
  submitStatus: "idle" | "sending" | "sent" | "no_api" | "error";
  onDownloadBackup: () => void;
  onEmailDraft: () => void;
};

export type PlacementModule = {
  id: PlacementTestCard["id"];
  mode: PlacementMode;
  card: PlacementTestCard;
  sections: TestSection[];
  levels?: PlacementLevel[];
  defaultTargetLevel: string;
  versions?: Record<TestVersion, PlacementQuestion[]>;
  reviewMode?: "teacher_review" | "advisor_review" | "none";
  versionNoticeTitle?: string;
  versionNoticeText?: string;
  teacherReviewPrompts: Record<TestVersion, TeacherReviewPromptSet>;
  getQuestions?: (
    version: TestVersion,
    context?: { answers: Record<string, number | string>; contact?: ContactInfo },
  ) => PlacementQuestion[];
  buildReport?: (params: {
    score: PlacementScore;
    contact: ContactInfo;
    version: TestVersion;
    answers: Record<string, number | string>;
    teacherReview: TeacherReview;
  }) => ModuleReport;
  ResultView: ComponentType<ResultViewProps>;
};
