import b7000Image from "../glue.png";
import glueAlt from "../glue-ul87xHap.png";
import pipingImage from "../72yrds.png";
import ironImage from "../soldering-iron.png";
import crochethookImage from "../knitting needles.png";
import gearwireImage from "../gear-wire.png";
import khakamachineImage from "../khaka-machine.png";
import solderironImage from "../solder-iron.png";
import kitImage from "../Gwen Studios Snap Fastener Kit.png";
import sewingkitImage from "../sewing kit.png";
import knivesImage from "../yokerKnives&Trimmers.png";
import gluegunImage from "../HotMeltglue.png";
import cutterImage from "../RotaryCutter.png";
import grommetImage from "../Grommet Setting Too.png";
import hotfixImage from "../Hotfix Kit.png";
import stonechainImage from "../stonechain.png";
import pearlmachineImage from "../PearkMachine.png";
import padImage from "../pad.png";
import blanksImage from "../blanks.png";
import blanksImage2 from "../blanks_2.png";
import clipstoneImage from "../clipstones.png";
import fittingImage from "../fitting.png";
import trimsImage from "../trims.png";
import sealingImage from "../Sealing Machine.png";

const RAW_PRODUCTS = [
  { id: 1, name: "soldering-iron", category: "Machine", imageId: "iron" },
  {
    id: 2,
    name: "crochet hook",
    category: "Hook",
    description: "crochet hook and knitting needles set",
    imageId: "crochet hook",
  },
  {
    id: 3,
    name: "Yoker Knives & Trimmers",
    category: "knives",
    imageId: "knives",
  },
  { id: 4, name: "B-7000 Adhesive Glue", category: "Glue", imageId: "glue" },
  { id: 5, name: "Hot Melt Glue Gun ", category: "Glue", imageId: "gluegun" },
  {
    id: 6,
    name: "sewing kit",
    category: "kit",
    description:
      "A compact portable sewing kit with all essential tools for quick stitching and clothing repairs",
    imageId: "sewingkit",
  },
  { id: 7, name: "Gear-wire", category: "wire", imageId: "gearwire" },
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
    description: "The power input is specified as 750 AM (likely 750 mA).",
    imageId: "khakamachine",
  },
  {
    id: 11,
    name: "Soldering iron",
    category: "Machine",
    description: "YB-708 electric soldering iron",
    imageId: "solderiron",
  },
  {
    id: 12,
    name: "Gwen Studios Snap Fastener Kit",
    category: "Tools",
    description:
      "The kit includes a light blue snap fastener pliers tool, a screwdriver, and various dies (T3, T5, T8 bases) for different snap sizes.",
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
  { id: 18, name: "Round foam bra pads", category: "Pads", imageId: "pad" },
  {
    id: 19,
    name: "alligator hair clip blanks",
    category: "clip",
    imageId: "blanks",
    secondImageId: "blanks_2",
  },
  { id: 20, name: "clip Stone", category: "clip", imageId: "clipstones" },
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

const getPlaceholderFor = (name, id) =>
  `https://via.placeholder.com/400x250/fff/333?text=${encodeURIComponent(
    name
  )}`;

export const PRODUCTS = RAW_PRODUCTS.map((p) => {
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
      : p.imageId === "blanks_2"
      ? blanksImage2
      : p.imageId === "clipstones"
      ? clipstoneImage
      : p.imageId === "fitting"
      ? fittingImage
      : p.imageId === "trims"
      ? trimsImage
      : p.imageId === "sealing"
      ? sealingImage
      : getPlaceholderFor(p.name, p.imageId);

  const secondImage = p.secondImageId
    ? p.secondImageId === "blanks_2"
      ? blanksImage2
      : p.secondImageId === "glue_alt"
      ? glueAlt
      : getPlaceholderFor(`${p.name} - 2`, p.secondImageId)
    : undefined;

  const gallery = secondImage ? [image, secondImage] : [image];

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

export default PRODUCTS;
