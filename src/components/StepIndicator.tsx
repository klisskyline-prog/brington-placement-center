import type { Step } from "../types";

const defaultStepOrder: Step[] = [
  "intro",
  "select",
  "contact",
  "test",
  "review",
  "result",
];

const noReviewStepOrder: Step[] = [
  "intro",
  "select",
  "contact",
  "test",
  "result",
];

const stepLabels: Record<Step, string> = {
  intro: "Overview",
  select: "Select Test",
  contact: "Contact",
  test: "Auto-grade",
  review: "Review",
  result: "Result",
};

export function getStepOrder(skipReview = false) {
  return skipReview ? noReviewStepOrder : defaultStepOrder;
}

export function StepIndicator({
  activeStepIndex,
  onBack,
  skipReview = false,
}: {
  activeStepIndex: number;
  onBack: () => void;
  skipReview?: boolean;
}) {
  const stepOrder = getStepOrder(skipReview);

  return (
    <div className="step-bar" aria-label="Placement test progress">
      {activeStepIndex > 0 && (
        <button className="step-back-button" type="button" onClick={onBack}>
          ← Back
        </button>
      )}

      <div
        className={
          skipReview ? "step-track five-steps" : "step-track six-steps"
        }
      >
        {stepOrder.map((item, index) => (
          <div
            className={
              index <= activeStepIndex ? "track-item active" : "track-item"
            }
            key={item}
          >
            <span>{index + 1}</span>
            <small>{stepLabels[item]}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export { stepLabels, defaultStepOrder as stepOrder };
