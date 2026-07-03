const BRINGTON_LOGO_URL =
  "https://online.bringtonacademy.org/pluginfile.php/1/theme_moove/logo/1783046222/brington_moodle_navbar_logo_60h.png";
const BRINGTON_CREST_URL =
  "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/homepage/brington-logo.png";
const SKYLINE_LOGO_URL =
  "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/homepage/skyline-logo.png";
const SKYLINE_TEXT_URL =
  "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/homepage/skyline-text.png";
const HERO_PHOTO_URL =
  "https://skyline-esl-lessons.klis-skyline.workers.dev/assets/homepage/cover.jpg";

export function PlacementHeroBanner() {
  return (
    <section
      className="placement-hero-banner placement-hero-banner-v8"
      aria-label="Brington Placement Center banner"
    >
      <div className="placement-hero-map" aria-hidden="true" />
      <div className="placement-hero-dotfield dot-left" aria-hidden="true" />
      <div className="placement-hero-dotfield dot-mid" aria-hidden="true" />

      <div className="placement-banner-content">
        <p className="placement-kicker">
          <span className="placement-shield-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 3 20 6.2v5.7c0 4.8-3.2 8.2-8 9.8-4.8-1.6-8-5-8-9.8V6.2L12 3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Brington Placement Center
        </p>

        <h1>Brington Placement Center</h1>
        <div className="placement-title-line" />

        <p className="placement-banner-lead">
          Clear placement. Clear next steps. Stronger learning outcomes.
        </p>

        <div className="placement-partner-card" aria-label="Brington and Skyline partnership">
          <div className="placement-partner-brand">
            <img src={BRINGTON_CREST_URL} alt="Brington" />
            <span>
              <small>Hosted on</small>
              <strong>Brington</strong>
            </span>
          </div>

          <div className="placement-partner-divider" aria-hidden="true" />

          <div className="placement-partner-brand placement-partner-skyline">
            <span>
              <small>Programs and resources by</small>
            </span>
            <span className="placement-skyline-lockup">
              <img className="placement-skyline-mark" src={SKYLINE_LOGO_URL} alt="" />
              <img className="placement-skyline-text" src={SKYLINE_TEXT_URL} alt="Skyline Education" />
            </span>
          </div>
        </div>

        <div className="placement-banner-footer">
          <span className="placement-footer-shield" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                d="M12 3 20 6.2v5.7c0 4.8-3.2 8.2-8 9.8-4.8-1.6-8-5-8-9.8V6.2L12 3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="m8.5 12 2.1 2.1 4.8-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            Academic pathways supported by <strong>Skyline Education</strong>
          </span>
        </div>
      </div>

      <div className="placement-banner-visual-wrap" aria-hidden="true">
        <div className="placement-city-silhouette" />
        <img
          className="placement-hero-photo-img"
          src={HERO_PHOTO_URL}
          alt=""
          loading="eager"
        />
        <div className="placement-floating-logo-card">
          <img src={BRINGTON_LOGO_URL} alt="" />
        </div>
        <div className="placement-hero-book-stack">
          <span>Academic Success</span>
          <span>Global Mindset</span>
        </div>
      </div>

      <div className="placement-hero-swoosh" aria-hidden="true" />
    </section>
  );
}
