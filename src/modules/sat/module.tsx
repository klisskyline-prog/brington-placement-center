import type { CSSProperties } from "react";
import { placementTestCards } from "../../data/eslPlacementData";
import { satPlacementLevels, satSections } from "../../data/satPlacementData";
import type { PlacementModule, ResultViewProps } from "../types";
import {
  buildSatPlacementReport,
  getSatVisibleQuestions,
  type SatPlacementReport,
} from "./report";
import {
  AdmissionsCard,
  SubmissionStatus,
} from "../../components/result/ResultShell";
import {
  InsightCard,
  SectionBreakdownCard,
} from "../../components/result/ReportBlocks";

function getCard() {
  const card = placementTestCards.find((item) => item.id === "sat");
  if (!card) throw new Error("Missing SAT placement card");
  return {
    ...card,
    duration: "75–90 min",
    status: "active" as const,
    accent: "Ready",
    description:
      "Two-stage adaptive SAT placement for Reading & Writing and Math readiness. Internal placement only, not an official SAT score.",
  };
}

const satTeacherReviewPrompts = {
  A: {
    sentenceTitle: "Advisor review note",
    sentencePrompt:
      "Optional: share the student's SAT goal, target test date, current school background, or any concern from the family.",
    paragraphTitle: "Learning background / schedule note",
    paragraphPrompt:
      "Optional: add study availability, previous SAT/PSAT experience, English-medium school experience, or math support needs.",
    speakingPrompts: [
      "This is not an official SAT score.",
      "RW and Math are routed separately after Stage 1.",
      "Final placement should consider borderline flags and parent goals.",
    ],
  },
  B: {
    sentenceTitle: "Advisor review note",
    sentencePrompt:
      "Optional: share the student's SAT goal, target test date, current school background, or any concern from the family.",
    paragraphTitle: "Learning background / schedule note",
    paragraphPrompt:
      "Optional: add study availability, previous SAT/PSAT experience, English-medium school experience, or math support needs.",
    speakingPrompts: [
      "This is not an official SAT score.",
      "RW and Math are routed separately after Stage 1.",
      "Final placement should consider borderline flags and parent goals.",
    ],
  },
} as const;

