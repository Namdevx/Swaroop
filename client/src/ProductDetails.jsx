// import React, { useState, useEffect, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import { PRODUCTS as staticProducts } from "./data/productsData";
// import { WHATSAPP_NUMBER } from "./config";

// /* ── Google Font ── */
// const FONT_LINK =
//   "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap";

// const styles = `
//   @import url('${FONT_LINK}');

//   :root {
//     --gold:        #b8860b;
//     --gold-light:  #d4a520;
//     --gold-dim:    rgba(184,134,11,0.15);
//     --dark:        #0e0e1a;
//     --dark-2:      #1a1a2e;
//     --dark-3:      #242438;
//     --text:        #1a1a2e;
//     --muted:       #6b7280;
//     --border:      #e5e7eb;
//     --white:       #ffffff;
//     --radius:      16px;
//     --wa:          #25d366;
//     --wa-dark:     #128c7e;
//   }

//   /* ── Page shell ── */
//   .pd-page {
//     font-family: 'DM Sans', sans-serif;
//     background: #f8f7f4;
//     min-height: 100vh;
//     padding: clamp(20px, 5vw, 48px) 0 60px;
//   }
//   .pd-container {
//     max-width: 1080px;
//     margin: 0 auto;
//     padding: 0 clamp(16px, 4vw, 32px);
//   }

//   /* ── Breadcrumb ── */
//   .pd-breadcrumb {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     font-size: 0.82rem;
//     color: var(--muted);
//     margin-bottom: clamp(20px, 4vw, 36px);
//     flex-wrap: wrap;
//   }
//   .pd-breadcrumb a {
//     color: var(--gold);
//     text-decoration: none;
//     font-weight: 600;
//     transition: color 0.15s;
//   }
//   .pd-breadcrumb a:hover { color: var(--gold-light); }
//   .pd-breadcrumb-sep { opacity: 0.4; }

//   /* ── Not found ── */
//   .pd-not-found {
//     text-align: center;
//     padding: 80px 20px;
//   }
//   .pd-not-found h2 {
//     font-family: 'Playfair Display', serif;
//     font-size: 2rem;
//     color: var(--text);
//     margin-bottom: 12px;
//   }
//   .pd-not-found p { color: var(--muted); margin-bottom: 24px; }

//   /* ── Main layout ── */
//   .pd-layout {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: clamp(24px, 4vw, 48px);
//     align-items: start;
//   }
//   @media (max-width: 760px) {
//     .pd-layout { grid-template-columns: 1fr; }
//   }

//   /* ── Gallery column ── */
//   .pd-gallery { display: flex; flex-direction: column; gap: 12px; }

//   .pd-main-img-wrap {
//     position: relative;
//     border-radius: var(--radius);
//     overflow: hidden;
//     background: var(--white);
//     aspect-ratio: 4/3;
//     box-shadow: 0 8px 32px rgba(0,0,0,0.12);
//   }
//   .pd-main-img-wrap img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//     transition: transform 0.5s cubic-bezier(0.4,0,0.2,1),
//                 opacity 0.3s ease;
//   }
//   .pd-main-img-wrap img.img-fade {
//     opacity: 0;
//     transform: scale(1.04);
//   }
//   .pd-main-img-wrap img.img-visible {
//     opacity: 1;
//     transform: scale(1);
//   }

//   /* Gold shimmer overlay on hover */
//   .pd-main-img-wrap::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: linear-gradient(135deg, transparent 60%, rgba(184,134,11,0.08));
//     pointer-events: none;
//     opacity: 0;
//     transition: opacity 0.3s;
//   }
//   .pd-main-img-wrap:hover::after { opacity: 1; }

//   /* Badge */
//   .pd-img-badge {
//     position: absolute;
//     top: 14px;
//     left: 14px;
//     background: var(--dark-2);
//     color: var(--gold);
//     font-size: 0.72rem;
//     font-weight: 700;
//     letter-spacing: 0.09em;
//     text-transform: uppercase;
//     padding: 4px 12px;
//     border-radius: 99px;
//     border: 1px solid var(--gold-dim);
//     backdrop-filter: blur(6px);
//     z-index: 1;
//   }

//   /* Thumbnails */
//   .pd-thumbs {
//     display: flex;
//     gap: 10px;
//     flex-wrap: wrap;
//   }
//   .pd-thumb-btn {
//     width: 72px;
//     height: 56px;
//     border-radius: 10px;
//     overflow: hidden;
//     padding: 0;
//     cursor: pointer;
//     background: transparent;
//     border: 2px solid transparent;
//     transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
//     flex-shrink: 0;
//   }
//   .pd-thumb-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
//   .pd-thumb-btn.active { border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-dim); }
//   .pd-thumb-btn img { width: 100%; height: 100%; object-fit: cover; display: block; }

//   /* ── Info column ── */
//   .pd-info {
//     display: flex;
//     flex-direction: column;
//     gap: 0;
//   }

