const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ Your first real API route
app.post("/api/message", (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  res.json({
    success: true,
    reply: `Thanks ${name}, I received your message: "${message}"`
  });
});

module.exports = app;
