/**
 * productsData.js
 * ─────────────────────────────────────────────────────────────────
 * Single source of truth for ALL product data.
 *
 * To add a product  → push a new entry to PRODUCTS.
 * To edit details   → update the matching entry below.
 * Nothing else in any other file needs to change.
 * ─────────────────────────────────────────────────────────────────
 *
 * Full product shape:
 * {
 *   _id          : string    – unique ID used in URLs & React keys
 *   name         : string    – display name
 *   category     : string    – filter category label
 *   imageUrl     : string    – primary image (webpack/vite asset import)
 *   galleryImages: string[]  – additional gallery images (optional)
 *   shortDesc    : string    – one-liner shown on product cards
 *   description  : string    – full paragraph on the detail page
 *   features     : string[]  – bullet points on the detail page
 *   price        : string    – price without ₹ symbol, e.g. "350"
 *   inStock      : boolean   – controls availability badge & WhatsApp btn
 *   tags         : string[]  – for search / future filtering
 * }
 */

// ── Image imports ─────────────────────────────────────────────
import b7000Image from "./glue.png";
import pipingImage from "./72yrds.png";
import ironImage from "./soldering-iron.png";
import crochethookImage from "./knitting needles.png";
import gearwireImage from "./gear-wire.png";
import khakamachineImage from "./khaka-machine.png";
import solderironImage from "./solder-iron.png";
import sealingImage from "./Sealing Machine.png";
import kitImage from "./Gwen Studios Snap Fastener Kit.png";
import sewingkitImage from "./sewing kit.png";
import knivesImage from "./yokerKnives&Trimmers.png";
import gluegunImage from "./HotMeltglue.png";
import cutterImage from "./RotaryCutter.png";
import grommetImage from "./Grommet Setting Too.png";
import hotfixImage from "./Hotfix Kit.png";
import stonechainImage from "./stonechain.png";
import pearlmachineImage from "./PearkMachine.png";
import padImage from "./pad.png";
import blanksImage from "./blanks.png";
import clipstoneImage from "./clipstones.png";
import fittingImage from "./fitting.png";
import trimsImage from "./trims.png";

