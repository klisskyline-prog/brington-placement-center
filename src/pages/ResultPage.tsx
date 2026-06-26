import type { ContactInfo, PlacementScore } from "../types";
import type { ModuleReport, PlacementModule } from "../modules/types";

export function ResultPage({ module, contact, score, report, submitMessage, submitStatus, onDownloadBackup, onEmailDraft }: {
  module: PlacementModule;
  contact: ContactInfo;
  score: PlacementScore | undefined;
  report: ModuleReport | undefined;
  submitMessage: string;
  submitStatus: "idle" | "sending" | "sent" | "no_api" | "error";
  onDownloadBackup: () => void;
  onEmailDraft: () => void;
}) {
  const ModuleResult = module.ResultView;
  return <ModuleResult module={module} contact={contact} score={score} report={report} submitMessage={submitMessage} submitStatus={submitStatus} onDownloadBackup={onDownloadBackup} onEmailDraft={onEmailDraft} />;
}
