import mongoose from "mongoose";
import Item from "./server.js"; // adjust if needed

const mongodbUri = (typeof globalThis.process !== "undefined" ? globalThis.process?.env?.MONGODB_URI : undefined) ?? "mongodb://127.0.0.1:27017/searchdb";
mongoose.connect(mongodbUri);

const items = [
  { name: "Apple", description: "A red fruit" },
  { name: "Banana", description: "A yellow fruit" },
  { name: "Orange", description: "A citrus fruit" },
  { name: "Grape", description: "A purple fruit" },
  { name: "Mango", description: "A tropical fruit" }
];

Item.insertMany(items).then(() => {
  console.log("Seeded");
  mongoose.connection.close();
});
