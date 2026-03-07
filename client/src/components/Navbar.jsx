import React, { useState, useEffect, useRef } from "react";
import logo from "./home.png";
import { NavLink, useLocation } from "react-router-dom";

const styles = `
  /* ── Variables ── */
  :root {
    --nav-bg:       #1a1a2e;
    --nav-border:   rgba(184,134,11,0.25);
    --nav-text:     rgba(255,255,255,0.82);
    --nav-active:   #b8860b;
    --nav-hover:    #ffffff;
    --nav-height:   64px;
    --nav-z:        1000;
  }

  /* ── Header shell ── */
  .se-header {
    position: sticky;
    top: 0;
    z-index: var(--nav-z);
    background: var(--nav-bg);
    border-bottom: 1px solid var(--nav-border);
    box-shadow: 0 2px 16px rgba(0,0,0,0.35);
    height: var(--nav-height);
  }

  .se-header-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 32px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  /* ── Logo ── */
  .se-logo-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .se-logo-img {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    object-fit: cover;
    border: 1.5px solid var(--nav-border);
  }
  .se-logo-text {
    font-size: clamp(0.95rem, 2.5vw, 1.1rem);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.01em;
    line-height: 1.2;
    white-space: nowrap;
  }
  .se-logo-text span {
    color: var(--nav-active);
  }

  /* ── Desktop nav links ── */
  .se-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .se-nav-list a {
    display: block;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--nav-text);
    text-decoration: none;
    letter-spacing: 0.01em;
    transition: color 0.15s, background 0.15s;
    position: relative;
  }
  .se-nav-list a::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 14px;
    right: 14px;
    height: 2px;
    background: var(--nav-active);
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }
  .se-nav-list a:hover {
    color: var(--nav-hover);
    background: rgba(255,255,255,0.06);
  }
  .se-nav-list a:hover::after,
  .se-nav-list a.active::after {
    transform: scaleX(1);
  }
  .se-nav-list a.active {
    color: var(--nav-active);
    background: rgba(184,134,11,0.10);
  }

  /* ── Hamburger button ── */
  .se-nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(255,255,255,0.06);
    border-radius: 8px;
    cursor: pointer;
    padding: 8px;
    flex-shrink: 0;
    transition: background 0.15s;
  }
  .se-nav-toggle:hover { background: rgba(255,255,255,0.12); }
  .se-nav-toggle span {
    display: block;
    width: 20px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.2s ease;
    transform-origin: center;
  }
  /* Animate to X when open */
  .se-nav-toggle.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .se-nav-toggle.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .se-nav-toggle.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  /* ── Mobile drawer ── */
  @media (max-width: 680px) {
    .se-nav-toggle { display: flex; }

    .se-nav-list {
      /* Hidden by default */
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0;
      bottom: 0;
      background: #12122a;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding: 16px 24px 32px;
      overflow-y: auto;

      /* Slide-in animation */
      transform: translateX(100%);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.28s cubic-bezier(0.4,0,0.2,1),
                  opacity 0.22s ease;
    }
    .se-nav-list.is-open {
      transform: translateX(0);
      opacity: 1;
      pointer-events: auto;
    }

    .se-nav-list li {
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }
    .se-nav-list li:last-child { border-bottom: none; }

    .se-nav-list a {
      font-size: 1.1rem;
      padding: 16px 8px;
      border-radius: 0;
    }
    .se-nav-list a::after { display: none; }
    .se-nav-list a.active {
      color: var(--nav-active);
      background: transparent;
      padding-left: 16px;
      border-left: 3px solid var(--nav-active);
    }
  }

  /* ── Overlay backdrop (mobile only) ── */
  .se-nav-backdrop {
    display: none;
  }
  @media (max-width: 680px) {
    .se-nav-backdrop {
      display: block;
      position: fixed;
      inset: 0;
      top: var(--nav-height);
      background: rgba(0,0,0,0.55);
      z-index: calc(var(--nav-z) - 1);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s ease;
    }
    .se-nav-backdrop.is-open {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <style>{styles}</style>

      {/* Backdrop — closes menu on tap outside */}
      <div
        className={`se-nav-backdrop ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <header className="se-header" ref={navRef}>
        <div className="se-header-inner">
          {/* Logo */}
          <NavLink
            to="/"
            className="se-logo-link"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Shivam Enterprises logo"
              className="se-logo-img"
            />
            <span className="se-logo-text">
              Shivam <span>Enterprises</span>
            </span>
          </NavLink>

          {/* Hamburger */}
          <button
            className={`se-nav-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="se-nav-list"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Nav links */}
          <ul
            id="se-nav-list"
            className={`se-nav-list ${open ? "is-open" : ""}`}
            role="list"
          >
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
