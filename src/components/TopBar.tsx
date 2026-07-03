const BRINGTON_CREST_URL =
  "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/homepage/brington-logo.png";

export function TopBar() {
  return (
    <header className="topbar">
      <a className="brand" href="./" aria-label="Brington International Academy">
        <span className="brand-mark brand-mark-logo">
          <img src={BRINGTON_CREST_URL} alt="" />
        </span>
        <span className="brand-wordmark" aria-hidden="true">
          <strong>BRINGTON</strong>
          <small>INTERNATIONAL ACADEMY</small>
          <em>TEXAS, USA · K–12</em>
        </span>
      </a>

      <nav className="topbar-actions" aria-label="Placement Center navigation">
        <a href="https://online.bringtonacademy.org/" className="topbar-link">Home</a>
        <a href="#placement-workspace" className="topbar-link">Placement</a>
        <a href="?page=advisor-call" className="topbar-cta">
          Contact Advisor
        </a>
      </nav>
    </header>
  );
}
