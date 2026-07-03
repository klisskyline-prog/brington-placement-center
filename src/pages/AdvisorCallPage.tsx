const ADVISOR_PHONE_DISPLAY = "(+84) 931 789 098";
const ADVISOR_PHONE_TEL = "+84931789098";
const ADVISOR_EMAIL = "skyline@klis-vietnam.com";
const ZALO_LINK = "https://zalo.me/84931789098";
const LOCATION_LINK =
  "https://www.google.com/maps/search/?api=1&query=15-17%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%208B%2C%20KDC%20D%C6%B0%C6%A1ng%20H%E1%BB%93ng%2C%20X%C3%A3%20B%C3%ACnh%20H%C6%B0ng%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vi%E1%BB%87t%20Nam";

function Icon({ type }: { type: "back" | "calendar" | "phone" | "mail" | "map" | "chat" }) {
  if (type === "back") return <span aria-hidden="true">←</span>;
  if (type === "calendar") return <span aria-hidden="true">▣</span>;
  if (type === "phone") return <span aria-hidden="true">☎</span>;
  if (type === "mail") return <span aria-hidden="true">✉</span>;
  if (type === "chat") return <span aria-hidden="true">💬</span>;
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
              Talk with an academic advisor before choosing a placement test,
              reviewing a result, or confirming the next learning pathway.
            </p>
          </div>
        </div>

        <div className="advisor-mini-grid" aria-label="Advisor call details">
          <div>
            <strong>Best for</strong>
            <span>Parents who need pathway guidance before testing.</span>
          </div>
          <div>
            <strong>Call length</strong>
            <span>About 10–15 minutes.</span>
          </div>
          <div>
            <strong>Next step</strong>
            <span>Advisor confirms the right placement route.</span>
          </div>
        </div>

        <div className="contact-section">
          <h2>Choose a contact method</h2>

          <div className="contact-list">
            <a className="contact-item contact-item-highlight" href={ZALO_LINK} target="_blank" rel="noreferrer">
              <span className="contact-icon">
                <Icon type="chat" />
              </span>
              <span>
                <strong>Book via Zalo</strong>
                <small>Recommended for fast advisor support and appointment confirmation.</small>
              </span>
            </a>

            <a className="contact-item" href={`tel:${ADVISOR_PHONE_TEL}`}>
              <span className="contact-icon">
                <Icon type="phone" />
              </span>
              <span>
                <strong>Call us</strong>
                <small>{ADVISOR_PHONE_DISPLAY}</small>
              </span>
            </a>

            <a className="contact-item" href={`mailto:${ADVISOR_EMAIL}`}>
              <span className="contact-icon">
                <Icon type="mail" />
              </span>
              <span>
                <strong>Email us</strong>
                <small>{ADVISOR_EMAIL}</small>
              </span>
            </a>

            <a className="contact-item" href={LOCATION_LINK} target="_blank" rel="noreferrer">
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
            <a href={ZALO_LINK} target="_blank" rel="noreferrer" className="primary-action">
              Book via Zalo
            </a>
            <a href={`tel:${ADVISOR_PHONE_TEL}`} className="secondary-action">
              Call Advisor
            </a>
            <a href={`mailto:${ADVISOR_EMAIL}`} className="secondary-action">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
