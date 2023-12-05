import React from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import Benefits from "./Benefits";

const Home = ({ title, src }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Enjoy the fruits of a busy schedule
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          When it comes to business, time is money. Scheduling allows you to
          maximize your time and revenue by giving you full control over your
          schedule, staff, services and more. Get started today to learn more
          and explore plans and pricing.
        </Typography>
        <Box sx={{ my: 2 }}>
          <Button variant="contained">Plan &amp; Pricing</Button>
        </Box>

        <Typography variant="subtitle1" gutterBottom>
          Plus, explore free account tools. No credit card required.
        </Typography>
      </Container>
      <Box>
        <Image
          alt="Mountains"
          src={src}
          width={1620}
          height={700}
          layout="responsive"
        />
      </Box>

      <Box sx={{ m: 2 }}>
        {items.map((item, index) =>
          index % 2 == 0 ? (
            <Grid container key={index} columnSpacing={4} rowSpacing={4} spacing={4}>
              <Grid md={6} xl={6} lg={6} sm={12} xs={12} item>
                <Box
                  sx={{
                    my: 5,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h3" gutterBottom fontWeight={"bolder"}>
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {item.description}
                  </Typography>
                  <Box sx={{ my: 2 }}>
                    <Button variant="contained">Plan &amp; Pricing</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid
                md={6}
                xl={6}
                lg={6}
                sm={12}
                xs={12}
                item
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Avatar
                  variant="square"
                  sx={{
                    width: "500px",
                    height: "500px",
                    borderRadius: 5,
                  }}
                >
                  <Image
                    alt="Mountains"
                    src={src}
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
              </Grid>
            </Grid>
          ) : (
            <Grid container key={index} columnSpacing={4} rowSpacing={4} spacing={4}>
              <Grid md={6} xl={6} lg={6} sm={12} xs={12} item>
                <Avatar
                  variant="square"
                  sx={{
                    width: "500px",
                    height: "500px",
                    borderRadius: 5,
                    mx: 2,
                  }}
                >
                  <Image
                    alt="Mountains"
                    src={src}
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
              </Grid>
              <Grid md={6} xl={6} lg={6} sm={12} xs={12} item>
                <Box
                  sx={{
                    my: 5,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h3" gutterBottom fontWeight={"bolder"}>
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {item.description}
                  </Typography>
                  <Box sx={{ my: 2 }}>
                    <Button variant="contained">Plan &amp; Pricing</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          )
        )}
      </Box>

      <Benefits />
    </Container>
  );
};
const items = [
  {
    name: "Book appointments with ease",
    description:
      "Scheduling is perfect for booking appointments of any kind for yourself or your staff. Simply set your availability on thecalendar and then allow online booking. Its that easy!",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Manage Staff Availability",
    description:
      "Easily add staff and their availability so they can be selected when customers attempt to book online. Adding, removing and editing staff members and their schedule takes minutes.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Schedule your services",
    description:
      "Do you offer services you’d like to make available to book online? No problem. Scheduling makes it easy to manage bookings for exactly that.",
    img: "https://source.unsplash.com/random",
  },
  {
    name: "Accept Payments for bookable services",
    description:
      "Eliminate the need for on-site payments by allowing your customers to pay for services when they book them. Book and accept payments for services at once.",
    img: "https://source.unsplash.com/random",
  },
];
export default Home;
