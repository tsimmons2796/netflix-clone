import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocalMovie } from "../interfaces/movie-interfaces/local-movie.interface";
import { MovieDetailInterface } from "../interfaces/movie-interfaces/movie-details.interface";
import {
  fetchLocalMovies,
  fetchMovieDetailsFromTheMovieDb,
  fetchMoviesFromLibrary,
} from "./actions";

export interface MovieSliceState {
  isFetchingLocalMovies: boolean;
  isFetchingMovieDataFromTheMovieDb: boolean;
  isFetchingMoviesFromLibrary: boolean;
  moviesFromLibrary: MovieDetailInterface[];
  localMovies: LocalMovie[];
  movieClicked: MovieDetailInterface | null;
}

const initialState: MovieSliceState = {
  isFetchingLocalMovies: false,
  isFetchingMovieDataFromTheMovieDb: false,
  isFetchingMoviesFromLibrary: false,
  moviesFromLibrary: [],
  localMovies: [],
  movieClicked: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLocallyRetrievedMovies: (state, action) => {
      state.localMovies = action.payload;
    },
    setMovieClicked: (state, action: PayloadAction<MovieDetailInterface>) => {
      state.movieClicked = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLocalMovies.pending, (state) => {
        state.isFetchingLocalMovies = true;
      })
      .addCase(
        fetchLocalMovies.fulfilled,
        (state, action: PayloadAction<LocalMovie[]>) => {
          state.isFetchingLocalMovies = false;
          state.localMovies = action.payload;
        }
      )
      .addCase(fetchLocalMovies.rejected, (state) => {
        state.isFetchingLocalMovies = false;
      })
      .addCase(fetchMovieDetailsFromTheMovieDb.pending, (state) => {
        state.isFetchingMovieDataFromTheMovieDb = true;
      })
      .addCase(fetchMovieDetailsFromTheMovieDb.fulfilled, (state) => {
        state.isFetchingMovieDataFromTheMovieDb = false;
      })
      .addCase(fetchMovieDetailsFromTheMovieDb.rejected, (state) => {
        state.isFetchingMovieDataFromTheMovieDb = false;
      })
      .addCase(fetchMoviesFromLibrary.pending, (state) => {
        state.isFetchingMoviesFromLibrary = true;
      })
      .addCase(
        fetchMoviesFromLibrary.fulfilled,
        (state, action: PayloadAction<MovieDetailInterface[]>) => {
          state.isFetchingMoviesFromLibrary = false;
          state.moviesFromLibrary = action.payload;
        }
      )
      .addCase(fetchMoviesFromLibrary.rejected, (state) => {
        state.isFetchingMoviesFromLibrary = false;
      })
      .addDefaultCase((state) => state);
  },
});

export const { setLocallyRetrievedMovies, setMovieClicked } =
  movieSlice.actions;
export default movieSlice.reducer;
