const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// 2
const app = express();

// 3
app.use(cors());
app.use(express.json());

// 4
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.log(" DB Connection Error:", err));

// 5
app.post("/api/register", (req, res) => {
  const { name, phone } = req.body;

  res.status(200).json({
    success: true,
    message: "success!",
  });
});

// 6
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
