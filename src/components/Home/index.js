import React from "react";
import { Container, Grid, Box, Button, Typography, Image } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item>
          <Box sx={{ my: 5 }}>
            <Typography variant="h3" gutterBottom>
              Get everything you need to manage and grow your Business
            </Typography>
            <Typography variant="h6" gutterBottom>
              The tools you need to scale and the marketing programs and talent
              you need to grow — all from a singular platform.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Button variant="contained">Plan &amp; Pricing</Button>
              <Button color="inherit">Watch video</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item></Grid>
      </Grid>
    </Container>
  );
};
export default Home;
