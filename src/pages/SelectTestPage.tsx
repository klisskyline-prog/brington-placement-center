import type { TestId } from "../types";
import { placementModules } from "../modules/registry";

export function SelectTestPage({ selectedTestId, onSelect }: { selectedTestId: TestId | ""; onSelect: (id: TestId) => void }) {
  return (
    <div className="select-step">
      <div className="section-heading centered">
        <p className="eyebrow">Select placement pathway</p>
        <h2>Which placement test does the student need?</h2>
        <p className="section-note">ESL and IELTS are active. SAT, K–12, Chinese, and AI are modular advisor-intake modules ready for later expansion.</p>
      </div>
      <div className="test-card-grid">
        {placementModules.map((module) => (
          <button
            key={module.id}
            type="button"
            className={selectedTestId === module.id ? "test-choice-card selected" : "test-choice-card"}
            onClick={() => onSelect(module.id)}
          >
            <span className={module.card.status === "active" ? "status-pill ready" : "status-pill intake"}>{module.card.accent}</span>
            <h3>{module.card.title}</h3>
            <strong>{module.card.subtitle}</strong>
            <p>{module.card.description}</p>
            <small>{module.card.duration}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