//   /* Animate in */
//   .pd-info-inner {
//     opacity: 0;
//     transform: translateY(24px);
//     animation: pdSlideUp 0.55s cubic-bezier(0.4,0,0.2,1) 0.15s forwards;
//   }
//   @keyframes pdSlideUp {
//     to { opacity: 1; transform: translateY(0); }
//   }

//   .pd-category-tag {
//     display: inline-flex;
//     align-items: center;
//     gap: 6px;
//     font-size: 0.78rem;
//     font-weight: 700;
//     letter-spacing: 0.1em;
//     text-transform: uppercase;
//     color: var(--gold);
//     background: var(--gold-dim);
//     border: 1px solid rgba(184,134,11,0.25);
//     border-radius: 99px;
//     padding: 4px 14px;
//     margin-bottom: 14px;
//   }

//   .pd-name {
//     font-family: 'Playfair Display', serif;
//     font-size: clamp(1.6rem, 4vw, 2.4rem);
//     font-weight: 800;
//     color: var(--text);
//     line-height: 1.2;
//     margin: 0 0 16px;
//   }

//   /* Price tag */
//   .pd-price-wrap {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     margin-bottom: 20px;
//   }
//   .pd-price {
//     font-size: clamp(1.5rem, 3.5vw, 2rem);
//     font-weight: 800;
//     color: var(--gold);
//     font-family: 'Playfair Display', serif;
//   }
//   .pd-price-label {
//     font-size: 0.78rem;
//     color: var(--muted);
//     background: #f0fdf4;
//     border: 1px solid #bbf7d0;
//     color: #166534;
//     border-radius: 99px;
//     padding: 3px 10px;
//     font-weight: 600;
//   }

//   /* Divider */
//   .pd-divider {
//     height: 1px;
//     background: var(--border);
//     margin: 20px 0;
//   }

//   /* Description section */
//   .pd-desc-heading {
//     font-size: 0.78rem;
//     font-weight: 700;
//     letter-spacing: 0.1em;
//     text-transform: uppercase;
//     color: var(--muted);
//     margin: 0 0 10px;
//   }
//   .pd-description {
//     font-size: clamp(0.9rem, 2vw, 0.975rem);
//     color: #374151;
//     line-height: 1.75;
//     margin: 0 0 8px;
//   }

//   /* Feature bullets */
//   .pd-features {
//     list-style: none;
//     padding: 0;
//     margin: 16px 0 0;
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }
//   .pd-features li {
//     display: flex;
//     align-items: flex-start;
//     gap: 10px;
//     font-size: 0.9rem;
//     color: #374151;
//     line-height: 1.5;
//   }
//   .pd-features li::before {
//     content: "✦";
//     color: var(--gold);
//     font-size: 0.65rem;
//     flex-shrink: 0;
//     margin-top: 4px;
//   }

//   /* ── Action buttons ── */
//   .pd-actions {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     margin-top: 28px;
//   }

//   .pd-btn {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 9px;
//     padding: 14px 20px;
//     border-radius: 10px;
//     font-size: 0.975rem;
//     font-weight: 700;
//     cursor: pointer;
//     border: none;
//     text-decoration: none;
//     width: 100%;
//     box-sizing: border-box;
//     transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
//     letter-spacing: 0.01em;
//     font-family: 'DM Sans', sans-serif;
//   }
//   .pd-btn:active { transform: scale(0.97); }

//   .pd-btn-wa {
//     background: var(--wa);
//     color: #fff;
//     box-shadow: 0 4px 18px rgba(37,211,102,0.28);
//   }
//   .pd-btn-wa:hover {
//     background: var(--wa-dark);
//     box-shadow: 0 6px 24px rgba(37,211,102,0.4);
//     transform: translateY(-2px);
//   }

//   .pd-btn-secondary {
//     background: transparent;
//     color: var(--text);
//     border: 2px solid var(--border);
//   }
//   .pd-btn-secondary:hover {
//     border-color: var(--gold);
//     color: var(--gold);
//     transform: translateY(-2px);
//   }

//   /* WA icon */
//   .pd-wa-icon {
//     width: 18px; height: 18px;
//     fill: currentColor; flex-shrink: 0;
//   }

//   /* ── Trust badges ── */
//   .pd-trust {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
//     margin-top: 20px;
//     padding-top: 20px;
//     border-top: 1px solid var(--border);
//   }
//   .pd-trust-item {
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     font-size: 0.78rem;
//     color: var(--muted);
//     font-weight: 600;
//   }
//   .pd-trust-item span.icon { font-size: 1rem; }

//   /* ── Page enter animation ── */
//   .pd-gallery {
//     opacity: 0;
//     transform: translateX(-20px);
//     animation: pdFadeLeft 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
//   }
//   @keyframes pdFadeLeft {
//     to { opacity: 1; transform: translateX(0); }
//   }
// `;

// function WaIcon() {
//   return (
//     <svg className="pd-wa-icon" viewBox="0 0 24 24">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//     </svg>
//   );
// }

// /* Inject styles once */
// let injected = false;
// function injectStyles() {
//   if (injected || typeof document === "undefined") return;
//   const tag = document.createElement("style");
//   tag.textContent = styles;
//   document.head.appendChild(tag);
//   injected = true;
// }

