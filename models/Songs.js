const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number, default: new Date().getFullYear() },
});

module.exports = mongoose.model("Song", songsSchema);
