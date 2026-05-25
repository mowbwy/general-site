import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// Enable full‑text search on both fields
ItemSchema.index({
  name: "text",
  description: "text"
});

export const Item = mongoose.model("Item", ItemSchema);
