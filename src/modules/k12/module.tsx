import { placementTestCards } from "../../data/eslPlacementData";
import {
  k12GradeBandLabels,
  k12PlacementLevels,
  k12PlacementVersions,
  k12Sections,
} from "../../data/k12PlacementData";
import type { PlacementQuestion } from "../../types";
import type { PlacementModule, ResultViewProps } from "../types";
import { AdmissionsCard, SubmissionStatus } from "../../components/result/ResultShell";
import { InsightCard, SectionBreakdownCard } from "../../components/result/ReportBlocks";
import { buildK12PlacementReport, resolveK12GradeBand, type K12Report } from "./report";

function getCard() {
  const card = placementTestCards.find((item) => item.id === "diploma");
  if (!card) throw new Error("Missing K–12 placement card");
  return {
    ...card,
    title: "K–12 American Diploma Placement",
    subtitle: "Grade-band readiness check",
    description:
      "Academic English, math, and subject-reading readiness check for the Brington/Skyline American Diploma pathway.",
    duration: "45–70 min",
    status: "active" as const,
    accent: "Ready",
  };
}

const k12TeacherReviewPrompts = {
  A: {
    sentenceTitle: "Writing sample / advisor note",
    sentencePrompt:
      "For Grade 3–5, student may write 3–5 sentences about school, reading, or a favorite subject. For Grade 6–12, advisor may use this space for a short writing sample or notes from the parent interview.",
    paragraphTitle: "Academic background and records note",
    paragraphPrompt:
      "Add previous curriculum, report card/transcript status, math/English concerns, intended entry grade, and pathway goal. For Grade 9–12, transcript/credit review is required before final placement.",
    speakingPrompts: [
      "Advisor should confirm current/last completed grade and intended entry grade.",
      "Writing, records, and learning habits are manual-review components worth 40 points in the full model.",
      "High school placement must include transcript/credit review before confirming courses or graduation pathway.",
    ],
  },
  B: {
    sentenceTitle: "Writing sample / advisor note",
    sentencePrompt:
      "For Grade 3–5, student may write 3–5 sentences about school, reading, or a favorite subject. For Grade 6–12, advisor may use this space for a short writing sample or notes from the parent interview.",
    paragraphTitle: "Academic background and records note",
    paragraphPrompt:
      "Add previous curriculum, report card/transcript status, math/English concerns, intended entry grade, and pathway goal. For Grade 9–12, transcript/credit review is required before final placement.",
    speakingPrompts: [
      "Advisor should confirm current/last completed grade and intended entry grade.",
      "Writing, records, and learning habits are manual-review components worth 40 points in the full model.",
      "High school placement must include transcript/credit review before confirming courses or graduation pathway.",
    ],
  },
} as const;

function K12AdvisorOnlyResult({ module, submitMessage, submitStatus, onDownloadBackup, onEmailDraft }: ResultViewProps) {
  return (
    <div className="result-layout">
      <section className="result-hero-card k12-result-hero">
        <div>
          <p className="eyebrow">Advisor-guided K–12 placement</p>
          <h2>Grade 1–2 readiness check</h2>
          <p>
            Young learners should not be placed through an independent auto-grade test. The advisor should use parent intake, age, reading observation, math readiness, and learning habits to confirm the starting point.
          </p>
        </div>
        <div className="k12-support-badge"><strong>Advisor</strong><span>guided check</span></div>
      </section>

      <section className="result-grid report-grid">
        <div className="white-card wide-card">
          <h3>Recommended process</h3>
          <p>Use the Grade 1–2 advisor-guided check from the K–12 kit. Do not confirm placement by score alone.</p>
          <ul className="k12-clean-list">
            <li>Parent interview and current/last completed grade confirmation</li>
            <li>Basic English reading observation</li>
            <li>Simple math readiness check</li>
            <li>Teacher/advisor notes on attention, confidence, and learning habits</li>
          </ul>
        </div>
        <div className="white-card wide-card">
          <h3>Support time guidance</h3>
          <p>Support time should be decided internally after the advisor check. No parent-facing target date is required.</p>
        </div>
      </section>

      <AdmissionsCard />
      <SubmissionStatus submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />
      <div className="button-row"><button className="secondary-button" onClick={() => window.location.reload()}>Start New Test</button></div>
    </div>
  );
}