// /* Auto-generate feature bullets from description */
// function extractFeatures(description) {
//   if (!description) return [];
//   const sentences = description.match(/[^.!?]+[.!?]*/g) || [];
//   return sentences
//     .slice(0, 4)
//     .map((s) => s.trim())
//     .filter(Boolean);
// }

// export default function ProductDetails() {
//   injectStyles();
//   const { id } = useParams();
//   const product = staticProducts.find((p) => p._id === id);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [imgVisible, setImgVisible] = useState(true);
//   const prevIndexRef = useRef(0);

//   const switchImage = (i) => {
//     if (i === selectedIndex) return;
//     setImgVisible(false);
//     setTimeout(() => {
//       setSelectedIndex(i);
//       setImgVisible(true);
//     }, 220);
//     prevIndexRef.current = i;
//   };

//   useEffect(() => {
//     setSelectedIndex(0);
//     setImgVisible(true);
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="pd-page">
//         <div className="pd-container">
//           <div className="pd-not-found">
//             <h2>Product Not Found</h2>
//             <p>We couldn't find the product you were looking for.</p>
//             <Link
//               to="/products"
//               className="pd-btn pd-btn-secondary"
//               style={{
//                 display: "inline-flex",
//                 width: "auto",
//                 padding: "12px 28px",
//               }}
//             >
//               ← Back to Products
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const { name, imageUrl, category, description, price, galleryImages } =
//     product;
//   const gallery =
//     Array.isArray(galleryImages) && galleryImages.length > 0
//       ? galleryImages
//       : [imageUrl];
//   const activeSrc = gallery[selectedIndex] || imageUrl;
//   const features = extractFeatures(description);

//   const openWhatsApp = () => {
//     const text = encodeURIComponent(
//       `Hello I want to order ${name}${price ? ` - Price: ₹${price}` : ""}`
//     );
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
//   };

//   return (
//     <div className="pd-page">
//       <div className="pd-container">
//         {/* Breadcrumb */}
//         <nav className="pd-breadcrumb" aria-label="Breadcrumb">
//           <Link to="/">Home</Link>
//           <span className="pd-breadcrumb-sep">›</span>
//           <Link to="/products">Products</Link>
//           <span className="pd-breadcrumb-sep">›</span>
//           <span>{name}</span>
//         </nav>

//         <div className="pd-layout">
//           {/* ── Gallery ── */}
//           <div className="pd-gallery">
//             <div className="pd-main-img-wrap">
//               <img
//                 src={activeSrc}
//                 alt={`${name} - image ${selectedIndex + 1}`}
//                 className={imgVisible ? "img-visible" : "img-fade"}
//               />
//               {category && <span className="pd-img-badge">{category}</span>}
//             </div>

//             {gallery.length > 1 && (
//               <div className="pd-thumbs">
//                 {gallery.map((src, i) => (
//                   <button
//                     key={i}
//                     className={`pd-thumb-btn ${
//                       selectedIndex === i ? "active" : ""
//                     }`}
//                     onClick={() => switchImage(i)}
//                     aria-label={`Show image ${i + 1}`}
//                   >
//                     <img src={src} alt={`${name} thumbnail ${i + 1}`} />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* ── Info ── */}
//           <div className="pd-info">
//             <div className="pd-info-inner">
//               {category && (
//                 <div className="pd-category-tag">
//                   <span>✦</span> {category}
//                 </div>
//               )}

//               <h1 className="pd-name">{name}</h1>

//               {price && (
//                 <div className="pd-price-wrap">
//                   <span className="pd-price">₹{price}</span>
//                   <span className="pd-price-label">In Stock</span>
//                 </div>
//               )}

//               <div className="pd-divider" />

//               {/* Description */}
//               <p className="pd-desc-heading">About this product</p>
//               <p className="pd-description">
//                 {description ||
//                   `${name} is a premium quality jewelry-making supply sourced for durability, finish, and consistent results. Ideal for both small designers and large-scale production.`}
//               </p>

//               {/* Feature bullets */}
//               {features.length > 0 && (
//                 <ul className="pd-features">
//                   {features.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>
//               )}

//               {/* Actions */}
//               <div className="pd-actions">
//                 <button
//                   className="pd-btn pd-btn-wa"
//                   onClick={openWhatsApp}
//                   aria-label={`Order ${name} on WhatsApp`}
//                 >
//                   <WaIcon /> Order via WhatsApp
//                 </button>
//                 <Link to="/products" className="pd-btn pd-btn-secondary">
//                   ← Back to All Products
//                 </Link>
//               </div>

//               {/* Trust badges */}
//               <div className="pd-trust">
//                 <div className="pd-trust-item">
//                   <span className="icon">🚚</span> Fast Dispatch
//                 </div>
//                 <div className="pd-trust-item">
//                   <span className="icon">🏆</span> Quality Assured
//                 </div>
//                 <div className="pd-trust-item">
//                   <span className="icon">📦</span> Bulk Available
//                 </div>
//                 <div className="pd-trust-item">
//                   <span className="icon">💬</span> WhatsApp Support
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS as staticProducts } from "./data/productsData";
import { WHATSAPP_NUMBER } from "./config";

