const express = require("express");
const axios = require("axios");
const router = express.Router();
const Movie = require("../models/Movie");

router.post("/fetch-movie-details", async (req, res) => {
  const moviePairs = req.body; // An array of { title, year } objects
  let movieDetailsList = [];

  // Helper function to process a single movie
  const processMovie = async (movie) => {
    try {
      const searchResponse = await axios.get(
        `${process.env.API_BASE_URL}/search/movie?api_key=${process.env.API_KEY}&query=${movie.title}&year=${movie.year}`
      );

      if (searchResponse.data.results.length > 0) {
        const movieId = searchResponse.data.results[0].id;

        const detailsResponse = await axios.get(
          `${process.env.API_BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
        );

        const movieData = detailsResponse.data;

        const updateResult = await Movie.updateOne(
          { id: movieData.id },
          { $set: movieData },
          { upsert: true }
        );

        if (updateResult.upserted) {
          console.log(`Inserted movie: ${movieData.title}`);
        } else if (updateResult.nModified > 0) {
          console.log(`Updated movie: ${movieData.title}`);
        } else {
          console.log(`No changes for movie: ${movieData.title}`);
        }

        return movieData;
      }
    } catch (error) {
      console.error(`Error fetching details for movie: ${movie.title}`, error);
      return null;
    }
  };

  // Process each movie sequentially
  for (let movie of moviePairs) {
    const result = await processMovie(movie);
    if (result) {
      movieDetailsList.push(result);
    }
  }

  res.json(movieDetailsList);
});

module.exports = router;
