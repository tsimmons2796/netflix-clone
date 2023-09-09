import { createSelector } from "reselect";
import { LocalMovie } from "../interfaces/movie-interfaces/local-movie.interface";
import { MovieDetailInterface } from "../interfaces/movie-interfaces/movie-details.interface";
import { RootState } from "./store";

export const selectLocalMovies = (state: RootState): LocalMovie[] => {
  return state.movie.localMovies;
};

export const selectIsFetchingMovieDetails = (state: RootState): boolean => {
  return state.movie.isFetchingMovieDataFromTheMovieDb;
};

export const selectMoviesFromLibrary = (
  state: RootState
): MovieDetailInterface[] => {
  return state.movie.moviesFromLibrary;
};

export const selectClickedMovie = (
  state: RootState
): MovieDetailInterface | null => {
  return state.movie.movieClicked;
};

const selectMoviesEntities = (state: RootState) =>
  state.movie.moviesFromLibrary;

export const selectMovieById = createSelector(
  [selectMoviesEntities, (state, movieId) => movieId],
  (movies, movieId) => movies[movieId]
);
