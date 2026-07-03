import type { TeacherReview } from "../types";
import type { PlacementModule, TeacherReviewPromptSet } from "../modules/types";

export function ReviewPage({ module, promptSet, teacherReview, submitStatus, paragraphWordCount, onSubmit, onUpdate }: {
  module: PlacementModule;
  promptSet: TeacherReviewPromptSet;
  teacherReview: TeacherReview;
  submitStatus: "idle" | "sending" | "sent" | "no_api" | "error";
  paragraphWordCount: number;
  onSubmit: () => void;
  onUpdate: <K extends keyof TeacherReview>(key: K, value: TeacherReview[K]) => void;
}) {
  const isTeacherReview = module.mode === "auto_grade" && module.reviewMode !== "advisor_review";
  const isActivePlacement = module.mode === "auto_grade";
  const isEsl = module.id === "esl";
  const isIelts = module.id === "ielts";
  const isChinese = module.id === "chinese";
  const writingLabelOne = isIelts ? "Writing Task 1 response" : isEsl ? "Sentence writing" : isChinese ? "Speaking score / interview note" : "Student goal / background";
  const writingLabelTwo = isIelts ? "Writing Task 2 response" : isEsl ? "Paragraph writing" : isChinese ? "Pronunciation, pinyin, or advisor notes" : "Additional academic notes";

  return (
    <div className="two-column-step">
      <section className="form-panel">
        <p className="eyebrow">Teacher-reviewed section</p>
        <h2>{isChinese ? "Mandarin speaking review" : isTeacherReview ? "Writing & speaking review" : "Advisor intake review"}</h2>
        <p className="section-note">{isChinese ? "This part records the Mandarin speaking review plan. The instant score is preliminary until speaking, pronunciation, and tone confidence are checked." : isTeacherReview ? "This part helps the teacher check productive skills, not only auto-graded answers. The final recommendation may adjust after review." : `The academic team will review the student's goals, notes, and placement result before final follow-up.`}</p>
        {isTeacherReview ? <><div className="review-task-card"><strong>{promptSet.sentenceTitle}</strong><p>{promptSet.sentencePrompt}</p></div><div className="review-task-card"><strong>{promptSet.paragraphTitle}</strong><p>{promptSet.paragraphPrompt}</p></div></> : <div className="review-task-card"><strong>{promptSet.sentenceTitle}</strong><p>{promptSet.sentencePrompt}</p></div>}
        <div className="form-grid single-column">
          <label>{writingLabelOne}<textarea value={teacherReview.sentenceWriting} onChange={(e) => onUpdate("sentenceWriting", e.target.value)} rows={5} placeholder={isChinese ? "Optional: speaking score out of 10, or leave blank until teacher review..." : isTeacherReview ? "Write your response here..." : "Tell us what the student needs help with..."} /></label>
          <label>{writingLabelTwo}<textarea value={teacherReview.paragraphWriting} onChange={(e) => onUpdate("paragraphWriting", e.target.value)} rows={8} placeholder={isChinese ? "Optional: pronunciation, tones, confidence, prior exposure, or class grouping notes..." : isTeacherReview ? "Write your response here..." : "Current school/program/target exam/learning goal..."} />{isEsl && <small className={paragraphWordCount >= 80 && paragraphWordCount <= 140 ? "helper-text ok" : "helper-text"}>{paragraphWordCount} words. Suggested: 80–120 words.</small>}</label>
          <label>Speaking review availability<input value={teacherReview.speakingAvailability} onChange={(e) => onUpdate("speakingAvailability", e.target.value)} placeholder="Example: Available after 6:00 PM on weekdays" /></label>
          <label>Notes for advisor / teacher<textarea value={teacherReview.notes} onChange={(e) => onUpdate("notes", e.target.value)} rows={4} placeholder="Any extra notes from student or parent" /></label>
        </div>
        <div className="button-row align-right"><button className="primary-button" onClick={onSubmit} disabled={submitStatus === "sending"}>{submitStatus === "sending" ? "Submitting..." : "Submit & View Result"}</button></div>
      </section>
      <aside className="side-note-card gold-card">
        <div className="mini-badge">Academic review</div>
        <h3>{isChinese ? "Speaking review within 2 days" : "Teacher result within 2 days"}</h3>
        <p>{isChinese ? "The instant Mandarin result is preliminary. The academic team uses speaking, pronunciation, tone confidence, and advisor notes to confirm the final recommendation." : "The instant result is preliminary. The academic team uses writing, speaking availability, and advisor notes to confirm the final recommendation."}</p>
        {isActivePlacement && <ul className="check-list">{promptSet.speakingPrompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul>}
      </aside>
    </div>
  );
}
