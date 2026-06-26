export function TopBar() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Brington Placement Center">
        <span className="brand-mark">B</span>
        <span>
          <strong>Brington</strong>
          <small>Placement Center</small>
        </span>
      </a>
      <nav className="topbar-actions" aria-label="Quick information">
        <span>6 placement pathways</span>
        <span>ESL/IELTS A/B auto-random</span>
        <a href="mailto:admissions@example.com">Contact Advisor</a>
      </nav>
    </header>
  );
}
