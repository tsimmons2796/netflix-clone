import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MovieDetailInterface } from "../interfaces/movie-interfaces/movie-details.interface";

interface MovieProps {
  movie: MovieDetailInterface;
}

export const Movie: FC<MovieProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickedMovie = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <Card
      onClick={() => handleClickedMovie(movie.id.toString())}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        {movie.tagline && (
          <Typography variant="subtitle1" color="textSecondary">
            {movie.tagline}
          </Typography>
        )}
        <Typography variant="body2" color="textSecondary" component="p">
          Genres: {movie.genres.map((genre) => genre.name).join(", ")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Release Date: {movie.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};
