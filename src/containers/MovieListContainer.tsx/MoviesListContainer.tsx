import { Box } from "@mui/material";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../../components/Movie";
import { fetchMoviesFromLibrary } from "../../redux/actions";
import { selectMoviesFromLibrary } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";

export const MoviesListContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const libraryMovies = useSelector(selectMoviesFromLibrary);

  useEffect(() => {
    dispatch(fetchMoviesFromLibrary());
  }, [dispatch]);

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {libraryMovies.map((libraryMovie) => (
        <Movie key={libraryMovie.id} movie={libraryMovie} />
      ))}
    </Box>
  );
};