function parseFirstNumber(value: unknown) {
  const match = String(value ?? "").match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function formatDateForDisplay(dateValue: string) {
  if (!dateValue) return "Not selected";

  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;

  return date.toLocaleDateString("en-GB");
}

function formatDailyHours(hours: number) {
  if (!Number.isFinite(hours) || hours <= 0) return "Advisor review";
  if (hours < 0.25) return "15 min/day";
  return `${Math.round(hours * 10) / 10}h/day`;
}

function buildSatStudyEstimate(params: {
  moodleHours: unknown;
  pathwayDuration: unknown;
  fallbackDailyStudy: unknown;
  targetDate: string;
  studyDaysPerWeek: string;
}) {
  const moodleHours = parseFirstNumber(params.moodleHours);
  const targetDate = params.targetDate?.trim();
  const studyDaysPerWeek = Number(params.studyDaysPerWeek || 5);

  if (!targetDate || !moodleHours) {
    return {
      dailyStudy: String(params.fallbackDailyStudy ?? "Advisor review"),
      feasibility: "Pathway guide",
      targetDateLabel: "Not selected",
      pathwayDuration: String(params.pathwayDuration ?? "Advisor review"),
      moodleHours: String(params.moodleHours ?? "Advisor review"),
      availableStudyDays: null,
      note: "Add a target date in the contact form to calculate estimated SAT daily study time.",
    };
  }

  const today = new Date();
  const target = new Date(`${targetDate}T23:59:59`);

  const daysUntilTarget = Math.max(
    0,
    Math.ceil((target.getTime() - today.getTime()) / 86400000),
  );

  const attendanceFactor = 0.85;
  const availableStudyDays =
    daysUntilTarget > 0
      ? daysUntilTarget * (studyDaysPerWeek / 7) * attendanceFactor
      : 0;

  const dailyHours =
    availableStudyDays > 0 ? moodleHours / availableStudyDays : 0;

  const feasibility =
    dailyHours <= 0
      ? "Advisor review"
      : dailyHours <= 0.5
        ? "Comfortable"
        : dailyHours <= 1
          ? "Realistic"
          : dailyHours <= 1.5
            ? "Focused"
            : dailyHours <= 2.5
              ? "Intensive"
              : "High-risk / advisor review needed";

  const note =
    feasibility === "High-risk / advisor review needed"
      ? "The target date is tight for the recommended SAT pathway. Advisor should consider extending the timeline or setting an intermediate milestone."
      : "The target looks manageable if the student studies consistently and follows the recommended SAT pathway.";

  return {
    dailyStudy: formatDailyHours(dailyHours),
    feasibility,
    targetDateLabel: formatDateForDisplay(targetDate),
    pathwayDuration: String(params.pathwayDuration ?? "Advisor review"),
    moodleHours: `${moodleHours}h`,
    availableStudyDays: Math.round(availableStudyDays * 10) / 10,
    note,
  };
}

function SatResultView({
  module,
  contact,
  score,
  report,
  submitMessage,
  submitStatus,
  onDownloadBackup,
  onEmailDraft,
}: ResultViewProps) {
  if (!score || !report) return null;
  const satReport = report as SatPlacementReport;
  const sat = satReport.sat;

  const satStudyEstimate = buildSatStudyEstimate({
    moodleHours: sat.plan.moodleHours,
    pathwayDuration: sat.plan.duration,
    fallbackDailyStudy: sat.plan.dailyStudy,
    targetDate: contact.targetDate,
    studyDaysPerWeek: contact.studyDaysPerWeek,
  });
  const satTotalRaw = sat.rw.compositeRaw + sat.math.compositeRaw;
  const satTotalPercent = Math.round((satTotalRaw / 40) * 100);

  return (
    <div className="result-layout">
      <section className="result-hero-card sat-hero-card">
        <div>
          <p className="eyebrow">Preliminary SAT placement result</p>
          <h2>{sat.overall.label}</h2>
          <p>{sat.overall.note}</p>
          <small>
            This is an internal Skyline placement result, not an official SAT
            score.
          </small>
        </div>
        <div
          className="score-ring"
          style={{ "--score": `${satTotalPercent}%` } as CSSProperties}
        >
          <strong>{satTotalRaw}/40</strong>
          <span>placement total</span>
        </div>
      </section>

      <section className="result-grid report-grid">
        <div className="white-card wide-card sat-routing-card sat-routing-premium-card">
          <div className="sat-routing-header">
            <div>
              <p className="eyebrow">SAT adaptive routing</p>
              <h3>Stage 1 → Stage 2 placement route</h3>
              <p>
                Reading & Writing and Math are routed separately. This helps
                avoid placing the student too high or too low in one skill area.
              </p>
            </div>
            <span className="sat-routing-badge">Two-stage adaptive</span>
          </div>

          <div className="sat-route-panels">
            <div className="sat-route-panel">
              <div className="sat-route-panel-head">
                <span>Reading & Writing</span>
                <em
                  className={
                    sat.rw.track === "lower"
                      ? "route-badge lower"
                      : "route-badge upper"
                  }
                >
                  {sat.rw.track === "lower" ? "Lower route" : "Upper route"}
                </em>
              </div>

              <h4>{sat.rw.level.label}</h4>

              <div className="sat-route-steps">
                <div className="sat-route-step">
                  <span>Stage 1</span>
                  <strong>{sat.rw.s1Raw}/10</strong>
                  <small>
                    {sat.rw.track === "lower"
                      ? "Routed to Stage 2 Lower"
                      : "Routed to Stage 2 Upper"}
                  </small>
                  <div className="mini-progress">
                    <i style={{ width: `${sat.rw.s1Raw * 10}%` }} />
                  </div>
                </div>

                <div className="sat-route-step">
                  <span>Stage 2</span>
                  <strong>{sat.rw.s2Raw}/10</strong>
                  <small>Adaptive section result</small>
                  <div className="mini-progress">
                    <i style={{ width: `${sat.rw.s2Raw * 10}%` }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="sat-route-panel">
              <div className="sat-route-panel-head">
                <span>Math</span>
                <em
                  className={
                    sat.math.track === "lower"
                      ? "route-badge lower"
                      : "route-badge upper"
                  }
                >
                  {sat.math.track === "lower" ? "Lower route" : "Upper route"}
                </em>
              </div>

              <h4>{sat.math.level.label}</h4>

              <div className="sat-route-steps">
                <div className="sat-route-step">
                  <span>Stage 1</span>
                  <strong>{sat.math.s1Raw}/10</strong>
                  <small>
                    {sat.math.track === "lower"
                      ? "Routed to Stage 2 Lower"
                      : "Routed to Stage 2 Upper"}
                  </small>
                  <div className="mini-progress">
                    <i style={{ width: `${sat.math.s1Raw * 10}%` }} />
                  </div>
                </div>

                <div className="sat-route-step">
                  <span>Stage 2</span>
                  <strong>{sat.math.s2Raw}/10</strong>
                  <small>Adaptive section result</small>
                  <div className="mini-progress">
                    <i style={{ width: `${sat.math.s2Raw * 10}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {report.sectionDiagnostics && (
          <SectionBreakdownCard
            title="SAT section breakdown"
            note="Section total by SAT skill area after adaptive Stage 2 routing. This is internal placement data, not an official SAT score."
            diagnostics={report.sectionDiagnostics}
            score={score}
          />
        )}

        <InsightCard title="SAT diagnostic summary" report={report} />

        <div className="white-card wide-card recommendation-summary-card sat-plan-card">
          <div>
            <p className="eyebrow">Recommended SAT pathway</p>
            <h3>{sat.plan.level}</h3>
            <p>{sat.plan.encouragement}</p>
          </div>

          <div className="recommendation-copy">
            <strong>Learning recommendation</strong>
            <p>
              Start with the recommended SAT pathway below. Reading & Writing
              and Math should be supported based on their separate placement
              levels.
            </p>
            <p>{sat.plan.growth}</p>
          </div>
        </div>

        <div className="review-estimate-row wide-card sat-review-estimate-row">
          <div className="white-card highlight-card">
            <h3>Advisor confirmation pending</h3>
            <p>
              The SAT result is auto-graded. Final pathway confirmation should
              be reviewed by the advisor, especially if Reading & Writing and
              Math differ or if Stage 1 is borderline.
            </p>
            <p>
              Follow-up will be sent within 2 days through{" "}
              {contact.preferredContact === "Either"
                ? "Zalo or Gmail"
                : contact.preferredContact}
              .
            </p>
          </div>

          <div className="white-card study-estimate-card sat-study-estimate-card">
            <h3>SAT study time estimate</h3>
            <p>
              Recommended pacing for the current SAT pathway. This is internal
              placement guidance only.
            </p>

            <div className="estimate-summary">
              <strong>{satStudyEstimate.dailyStudy}</strong>
              <span>{satStudyEstimate.feasibility}</span>
            </div>

            <div className="estimate-grid">
              <span>
                Target date: <strong>{satStudyEstimate.targetDateLabel}</strong>
              </span>
              <span>
                Available study days:{" "}
                <strong>
                  {satStudyEstimate.availableStudyDays ?? "Advisor review"}
                </strong>
              </span>
              <span>
                Moodle hours: <strong>{satStudyEstimate.moodleHours}</strong>
              </span>
              <span>
                Pathway guide:{" "}
                <strong>{satStudyEstimate.pathwayDuration}</strong>
              </span>
              <span>
                Reading & Writing: <strong>{sat.rw.level.label}</strong>
              </span>
              <span>
                Math: <strong>{sat.math.level.label}</strong>
              </span>
            </div>

            <p>{satStudyEstimate.note}</p>
            <small>
              Internal SAT placement guidance only. This is not an official SAT
              score.
            </small>
          </div>
        </div>

        {sat.flags.length > 0 && (
          <div className="white-card wide-card sat-flags-card">
            <h3>Advisor review flags</h3>
            <ul className="sat-flag-list">
              {sat.flags.map((flag) => (
                <li key={flag}>{flag}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <AdmissionsCard />
      <SubmissionStatus
        submitMessage={submitMessage}
        submitStatus={submitStatus}
        onDownloadBackup={onDownloadBackup}
        onEmailDraft={onEmailDraft}
      />
      <div className="button-row">
        <button
          className="secondary-button"
          onClick={() => window.location.reload()}
        >
          Start New Test
        </button>
      </div>
    </div>
  );
}

export const satModule: PlacementModule = {
  id: "sat",
  mode: "auto_grade",
  reviewMode: "none",
  card: getCard(),
  sections: satSections,
  levels: satPlacementLevels,
  defaultTargetLevel: "L3 SAT Core",
  teacherReviewPrompts: satTeacherReviewPrompts,
  versionNoticeTitle: "Adaptive",
  versionNoticeText:
    "Stage 2 unlocks automatically after Stage 1 routing. RW and Math are routed separately.",
  getQuestions: (_version, context) =>
    getSatVisibleQuestions(context?.answers ?? {}),
  buildReport: ({ score, contact, answers, teacherReview }) =>
    buildSatPlacementReport({ score, contact, answers, teacherReview }),
  ResultView: SatResultView,
};
