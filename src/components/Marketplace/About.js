import React from "react";
import { Container, Grid, Box, Button, Typography, Image } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Our valued partners make running your business easier
        </Typography>
      </Container>
    </Container>
  );
};
export default Home;
