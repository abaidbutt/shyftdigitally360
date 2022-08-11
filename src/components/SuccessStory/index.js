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
const SuccessStory = () => {
  return (
    <Container maxWidth="xl">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Customer success stories
        </Typography>
        <Typography variant="h6" gutterBottom>
          We are proud to help small businesses like these grow every day.
        </Typography>
      </Container>
      <Grid container>
        {items.map((item, index) => (
          <Grid md={6} xl={4} lg={4} sm={12} xs={12} key={index}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>
      {/* inspiring tribuute */}
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Watch our inspiring Tribute to Entrepreneur videos
        </Typography>
        <Typography variant="h6" gutterBottom>
          We love helping small businesses grow and entrepreneurs succeed.
        </Typography>
      </Container>
      <Grid container>
        {items.map((item, index) => (
          <Grid md={6} xl={4} lg={4} sm={12} xs={12} key={index}>
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

        <Grid container>
          <Grid md={6} xl={6} lg={6} sm={12} xs={12}></Grid>
        </Grid>
      </Container>
    </Container>
  );
};
const entrepreneur = [
  {
    name: "Tribute to Entrepreneurs- Part 1",
    description:
      "Some people say, entrepreneurs are born with it. Maybe so. But I tend to think there’s an entrepreneur in all of us.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Tribute to Entrepreneurs- Part 2",
    description:
      "Entrepreneurs are the courageous ones. The ones that never give up, never give in, never, never, never. Starting something new takes heart.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Do you want to bad enough",
    description:
      "Marketing’s bigger than another cost on your balance sheet. It’s the face of your brand. Your identity. Your community. Your mission in a minute. ",
    img: "https://source.unsplash.com/random",
  },
];
const items = [
  {
    name: "Painting Company",
    description:
      "Marketing 360® has been an integral part of our marketing. Having an account manager that helps you with all of your marketing, not just your branding online, is a huge component and a huge asset.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Contractor",
    description:
      "We've always seen a return of six or seven times our investment. As far as I know, now it's a simple equation. You get good management, you spend the right target amount of money, there's gonna be a return on your investment.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Ecommerce Store",
    description:
      "With Marketing 360®, we're able to create artwork specific to everyone's needs across the country by marketing to everyone across the country. Every day we have new orders to fulfill, and we have a lot of fun doing it.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Yoga Studio",
    description:
      "Marketing 360® is one of the most powerful tools we've used. Previously, we've seen other studios using multiple platforms to get the same type of experience that's all in one place with Marketing 360®. It's like having an entire marketing and advertising team in our back pocket.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Dermatologist",
    description:
      "Marketing 360® has grown our practice to capacity quicker than we could have expected or done on our own. They have allowed us to focus on other parts of our business more successfully because we fully trust what they are doing to improve our return and grow our business.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Equipment Contractor",
    description:
      "Up until recently, Wagner has predominantly grown from word of mouth based on the iconic Caterpillar name, a robust sales force and extensive community involvement. But now, we are taking a more assertive approach with our digital efforts through our partners at Marketing 360®.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Auto Repair Shop",
    description:
      "Marketing 360® is responsible for helping us generate millions in new business over the past seven years. We have had to brainstorm and challenge the status quo but it has paid off in spades. Marketing 360® fuels my brand.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Chiropractor",
    description:
      "Marketing 360® has allowed us to get our story and the purpose of our company out in front of people. It is a one-stop shop that can personalize your business existence, put you on the map and help you reach your dreams and goals.",
    img: "https://source.unsplash.com/random",
  },
];
export default SuccessStory;
