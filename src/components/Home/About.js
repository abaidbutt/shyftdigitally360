import React from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
const Home = () => {
  return (
    <Container maxWidth="xl">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          Marketing Platform® for Business
        </Typography>

        <Typography variant="title2" gutterBottom sx={{ py: 2, px: 2 }}>
          Over 20,000 small businesses use Marketing 360® to manage and grow
          their business. Not only do you get the tools you need to scale, but
          you get the do-it-for-you marketing programs you need to grow — all in
          one platform. Tour by industry.
        </Typography>
      </Container>
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }}>
          <Image
            src="/market_team.jpg" // Path to your image from the public directory
            alt="Market team"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bolder" }}>
              MARKETING TEAM
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Turbocharge your marketing
            </Typography>
            <Typography variant="title2" gutterBottom>
              Leverage industry specific marketing programs and a dedicated
              marketing team to grow your business while you focus on running
              it. Learn more.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
