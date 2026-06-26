export type TestId = "esl" | "ielts" | "sat" | "diploma" | "chinese" | "ai";
export type TestStatus = "active" | "intake_only";
export type TestVersion = "A" | "B";
export type Step = "intro" | "select" | "contact" | "test" | "review" | "result";

export type PlacementTestCard = {
  id: TestId;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  status: TestStatus;
  accent: string;
};

export type TestSection = {
  id: string;
  title: string;
  points: number;
  description: string;
};

export type PlacementQuestion = {
  id: string;
  sectionId: TestSection["id"];
  sectionTitle: string;
  prompt: string;
  questionType?: "choice" | "text";
  options?: string[];
  correctAnswerIndex?: number;
  correctTextAnswers?: string[];
  audioUrl?: string;
  audioTitle?: string;
  audioRange?: string;
};

export type ContactInfo = {
  studentName: string;
  parentName: string;
  gradeLevel: string;
  studentAge: string;
  zaloPhone: string;
  email: string;
  programInterest: string;
  preferredContact: "Zalo" | "Gmail" | "Either";
  targetLevel: string;
  targetDate: string;
  studyDaysPerWeek: string;
};

export type AnswerMap = Record<string, number | string>;

export type TeacherReview = {
  sentenceWriting: string;
  paragraphWriting: string;
  speakingAvailability: string;
  notes: string;
};

export type PlacementLevel = {
  label: string;
  shortLabel: string;
  range: string;
  description: string;
  recommendation: string;
  admissionsNote: string;
};

export type SectionScore = {
  sectionId: string;
  title: string;
  correct: number;
  total: number;
  percent: number;
};

export type PlacementScore = {
  correct: number;
  total: number;
  percent: number;
  estimatedTotalScale: number;
  level: PlacementLevel;
  sectionScores: SectionScore[];
};

export type SectionDiagnostic = SectionScore & {
  label: "Strong" | "Secure" | "Developing" | "Needs Support" | "Priority Support";
  comment: string;
};

export type EslStudyEstimate = {
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

export type EslPlacementReport = {
  sectionDiagnostics: SectionDiagnostic[];
  skillProfile: string;
  priorityFocus: Array<{
    sectionId: string;
    title: string;
    reason: string;
  }>;
  placementConfidence: {
    label: "High confidence" | "Medium confidence" | "Needs teacher confirmation";
    reason: string;
  };
  studyEstimate?: EslStudyEstimate;
};

export type PlacementSubmissionPayload = {
  test: {
    id: TestId;
    title: string;
    status: TestStatus;
    version?: TestVersion;
  };
  contact: ContactInfo;
  answers: AnswerMap;
  score?: PlacementScore;
  eslReport?: EslPlacementReport | unknown;
  ieltsReport?: unknown;
  moduleReport?: unknown;
  teacherReview: TeacherReview;
  submittedAt: string;
  source: string;
};
