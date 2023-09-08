import { Box } from "@mui/material";
import { FC } from "react";
import { MoviesListContainer } from "../MovieListContainer.tsx/MoviesListContainer";

export const MainContainer: FC = () => {
  return (
    <Box padding={3}>
      <MoviesListContainer />
      {/* Add any other components you want to include in the MainContainer here */}
    </Box>
  );
};
