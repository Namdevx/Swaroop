const mongoose = require("mongoose");
const Product = require("../models/Product");

const MONGODB_URI = process.env.MONGODB_URI;
const ALLOWED_ORIGIN = process.env.CORS_ORIGIN || "*";

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set in environment.");
}

// Connection cache for serverless environments
if (!global._mongoose) {
  global._mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (!MONGODB_URI) throw new Error("MONGODB_URI not configured");
  if (global._mongoose.conn) return global._mongoose.conn;
  if (!global._mongoose.promise) {
    global._mongoose.promise = mongoose
      .connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
      .then((m) => m.connection);
  }
  global._mongoose.conn = await global._mongoose.promise;
  return global._mongoose.conn;
}

module.exports = async (req, res) => {
  if (req.method === "OPTIONS") {
    // Preflight support
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectToDatabase();
    const products = await Product.find().lean();
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
    return res.status(200).json(products);
  } catch (err) {
    console.error("API /api/products error", err);
    if (err.message && err.message.includes("MONGODB_URI")) {
      return res
        .status(500)
        .json({ error: "Server not configured with database" });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};
