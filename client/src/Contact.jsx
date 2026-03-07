// import React from "react";
// import { WHATSAPP_NUMBER } from "./config";

// export default function Contact() {
//   const openWhatsApp = (e, text = "Hello, I would like to order.") => {
//     e && e.preventDefault();
//     const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//       text
//     )}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="contact">
//       <div className="container">
//         <div className="section-header">
//           <h2>Contact</h2>
//         </div>
//         <div className="contact-grid">
//           <div className="contact-card">
//             <h3>WhatsApp Orders</h3>
//             <p>WhatsApp orders available — fastest way to place bulk orders.</p>
//             <button
//               className="btn whatsapp-btn large"
//               onClick={(e) =>
//                 openWhatsApp(e, "Hello, I want to place a bulk order.")
//               }
//             >
//               WhatsApp Order
//             </button>
//           </div>

//           <div className="contact-card">
//             <h3>Instagram</h3>
//             <p>@all.in.one_se</p>
//             <a
//               className="btn secondary"
//               href="https://instagram.com/all.in.one_se"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit Instagram
//             </a>
//           </div>

//           <div className="contact-card">
//             <h3>Phone</h3>
//             <p>+91 9326201544</p>
//             <p>+91 9029622670</p>
//           </div>

//           <div className="contact-card">
//             <h3>Address</h3>
//             <p>Address placeholder</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { WHATSAPP_NUMBER } from "./config";

