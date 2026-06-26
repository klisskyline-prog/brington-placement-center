import { ieltsPlacementLevels, ieltsPlacementVersions, ieltsSections, ieltsTeacherReviewPrompts } from "../../data/ieltsPlacementData";
import { placementTestCards } from "../../data/eslPlacementData";
import type { PlacementModule, ResultViewProps } from "../types";
import { buildIeltsPlacementReport } from "./report";
import { AdmissionsCard, ResultHero, SubmissionStatus, TeacherReviewPending } from "../../components/result/ResultShell";
import { InsightCard, RecommendationCard, SectionBreakdownCard, StudyEstimateCard } from "../../components/result/ReportBlocks";

function getCard() {
  const card = placementTestCards.find((item) => item.id === "ielts");
  if (!card) throw new Error("Missing IELTS placement card");
  return card;
}

function IeltsResultView({ module, contact, score, report, submitMessage, submitStatus, onDownloadBackup, onEmailDraft }: ResultViewProps) {
  if (!score || !report?.sectionDiagnostics) return null;

  return (
    <div className="result-layout">
      <ResultHero module={module} score={score}>
        This is the first recommendation based on the 60-point IELTS auto-graded section. The final pathway may be adjusted after Writing and Speaking review.
      </ResultHero>

      <section className="result-grid report-grid">
        <SectionBreakdownCard
          title="IELTS section breakdown"
          note="Auto-graded score by IELTS skill area. Writing and Speaking are pending teacher review."
          diagnostics={report.sectionDiagnostics}
          score={score}
        />
        <InsightCard title="IELTS diagnostic summary" report={report} />
        <RecommendationCard score={score} />
        <div className="review-estimate-row wide-card">
          <TeacherReviewPending contact={contact} points={40} label="IELTS" />
          <StudyEstimateCard title="IELTS study time estimate" estimate={report.studyEstimate} />
        </div>
      </section>

      <AdmissionsCard />
      <SubmissionStatus submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />
      <div className="button-row"><button className="secondary-button" onClick={() => window.location.reload()}>Start New Test</button></div>
    </div>
  );
}

export const ieltsModule: PlacementModule = {
  id: "ielts",
  mode: "auto_grade",
  card: getCard(),
  sections: ieltsSections,
  levels: ieltsPlacementLevels,
  defaultTargetLevel: "IELTS Core",
  versions: ieltsPlacementVersions,
  teacherReviewPrompts: ieltsTeacherReviewPrompts,
  getQuestions: (version) => ieltsPlacementVersions[version],
  buildReport: ({ score, contact }) => buildIeltsPlacementReport(score, contact),
  ResultView: IeltsResultView,
};
