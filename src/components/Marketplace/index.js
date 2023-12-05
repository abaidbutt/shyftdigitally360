import React from "react";
import { Container, Grid, Box, Button, Typography, Image } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 5,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Partners Marketplace
        </Typography>
        <Typography variant="title2" gutterBottom sx={{px:10}}>
          Our partners benefit from an additional revenue stream while providing
          their customer base with the #1 Marketing Platform® and/or website
          designs for generating more sales.
        </Typography>
        <Box sx={{py:5}}>
          <Button variant="contained">Become a Partner</Button>
        </Box>
      </Box>
    </Container>
  );
};
export default Home;
