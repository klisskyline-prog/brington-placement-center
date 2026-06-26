import type { FormEvent } from "react";
import type { ContactInfo } from "../types";
import type { PlacementModule } from "../modules/types";

export type ContactPageProps = {
  contact: ContactInfo;
  module: PlacementModule;
  submitMessage: string;
  onSelectAnother: () => void;
  onSubmit: (event: FormEvent) => void;
  onUpdate: <K extends keyof ContactInfo>(key: K, value: ContactInfo[K]) => void;
};

export function ContactPage({ contact, module, submitMessage, onSelectAnother, onSubmit, onUpdate }: ContactPageProps) {
  const buttonLabel = module.mode === "auto_grade" ? "Start Placement Test" : "Continue to Advisor Review";
  const targetOptions = module.levels?.map((level) => level.label) ?? [];

  return (
    <div className="two-column-step">
      <section className="form-panel">
        <p className="eyebrow">Before the test</p>
        <h2>Student & parent information</h2>
        <p className="section-note">Selected path: <strong>{module.card.title}</strong>. At least one contact method is required.</p>
        <form className="form-grid" onSubmit={onSubmit}>
          <label>Student name *<input value={contact.studentName} onChange={(e) => onUpdate("studentName", e.target.value)} placeholder="Student full name" /></label>
          <label>Parent/Guardian name *<input value={contact.parentName} onChange={(e) => onUpdate("parentName", e.target.value)} placeholder="Parent full name" /></label>
          <label>Grade level<input value={contact.gradeLevel} onChange={(e) => onUpdate("gradeLevel", e.target.value)} placeholder="Example: Grade 7" /></label>
          <label>Student age<input value={contact.studentAge} onChange={(e) => onUpdate("studentAge", e.target.value)} placeholder="Example: 13" /></label>
          <label>Zalo phone<input value={contact.zaloPhone} onChange={(e) => onUpdate("zaloPhone", e.target.value)} placeholder="Zalo phone number" /></label>
          <label>Gmail / Email<input value={contact.email} onChange={(e) => onUpdate("email", e.target.value)} placeholder="example@gmail.com" /></label>
          <label>Program interest<input value={contact.programInterest} onChange={(e) => onUpdate("programInterest", e.target.value)} placeholder="Program interest" /></label>
          <label>Preferred contact method<select value={contact.preferredContact} onChange={(e) => onUpdate("preferredContact", e.target.value as ContactInfo["preferredContact"])}><option>Zalo</option><option>Gmail</option><option>Either</option></select></label>
          {targetOptions.length ? (
            <label>Target level<select value={contact.targetLevel} onChange={(e) => onUpdate("targetLevel", e.target.value)}>{targetOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
          ) : (
            <label>Target / certificate goal<input value={contact.targetLevel} onChange={(e) => onUpdate("targetLevel", e.target.value)} placeholder="Example: SAT 1300, HSK 3" /></label>
          )}
          <label>Target date<input type="date" value={contact.targetDate} onChange={(e) => onUpdate("targetDate", e.target.value)} /></label>
          <label>Study days per week<select value={contact.studyDaysPerWeek} onChange={(e) => onUpdate("studyDaysPerWeek", e.target.value)}><option value="3">3 days/week</option><option value="4">4 days/week</option><option value="5">5 days/week</option><option value="6">6 days/week</option><option value="7">7 days/week</option></select></label>
          {submitMessage && <p className="error-message full-row">{submitMessage}</p>}
          <div className="button-row full-row space-between">
            <button className="secondary-button" type="button" onClick={onSelectAnother}>Choose another test</button>
            <button className="primary-button" type="submit">{buttonLabel}</button>
          </div>
        </form>
      </section>
      <aside className="side-note-card">
        <div className="mini-badge">{module.mode === "auto_grade" ? "Ready now" : "Advisor intake"}</div>
        <h3>{module.card.title}</h3>
        <p>{module.card.description}</p>
        {module.mode === "auto_grade" ? <div className="side-stat"><strong>{module.versionNoticeTitle ?? "A/B"}</strong><span>{module.versionNoticeText ?? "Version assigned automatically after this form."}</span></div> : <div className="side-stat"><strong>Next</strong><span>Content placeholder is ready; advisor intake still works.</span></div>}
      </aside>
    </div>
  );
}
