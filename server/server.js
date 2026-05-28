import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to MongoDB
const mongodbUri = (typeof globalThis.process !== "undefined" && globalThis.process?.env?.MONGODB_URI?.trim()) ? globalThis.process.env.MONGODB_URI : "mongodb://127.0.0.1:27017/searchdb";
console.log("MONGODB_URI env value:", (typeof globalThis.process !== "undefined" ? globalThis.process?.env?.MONGODB_URI : undefined));
console.log("MongoDB connection URI:", mongodbUri);
mongoose.connect(mongodbUri)
  .then(() => console.log(`MongoDB connected to ${mongodbUri}`))
  .catch(err => console.error("MongoDB connection error:", err));

// 2. Create a schema + model
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Item = mongoose.model("Item", ItemSchema);

export default Item;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server" });
});

// 3. Search API (REAL MongoDB search)
app.get("/api/search", async (req, res) => {
  const q = req.query.q || "";

  // MongoDB text search (case-insensitive)
  const results = await Item.find({
    name: { $regex: q, $options: "i" }
  });

  res.json(results);
});

// Simple users endpoint for frontend
app.get("/api/users", (req, res) => {
  res.json([
    { _id: "1", name: "Alice" },
    { _id: "2", name: "Bob" },
    { _id: "3", name: "Carol" }
  ]);
});

// 4. Start server
app.listen(5000, () => console.log("Backend running on port 5000"));
