const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie"); // Assuming you have a Movie model set up that connects to MongoDB

// New endpoint to fetch all movie details from the 'movies' collection
router.get("/get-all-movies", async (req, res) => {
  try {
    const allMovies = await Movie.find({}); // Fetching all documents from the 'movies' collection
    res.json(allMovies);
  } catch (err) {
    console.error("Error retrieving movies from database:", err);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