/* ─────────────────────────────────────────────────────────────
   PRODUCT CONTENT MAP
   Add/edit descriptions and features here by product ID.
   IDs match the _id field in your RAW_PRODUCTS array.
───────────────────────────────────────────────────────────── */
const PRODUCT_CONTENT = {
  1: {
    description:
      "A reliable soldering iron designed for jewelry makers and craftspeople. Provides stable, consistent heat for clean and precise joins on metal findings, clasps, and wire. The fast heat-up element and comfortable grip make it suitable for both detail bench work and sustained production use.",
    features: [
      "Fast heat-up — ready in under 45 seconds",
      "Stable temperature for consistent solder joins",
      "Lightweight ergonomic handle reduces hand fatigue",
      "Replaceable tips for chisel, conical, and blade work",
      "Compatible with standard 220V Indian supply",
    ],
  },
  2: {
    description:
      "High-quality crochet hook crafted from smooth aluminium for effortless yarn glide. Ideal for intricate jewelry crochet, bead weaving, and decorative cord work. The tapered tip gives precise control when working with fine threads and beading wire.",
    features: [
      "Smooth aluminium shaft — yarn slides without snagging",
      "Tapered tip for fine thread and bead work",
      "Thumb rest reduces hand strain during long sessions",
      "Available in multiple sizes from 2mm to 6mm",
      "Suitable for jewelry crochet, macramé, and cord work",
    ],
  },
  3: {
    description:
      "Yoker precision knives and trimmers are trusted cutting tools for jewelry and garment workshops. Ultra-sharp stainless steel blades slice through piping cord, bias tape, leather, and multilayer fabric with minimal effort. Non-slip handles give confident control during detailed trim and finishing work.",
    features: [
      "Ultra-sharp stainless steel blades for clean cuts",
      "Non-slip rubberized handles for a safe, firm grip",
      "Cuts through fabric, cord, leather, and piping easily",
      "Replaceable blades — long-lasting production value",
      "Compact size that fits neatly in any tool roll",
    ],
  },
  4: {
    description:
      "B-7000 is a multi-purpose industrial adhesive trusted by jewelry makers worldwide. Its flexible, waterproof bond works on glass, metal, plastic, rhinestones, leather, and fabric. A 5-minute working time lets you position stones precisely before the bond sets, and the cured finish is crystal-clear — invisible even on transparent crystals.",
    features: [
      "Bonds metal, glass, stone, plastic, leather, and fabric",
      "5-minute open time — reposition pieces before curing",
      "Waterproof and flexible when fully cured",
      "Crystal-clear, non-yellowing finish",
      "Fine-tip nozzle for precise stone setting",
    ],
  },
  5: {
    description:
      "A high-temperature hot melt glue gun built for continuous production use. The ergonomic trigger mechanism delivers smooth, drip-free glue flow, and the insulated nozzle guard protects fingers during rapid assembly. Ideal for attaching fabric trims, ribbons, and decorative embellishments to jewelry and garment bases.",
    features: [
      "Heats to working temperature in under 3 minutes",
      "Drip-free trigger mechanism for clean application",
      "Insulated nozzle guard for safe handling",
      "Compatible with standard 11mm glue sticks",
      "Built-in stand keeps the nozzle safely off the workbench",
    ],
  },
  6: {
    description:
      "A comprehensive sewing kit containing everything needed for jewelry and garment finishing work. Includes assorted hand-sewing needles, high-tenacity polyester threads in multiple colours, a thimble, seam ripper, tape measure, and scissors — all stored in a compact resealable case ideal for bench or travel use.",
    features: [
      "Assorted needles including sharps, beading, and tapestry",
      "High-tenacity polyester thread in 12 colours",
      "Compact resealable storage case for easy organisation",
      "Includes thimble, seam ripper, and tape measure",
      "Suitable for fine jewelry repair and garment finishing",
    ],
  },
  7: {
    description:
      "Heavy-duty gear wire provides the structural backbone for jewelry frames, headbands, and wire-form armatures. Its tightly wound coil construction resists kinking while remaining shapeable by hand, so you can form curves, angles, and loops without special tools. Ideal for choker bases, hairbands, and bangle cores.",
    features: [
      "Kink-resistant tightly wound coil structure",
      "Shapeable by hand without special tools",
      "Used for choker bases, headbands, and bangle cores",
      "Available in silver tone and gold tone finishes",
      "Sold by the metre or in bulk production coils",
    ],
  },
  8: {
    description:
      "The Seznik Portable Mini Sealing Machine is a compact impulse heat sealer perfect for sealing polybags, OPP pouches, and PE packaging used in jewelry retail. It produces a clean, airtight seal in under 2 seconds, protecting finished products from dust and moisture. The battery-powered design means no power socket is needed at your packing station.",
    features: [
      "Seals polybags and OPP pouches in under 2 seconds",
      "Battery-powered — no power socket required",
      "Compact and lightweight — fits in an apron pocket",
      "Produces consistent airtight seals for retail-ready packaging",
      "Ideal for jewelry pouches, accessory bags, and gift wrap",
    ],
  },
  9: {
    description:
      "A full 72-yard card of bias-cut cotton piping cord used for neckline trim, jewelry cording, fabric edging, and decorative piping. The tightly twisted construction holds its shape through sewing and gluing, while the cotton cover takes dye and fabric paint evenly for custom colour matching.",
    features: [
      "72 yards per card — excellent value for production",
      "Bias-cut cotton cover holds shape through sewing and gluing",
      "Takes fabric dye and paint evenly for colour matching",
      "Suitable for garment piping, jewelry cord, and fabric trim",
      "Available in multiple thicknesses and colours",
    ],
  },
  10: {
    description:
      "The Khaka Pinning Machine is built for high-volume badge and brooch production workshops. Its hardened steel die set seats pins with uniform depth across every piece, eliminating hand-finishing. The cast-iron base absorbs vibration to keep tolerances tight during extended production runs.",
    features: [
      "Hardened steel dies for consistent, long service life",
      "Uniform pin depth on every piece — no hand-finishing needed",
      "Cast-iron base eliminates vibration drift",
      "Handles pins from 0.5mm to 3mm diameter",
      "Ideal for brooch, badge, and metal findings production",
    ],
  },
  11: {
    description:
      "A heavy-duty soldering iron built for continuous production environments where durability and consistent heat output are essential. The thick ceramic heating element maintains temperature even under sustained load, and the extended barrel keeps hands safely away from the work area on crowded benches.",
    features: [
      "Thick ceramic element maintains heat under sustained load",
      "Extended barrel for safer operation on busy production benches",
      "Robust construction engineered for continuous daily use",
      "Wide selection of tip profiles available separately",
      "Compatible with standard 220V Indian power supply",
    ],
  },
  12: {
    description:
      "The Gwen Studios Snap Fastener Kit contains everything needed to add professional press-stud closures to garments, bags, pouches, and jewelry wraps. Includes an ergonomic setter tool, anvil base, and 100 assorted snap sets in multiple sizes. No sewing required — snaps attach in seconds with a firm, even press.",
    features: [
      "100 assorted snap sets included in multiple sizes",
      "Ergonomic setter tool and anvil base included",
      "No sewing required — attaches firmly in seconds",
      "Works on fabric, leather, and vinyl",
      "Ideal for garments, bags, pouches, and jewelry wraps",
    ],
  },
  13: {
    description:
      "The Rotary Cutter SD-10 features a razor-sharp 45mm tungsten-coated blade that glides through multiple layers of fabric, leather, felt, and bias cord in a single pass. The safety lock secures the blade when not in use, and the ergonomic handle reduces wrist fatigue during long cutting sessions.",
    features: [
      "45mm tungsten-coated blade stays sharp through heavy use",
      "Cuts through multiple fabric layers in one clean pass",
      "Safety lock prevents accidents when the tool is at rest",
      "Ergonomic handle significantly reduces wrist fatigue",
      "Compatible with all standard 45mm replacement blades",
    ],
  },
  14: {
    description:
      "The VISKING PROTOOLS DK-008 Grommet Setting Tool sets brass and aluminium grommets cleanly and securely on fabric, leather, canvas, and vinyl. The hardened steel setter delivers a flush, burr-free finish on every setting. Widely used for handbags, footwear, garments, and display boards.",
    features: [
      "Sets brass and aluminium grommets cleanly and securely",
      "Delivers a flush, burr-free finish every time",
      "Hardened steel construction for long service life",
      "Works on fabric, leather, canvas, and vinyl",
      "Compatible with standard 8mm to 12mm grommets",
    ],
  },
  15: {
    description:
      "The 7-in-1 Hotfix Applicator Kit is the essential tool for applying heat-activated rhinestones, crystals, and hotfix pearls to fabric, garments, and accessories. Seven interchangeable tips cover sizes SS6 through SS34, and the wand heats up in under 60 seconds. Ideal for embellishing sarees, blouses, bags, and jewelry bases.",
    features: [
      "7 interchangeable tips covering rhinestone sizes SS6 to SS34",
      "Heats to working temperature in under 60 seconds",
      "Ergonomic non-slip wand handle for precise placement",
      "Works with all hotfix rhinestones, crystals, and pearls",
      "Perfect for sarees, blouses, bags, and jewelry bases",
    ],
  },
  16: {
    description:
      "Spools of imitation stone chain feature glass-effect acrylic stones pre-set into metal cup-chain mounts. The flexible chain drapes smoothly for use in necklaces, bracelet stations, garment trim, and bag embellishment. Available in clear, AB, and coloured stone finishes to match any design palette.",
    features: [
      "Glass-effect acrylic stones in metal cup-chain mounts",
      "Flexible construction drapes smoothly around curves",
      "Available in clear, AB, and coloured stone finishes",
      "Suitable for necklaces, bracelets, garment trim, and bags",
      "Sold by the metre or as a full production spool",
    ],
  },
  17: {
    description:
      "The Pearl Setting Machine sets half-pearls, flat-back rhinestones, and hotfix studs onto fabric, leather, and jewelry bases with speed and precision. An interchangeable die set accommodates multiple stone sizes, and the spring-loaded mechanism delivers consistent pressure for a flush, secure finish on every single piece.",
    features: [
      "Sets half-pearls, flat-back stones, and hotfix studs",
      "Interchangeable die set supports multiple stone sizes",
      "Spring-loaded mechanism provides consistent pressure per press",
      "Flush, secure finish — no glue required",
      "Works on fabric, leather, and rigid jewelry bases",
    ],
  },
  18: {
    description:
      "High-density foam bra pads shaped and die-cut for consistent symmetry between pairs. The smooth surface bonds cleanly with fabric glue or can be sewn directly into garments. Widely used in bra manufacturing, swimwear, dance costumes, and padded jewelry display inserts.",
    features: [
      "High-density foam — shape-retentive and lightweight",
      "Die-cut for consistent symmetry between left and right pairs",
      "Smooth surface bonds cleanly with standard fabric glue",
      "Can be sewn directly into garments and linings",
      "Available in multiple sizes and thicknesses",
    ],
  },
  19: {
    description:
      "These alligator clip blanks provide a ready-made metal base for ribbon-wrapped, fabric-covered, and embellished hair clips. The serrated jaw grips hair firmly without slipping, and the flat top plate offers ample surface area for gluing ribbons, bows, flowers, and rhinestone decorations.",
    features: [
      "Serrated jaw grips hair securely without slipping",
      "Wide flat top plate for ribbon and embellishment bonding",
      "Rust-resistant metal construction",
      "Available in silver tone and gold tone finishes",
      "Sold in packs of 50 or 100 for production use",
    ],
  },
  20: {
    description:
      "Pre-set clip stones combine a glass-effect stone with a built-in clip mechanism for instant, tool-free attachment to hair accessories, headbands, and fabric edges. No glue or sewing required — simply clip on for immediate embellishment. Available in a wide range of stone colours and sizes.",
    features: [
      "Built-in clip mechanism — no glue or sewing needed",
      "Glass-effect stone in a secure pre-set mount",
      "Attaches instantly to headbands, fabric edges, and accessories",
      "Available in multiple stone colours and sizes",
      "Reusable — can be clipped on and removed easily",
    ],
  },
  21: {
    description:
      "Premium flat-back glass stones with a foiled reverse for maximum light reflection. Precision-cut facets create brilliant sparkle that closely rivals Swarovski crystal at a fraction of the cost. Suitable for glue-on settings, prong bezels, cup-chain mounts, and hotfix application across a wide range of sizes.",
    features: [
      "Foiled reverse for maximum light reflection and sparkle",
      "Precision-cut facets — rivals Swarovski crystal quality",
      "Flat back for glue, prong, and cup-chain settings",
      "Compatible with hotfix application tools",
      "Available in 30+ colours and sizes from SS6 to SS48",
    ],
  },
  22: {
    description:
      "Luxurious beaded tassel lace trims feature intricate woven lace headers with hanging bead-and-tassel drops. Sold by the metre, these trims are suitable for sari borders, blouse hems, cushion edges, curtain tiebacks, and statement jewelry trim work. Colour-fast beads and a machine-wash safe lace header ensure lasting quality.",
    features: [
      "Intricate woven lace header with elegant tassel drops",
      "Colour-fast beads resistant to fading and washing",
      "Machine-wash safe lace header for easy care",
      "Suitable for sari borders, blouse hems, and cushion edges",
      "Available in multiple colour combinations",
      "Sold by the metre or in bulk production rolls",
    ],
  },
};

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap";

