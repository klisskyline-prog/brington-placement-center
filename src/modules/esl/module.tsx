import { eslPlacementLevels, eslPlacementVersions, eslSections, eslTeacherReviewPrompts, placementTestCards } from "../../data/eslPlacementData";
import { buildEslPlacementReport } from "../../utils/eslReport";
import type { PlacementModule, ResultViewProps } from "../types";
import { AdmissionsCard, ResultHero, SubmissionStatus, TeacherReviewPending } from "../../components/result/ResultShell";
import { InsightCard, RecommendationCard, SectionBreakdownCard, StudyEstimateCard } from "../../components/result/ReportBlocks";

function getCard() {
  const card = placementTestCards.find((item) => item.id === "esl");
  if (!card) throw new Error("Missing ESL placement card");
  return card;
}

function EslResultView({ module, contact, score, report, submitMessage, submitStatus, onDownloadBackup, onEmailDraft }: ResultViewProps) {
  if (!score || !report?.sectionDiagnostics) return null;

  return (
    <div className="result-layout">
      <ResultHero module={module} score={score}>
        This is the first recommendation based on the 70-point ESL auto-graded section. The final placement may be adjusted after teacher review of writing and speaking.
      </ResultHero>

      <section className="result-grid report-grid">
        <SectionBreakdownCard
          title="ESL section breakdown"
          note="Auto-graded score by ESL skill area"
          diagnostics={report.sectionDiagnostics}
          score={score}
        />
        <InsightCard title="ESL diagnostic summary" report={report} />
        <RecommendationCard score={score} />
        <div className="review-estimate-row wide-card">
          <TeacherReviewPending contact={contact} points={30} label="ESL" />
          <StudyEstimateCard title="Study time estimate" estimate={report.studyEstimate} />
        </div>
      </section>

      <AdmissionsCard />
      <SubmissionStatus submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />
      <div className="button-row"><button className="secondary-button" onClick={() => window.location.reload()}>Start New Test</button></div>
    </div>
  );
}

export const eslModule: PlacementModule = {
  id: "esl",
  mode: "auto_grade",
  card: getCard(),
  sections: eslSections,
  levels: eslPlacementLevels,
  defaultTargetLevel: "A2 Core",
  versions: eslPlacementVersions,
  teacherReviewPrompts: eslTeacherReviewPrompts,
  getQuestions: (version) => eslPlacementVersions[version],
  buildReport: ({ score, contact }) => buildEslPlacementReport(score, contact),
  ResultView: EslResultView,
};