function K12SupportPlanCard({ report, score }: { report: K12Report; score: NonNullable<ResultViewProps["score"]> }) {
  const sortedSections = [...(report.sectionDiagnostics ?? [])].sort((a, b) => a.percent - b.percent);
  const weakest = sortedSections[0];
  const lowSections = sortedSections.filter((section) => section.percent < 65);
  const supportReason = weakest
    ? `This estimate is based on the total auto-grade score (${score.percent}%) and the weakest section: ${weakest.title} at ${weakest.percent}%.`
    : `This estimate is based on the total auto-grade score (${score.percent}%) and advisor review requirements.`;

  return (
    <div className="white-card k12-support-plan-card">
      <div className="k12-support-plan-head">
        <div>
          <p className="eyebrow">Support / bridge estimate</p>
          <h3>{report.supportPlan.label}</h3>
          <p className="k12-support-plan-subtitle">{supportReason}</p>
        </div>
        <span className="k12-support-level-pill">{report.supportPlan.supportLevel.replace("_", " ")}</span>
      </div>

      <div className="k12-support-metrics">
        <span><strong>{report.supportPlan.weeks}</strong><em>Suggested support period</em></span>
        <span><strong>{report.supportPlan.weeklyHours}</strong><em>Weekly support guide</em></span>
      </div>

      <div className="k12-estimate-evidence">
        <strong>Why this estimate?</strong>
        <ul>
          <li>Total readiness score: {score.percent}%</li>
          {weakest && <li>Lowest section: {weakest.title} — {weakest.percent}% ({weakest.label})</li>}
          <li>{lowSections.length ? `${lowSections.length} section(s) need targeted support below 65%.` : "No section is below the 65% support threshold."}</li>
          <li>{report.guardrails.length ? `${report.guardrails.length} advisor guardrail(s) triggered.` : "No major advisor guardrail was triggered."}</li>
        </ul>
      </div>

      <div className="k12-focus-list">
        <strong>Priority focus</strong>
        <ul>
          {report.supportPlan.focus.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <p>{report.supportPlan.note}</p>
    </div>
  );
}

function K12GuardrailCard({ report }: { report: K12Report }) {
  return (
    <div className="white-card k12-guardrail-card">
      <p className="eyebrow">Advisor guardrails</p>
      <h3>Final placement review</h3>
      {report.guardrails.length ? (
        <ul className="k12-clean-list">
          {report.guardrails.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : (
        <p>No major section guardrail was triggered. Final placement should still include writing and records review.</p>
      )}
      <p className="section-note">Manual review includes writing sample, student records/transcript or report card, and advisor intake.</p>
    </div>
  );
}

function K12ResultView({ module, contact, score, report, submitMessage, submitStatus, onDownloadBackup, onEmailDraft }: ResultViewProps) {
  if (!score || !report) return <K12AdvisorOnlyResult module={module} contact={contact} score={score} report={report} submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />;

  const k12Report = report as K12Report;

  return (
    <div className="result-layout">
      <section className="result-hero-card k12-result-hero">
        <div>
          <p className="eyebrow">Preliminary K–12 auto-grade result</p>
          <h2>{k12Report.recommendedStartingPoint}</h2>
          <p>
            This recommendation is based on the {k12Report.gradeBandLabel} auto-graded section. Final K–12 placement may be adjusted after writing, records/transcript, and advisor review.
          </p>
        </div>
        <div className="score-ring">
          <strong>{score.percent}%</strong>
          <span>{score.correct}/{score.total} auto-grade</span>
        </div>
      </section>

      <section className="result-grid report-grid">
        <SectionBreakdownCard
          title="K–12 section breakdown"
          note="Auto-graded readiness by academic English, language use, math, and subject reading."
          diagnostics={k12Report.sectionDiagnostics ?? []}
          score={score}
        />
        <InsightCard title="K–12 readiness summary" report={k12Report} />
        <div className="review-estimate-row wide-card">
          <K12SupportPlanCard report={k12Report} score={score} />
          <K12GuardrailCard report={k12Report} />
        </div>
      </section>

      <AdmissionsCard />
      <SubmissionStatus submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />
      <div className="button-row"><button className="secondary-button" onClick={() => window.location.reload()}>Start New Test</button></div>
    </div>
  );
}

export const k12Module: PlacementModule = {
  id: "diploma",
  mode: "auto_grade",
  card: getCard(),
  sections: k12Sections,
  levels: undefined,
  defaultTargetLevel: "Grade 6",
  versionNoticeTitle: "Grade-band routing",
  versionNoticeText: "The app selects the correct K–12 test band from the student’s current grade and intended entry grade. Grade 1–2 uses advisor-guided review.",
  reviewMode: "teacher_review",
  teacherReviewPrompts: k12TeacherReviewPrompts,
  getQuestions: (_version, context): PlacementQuestion[] => {
    const contact = context?.contact;
    const gradeBand = contact ? resolveK12GradeBand(contact) : "g6_8";
    return k12PlacementVersions[gradeBand];
  },
  buildReport: ({ score, contact, answers, teacherReview }) => buildK12PlacementReport({ score, contact, answers, teacherReview }),
  ResultView: K12ResultView,
};
