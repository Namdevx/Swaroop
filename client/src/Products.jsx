import React, { useState, useMemo } from "react";
import ProductCard from "./components/ProductCard";
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


const RAW_PRODUCTS = [
  {
    id: 1,
    name: "soldering-iron",
    category: "Machine",
    imageId: "iron",
  },
  {
    id: 2,
    name: "crochet hook",
    category: "Hook",
    imageId: "crochet hook",
  },
  {
    id: 3,
    name: "Yoker Knives & Trimmers",
    category: "knives",
    imageId: "knives",
  },
  {
    id: 4,
    name: "B-7000 Adhesive Glue",
    category: "Glue",
    imageId: "glue",
  },
  {
    id: 5,
    name: "Hot Melt Glue Gun ",
    category: "Glue",
    imageId: "gluegun",
  },
  {
    id: 6,
    name: "sewing kit",
    category: "kit",
    imageId: "sewingkit",
  },
  {
    id: 7,
    name: "Gear-wire",
    category: "wire",
    imageId: "gearwire",
  },
  {
    id: 8,
    name: "Seznik Portable Mini Sealing Machine",
    category: "Machine",
    imageId: "sealing",
  },
  {
    id: 9,
    name: "72yrds Piping (Bias Card)",
    category: "Cords",
    imageId: "piping",
  },
  {
    id: 10,
    name: "Khaka Pinning Machine",
    category: "Machine",
    imageId: "khakamachine",
  },
  {
    id: 11,
    name: "Soldering iron",
    category: "Machine",
    imageId: "solderiron",
  },
  {
    id: 12,
    name: "Gwen Studios Snap Fastener Kit",
    category: "Tools",
    imageId: "kit",
  },
  {
    id: 13,
    name: "Rotary Cutter SD-10",
    category: "Cutter",
    imageId: "cutter",
  },
  {
    id: 14,
    name: "VISKING PROTOOLS DK-008 Grommet Setting Tool",
    category: "Tools",
    imageId: "grommet",
  },
  {
    id: 15,
    name: "7-in-1 Hotfix Applicator Kit",
    category: "kit",
    imageId: "hotfix",
  },
  {
    id: 16,
    name: "Spools of imitation stone chain",
    category: "chain",
    imageId: "stonechain",
  },
  {
    id: 17,
    name: "Pearl Setting Machine",
    category: "Machine",
    imageId: "pearlmachine",
  },
  {
    id: 18,
    name: "Round foam bra pads",
    category: "Pads",
    imageId: "pad",
  },
  {
    id: 19,
    name: "alligator hair clip blanks",
    category: "clip",
    imageId: "blanks",
  },
  {
    id: 20,
    name: "clip Stone",
    category: "clip",
    imageId: "clipstones",
  },
  {
    id: 21,
    name: "Glass fitting stones",
    category: "stone",
    imageId: "fitting",
  },
  {
    id: 22,
    name: "beaded tassel lace trims",
    category: "trims",
    imageId: "trims",
  },
];

// Simple placeholder mapping — will always return a usable image URL
const getPlaceholderFor = (name, id) => {
  return `https://via.placeholder.com/400x250/fff/333?text=${encodeURIComponent(
    name
  )}`;
};

export const PRODUCTS = RAW_PRODUCTS.map((p) => {
  // compute the primary image URL
  const image =
    p.imageId === "glue"
      ? b7000Image
      : p.imageId === "piping"
      ? pipingImage
      : p.imageId === "iron"
      ? ironImage
      : p.imageId === "crochet hook"
      ? crochethookImage
      : p.imageId === "gearwire"
      ? gearwireImage
      : p.imageId === "khakamachine"
      ? khakamachineImage
      : p.imageId === "solderiron"
      ? solderironImage
      : p.imageId === "sealing"
      ? sealingImage
      : p.imageId === "kit"
      ? kitImage
      : p.imageId === "sewingkit"
      ? sewingkitImage
      : p.imageId === "knives"
      ? knivesImage
      : p.imageId === "gluegun"
      ? gluegunImage
      : p.imageId === "cutter"
      ? cutterImage
      : p.imageId === "grommet"
      ? grommetImage
      : p.imageId === "hotfix"
      ? hotfixImage
      : p.imageId === "stonechain"
      ? stonechainImage
      : p.imageId === "pearlmachine"
      ? pearlmachineImage
      : p.imageId === "pad"
      ? padImage
      : p.imageId === "blanks"
      ? blanksImage
      : p.imageId === "clipstones"
      ? clipstoneImage
      : p.imageId === "fitting"
      ? fittingImage
      : p.imageId === "trims"
      ? trimsImage
      : getPlaceholderFor(p.name, p.imageId);

  // gallery contains only the primary image — no automatic second images
  const gallery = [image];

  return {
    _id: String(p.id),
    name: p.name,
    category: p.category,
    imageUrl: image,
    galleryImages: gallery,
    description: p.description || "",
    price: p.price,
  };
});

const CATEGORIES = [
  "All",
  ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="products" style={{ padding: "24px 0" }}>
      <div className="container">
        <div className="section-header">
          <h2>Products</h2>
          <p>All Jewelry Making Materials at Wholesale Prices</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 18,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            aria-label="Search materials"
            placeholder="Search materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              minWidth: 220,
            }}
          />

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  border:
                    activeCategory === cat
                      ? "2px solid #d4a017"
                      : "1px solid #eee",
                  background:
                    activeCategory === cat ? "#d4a017" : "transparent",
                  color: activeCategory === cat ? "#fff" : "#071233",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filtered.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: "#6b7280", textAlign: "center", marginTop: 24 }}>
            No materials found.
          </p>
        )}
      </div>
    </div>
  );
}
