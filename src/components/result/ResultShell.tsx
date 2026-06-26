import { CSSProperties, ReactNode } from "react";
import type { ContactInfo, PlacementScore } from "../../types";
import type { PlacementModule } from "../../modules/types";

export function ResultHero({
  module,
  score,
  children,
}: {
  module: PlacementModule;
  score?: PlacementScore;
  children?: ReactNode;
}) {
  const isAutoGrade = module.mode === "auto_grade" && score;
  return (
    <section className="result-hero-card">
      <div>
        <p className="eyebrow">
          {isAutoGrade
            ? "Preliminary auto-graded result"
            : "Placement request received"}
        </p>
        <h2>{isAutoGrade ? score.level.label : module.card.title}</h2>
        <p>{children}</p>
      </div>
      {isAutoGrade ? (
        <div
          className="score-ring"
          style={{ "--score": `${score.percent}%` } as CSSProperties}
        >
          <strong>{score.percent}%</strong>
          <span>
            {score.correct}/{score.total} auto-grade
          </span>
        </div>
      ) : (
        <div className="score-ring intake-ring">
          <strong>2 days</strong>
          <span>follow-up</span>
        </div>
      )}
    </section>
  );
}

const ADMISSIONS_ZALO_URL = "https://zalo.me/84931789098";
const ADMISSIONS_EMAIL = "Skyline@klis-vietnam.com";

export function AdmissionsCard() {
  const emailSubject = encodeURIComponent("Placement Consultation Request");
  const emailBody = encodeURIComponent(
    [
      "Hello Brington/Skyline Admissions Team,",
      "",
      "I would like to ask about the placement result and suitable learning pathway.",
      "",
      "Student name:",
      "Program interest:",
      "Preferred contact method:",
      "",
      "Thank you.",
    ].join("\n"),
  );

  return (
    <div className="white-card admissions-card">
      <h3>Admissions consultation</h3>
      <p>
        An advisor can explain the suggested level, weekly study plan, class
        schedule, tuition option, and suitable Brington/Skyline pathway.
      </p>

      <div className="admissions-actions">
        <a
          className="primary-link"
          href={ADMISSIONS_ZALO_URL}
          target="_blank"
          rel="noreferrer"
        >
          Contact via Zalo
        </a>

        <a
          className="secondary-link"
          href={`mailto:${ADMISSIONS_EMAIL}?subject=${emailSubject}&body=${emailBody}`}
        >
          Email Admissions
        </a>
      </div>
    </div>
  );
}

export function TeacherReviewPending({
  contact,
  points,
  label,
}: {
  contact: ContactInfo;
  points: number;
  label: string;
}) {
  return (
    <div className="white-card highlight-card">
      <h3>Teacher review pending</h3>
      <p>
        Writing and speaking are worth {points} points in the full {label}{" "}
        placement model. Final recommendation will be sent within 2 days through{" "}
        {contact.preferredContact === "Either"
          ? "Zalo or Gmail"
          : contact.preferredContact}
        .
      </p>
    </div>
  );
}

export function SubmissionStatus({
  submitMessage,
  submitStatus,
  onDownloadBackup,
  onEmailDraft,
}: {
  submitMessage: string;
  submitStatus: "idle" | "sending" | "sent" | "no_api" | "error";
  onDownloadBackup: () => void;
  onEmailDraft: () => void;
}) {
  return (
    <>
      {submitMessage && (
        <p
          className={
            submitStatus === "sent" ? "success-message" : "warning-message"
          }
        >
          {submitMessage}
        </p>
      )}
      {(submitStatus === "no_api" || submitStatus === "error") && (
        <div className="fallback-box">
          <p>
            Automatic email sending is not configured yet. For testing, download
            the JSON backup or open an email draft.
          </p>
          <div className="button-row">
            <button className="secondary-button" onClick={onDownloadBackup}>
              Download Backup JSON
            </button>
            <button className="secondary-button" onClick={onEmailDraft}>
              Open Email Draft
            </button>
          </div>
        </div>
      )}
    </>
  );
}
