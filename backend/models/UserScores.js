// models/UserScore.js
const mongoose = require("mongoose");

const UserScoreSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  depressionScore: { type: Number, default: 0 },
  anxietyScore: { type: Number, default: 0 },
  ocdScore: { type: Number, default: 0 },
  wellnessScore: { type: Number, default: 0 },
});

module.exports = mongoose.model("UserScore", UserScoreSchema);