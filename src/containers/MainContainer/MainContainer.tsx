import { Box, Container, CssBaseline } from "@mui/material";
import { FC } from "react";
import { NavSidebar } from "../../components/NavSidebar";
import { MoviesListContainer } from "../MovieListContainer.tsx/MoviesListContainer";

export const MainContainer: FC = () => {
  return (
    <>
      <CssBaseline />
      <Box display="flex">
        <NavSidebar />
        <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MoviesListContainer />
        </Container>
      </Box>
    </>
  );
};
