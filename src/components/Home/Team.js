import React from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Image,
  Rating,
} from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          See how Marketing 360® works for your business.
        </Typography>
        <Button variant="outlinled">Find your industry</Button>
      </Container>
      {/* <Grid container>
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
          </Box>
          </Grid>
        </Grid> */}
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Get everything you need to manage and grow your business.
        </Typography>
        <Button variant="contained">Plan &amp; Pricing</Button>
        <Typography variant="subtitle1" gutterBottom>
          Plus, explore free account tools. No credit card required.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Rating
            name="simple-controlled"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />

          <Box>3,500+ Reviews</Box>
        </Box>

        <Grid container>
          <Grid md={6} xl={6} lg={6} sm={12} xs={12}></Grid>
        </Grid>
      </Container>
    </Container>
  );
};
export default Home;
