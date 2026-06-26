import type { AnswerMap, PlacementQuestion, TestSection } from "../types";
import { parseReadingPrompt } from "../utils/readingPrompt";

type TestPageProps = {
  answers: AnswerMap;
  currentAnswer: number | string | undefined;
  currentQuestionIndex: number;
  progressPercent: number;
  questions: PlacementQuestion[];
  sections: TestSection[];
  submitMessage: string;
  selectedTestTitle: string;
  showDevTools: boolean;
  onAnswer: (questionId: string, answer: number | string) => void;
  onAutoFillTest: (mode?: "correct" | "random") => void;
  onJump: (index: number, options?: { source?: "button" | "map" }) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmitSection: () => void;
};

function isAnswered(value: number | string | undefined) {
  return value !== undefined && String(value).trim() !== "";
}

function getAudioFallbackLabel(questionIndex: number) {
  if (questionIndex >= 0 && questionIndex <= 4)
    return { title: "Listening Audio 1", range: "For Questions 1–5" };
  if (questionIndex >= 5 && questionIndex <= 9)
    return { title: "Listening Audio 2", range: "For Questions 6–10" };
  if (questionIndex >= 10 && questionIndex <= 14)
    return { title: "Listening Audio 3", range: "For Questions 11–15" };
  return {
    title: "Listening audio",
    range: "Use this audio for the current question group.",
  };
}

export function TestPage({
  answers,
  currentAnswer,
  currentQuestionIndex,
  progressPercent,
  questions,
  sections,
  submitMessage,
  selectedTestTitle,
  showDevTools,
  onAnswer,
  onAutoFillTest,
  onJump,
  onNext,
  onPrevious,
  onSubmitSection,
}: TestPageProps) {
  const question = questions[currentQuestionIndex];
  const readingContent =
    question.sectionId === "reading"
      ? parseReadingPrompt(question.prompt)
      : null;
  const isLast = currentQuestionIndex === questions.length - 1;
  const isFirst = currentQuestionIndex === 0;
  const answeredCount = questions.filter((item) =>
    isAnswered(answers[item.id]),
  ).length;
  const audioLabel = getAudioFallbackLabel(currentQuestionIndex);

  return (
    <div className="test-layout">
      <section id="question-panel" className="question-panel">
        <div className="question-header">
          <div>
            <p className="eyebrow">{selectedTestTitle} auto-graded section</p>
            <h2>
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
          </div>
          <div className="skill-chip">{question.sectionTitle}</div>
        </div>
        <div
          className="progress-line"
          aria-label={`${progressPercent}% completed`}
        >
          <span style={{ width: `${progressPercent}%` }} />
        </div>
        {question.audioUrl && (
          <div className="audio-card">
            <div>
              <strong>{question.audioTitle ?? audioLabel.title}</strong>
              <small>{question.audioRange ?? audioLabel.range}</small>
            </div>
            <audio
              key={question.audioUrl}
              controls
              preload="none"
              src={question.audioUrl}
            >
              Your browser does not support audio playback.
            </audio>
          </div>
        )}
        <article className="question-card premium">
          {question.sectionId === "reading" && readingContent ? (
            <>
              <div className="reading-passage-card">
                <p className="reading-eyebrow">Reading passage</p>
                <h3 className="reading-title">{readingContent.title}</h3>
                <div className="reading-body">
                  {readingContent.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="reading-question-block">
                <p className="reading-question">
                  {readingContent.questionText}
                </p>
              </div>
            </>
          ) : (
            <p className="question-prompt">{question.prompt}</p>
          )}
          {question.questionType === "text" ? (
            <label className="text-answer-field">
              Your answer
              <input
                value={typeof currentAnswer === "string" ? currentAnswer : ""}
                onChange={(event) => onAnswer(question.id, event.target.value)}
                placeholder="Type your answer here"
              />
            </label>
          ) : (
            <div className="option-grid">
              {(question.options ?? []).map((option, optionIndex) => (
                <button
                  className={
                    currentAnswer === optionIndex
                      ? "answer-option selected"
                      : "answer-option"
                  }
                  type="button"
                  key={`${question.id}-${optionIndex}`}
                  onClick={() => onAnswer(question.id, optionIndex)}
                >
                  <span>{String.fromCharCode(65 + optionIndex)}</span>
                  <strong>{option}</strong>
                </button>
              ))}
            </div>
          )}
        </article>
        {submitMessage && <p className="error-message">{submitMessage}</p>}
        <div className="button-row space-between">
          <button
            className="secondary-button"
            onClick={onPrevious}
            disabled={isFirst}
          >
            Previous Question
          </button>
          {!isLast && (
            <button className="primary-button" onClick={onNext}>
              Next Question
            </button>
          )}
        </div>
      </section>
      <aside className="question-map-card">
        <h3>Question map</h3>
        <p>
          {answeredCount}/{questions.length} answered
        </p>
        <div className="section-map-list">
          {sections.map((section) => {
            const sectionQuestions = questions.filter(
              (item) => item.sectionId === section.id,
            );
            return (
              <div
                className={
                  sectionQuestions.length === 0
                    ? "section-map locked"
                    : "section-map"
                }
                key={section.id}
              >
                <div className="section-map-title">
                  <strong>{section.title}</strong>
                  <small>
                    {sectionQuestions.length === 0
                      ? "Locked"
                      : `${sectionQuestions.length} pts`}
                  </small>
                </div>

                {sectionQuestions.length === 0 ? (
                  <p className="locked-section-note">
                    Complete Stage 1 first. This adaptive section will unlock
                    automatically.
                  </p>
                ) : (
                  <div className="question-map compact">
                    {sectionQuestions.map((item) => {
                      const index = questions.findIndex(
                        (questionItem) => questionItem.id === item.id,
                      );

                      return (
                        <button
                          key={item.id}
                          className={[
                            "map-dot",
                            isAnswered(answers[item.id]) ? "answered" : "",
                            index === currentQuestionIndex ? "current" : "",
                          ]
                            .join(" ")
                            .trim()}
                          type="button"
                          onClick={() => onJump(index, { source: "map" })}
                          aria-label={`Go to question ${index + 1}`}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="map-legend">
          <span>
            <i className="legend-current" /> Current
          </span>
          <span>
            <i className="legend-answered" /> Answered
          </span>
        </div>
        {showDevTools && (
          <div className="dev-test-tools">
            <strong>Dev test tools</strong>
            <button type="button" onClick={() => onAutoFillTest("correct")}>
              Auto-fill correct
            </button>
            <button type="button" onClick={() => onAutoFillTest("random")}>
              Auto-fill random
            </button>
          </div>
        )}
        <button
          className="submit-section-button"
          type="button"
          onClick={onSubmitSection}
        >
          Submit Auto-graded Section
        </button>
        <small className="map-helper">
          You can answer in any order. Submit after all {questions.length}{" "}
          questions are answered.
        </small>
      </aside>
    </div>
  );
}
