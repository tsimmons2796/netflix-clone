import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { MovieDetailInterface } from "../interfaces/movie-interfaces/movie-details.interface";

interface MovieProps {
  movie: MovieDetailInterface;
}

export const Movie: FC<MovieProps> = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // assuming you're using TMDb images
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
