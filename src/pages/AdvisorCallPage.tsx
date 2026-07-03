function Icon({ type }: { type: "back" | "calendar" | "phone" | "mail" | "map" }) {
  if (type === "back") return <span aria-hidden="true">←</span>;
  if (type === "calendar") return <span aria-hidden="true">▣</span>;
  if (type === "phone") return <span aria-hidden="true">☎</span>;
  if (type === "mail") return <span aria-hidden="true">✉</span>;
  return <span aria-hidden="true">⌖</span>;
}

export default function AdvisorCallPage() {
  return (
    <main className="advisor-page">
      <section className="advisor-card">
        <a href="./" className="advisor-back">
          <Icon type="back" />
          Back to Placement Center
        </a>

        <div className="advisor-header">
          <div className="advisor-icon">
            <Icon type="calendar" />
          </div>

          <div>
            <p className="advisor-label">Brington Placement Center</p>
            <h1>Book Advisor Call</h1>
            <p className="advisor-desc">
              Need help choosing the right placement test or learning pathway?
              Contact our advisor team for support.
            </p>
          </div>
        </div>

        <div className="contact-section">
          <h2>Keep in touch with us</h2>

          <div className="contact-list">
            <a className="contact-item" href="tel:+84931789098">
              <span className="contact-icon">
                <Icon type="phone" />
              </span>
              <span>
                <strong>Call us</strong>
                <small>(+84) 931 789 098</small>
              </span>
            </a>

            <a className="contact-item" href="mailto:skyline@klis-vietnam.com">
              <span className="contact-icon">
                <Icon type="mail" />
              </span>
              <span>
                <strong>Email us</strong>
                <small>skyline@klis-vietnam.com</small>
              </span>
            </a>

            <a
              className="contact-item"
              href="https://www.google.com/maps/search/?api=1&query=15-17%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%208B%2C%20KDC%20D%C6%B0%C6%A1ng%20H%E1%BB%93ng%2C%20X%C3%A3%20B%C3%ACnh%20H%C6%B0ng%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <Icon type="map" />
              </span>
              <span>
                <strong>Our location</strong>
                <small>
                  15-17 Đường số 8B, KDC Dương Hồng, Xã Bình Hưng, TP. Hồ Chí Minh, Việt Nam
                </small>
              </span>
            </a>
          </div>

          <div className="advisor-actions">
            <a href="tel:+84931789098" className="primary-action">
              Call Advisor
            </a>
            <a href="mailto:skyline@klis-vietnam.com" className="secondary-action">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