/* ─── Styles ─────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

  :root {
    --gold:      #b8860b;
    --gold-lt:   #d4a520;
    --gold-dim:  rgba(184,134,11,0.10);
    --gold-glow: rgba(184,134,11,0.18);
    --dark:      #ffffff;
    --dark-2:    #ffffff;
    --dark-3:    #f8f7f4;
    --dark-4:    #f0ede8;
    --text:      #1a1a2e;
    --text-dim:  #6b7280;
    --border:    #e5e7eb;
    --wa:        #25d366;
    --wa-dk:     #128c7e;
    --insta:     #e1306c;
    --insta-dk:  #b5004f;
    --radius:    18px;
  }

  /* Page */
  .ct-page {
    font-family: 'DM Sans', sans-serif;
    background: #ffffff;
    min-height: 100vh;
    padding: clamp(40px, 8vw, 80px) 0 80px;
    position: relative;
    overflow: hidden;
  }

  /* Ambient glow blobs */
  .ct-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;
  }
  .ct-blob-1 {
    width: clamp(300px, 50vw, 600px);
    height: clamp(300px, 50vw, 600px);
    background: radial-gradient(circle, rgba(184,134,11,0.07), transparent 70%);
    top: -100px; right: -100px;
  }
  .ct-blob-2 {
    width: clamp(200px, 35vw, 400px);
    height: clamp(200px, 35vw, 400px);
    background: radial-gradient(circle, rgba(37,211,102,0.05), transparent 70%);
    bottom: 0; left: -80px;
  }

  .ct-wrap {
    max-width: 1060px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 32px);
    position: relative; z-index: 1;
  }

  /* Header */
  .ct-header {
    text-align: center;
    margin-bottom: clamp(36px, 6vw, 60px);
    opacity: 0; transform: translateY(28px);
    animation: ctUp 0.6s cubic-bezier(.4,0,.2,1) 0.1s forwards;
  }
  .ct-eyebrow {
    display: inline-block;
    font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--gold); background: var(--gold-dim);
    border: 1px solid rgba(184,134,11,0.28);
    border-radius: 99px; padding: 4px 16px;
    margin-bottom: 16px;
  }
  .ct-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 6vw, 4rem);
    font-weight: 700; color: var(--text);
    line-height: 1.1; margin: 0 0 14px;
    letter-spacing: -0.02em;
  }
  .ct-title span { color: var(--gold); }
  .ct-subtitle {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    color: var(--text-dim); margin: 0;
    max-width: 480px; margin: 0 auto;
    line-height: 1.65;
  }

  /* Divider */
  .ct-divider {
    display: flex; align-items: center; gap: 14px;
    margin: clamp(24px, 4vw, 40px) 0;
    opacity: 0; animation: ctUp 0.5s ease 0.25s forwards;
  }
  .ct-divider-line { flex: 1; height: 1px; background: var(--border); }
  .ct-divider-gem { color: var(--gold); font-size: 0.7rem; }

  /* Grid */
  .ct-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 640px) {
    .ct-grid { grid-template-columns: 1fr; }
  }

  /* Cards */
  .ct-card {
    background: var(--dark-2);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: clamp(20px, 3vw, 28px);
    display: flex; flex-direction: column; gap: 12px;
    position: relative; overflow: hidden;
    opacity: 0; transform: translateY(32px);
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  }
  .ct-card:hover {
    border-color: var(--gold-glow);
    box-shadow: 0 0 32px var(--gold-dim);
    transform: translateY(-3px) !important;
  }
  .ct-card.visible { animation: ctCardIn 0.55s cubic-bezier(.4,0,.2,1) forwards; }

  /* Stagger delays */
  .ct-card:nth-child(1) { animation-delay: 0.15s; }
  .ct-card:nth-child(2) { animation-delay: 0.25s; }
  .ct-card:nth-child(3) { animation-delay: 0.35s; }
  .ct-card:nth-child(4) { animation-delay: 0.45s; }

  @keyframes ctCardIn {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ctUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Card inner shine */
  .ct-card::before {
    content: "";
    position: absolute; top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(184,134,11,0.35), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .ct-card:hover::before { opacity: 1; }

  /* Icon row */
  .ct-card-icon {
    width: 42px; height: 42px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
    background: var(--dark-3);
    border: 1px solid var(--border);
  }

  .ct-card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2.5vw, 1.3rem);
    font-weight: 700; color: var(--text); margin: 0;
    letter-spacing: -0.01em;
  }
  .ct-card-body {
    font-size: clamp(0.82rem, 1.8vw, 0.9rem);
    color: var(--text-dim); line-height: 1.65; margin: 0;
    flex: 1;
  }
  .ct-card-body strong { color: var(--text); font-weight: 600; }

  /* Buttons */
  .ct-btn {
    display: inline-flex; align-items: center; justify-content: center;
    gap: 8px; padding: 11px 20px; border-radius: 10px;
    font-size: 0.875rem; font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer; border: none; text-decoration: none;
    width: 100%; box-sizing: border-box;
    transition: transform 0.16s, box-shadow 0.16s, background 0.16s;
    margin-top: auto;
  }
  .ct-btn:active { transform: scale(0.97) !important; }

  .ct-btn-wa {
    background: var(--wa); color: #fff;
    box-shadow: 0 4px 18px rgba(37,211,102,0.22);
  }
  .ct-btn-wa:hover {
    background: var(--wa-dk);
    box-shadow: 0 6px 24px rgba(37,211,102,0.38);
    transform: translateY(-2px);
  }

  .ct-btn-insta {
    background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    color: #fff;
    box-shadow: 0 4px 18px rgba(225,48,108,0.22);
  }
  .ct-btn-insta:hover {
    box-shadow: 0 6px 24px rgba(225,48,108,0.42);
    transform: translateY(-2px);
  }

  .ct-btn-phone {
    background: #f3f4f6; color: var(--text);
    border: 1px solid var(--border);
  }
  .ct-btn-phone:hover {
    border-color: var(--gold);
    color: var(--gold);
    transform: translateY(-2px);
  }

  .ct-btn-map {
    background: var(--gold); color: #0e0e18;
  }
  .ct-btn-map:hover {
    background: var(--gold-lt);
    box-shadow: 0 6px 20px rgba(184,134,11,0.38);
    transform: translateY(-2px);
  }

  /* Icon SVGs */
  .ct-icon { width: 16px; height: 16px; fill: currentColor; flex-shrink: 0; }

  /* Phone list */
  .ct-phones { display: flex; flex-direction: column; gap: 6px; }
  .ct-phone-row {
    display: flex; align-items: center; gap: 8px;
    font-size: 0.9rem; color: var(--text);
    font-weight: 500;
  }
  .ct-phone-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold); flex-shrink: 0;
  }

  /* Address lines */
  .ct-address {
    font-size: clamp(0.8rem, 1.8vw, 0.875rem);
    color: var(--text-dim); line-height: 1.7;
  }
  .ct-address-line { display: block; }

  /* Map embed */
  .ct-map-wrap {
    margin-top: clamp(28px, 5vw, 48px);
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    box-shadow: 0 8px 40px rgba(0,0,0,0.4);
    opacity: 0; transform: translateY(24px);
    animation: ctUp 0.6s cubic-bezier(.4,0,.2,1) 0.5s forwards;
    position: relative;
  }
  .ct-map-header {
    background: #f8f7f4;
    padding: 14px 20px;
    display: flex; align-items: center; gap: 10px;
    border-bottom: 1px solid var(--border);
  }
  .ct-map-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); }
  .ct-map-label {
    font-size: 0.8rem; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--gold);
  }
  .ct-map-wrap iframe {
    display: block; width: 100%;
    height: clamp(280px, 40vw, 420px);
    border: none; filter: grayscale(30%) contrast(1.05);
  }
