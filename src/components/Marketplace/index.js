import React from "react";
import { Container, Grid, Box, Button, Typography, Image } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12}>
          <Box sx={{ my: 5 }}>
            <Typography variant="h3" gutterBottom>
              Partners Marketplace
            </Typography>
            <Typography variant="h6" gutterBottom>
              Our partners benefit from an additional revenue stream while
              providing their customer base with the #1 Marketing Platform®
              and/or website designs for generating more sales.
            </Typography>
            <Button variant="contained">Become a Partner</Button>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12}></Grid>
      </Grid>
    </Container>
  );
};
export default Home;
