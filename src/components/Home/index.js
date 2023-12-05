import React from "react";
import { Container, Grid, Box, Button, Typography, Image } from "@mui/material";

const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // or 'contain' based on your preference
        backgroundPosition: "center", // or adjust as needed
        height: "90vh",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ my: 5, textAlign: "center" }}>
            <Typography variant="h1" gutterBottom fontWeight={"bolder"}>
              <span>Join </span>
              Our Platform{" "}
            </Typography>
            <Typography variant="h6" gutterBottom>
              The tools you need to scale and the marketing programs and talent
              you need to grow — all from a singular platform.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                my: 5,
              }}
            >
              <Button variant="contained">Plan &amp; Pricing</Button>
              <Button variant="outlined">Watch video</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};
export default Home;
