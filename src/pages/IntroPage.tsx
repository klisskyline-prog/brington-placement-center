function TrustItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="trust-item">
      <span>✓</span>
      <div>
        <strong>{title}</strong>
        <small>{description}</small>
      </div>
    </div>
  );
}

export function IntroPage({ onStart }: { onStart: () => void }) {
  return (
    <>
      <div className="intro-grid">
        <div className="hero-copy">
          <p className="eyebrow">Brington / Skyline Academic Pathway</p>
          <h1>One Placement Center for every learning pathway.</h1>
          <p className="hero-lead">
            Students can start from a Moodle link, choose the right placement
            path, complete the available auto-graded section, and receive a
            teacher-reviewed recommendation through Zalo or Gmail.
          </p>
          <div className="hero-actions">
            <button className="primary-button xl" onClick={onStart}>
              Choose Placement Test
            </button>
            <a className="secondary-button xl advisor-hero-button" href="?page=advisor-call">
              Book Advisor Call
            </a>
            <span className="time-pill">No login required</span>
          </div>
          <div className="trust-row">
            <TrustItem
              title="6 pathways"
              description="ESL, IELTS, SAT, K–12, Chinese, and AI placement entry."
            />
            <TrustItem
              title="Modular build"
              description="Each placement test has its own questions, scoring, and report logic."
            />
            <TrustItem
              title="Teacher review"
              description="Writing/speaking review result is sent within 2 days."
            />
          </div>
        </div>
        <aside className="overview-card">
          <div className="mini-badge">Placement Overview</div>
          <h2>Recommended flow</h2>
          <ol className="timeline-list">
            <li>
              <span>01</span>
              <div>
                <strong>Select test type</strong>
                <p>Choose ESL, IELTS, SAT, American Diploma / K–12, Chinese, or AI.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Enter contact information</strong>
                <p>Enough information for advisor follow-up, no student account needed.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Complete test + review</strong>
                <p>Auto-score first, then teacher review for writing/speaking or advisor intake.</p>
              </div>
            </li>
          </ol>
        </aside>
      </div>
    </>
  );
}
