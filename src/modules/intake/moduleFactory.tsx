import { placementTestCards } from "../../data/eslPlacementData";
import type { PlacementModule, ResultViewProps } from "../types";
import type { TestId } from "../../types";
import { AdmissionsCard, ResultHero, SubmissionStatus } from "../../components/result/ResultShell";

const defaultPrompts = {
  A: {
    sentenceTitle: "Placement request",
    sentencePrompt: "Please share the student's current level, school background, and learning goal.",
    paragraphTitle: "Additional academic notes",
    paragraphPrompt: "Please include target exam/certificate, preferred schedule, and any concerns the advisor should know.",
    speakingPrompts: [
      "Advisor may schedule a short interview if needed.",
      "Teacher review may be added when the full test module is active.",
    ],
  },
  B: {
    sentenceTitle: "Placement request",
    sentencePrompt: "Please share the student's current level, school background, and learning goal.",
    paragraphTitle: "Additional academic notes",
    paragraphPrompt: "Please include target exam/certificate, preferred schedule, and any concerns the advisor should know.",
    speakingPrompts: [
      "Advisor may schedule a short interview if needed.",
      "Teacher review may be added when the full test module is active.",
    ],
  },
};

function IntakeResultView({ module, submitMessage, submitStatus, onDownloadBackup, onEmailDraft }: ResultViewProps) {
  return (
    <div className="result-layout">
      <ResultHero module={module}>The academic team will review this request and contact the family through the selected contact method.</ResultHero>
      <section className="result-grid">
        <div className="white-card highlight-card">
          <h3>Advisor review pending</h3>
          <p>Because this pathway is intake-only in the current build, the advisor will use the submitted contact details and notes to schedule the next placement step.</p>
        </div>
        <div className="white-card">
          <h3>Next step</h3>
          <p>The family should receive follow-up by Zalo or Gmail within 2 days.</p>
        </div>
      </section>
      <AdmissionsCard />
      <SubmissionStatus submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />
      <div className="button-row"><button className="secondary-button" onClick={() => window.location.reload()}>Start New Test</button></div>
    </div>
  );
}

export function createIntakeModule(id: TestId, defaultTargetLevel = "") : PlacementModule {
  const card = placementTestCards.find((item) => item.id === id);
  if (!card) throw new Error(`Missing placement card for ${id}`);

  return {
    id,
    mode: "intake_only",
    card,
    sections: [],
    defaultTargetLevel,
    teacherReviewPrompts: defaultPrompts,
    ResultView: IntakeResultView,
  };
}
