import React from "react";
import {
  Container,
  Rating,
  Grid,
  Box,
  Button,
  Typography,
  Image,
} from "@mui/material";
import CardItem from "./CardItem";
const Home = () => {
  return (
    <Container maxWidth="lg">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Creative Services
        </Typography>
        <Typography variant="h6" gutterBottom>
          When we say “everything,” we mean just that. On top of great
          technology, you get access to US-based, professional creative talent
          on-demand. Get a beautiful logo, matching swag, custom video,
          stationery that truly represents your business and more.
        </Typography>
      </Container>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {items.map((item, index) => (
          <Grid md={6} xl={4} lg={4} sm={12} xs={12} key={index} item>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
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
      </Container>
    </Container>
  );
};
const items = [
  {
    name: "Logo design and branding",
    description:
      "Work with our talented branding experts and designers to create the logo and brand of your dreams. Includes domain name research, business card designs, letterheads and more.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Professional photography",
    description:
      "Customers subconsciously judge the quality of a brand and its products from its pictures. Photos sell products. Great photos sell even more. Make sales with professional product photography.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Video Production",
    description:
      "We help you to determine your needs and budget to create a video that meets both. Whether you are looking for full-blown commercial production or a couple of interviews, we have you covered.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Custom animated Videos ",
    description:
      "Complex topics are best explained through animation. Here we aren't restricted by the laws of physics, but by creativity. Discover the endless possibilities of custom animation.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "3D product rendering ",
    description:
      "3D renders are one of the best ways to showcase your product in a clean and professional way. Beyond interactive renders, we can create videos and photos to showcase your product.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Swag and apparel",
    description:
      "Get team swag and apparel that represents your brand! It is as simple as letting us know what you need and when you need it, and we'll take care of the rest!",
    img: "https://source.unsplash.com/random",
  },
];
export default Home;
