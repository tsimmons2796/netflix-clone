import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMoviesFromLibrary } from "../../redux/selectors";

const MovieDetails: FC = () => {
  const { id: idString } = useParams<{ id: string }>();
  const id = parseInt(idString || "0", 10); // Parse the id to a number
  const libraryMovies = useSelector(selectMoviesFromLibrary);
  const movieDetails = libraryMovies.find((movie) => movie.id === id);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!movieDetails) {
    return <Typography variant="h5">Loading or movie not found...</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
        width="300"
      />
      <Typography variant="h4">{movieDetails.title}</Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Play
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: "10px" }}
        >
          Add to My List
        </Button>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ marginLeft: "10px" }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* Example menu item. Add more as required */}
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default MovieDetails;
