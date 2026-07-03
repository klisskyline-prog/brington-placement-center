import {
  chinesePlacementCard,
  chinesePlacementLevels,
  chinesePlacementVersions,
  chineseSections,
  chineseTeacherReviewPrompts,
} from "../../data/chinesePlacementData";
import type { PlacementModule, ResultViewProps } from "../types";
import { buildChinesePlacementReport } from "./report";
import { AdmissionsCard, ResultHero, SubmissionStatus, TeacherReviewPending } from "../../components/result/ResultShell";
import { InsightCard, RecommendationCard, SectionBreakdownCard, StudyEstimateCard } from "../../components/result/ReportBlocks";

function ChineseResultView({ module, contact, score, report, submitMessage, submitStatus, onDownloadBackup, onEmailDraft }: ResultViewProps) {
  if (!score || !report?.sectionDiagnostics) return null;

  return (
    <div className="result-layout">
      <ResultHero module={module} score={score}>
        This is the preliminary recommendation based on the 60-question Mandarin auto-graded section. Final placement may be adjusted after the 10-point speaking review.
      </ResultHero>

      <section className="result-grid report-grid">
        <SectionBreakdownCard
          title="Mandarin section breakdown"
          note="Auto-graded score by Mandarin skill area. Speaking is pending teacher/advisor review."
          diagnostics={report.sectionDiagnostics}
          score={score}
        />
        <InsightCard title="Mandarin diagnostic summary" report={report} />
        <RecommendationCard score={score} />
        <div className="review-estimate-row wide-card">
          <TeacherReviewPending contact={contact} points={10} label="Mandarin" />
          <StudyEstimateCard title="Mandarin study time estimate" estimate={report.studyEstimate} />
        </div>
      </section>

      <div className="white-card wide-card">
        <p className="eyebrow">Scoring note</p>
        <p>{String(report.scoringNote ?? "This is an internal placement tool, not an official HSK/YCT score.")}</p>
      </div>

      <AdmissionsCard />
      <SubmissionStatus submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />
      <div className="button-row"><button className="secondary-button" onClick={() => window.location.reload()}>Start New Test</button></div>
    </div>
  );
}

export const chineseModule: PlacementModule = {
  id: "chinese",
  mode: "auto_grade",
  card: chinesePlacementCard,
  sections: chineseSections,
  levels: chinesePlacementLevels,
  defaultTargetLevel: "Level 2 — Foundation B",
  versions: chinesePlacementVersions,
  reviewMode: "teacher_review",
  versionNoticeTitle: "Mandarin v1.0",
  versionNoticeText: "A 60-question auto-graded Mandarin placement test. Audio URLs can be replaced after final audio upload.",
  teacherReviewPrompts: chineseTeacherReviewPrompts,
  getQuestions: (version) => chinesePlacementVersions[version] ?? chinesePlacementVersions.A,
  buildReport: ({ score, contact }) => buildChinesePlacementReport(score, contact),
  ResultView: ChineseResultView,
};
