import express from "express";
import { Item } from "../models/Item.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const q = (req.query.q || "").trim();

  if (!q) {
    return res.json([]);
  }

  try {
    const results = await Item.find(
      { $text: { $search: q } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    res.json(results);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;
