import React from "react";
import { Container, Grid, Box, Button, Typography, Image } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          #1 Marketing Platform® for Small Business
        </Typography>
        <Typography variant="h6" gutterBottom>
          Over 20,000 small businesses use Marketing 360® to manage and grow
          their business. Not only do you get the tools you need to scale, but
          you get the do-it-for-you marketing programs you need to grow — all in
          one platform. Tour by industry.
        </Typography>
      </Container>
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12}></Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12}>
          <Box sx={{ my: 5 }}>
            <Typography variant="h6" gutterBottom>
              MARKETING TEAM
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Turbocharge your marketing
            </Typography>
            <Typography variant="h6" gutterBottom>
              Leverage industry specific marketing programs and a dedicated
              marketing team to grow your business while you focus on running
              it. Learn more.
            </Typography>
            <Button variant="contained">Plan &amp; Pricing</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
