const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/get-all-movies", async (req, res) => {
  try {
    const allMovies = await Movie.find({});
    res.json(allMovies);
  } catch (err) {
    console.error("Error retrieving movies from database:", err);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