const styles = `
  @import url('${FONT_LINK}');

  :root {
    --gold:        #b8860b;
    --gold-light:  #d4a520;
    --gold-dim:    rgba(184,134,11,0.15);
    --dark-2:      #1a1a2e;
    --text:        #1a1a2e;
    --muted:       #6b7280;
    --border:      #e5e7eb;
    --white:       #ffffff;
    --radius:      16px;
    --wa:          #25d366;
    --wa-dark:     #128c7e;
  }

  .pd-page {
    font-family: 'DM Sans', sans-serif;
    background: #f8f7f4;
    min-height: 100vh;
    padding: clamp(20px, 5vw, 48px) 0 60px;
  }
  .pd-container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 32px);
  }

  /* Breadcrumb */
  .pd-breadcrumb {
    display: flex; align-items: center; gap: 8px;
    font-size: 0.82rem; color: var(--muted);
    margin-bottom: clamp(20px, 4vw, 36px);
    flex-wrap: wrap;
  }
  .pd-breadcrumb a { color: var(--gold); text-decoration: none; font-weight: 600; transition: color 0.15s; }
  .pd-breadcrumb a:hover { color: var(--gold-light); }
  .pd-breadcrumb-sep { opacity: 0.4; }
  .pd-breadcrumb-cur {
    color: var(--text);
    max-width: 180px;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }

  /* Not found */
  .pd-not-found { text-align: center; padding: 80px 20px; }
  .pd-not-found h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem; color: var(--text); margin-bottom: 12px;
  }
  .pd-not-found p { color: var(--muted); margin-bottom: 24px; }

  /* Layout */
  .pd-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(24px, 4vw, 48px);
    align-items: start;
  }
  @media (max-width: 760px) {
    .pd-layout { grid-template-columns: 1fr; }
  }

  /* Gallery */
  .pd-gallery {
    display: flex; flex-direction: column; gap: 12px;
    opacity: 0; transform: translateX(-20px);
    animation: pdFadeLeft 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
  }
  @keyframes pdFadeLeft { to { opacity: 1; transform: translateX(0); } }

  .pd-main-img-wrap {
    position: relative; border-radius: var(--radius);
    overflow: hidden; background: var(--white);
    aspect-ratio: 4/3; box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
  .pd-main-img-wrap img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
  }
  .pd-main-img-wrap img.img-fade    { opacity: 0; transform: scale(1.04); }
  .pd-main-img-wrap img.img-visible { opacity: 1; transform: scale(1); }
  .pd-main-img-wrap::after {
    content: ""; position: absolute; inset: 0;
    background: linear-gradient(135deg, transparent 60%, rgba(184,134,11,0.08));
    pointer-events: none; opacity: 0; transition: opacity 0.3s;
  }
  .pd-main-img-wrap:hover::after { opacity: 1; }

  .pd-img-badge {
    position: absolute; top: 14px; left: 14px;
    background: var(--dark-2); color: var(--gold);
    font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.09em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 99px;
    border: 1px solid var(--gold-dim);
    backdrop-filter: blur(6px); z-index: 1;
  }

  .pd-thumbs { display: flex; gap: 10px; flex-wrap: wrap; }
  .pd-thumb-btn {
    width: 72px; height: 56px; border-radius: 10px; overflow: hidden;
    padding: 0; cursor: pointer; background: transparent;
    border: 2px solid transparent; flex-shrink: 0;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .pd-thumb-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
  .pd-thumb-btn.active { border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-dim); }
  .pd-thumb-btn img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* Info */
  .pd-info { display: flex; flex-direction: column; }
  .pd-info-inner {
    opacity: 0; transform: translateY(24px);
    animation: pdSlideUp 0.55s cubic-bezier(0.4,0,0.2,1) 0.15s forwards;
  }
  @keyframes pdSlideUp { to { opacity: 1; transform: translateY(0); } }

  .pd-category-tag {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 0.78rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gold); background: var(--gold-dim);
    border: 1px solid rgba(184,134,11,0.25);
    border-radius: 99px; padding: 4px 14px; margin-bottom: 14px;
  }

  .pd-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 800; color: var(--text);
    line-height: 1.2; margin: 0 0 16px;
  }

  .pd-price-wrap {
    display: flex; align-items: center;
    gap: 12px; margin-bottom: 20px; flex-wrap: wrap;
  }
  .pd-price {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: 800; color: var(--gold);
    font-family: 'Playfair Display', serif;
  }
  .pd-price-label {
    font-size: 0.78rem; font-weight: 600;
    background: #f0fdf4; border: 1px solid #bbf7d0;
    color: #166534; border-radius: 99px; padding: 3px 10px;
  }
  .pd-instock-na {
    font-size: 0.78rem; font-weight: 600;
    background: #fef2f2; border: 1px solid #fecaca;
    color: #b91c1c; border-radius: 99px; padding: 3px 10px;
  }

  .pd-divider { height: 1px; background: var(--border); margin: 20px 0; }

  .pd-desc-heading {
    font-size: 0.78rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--muted); margin: 0 0 10px;
  }
  .pd-description {
    font-size: clamp(0.9rem, 2vw, 0.975rem);
    color: #374151; line-height: 1.75; margin: 0 0 8px;
  }

  /* Feature bullets */
  .pd-features {
    list-style: none; padding: 0; margin: 16px 0 0;
    display: flex; flex-direction: column; gap: 8px;
  }
  .pd-features li {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: clamp(0.85rem, 2vw, 0.9rem);
    color: #374151; line-height: 1.5;
  }
  .pd-features li::before {
    content: "✦"; color: var(--gold);
    font-size: 0.65rem; flex-shrink: 0; margin-top: 4px;
  }

  /* Buttons */
  .pd-actions { display: flex; flex-direction: column; gap: 10px; margin-top: 28px; }
  .pd-btn {
    display: flex; align-items: center; justify-content: center;
    gap: 9px; padding: 14px 20px; border-radius: 10px;
    font-size: clamp(0.875rem, 2vw, 0.975rem); font-weight: 700;
    cursor: pointer; border: none; text-decoration: none;
    width: 100%; box-sizing: border-box;
    transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
    font-family: 'DM Sans', sans-serif;
  }
  .pd-btn:active { transform: scale(0.97); }
  .pd-btn-wa {
    background: var(--wa); color: #fff;
    box-shadow: 0 4px 18px rgba(37,211,102,0.28);
  }
  .pd-btn-wa:hover {
    background: var(--wa-dark);
    box-shadow: 0 6px 24px rgba(37,211,102,0.4);
    transform: translateY(-2px);
  }
  .pd-btn-secondary {
    background: transparent; color: var(--text);
    border: 2px solid var(--border);
  }
  .pd-btn-secondary:hover {
    border-color: var(--gold); color: var(--gold);
    transform: translateY(-2px);
  }
  .pd-wa-icon { width: 18px; height: 18px; fill: currentColor; flex-shrink: 0; }

  /* Trust badges */
  .pd-trust {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-top: 20px; padding-top: 20px;
    border-top: 1px solid var(--border);
  }
  .pd-trust-item {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.78rem; color: var(--muted); font-weight: 600;
  }
`;