// ── Product list ──────────────────────────────────────────────
export const PRODUCTS = [
  {
    _id: "1",
    name: "Soldering Iron",
    category: "Machine",
    imageUrl: ironImage,
    galleryImages: [ironImage],
    shortDesc: "Precision soldering iron for jewelry and craft work.",
    description:
      "A reliable soldering iron designed for jewelry makers and craftspeople. Provides stable, consistent heat for clean and precise joins on metal findings, clasps, and wire. The fast heat-up element and comfortable grip make it suitable for both detail bench work and sustained production use.",
    features: [
      "Fast heat-up — ready in under 45 seconds",
      "Stable temperature for consistent solder joins",
      "Lightweight ergonomic handle reduces hand fatigue",
      "Replaceable tips for chisel, conical, and blade work",
      "Compatible with standard 220V Indian supply",
    ],
    price: "",
    inStock: true,
    tags: ["soldering", "iron", "machine", "heat", "metal"],
  },
  {
    _id: "2",
    name: "Crochet Hook",
    category: "Hook",
    imageUrl: crochethookImage,
    galleryImages: [crochethookImage],
    shortDesc: "Professional crochet hook for fine yarn and thread work.",
    description:
      "High-quality crochet hook crafted from smooth aluminium for effortless yarn glide. Ideal for intricate jewelry crochet, bead weaving, and decorative cord work. The tapered tip gives precise control when working with fine threads and beading wire.",
    features: [
      "Smooth aluminium shaft — yarn slides without snagging",
      "Tapered tip for fine thread and bead work",
      "Thumb rest reduces hand strain during long sessions",
      "Available in multiple sizes from 2mm to 6mm",
      "Suitable for jewelry crochet, macramé, and cord work",
    ],
    price: "",
    inStock: true,
    tags: ["crochet", "hook", "yarn", "thread", "beading"],
  },
  {
    _id: "3",
    name: "Yoker Knives & Trimmers",
    category: "Knives",
    imageUrl: knivesImage,
    galleryImages: [knivesImage],
    shortDesc: "Sharp precision knives and trimmers for fabric and cord.",
    description:
      "Yoker precision knives and trimmers are trusted cutting tools for jewelry and garment workshops. Ultra-sharp stainless steel blades slice through piping cord, bias tape, leather, and multilayer fabric with minimal effort. Non-slip handles give confident control during detailed trim and finishing work.",
    features: [
      "Ultra-sharp stainless steel blades for clean cuts",
      "Non-slip rubberized handles for a safe, firm grip",
      "Cuts through fabric, cord, leather, and piping easily",
      "Replaceable blades — long-lasting production value",
      "Compact size that fits neatly in any tool roll",
    ],
    price: "",
    inStock: true,
    tags: ["knife", "trimmer", "cutter", "blade", "fabric"],
  },
  {
    _id: "4",
    name: "B-7000 Adhesive Glue",
    category: "Glue",
    imageUrl: b7000Image,
    galleryImages: [b7000Image],
    shortDesc: "Industrial-strength clear adhesive for stones, beads & metal.",
    description:
      "B-7000 is a multi-purpose industrial adhesive trusted by jewelry makers worldwide. Its flexible, waterproof bond works on glass, metal, plastic, rhinestones, leather, and fabric. A 5-minute working time lets you position stones precisely before the bond sets, and the cured finish is crystal-clear — invisible even on transparent crystals.",
    features: [
      "Bonds metal, glass, stone, plastic, leather, and fabric",
      "5-minute open time — reposition pieces before curing",
      "Waterproof and flexible when fully cured",
      "Crystal-clear, non-yellowing finish",
      "Fine-tip nozzle for precise stone setting",
    ],
    price: "",
    inStock: true,
    tags: ["glue", "adhesive", "b7000", "rhinestone", "bond"],
  },
  {
    _id: "5",
    name: "Hot Melt Glue Gun",
    category: "Glue",
    imageUrl: gluegunImage,
    galleryImages: [gluegunImage],
    shortDesc: "Fast-flow hot melt glue gun for high-volume craft work.",
    description:
      "A high-temperature hot melt glue gun built for continuous production use. The ergonomic trigger mechanism delivers smooth, drip-free glue flow, and the insulated nozzle guard protects fingers during rapid assembly. Ideal for attaching fabric trims, ribbons, and decorative embellishments to jewelry and garment bases.",
    features: [
      "Heats to working temperature in under 3 minutes",
      "Drip-free trigger mechanism for clean application",
      "Insulated nozzle guard for safe handling",
      "Compatible with standard 11mm glue sticks",
      "Built-in stand keeps the nozzle safely off the workbench",
    ],
    price: "",
    inStock: true,
    tags: ["glue gun", "hot melt", "glue", "adhesive", "craft"],
  },
  {
    _id: "6",
    name: "Sewing Kit",
    category: "Kit",
    imageUrl: sewingkitImage,
    galleryImages: [sewingkitImage],
    shortDesc: "Complete sewing kit for jewelry and garment finishing.",
    description:
      "A comprehensive sewing kit containing everything needed for jewelry and garment finishing work. Includes assorted hand-sewing needles, high-tenacity polyester threads in multiple colours, a thimble, seam ripper, tape measure, and scissors — all stored in a compact resealable case ideal for bench or travel use.",
    features: [
      "Assorted needles including sharps, beading, and tapestry",
      "High-tenacity polyester thread in 12 colours",
      "Compact resealable storage case for easy organisation",
      "Includes thimble, seam ripper, and tape measure",
      "Suitable for fine jewelry repair and garment finishing",
    ],
    price: "",
    inStock: true,
    tags: ["sewing", "kit", "needles", "thread", "finishing"],
  },
  {
    _id: "7",
    name: "Gear Wire",
    category: "Wire",
    imageUrl: gearwireImage,
    galleryImages: [gearwireImage],
    shortDesc: "Flexible gear wire for jewelry frames and armatures.",
    description:
      "Heavy-duty gear wire provides the structural backbone for jewelry frames, headbands, and wire-form armatures. Its tightly wound coil construction resists kinking while remaining shapeable by hand, so you can form curves, angles, and loops without special tools. Ideal for choker bases, hairbands, and bangle cores.",
    features: [
      "Kink-resistant tightly wound coil structure",
      "Shapeable by hand without special tools",
      "Used for choker bases, headbands, and bangle cores",
      "Available in silver tone and gold tone finishes",
      "Sold by the metre or in bulk production coils",
    ],
    price: "",
    inStock: true,
    tags: ["wire", "gear wire", "frame", "headband", "bangle"],
  },
  {
    _id: "8",
    name: "Seznik Portable Mini Sealing Machine",
    category: "Machine",
    imageUrl: sealingImage,
    galleryImages: [sealingImage],
    shortDesc: "Compact impulse sealer for jewelry pouches and polybags.",
    description:
      "The Seznik Portable Mini Sealing Machine is a compact impulse heat sealer perfect for sealing polybags, OPP pouches, and PE packaging used in jewelry retail. It produces a clean, airtight seal in under 2 seconds, protecting finished products from dust and moisture. The battery-powered design means no power socket is needed at your packing station.",
    features: [
      "Seals polybags and OPP pouches in under 2 seconds",
      "Battery-powered — no power socket required",
      "Compact and lightweight — fits in an apron pocket",
      "Produces consistent airtight seals for retail-ready packaging",
      "Ideal for jewelry pouches, accessory bags, and gift wrap",
    ],
    price: "",
    inStock: true,
    tags: ["sealing", "machine", "packaging", "pouch", "impulse sealer"],
  },
  {
    _id: "9",
    name: "72 Yards Piping (Bias Cord)",
    category: "Cords",
    imageUrl: pipingImage,
    galleryImages: [pipingImage],
    shortDesc: "72-yard bias cord piping for garment and jewelry trim.",
    description:
      "A full 72-yard card of bias-cut cotton piping cord used for neckline trim, jewelry cording, fabric edging, and decorative piping. The tightly twisted construction holds its shape through sewing and gluing, while the cotton cover takes dye and fabric paint evenly for custom colour matching.",
    features: [
      "72 yards per card — excellent value for production",
      "Bias-cut cotton cover holds shape through sewing and gluing",
      "Takes fabric dye and paint evenly for colour matching",
      "Suitable for garment piping, jewelry cord, and fabric trim",
      "Available in multiple thicknesses and colours",
    ],
    price: "",
    inStock: true,
    tags: ["piping", "cord", "bias", "trim", "garment"],
  },
  {
    _id: "10",
    name: "Khaka Pinning Machine",
    category: "Machine",
    imageUrl: khakamachineImage,
    galleryImages: [khakamachineImage],
    shortDesc: "Heavy-duty pinning machine for badge and brooch production.",
    description:
      "The Khaka Pinning Machine is built for high-volume badge and brooch production workshops. Its hardened steel die set seats pins with uniform depth across every piece, eliminating hand-finishing. The cast-iron base absorbs vibration to keep tolerances tight during extended production runs.",
    features: [
      "Hardened steel dies for consistent, long service life",
      "Uniform pin depth on every piece — no hand-finishing needed",
      "Cast-iron base eliminates vibration drift",
      "Handles pins from 0.5mm to 3mm diameter",
      "Ideal for brooch, badge, and metal findings production",
    ],
    price: "",
    inStock: true,
    tags: ["pinning", "khaka", "machine", "badge", "brooch"],
  },
  {
    _id: "11",
    name: "Soldering Iron (Heavy Duty)",
    category: "Machine",
    imageUrl: solderironImage,
    galleryImages: [solderironImage],
    shortDesc: "Heavy-duty soldering iron for continuous production use.",
    description:
      "A heavy-duty soldering iron built for continuous production environments where durability and consistent heat output are essential. The thick ceramic heating element maintains temperature even under sustained load, and the extended barrel keeps hands safely away from the work area on crowded benches.",
    features: [
      "Thick ceramic element maintains heat under sustained load",
      "Extended barrel for safer operation on busy production benches",
      "Robust construction engineered for continuous daily use",
      "Wide selection of tip profiles available separately",
      "Compatible with standard 220V Indian power supply",
    ],
    price: "",
    inStock: true,
    tags: ["soldering", "iron", "machine", "heavy duty", "production"],
  },
  {
    _id: "12",
    name: "Gwen Studios Snap Fastener Kit",
    category: "Tools",
    imageUrl: kitImage,
    galleryImages: [kitImage],
    shortDesc: "Complete snap fastener kit with setter and 100 assorted snaps.",
    description:
      "The Gwen Studios Snap Fastener Kit contains everything needed to add professional press-stud closures to garments, bags, pouches, and jewelry wraps. Includes an ergonomic setter tool, anvil base, and 100 assorted snap sets in multiple sizes. No sewing required — snaps attach in seconds with a firm, even press.",
    features: [
      "100 assorted snap sets included in multiple sizes",
      "Ergonomic setter tool and anvil base included",
      "No sewing required — attaches firmly in seconds",
      "Works on fabric, leather, and vinyl",
      "Ideal for garments, bags, pouches, and jewelry wraps",
    ],
    price: "",
    inStock: true,
    tags: ["snap", "fastener", "press stud", "kit", "closure"],
  },
  {
    _id: "13",
    name: "Rotary Cutter SD-10",
    category: "Cutter",
    imageUrl: cutterImage,
    galleryImages: [cutterImage],
    shortDesc: "Sharp 45mm rotary cutter for fabric, leather, and piping.",
    description:
      "The Rotary Cutter SD-10 features a razor-sharp 45mm tungsten-coated blade that glides through multiple layers of fabric, leather, felt, and bias cord in a single pass. The safety lock secures the blade when not in use, and the ergonomic handle reduces wrist fatigue during long cutting sessions.",
    features: [
      "45mm tungsten-coated blade stays sharp through heavy use",
      "Cuts through multiple fabric layers in one clean pass",
      "Safety lock prevents accidents when the tool is at rest",
      "Ergonomic handle significantly reduces wrist fatigue",
      "Compatible with all standard 45mm replacement blades",
    ],
    price: "",
    inStock: true,
    tags: ["cutter", "rotary", "fabric", "leather", "blade"],
  },
  {
    _id: "14",
    name: "VISKING PROTOOLS DK-008 Grommet Setting Tool",
    category: "Tools",
    imageUrl: grommetImage,
    galleryImages: [grommetImage],
    shortDesc: "Professional grommet setter for fabric, leather, and canvas.",
    description:
      "The VISKING PROTOOLS DK-008 Grommet Setting Tool sets brass and aluminium grommets cleanly and securely on fabric, leather, canvas, and vinyl. The hardened steel setter delivers a flush, burr-free finish on every setting. Widely used for handbags, footwear, garments, and display boards.",
    features: [
      "Sets brass and aluminium grommets cleanly and securely",
      "Delivers a flush, burr-free finish every time",
      "Hardened steel construction for long service life",
      "Works on fabric, leather, canvas, and vinyl",
      "Compatible with standard 8mm to 12mm grommets",
    ],
    price: "",
    inStock: true,
    tags: ["grommet", "eyelet", "setting tool", "leather", "fabric"],
  },
  {
    _id: "15",
    name: "7-in-1 Hotfix Applicator Kit",
    category: "Kit",
    imageUrl: hotfixImage,
    galleryImages: [hotfixImage],
    shortDesc: "7 interchangeable tips for applying hotfix rhinestones.",
    description:
      "The 7-in-1 Hotfix Applicator Kit is the essential tool for applying heat-activated rhinestones, crystals, and hotfix pearls to fabric, garments, and accessories. Seven interchangeable tips cover sizes SS6 through SS34, and the wand heats up in under 60 seconds. Ideal for embellishing sarees, blouses, bags, and jewelry bases.",
    features: [
      "7 interchangeable tips covering rhinestone sizes SS6 to SS34",
      "Heats to working temperature in under 60 seconds",
      "Ergonomic non-slip wand handle for precise placement",
      "Works with all hotfix rhinestones, crystals, and pearls",
      "Perfect for sarees, blouses, bags, and jewelry bases",
    ],
    price: "",
    inStock: true,
    tags: ["hotfix", "rhinestone", "applicator", "crystal", "embellishment"],
  },
  {
    _id: "16",
    name: "Spools of Imitation Stone Chain",
    category: "Chain",
    imageUrl: stonechainImage,
    galleryImages: [stonechainImage],
    shortDesc: "Decorative imitation stone cup-chain for jewelry and trim.",
    description:
      "Spools of imitation stone chain feature glass-effect acrylic stones pre-set into metal cup-chain mounts. The flexible chain drapes smoothly for use in necklaces, bracelet stations, garment trim, and bag embellishment. Available in clear, AB, and coloured stone finishes to match any design palette.",
    features: [
      "Glass-effect acrylic stones in metal cup-chain mounts",
      "Flexible construction drapes smoothly around curves",
      "Available in clear, AB, and coloured stone finishes",
      "Suitable for necklaces, bracelets, garment trim, and bags",
      "Sold by the metre or as a full production spool",
    ],
    price: "",
    inStock: true,
    tags: ["stone chain", "cup chain", "rhinestone", "trim", "necklace"],
  },
  {
    _id: "17",
    name: "Pearl Setting Machine",
    category: "Machine",
    imageUrl: pearlmachineImage,
    galleryImages: [pearlmachineImage],
    shortDesc:
      "Precision machine for setting half-pearls and flat-back stones.",
    description:
      "The Pearl Setting Machine sets half-pearls, flat-back rhinestones, and hotfix studs onto fabric, leather, and jewelry bases with speed and precision. An interchangeable die set accommodates multiple stone sizes, and the spring-loaded mechanism delivers consistent pressure for a flush, secure finish on every single piece.",
    features: [
      "Sets half-pearls, flat-back stones, and hotfix studs",
      "Interchangeable die set supports multiple stone sizes",
      "Spring-loaded mechanism provides consistent pressure per press",
      "Flush, secure finish — no glue required",
      "Works on fabric, leather, and rigid jewelry bases",
    ],
    price: "",
    inStock: true,
    tags: ["pearl", "setting machine", "flatback", "rhinestone", "machine"],
  },
  {
    _id: "18",
    name: "Round Foam Bra Pads",
    category: "Pads",
    imageUrl: padImage,
    galleryImages: [padImage],
    shortDesc: "Soft die-cut foam pads for bras, swimwear, and costumes.",
    description:
      "High-density foam bra pads shaped and die-cut for consistent symmetry between pairs. The smooth surface bonds cleanly with fabric glue or can be sewn directly into garments. Widely used in bra manufacturing, swimwear, dance costumes, and padded jewelry display inserts.",
    features: [
      "High-density foam — shape-retentive and lightweight",
      "Die-cut for consistent symmetry between left and right pairs",
      "Smooth surface bonds cleanly with standard fabric glue",
      "Can be sewn directly into garments and linings",
      "Available in multiple sizes and thicknesses",
    ],
    price: "",
    inStock: true,
    tags: ["foam", "pad", "bra", "swimwear", "costume"],
  },
  {
    _id: "19",
    name: "Alligator Hair Clip Blanks",
    category: "Clip",
    imageUrl: blanksImage,
    galleryImages: [blanksImage],
    shortDesc:
      "Plain alligator clip blanks ready for ribbon and embellishment.",
    description:
      "These alligator clip blanks provide a ready-made metal base for ribbon-wrapped, fabric-covered, and embellished hair clips. The serrated jaw grips hair firmly without slipping, and the flat top plate offers ample surface area for gluing ribbons, bows, flowers, and rhinestone decorations.",
    features: [
      "Serrated jaw grips hair securely without slipping",
      "Wide flat top plate for ribbon and embellishment bonding",
      "Rust-resistant metal construction",
      "Available in silver tone and gold tone finishes",
      "Sold in packs of 50 or 100 for production use",
    ],
    price: "",
    inStock: true,
    tags: ["clip", "alligator clip", "hair clip", "blank", "embellishment"],
  },
  {
    _id: "20",
    name: "Clip Stones",
    category: "Clip",
    imageUrl: clipstoneImage,
    galleryImages: [clipstoneImage],
    shortDesc: "Decorative clip-on stones for hair accessories and headbands.",
    description:
      "Pre-set clip stones combine a glass-effect stone with a built-in clip mechanism for instant, tool-free attachment to hair accessories, headbands, and fabric edges. No glue or sewing required — simply clip on for immediate embellishment. Available in a wide range of stone colours and sizes.",
    features: [
      "Built-in clip mechanism — no glue or sewing needed",
      "Glass-effect stone in a secure pre-set mount",
      "Attaches instantly to headbands, fabric edges, and accessories",
      "Available in multiple stone colours and sizes",
      "Reusable — can be clipped on and removed easily",
    ],
    price: "",
    inStock: true,
    tags: ["clip stone", "clip", "hair", "rhinestone", "headband"],
  },
  {
    _id: "21",
    name: "Glass Fitting Stones",
    category: "Stone",
    imageUrl: fittingImage,
    galleryImages: [fittingImage],
    shortDesc: "Flat-back glass stones for settings, bezels, and glue-on use.",
    description:
      "Premium flat-back glass stones with a foiled reverse for maximum light reflection. Precision-cut facets create brilliant sparkle that closely rivals Swarovski crystal at a fraction of the cost. Suitable for glue-on settings, prong bezels, cup-chain mounts, and hotfix application across a wide range of sizes.",
    features: [
      "Foiled reverse for maximum light reflection and sparkle",
      "Precision-cut facets — rivals Swarovski crystal quality",
      "Flat back for glue, prong, and cup-chain settings",
      "Compatible with hotfix application tools",
      "Available in 30+ colours and sizes from SS6 to SS48",
    ],
    price: "",
    inStock: true,
    tags: ["glass stone", "flatback", "rhinestone", "crystal", "setting"],
  },
  {
    _id: "22",
    name: "Beaded Tassel Lace Trims",
    category: "Trims",
    imageUrl: trimsImage,
    galleryImages: [trimsImage],
    shortDesc: "Decorative beaded tassel lace trims for garments and jewelry.",
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
    price: "",
    inStock: true,
    tags: ["trim", "lace", "tassel", "beaded", "garment", "sari"],
  },
];

// ── Helper functions ──────────────────────────────────────────

/** Get a single product by _id. Returns undefined if not found. */
export function getProductById(id) {
  if (!id || typeof id !== "string") return undefined;
  return PRODUCTS.find((p) => p._id === id.trim());
}

/** Get all products belonging to a category (case-insensitive). */
export function getProductsByCategory(category) {
  if (!category || category === "All") return PRODUCTS;
  const lower = category.toLowerCase();
  return PRODUCTS.filter((p) => p.category.toLowerCase() === lower);
}

/** Get all unique category names sorted alphabetically. */
export function getAllCategories() {
  return [...new Set(PRODUCTS.map((p) => p.category))].sort();
}