`;

let _css = false;
function injectCSS() {
  if (_css || typeof document === "undefined") return;
  const el = document.createElement("style");
  el.textContent = CSS;
  document.head.appendChild(el);
  _css = true;
}

/* ── Icon components ── */
function WaIcon() {
  return (
    <svg className="ct-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function InstaIcon() {
  return (
    <svg className="ct-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      className="ct-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg
      className="ct-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ── Intersection observer hook for card animations ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function ContactCard({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`ct-card ${visible ? "visible" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function Contact() {
  injectCSS();

  const openWhatsApp = (
    text = "Hello, I would like to place a bulk order."
  ) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=158%2FA+Allaharakha+Ibrahim+Patel+Marg+Marine+Lines+East+Mumbai+400003";

  const EMBED_URL =
    "https://maps.google.com/maps?q=158%2FA+Allaharakha+Ibrahim+Patel+Marg%2C+Marine+Lines+East%2C+Mumbai+400003&output=embed";

  return (
    <div className="ct-page">
      {/* Ambient blobs */}
      <div className="ct-blob ct-blob-1" aria-hidden="true" />
      <div className="ct-blob ct-blob-2" aria-hidden="true" />

      <div className="ct-wrap">
        {/* Header */}
        <header className="ct-header">
          <span className="ct-eyebrow">Get in Touch</span>
          <h1 className="ct-title">
            Contact <span>Shivam</span>
          </h1>
          <p className="ct-subtitle">
            Fastest way to order is via WhatsApp. We also take walk-in visits at
            our Mumbai store.
          </p>
        </header>

        {/* Divider */}
        <div className="ct-divider" aria-hidden="true">
          <div className="ct-divider-line" />
          <span className="ct-divider-gem">✦</span>
          <div className="ct-divider-line" />
        </div>

        {/* Cards grid */}
        <div className="ct-grid">
          {/* WhatsApp */}
          <ContactCard delay={0.1}>
            <div
              className="ct-card-icon"
              style={{ background: "#25d366", border: "none" }}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="#ffffff"
                aria-label="WhatsApp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="ct-card-title">WhatsApp Orders</h3>
            <p className="ct-card-body">
              Place bulk orders instantly via WhatsApp — fastest response
              guaranteed.
            </p>
            <button
              className="ct-btn ct-btn-wa"
              onClick={() =>
                openWhatsApp("Hello, I want to place a bulk order.")
              }
              aria-label="Open WhatsApp to place an order"
            >
              <WaIcon /> WhatsApp Order
            </button>
          </ContactCard>

          {/* Instagram */}
          <ContactCard delay={0.2}>
            <div
              className="ct-card-icon"
              style={{
                background:
                  "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                border: "none",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="#ffffff"
                aria-label="Instagram"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
            <h3 className="ct-card-title">Instagram</h3>
            <p className="ct-card-body">
              Follow us for new arrivals, product highlights, and wholesale
              updates.
              <br />
              <strong>@all.in.one_se</strong>
            </p>
            <a
              className="ct-btn ct-btn-insta"
              href="https://instagram.com/all.in.one_se"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Shivam Enterprises on Instagram"
            >
              <InstaIcon /> Visit Instagram
            </a>
          </ContactCard>

          {/* Phone */}
          <ContactCard delay={0.3}>
            <div className="ct-card-icon">📞</div>
            <h3 className="ct-card-title">Phone</h3>
            <p className="ct-card-body">
              Call us directly for inquiries and quotes.
            </p>
            <div className="ct-phones">
              <div className="ct-phone-row">
                <span className="ct-phone-dot" aria-hidden="true" />
                +91 93262 01544
              </div>
              <div className="ct-phone-row">
                <span className="ct-phone-dot" aria-hidden="true" />
                +91 90296 22670
              </div>
            </div>
            <a
              className="ct-btn ct-btn-phone"
              href="tel:+919326201544"
              aria-label="Call Shivam Enterprises"
            >
              <PhoneIcon /> Call Now
            </a>
          </ContactCard>

          {/* Address */}
          <ContactCard delay={0.4}>
            <div className="ct-card-icon">📍</div>
            <h3 className="ct-card-title">Store Address</h3>
            <address className="ct-address" style={{ fontStyle: "normal" }}>
              <span className="ct-address-line">
                158/A, Allaharakha Ibrahim Patel Marg,
              </span>
              <span className="ct-address-line">Near Khatri Jamat Hall,</span>
              <span className="ct-address-line">
                Marine Lines East, Jamli Mohalla,
              </span>
              <span className="ct-address-line">Panjarpole, Bhuleshwar,</span>
              <span className="ct-address-line">
                Mumbai, Maharashtra — 400003
              </span>
            </address>
            <a
              className="ct-btn ct-btn-map"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
            >
              <MapPinIcon /> Open in Maps
            </a>
          </ContactCard>
        </div>

        {/* Embedded map */}
        <div className="ct-map-wrap">
          <div className="ct-map-header">
            <div className="ct-map-dot" aria-hidden="true" />
            <span className="ct-map-label">Shivam Enterprises — Mumbai</span>
          </div>
          <iframe
            src={EMBED_URL}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shivam Enterprises store location on Google Maps"
          />
        </div>
      </div>
    </div>
  );
}