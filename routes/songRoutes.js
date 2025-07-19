const express = require("express");
const Song = require("../models/Songs");
const router = express.Router();


router.get("/", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

router.post("/", async (req, res) => {
  const { title, artist, year } = req.body;
  const newSong = new Song({ title, artist, year });
  await newSong.save();
  res.status(201).json(newSong);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, artist, year } = req.body;
  const updatedSong = await Song.findByIdAndUpdate(id, { title, artist, year }, { new: true });
  if (!updatedSong) return res.status(404).json({ message: "Song not found" });
  res.json(updatedSong);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Song.findByIdAndDelete(id);
  res.json({ message: "Song deleted" });
});

// Delete all songs
router.delete("/", async (req, res) => {
  await Song.deleteMany({});
  res.json({ message: "All songs deleted" });
});


module.exports = router;
