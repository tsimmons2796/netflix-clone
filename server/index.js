const express = require("express");
require("dotenv").config();
const cors = require("cors");
const localMoviesRouter = require("./api/localMovies");
const themovieDbRoutes = require("./api/themovieDb");
const movieLibraryRoutes = require("./api/movieLibrary");
const { connectDB } = require("./database/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/movies", localMoviesRouter);
app.use("/api/themoviedb", themovieDbRoutes);
app.use("/api/movie-library", movieLibraryRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
