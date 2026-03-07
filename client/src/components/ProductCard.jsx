import React from "react";
import { WHATSAPP_NUMBER } from "../config";
import { Link } from "react-router-dom";

const styles = `
  /* ── Product Card ── */
  .se-product-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 10px rgba(0,0,0,0.07);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    height: 100%;
  }
  .se-product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px rgba(0,0,0,0.12);
  }

  /* ── Image wrapper ── */
  .se-product-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #f3f4f6;
  }
  .se-product-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
    display: block;
  }
  .se-product-card:hover .se-product-img-wrap img {
    transform: scale(1.05);
  }

  /* Category badge over image */
  .se-product-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(26,26,46,0.82);
    color: #fff;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 99px;
    backdrop-filter: blur(4px);
  }

  /* ── Card body ── */
  .se-product-body {
    padding: clamp(12px, 3vw, 18px);
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 6px;
  }

  .se-product-name {
    font-size: clamp(0.95rem, 2.5vw, 1.05rem);
    font-weight: 700;
    color: #1a1a2e;
    margin: 0;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .se-product-price {
    font-size: clamp(1rem, 2.5vw, 1.15rem);
    font-weight: 800;
    color: #b8860b;
    margin: 0;
  }

  .se-product-desc {
    font-size: clamp(0.8rem, 2vw, 0.875rem);
    color: #6b7280;
    margin: 0;
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
  }

  /* ── Action buttons ── */
  .se-product-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
  }

  .se-pc-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
    line-height: 1.2;
  }
  .se-pc-btn:active { transform: scale(0.96); }

  .se-pc-btn-wa {
    background: #25d366;
    color: #fff;
  }
  .se-pc-btn-wa:hover {
    background: #128c7e;
    box-shadow: 0 4px 14px rgba(37,211,102,0.35);
    transform: translateY(-1px);
  }

  .se-pc-btn-outline {
    background: transparent;
    color: #1a1a2e;
    border: 2px solid #e5e7eb;
  }
  .se-pc-btn-outline:hover {
    border-color: #b8860b;
    color: #b8860b;
    transform: translateY(-1px);
  }

  /* ── WhatsApp SVG ── */
  .se-pc-wa-icon {
    width: 15px;
    height: 15px;
    fill: currentColor;
    flex-shrink: 0;
  }
`;

function WaIcon() {
  return (
    <svg
      className="se-pc-wa-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

let stylesInjected = false;

export default function ProductCard({ product }) {
  const { name, category, imageUrl, description, price } = product;

  // Inject styles only once
  if (!stylesInjected && typeof document !== "undefined") {
    const tag = document.createElement("style");
    tag.textContent = styles;
    document.head.appendChild(tag);
    stylesInjected = true;
  }

  const openWhatsApp = (e) => {
    e && e.stopPropagation();
    const text = encodeURIComponent(
      `Hello I want to order ${name}${price ? ` - Price: ₹${price}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <article
      className="se-product-card"
      aria-labelledby={`product-${product._id}`}
    >
      {/* Image */}
      <div className="se-product-img-wrap">
        <img
          src={
            imageUrl ||
            `https://via.placeholder.com/400x300?text=${encodeURIComponent(
              name
            )}`
          }
          alt={name}
          loading="lazy"
        />
        {category && <span className="se-product-badge">{category}</span>}
      </div>

      {/* Body */}
      <div className="se-product-body">
        <h3 className="se-product-name" id={`product-${product._id}`}>
          {name}
        </h3>

        {price && <p className="se-product-price">₹{price}</p>}

        {description && <p className="se-product-desc">{description}</p>}

        <div className="se-product-actions">
          <button
            className="se-pc-btn se-pc-btn-wa"
            onClick={openWhatsApp}
            aria-label={`Order ${name} on WhatsApp`}
          >
            <WaIcon /> Order
          </button>

          <Link
            to={`/products/${product._id}`}
            className="se-pc-btn se-pc-btn-outline"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View details for ${name}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
