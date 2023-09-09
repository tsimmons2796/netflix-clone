import { Box } from "@mui/material";
import { FC, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { MoviesListContainer } from "../MovieListContainer.tsx/MoviesListContainer";

export const MainContainer: FC = () => {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname, "location.pathname");
    // If the user is on the root path, redirect to /library
    if (location.pathname === "/") {
      navigate("/library");
    }
  }, [location.pathname]);
  console.log(location.pathname, "location");

  return (
    <Routes>
      <Route
        path="/library"
        element={
          <Box display="flex" flexDirection="column" gap={2}>
            <MoviesListContainer />
          </Box>
        }
      />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default MainContainer;
