import type { PlacementScore } from "../../types";
import type { ModuleReport, SectionDiagnostic, StudyEstimate } from "../../modules/types";

export function SectionBreakdownCard({ title, note, diagnostics, score }: { title: string; note?: string; diagnostics: SectionDiagnostic[]; score?: PlacementScore }) {
  return (
    <div className="white-card wide-card diagnostic-two-col-card">
      <div className="breakdown-score-panel">
        <div className="card-title-row">
          <div>
            <h3>{title}</h3>
            <p>{note ?? "Auto-graded score by skill area"}</p>
          </div>
          {score && <span>{score.correct}/{score.total} MCQ</span>}
        </div>
        <div className="section-score-list">
          {diagnostics.map((section) => (
            <div className="section-score-row" key={section.sectionId}>
              <div className="score-row-head">
                <strong>{section.title}</strong>
                <div>
                  <span>{section.correct}/{section.total}</span>
                  <em>{section.percent}%</em>
                  <small>{section.label}</small>
                </div>
              </div>
              <div className="level-meter"><span style={{ width: `${section.percent}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="improvement-panel">
        {diagnostics.map((section) => (
          <div className="improvement-box" key={section.sectionId}>
            <span className="mini-label">{section.title}</span>
            <p>{section.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InsightCard({ title, report }: { title: string; report: ModuleReport }) {
  return (
    <div className="white-card wide-card ielts-insight-card">
      <div className="ielts-insight-main">
        <p className="eyebrow">{title}</p>
        <h3>Skill profile</h3>
        <p>{report.skillProfile ?? "The academic team should review the submitted information before confirming placement."}</p>
      </div>
      <div className="ielts-insight-side">
        <div className="ielts-focus-card">
          <span className="mini-label">Areas to improve first</span>
          <ol className="priority-list numbered-priority-list">
            {(report.priorityFocus ?? []).map((focus, index) => (
              <li key={focus.sectionId}>
                <b>{index + 1}</b>
                <div>
                  <strong>{focus.title}</strong>
                  <span>{focus.reason}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {report.placementConfidence && (
          <div className="ielts-confidence-card">
            <span className="mini-label">Placement confidence</span>
            <strong>{report.placementConfidence.label}</strong>
            <p>{report.placementConfidence.reason}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function RecommendationCard({ score }: { score: PlacementScore }) {
  return (
    <div className="white-card wide-card recommendation-summary-card">
      <div>
        <p className="eyebrow">Recommended next step</p>
        <h3>{score.level.label}</h3>
        <p>{score.level.description}</p>
      </div>
      <div className="recommendation-copy">
        <strong>Learning recommendation</strong>
        <p>{score.level.recommendation}</p>
        <p>{score.level.admissionsNote}</p>
      </div>
    </div>
  );
}

export function StudyEstimateCard({ title, estimate }: { title: string; estimate?: StudyEstimate }) {
  return (
    <div className="white-card study-estimate-card">
      <div className="card-title-row compact-title">
        <div>
          <h3>{title}</h3>
          <p>Based on current level, target level, target date, and study days per week.</p>
        </div>
      </div>
      {estimate ? (
        <>
          <div className="estimate-summary">
            <strong>{estimate.dailyHours}h/day</strong>
            <span>{estimate.feasibility}</span>
          </div>
          <div className="estimate-grid">
            <span>Current estimate: <strong>{estimate.currentHours}h</strong></span>
            <span>Target hours: <strong>{estimate.targetHours}h</strong></span>
            <span>Required hours: <strong>{estimate.requiredHours}h</strong></span>
            <span>Available study days: <strong>{estimate.availableStudyDays}</strong></span>
          </div>
          <p>{estimate.note}</p>
          <small>Formula uses review factor 1.00 before teacher review, buffer 1.15, and attendance factor 0.85.</small>
        </>
      ) : (
        <div className="estimate-empty-state">
          <strong>Target date is missing</strong>
          <p>Add a target date in the contact form to calculate the estimated daily study time.</p>
        </div>
      )}
    </div>
  );
}