/* Inject once */
let injected = false;
function injectStyles() {
  if (injected || typeof document === "undefined") return;
  const tag = document.createElement("style");
  tag.textContent = styles;
  document.head.appendChild(tag);
  injected = true;
}

function WaIcon() {
  return (
    <svg className="pd-wa-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function ProductDetails() {
  injectStyles();

  const { id } = useParams();
  const product = staticProducts.find((p) => p._id === id);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);

  useEffect(() => {
    setSelectedIndex(0);
    setImgVisible(true);
  }, [id]);

  const switchImage = (i) => {
    if (i === selectedIndex) return;
    setImgVisible(false);
    setTimeout(() => {
      setSelectedIndex(i);
      setImgVisible(true);
    }, 220);
  };

  if (!product) {
    return (
      <div className="pd-page">
        <div className="pd-container">
          <div className="pd-not-found">
            <h2>Product Not Found</h2>
            <p>We couldn't find the product you were looking for.</p>
            <Link
              to="/products"
              className="pd-btn pd-btn-secondary"
              style={{
                display: "inline-flex",
                width: "auto",
                padding: "12px 28px",
              }}
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { name, imageUrl, category, price, galleryImages } = product;

  /* Look up rich content from the map above */
  const content = PRODUCT_CONTENT[product._id] || {};
  const description =
    content.description ||
    `${name} is a premium quality jewelry-making supply sourced for durability, finish, and consistent results.`;
  const features = content.features || [];

  const gallery =
    Array.isArray(galleryImages) && galleryImages.length > 0
      ? galleryImages
      : [imageUrl];
  const activeSrc = gallery[selectedIndex] || imageUrl;

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello, I want to order: ${name}${price ? ` - Price: ₹${price}` : ""}`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="pd-page">
      <div className="pd-container">
        {/* Breadcrumb */}
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="pd-breadcrumb-sep">›</span>
          <Link to="/products">Products</Link>
          <span className="pd-breadcrumb-sep">›</span>
          <span className="pd-breadcrumb-cur" title={name}>
            {name}
          </span>
        </nav>

        <div className="pd-layout">
          {/* Gallery */}
          <div className="pd-gallery">
            <div className="pd-main-img-wrap">
              <img
                src={activeSrc}
                alt={`${name} - image ${selectedIndex + 1}`}
                className={imgVisible ? "img-visible" : "img-fade"}
              />
              {category && <span className="pd-img-badge">{category}</span>}
            </div>

            {gallery.length > 1 && (
              <div className="pd-thumbs">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    className={`pd-thumb-btn ${
                      selectedIndex === i ? "active" : ""
                    }`}
                    onClick={() => switchImage(i)}
                    aria-label={`Show image ${i + 1}`}
                  >
                    <img src={src} alt={`${name} thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="pd-info">
            <div className="pd-info-inner">
              {category && (
                <div className="pd-category-tag">
                  <span aria-hidden="true">✦</span> {category}
                </div>
              )}

              <h1 className="pd-name">{name}</h1>

              <div className="pd-price-wrap">
                {price ? (
                  <>
                    <span className="pd-price">₹{price}</span>
                    <span className="pd-price-label">In Stock</span>
                  </>
                ) : (
                  <span className="pd-price-label">Contact for Price</span>
                )}
              </div>

              <div className="pd-divider" />

              {/* Dynamic description from PRODUCT_CONTENT */}
              <p className="pd-desc-heading">About this product</p>
              <p className="pd-description">{description}</p>

              {/* Dynamic feature bullets from PRODUCT_CONTENT */}
              {features.length > 0 && (
                <ul className="pd-features">
                  {features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}

              {/* Actions */}
              <div className="pd-actions">
                <button
                  className="pd-btn pd-btn-wa"
                  onClick={openWhatsApp}
                  aria-label={`Order ${name} on WhatsApp`}
                >
                  <WaIcon /> Order via WhatsApp
                </button>
                <Link to="/products" className="pd-btn pd-btn-secondary">
                  ← Back to All Products
                </Link>
              </div>

              {/* Trust badges */}
              <div className="pd-trust">
                {[
                  ["🚚", "Fast Dispatch"],
                  ["🏆", "Quality Assured"],
                  ["📦", "Bulk Available"],
                  ["💬", "WhatsApp Support"],
                ].map(([icon, label]) => (
                  <div className="pd-trust-item" key={label}>
                    <span aria-hidden="true">{icon}</span> {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
