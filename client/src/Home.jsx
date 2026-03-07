import React from "react";
import { WHATSAPP_NUMBER } from "./config";
import { useNavigate } from "react-router-dom";
import { BoltIcon, GemIcon, HandshakeIcon } from "./icons";

/* ─────────────────────────────────────────────
   Scoped responsive styles injected once
───────────────────────────────────────────── */
const styles = `
  /* ── Reset / base ── */
  *, *::before, *::after { box-sizing: border-box; }

  /* ── CSS variables ── */
  :root {
    --primary:       #b8860b;
    --primary-dark:  #8b6508;
    --wa-green:      #25d366;
    --wa-dark:       #128c7e;
    --text:          #1a1a1a;
    --muted:         #6b7280;
    --bg-card:       #ffffff;
    --border:        #e5e7eb;
    --radius:        12px;
    --shadow:        0 2px 12px rgba(0,0,0,0.08);
    --section-pad:   clamp(24px, 5vw, 56px);
  }

  /* ── Container ── */
  .se-container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 32px);
  }

  /* ── Hero ── */
  .se-hero {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    color: #fff;
    padding: clamp(48px, 10vw, 100px) 0 clamp(40px, 8vw, 80px);
    position: relative;
    overflow: hidden;
  }
  .se-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 70% 50%, rgba(184,134,11,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .se-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 640px;
  }
  .se-kicker {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--primary);
    background: rgba(184,134,11,0.12);
    border: 1px solid rgba(184,134,11,0.3);
    border-radius: 99px;
    padding: 4px 14px;
    margin-bottom: 18px;
  }
  .se-hero h1 {
    font-size: clamp(1.75rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 1.15;
    margin: 0 0 14px;
    letter-spacing: -0.02em;
  }
  .se-hero .lead {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: rgba(255,255,255,0.75);
    margin: 0 0 28px;
    line-height: 1.6;
  }
  .se-hero-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  /* ── Buttons ── */
  .se-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
    text-decoration: none;
    white-space: nowrap;
  }
  .se-btn:active { transform: scale(0.97); }

  .se-btn-primary {
    background: var(--primary);
    color: #fff;
  }
  .se-btn-primary:hover {
    background: var(--primary-dark);
    box-shadow: 0 4px 16px rgba(184,134,11,0.35);
    transform: translateY(-1px);
  }

  .se-btn-outline {
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255,255,255,0.45);
  }
  .se-btn-outline:hover {
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.75);
    transform: translateY(-1px);
  }

  .se-btn-wa {
    background: var(--wa-green);
    color: #fff;
  }
  .se-btn-wa:hover {
    background: var(--wa-dark);
    box-shadow: 0 4px 16px rgba(37,211,102,0.35);
    transform: translateY(-1px);
  }

  .se-btn-ghost {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }
  .se-btn-ghost:hover {
    background: var(--primary);
    color: #fff;
    transform: translateY(-1px);
  }

  .se-btn-sm {
    padding: 9px 16px;
    font-size: 0.875rem;
  }

  /* ── Section ── */
  .se-section {
    padding: var(--section-pad) 0;
  }
  .se-section-alt {
    background: #f9fafb;
  }
  .se-section-header {
    text-align: center;
    margin-bottom: clamp(20px, 4vw, 36px);
  }
  .se-section-header h2 {
    font-size: clamp(1.4rem, 3.5vw, 2rem);
    font-weight: 800;
    color: var(--text);
    margin: 0 0 10px;
  }
  .se-section-header p {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    color: var(--muted);
    margin: 0 auto;
    max-width: 520px;
    line-height: 1.6;
  }
  .se-divider {
    width: 48px;
    height: 4px;
    background: var(--primary);
    border-radius: 2px;
    margin: 12px auto 0;
  }

  /* ── Offer cards ── */
  .se-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 900px) {
    .se-cards-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 560px) {
    .se-cards-grid { grid-template-columns: 1fr; }
  }

  .se-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: clamp(16px, 3vw, 24px);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .se-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.12);
  }
  .se-card-top {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
  .se-card-icon {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(184,134,11,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
  }
  .se-card h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 6px;
    color: var(--text);
  }
  .se-card p {
    font-size: 0.875rem;
    color: var(--muted);
    margin: 0;
    line-height: 1.55;
  }

  /* ── About strip ── */
  .se-about-strip {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 24px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: clamp(20px, 4vw, 32px);
    box-shadow: var(--shadow);
  }
  @media (max-width: 600px) {
    .se-about-strip {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .se-about-strip-actions { justify-content: center; }
  }
  .se-about-strip h2 {
    font-size: clamp(1.15rem, 2.5vw, 1.5rem);
    font-weight: 800;
    margin: 0 0 10px;
    color: var(--text);
  }
  .se-about-strip p {
    font-size: 0.95rem;
    color: var(--muted);
    margin: 0;
    line-height: 1.65;
  }
  .se-about-strip-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex-shrink: 0;
  }

  /* ── Contact banner ── */
  .se-contact-banner {
    background: linear-gradient(135deg, #1a1a2e, #0f3460);
    border-radius: var(--radius);
    padding: clamp(28px, 5vw, 48px) clamp(20px, 4vw, 40px);
    text-align: center;
    color: #fff;
  }
  .se-contact-banner h2 {
    font-size: clamp(1.3rem, 3vw, 1.9rem);
    font-weight: 800;
    margin: 0 0 10px;
  }
  .se-contact-banner p {
    color: rgba(255,255,255,0.7);
    margin: 0 0 24px;
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
  .se-contact-btns {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  /* ── WhatsApp SVG icon ── */
  .wa-icon {
    width: 18px;
    height: 18px;
    fill: currentColor;
    flex-shrink: 0;
  }
`;

