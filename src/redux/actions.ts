import { createAsyncThunk } from "@reduxjs/toolkit";
import { LocalMovie } from "../interfaces/movie-interfaces/local-movie.interface";

export const fetchLocalMovies = createAsyncThunk(
  "movies/localMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/movies/local-movies"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return rejectWithValue(error);
    }
  }
);

export const fetchMovieDetailsFromTheMovieDb = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (localMoviesList: LocalMovie[], { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/themoviedb/fetch-movie-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(localMoviesList),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return rejectWithValue(error);
    }
  }
);

export const fetchMoviesFromLibrary = createAsyncThunk(
  "movies/fetchMoviesFromLibrary",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/movie-library/get-all-movies",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movies from library:", error);
      return rejectWithValue(error);
    }
  }
);