function WaIcon() {
  return (
    <svg
      className="wa-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const goProducts = (e) => {
    e && e.preventDefault();
    navigate("/products");
  };
  const goServices = (e) => {
    e && e.preventDefault();
    navigate("/services");
  };
  const goAbout = (e) => {
    e && e.preventDefault();
    navigate("/about");
  };

  const requestQuote = (e) => {
    e && e.preventDefault();
    const text = encodeURIComponent(
      "Hello, I would like a quote for your products."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Inject scoped styles once */}
      <style>{styles}</style>

      {/* ── Hero ── */}
      <section className="se-hero">
        <div className="se-container">
          <div className="se-hero-inner">
            <span className="se-kicker">Wholesale • Fast Dispatch</span>
            <h1>Welcome to Shivam Enterprises</h1>
            <p className="lead">
              Best Jewelry Making Materials Supplier — Quality you can trust.
            </p>
            <div className="se-hero-btns">
              <button
                className="se-btn se-btn-primary"
                onClick={goProducts}
                aria-label="View products"
              >
                View Products
              </button>
              <button
                className="se-btn se-btn-wa"
                onClick={requestQuote}
                aria-label="Request a quote via WhatsApp"
              >
                <WaIcon /> Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we offer ── */}
      <section className="se-section">
        <div className="se-container">
          <div className="se-section-header">
            <h2>What We Offer</h2>
            <p>
              Quality materials, dependable machines and personalised service.
            </p>
            <div className="se-divider" />
          </div>

          <div className="se-cards-grid">
            {/* Card 1 */}
            <div className="se-card">
              <div className="se-card-top">
                <div className="se-card-icon">
                  <BoltIcon width={24} height={24} />
                </div>
                <div>
                  <h3>Machines &amp; Tools</h3>
                  <p>
                    Soldering irons, pinning machines and power tools for
                    production-grade work.
                  </p>
                </div>
              </div>
              <button
                className="se-btn se-btn-primary se-btn-sm"
                onClick={goProducts}
              >
                Browse Machines
              </button>
            </div>

            {/* Card 2 */}
            <div className="se-card">
              <div className="se-card-top">
                <div className="se-card-icon">
                  <GemIcon width={24} height={24} />
                </div>
                <div>
                  <h3>Materials &amp; Beads</h3>
                  <p>
                    Beads, wires, glues and findings — sourced for durability
                    and finish.
                  </p>
                </div>
              </div>
              <button
                className="se-btn se-btn-ghost se-btn-sm"
                onClick={goProducts}
              >
                Browse Materials
              </button>
            </div>

            {/* Card 3 */}
            <div className="se-card">
              <div className="se-card-top">
                <div className="se-card-icon">
                  <HandshakeIcon width={24} height={24} />
                </div>
                <div>
                  <h3>Wholesale &amp; Support</h3>
                  <p>
                    Competitive wholesale pricing, fast dispatch and reliable
                    customer support.
                  </p>
                </div>
              </div>
              <button
                className="se-btn se-btn-wa se-btn-sm"
                onClick={requestQuote}
              >
                <WaIcon /> Request Wholesale Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="se-section se-section-alt">
        <div className="se-container">
          <div className="se-about-strip">
            <div>
              <h2>About Shivam Enterprises</h2>
              <p>
                Trusted supplier of jewelry-making supplies based in Mumbai —
                serving retailers, designers and bulk buyers. Fast dispatch and
                careful quality control ensure you get consistent results every
                time.
              </p>
            </div>
            <div className="se-about-strip-actions">
              <button className="se-btn se-btn-ghost" onClick={goAbout}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact banner ── */}
      <section className="se-section">
        <div className="se-container">
          <div className="se-contact-banner">
            <h2>Place a Bulk Order Today</h2>
            <p>Quick orders via WhatsApp — fastest way to place bulk orders.</p>
            <div className="se-contact-btns">
              <button
                className="se-btn se-btn-wa"
                onClick={requestQuote}
                aria-label="WhatsApp order"
              >
                <WaIcon /> WhatsApp Order
              </button>
              <button className="se-btn se-btn-outline" onClick={goProducts}>
                Browse Catalogue
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
