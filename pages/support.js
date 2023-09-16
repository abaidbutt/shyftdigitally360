import React from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Avatar,
  CardMedia,
} from "@mui/material";
import Image from "next/image";

import { getTopBarLayout } from "../src/layout/Topbar";
const Support = () => {
  return (
    <Container maxWidth="xl">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          Support
        </Typography>
        <Typography variant="h5" gutterBottom>
          Three ways to get help
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <Grid container>
          <Grid sm={12} xs={12} item>
            <Box sx={{ my: 5, display: "flex", alignItems: "flex-start" }}>
              <Avatar
                variant="square"
                sx={{ width: "200px", height: "200px", borderRadius: 5, mx: 2 }}
              >
                <Image
                  alt="Mountains"
                  src={"https://source.unsplash.com/random"}
                  layout="fill"
                  objectFit="contain"
                />
              </Avatar>

              <Box>
                <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
                  Online Help Center
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Get app walkthrough videos, tutorials, best practices and more
                  when you browse our extensive support documentation.
                </Typography>
                <Button variant="contained">Go to Support</Button>
              </Box>
            </Box>
          </Grid>
          <Grid sm={12} xs={12} item>
            <Box sx={{ my: 5, display: "flex", alignItems: "flex-start" }}>
              <Avatar
                variant="square"
                sx={{ width: "200px", height: "200px", borderRadius: 5, mx: 2 }}
              >
                <Image
                  alt="Mountains"
                  src={"https://source.unsplash.com/random"}
                  layout="fill"
                  objectFit="contain"
                />
              </Avatar>

              <Box>
                <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Log in to see your dedicated point of contact. Call, text,
                  email or schedule a call with them to get help, or call our
                  main lines at 855-773-8171 (Client Services) and (833)
                  203-9165 (Sales).
                </Typography>
                <Button variant="contained">Log in to marketing360</Button>
              </Box>
            </Box>
          </Grid>
          <Grid sm={12} xs={12} item>
            <Box sx={{ my: 5, display: "flex", alignItems: "flex-start" }}>
              <Avatar
                variant="square"
                sx={{ width: "200px", height: "200px", borderRadius: 5, mx: 2 }}
              >
                <Image
                  alt="Mountains"
                  src={"https://source.unsplash.com/random"}
                  layout="fill"
                  objectFit="contain"
                />
              </Avatar>

              <Box>
                <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
                  Free Educational Videos
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Subscribe to us on YouTube for marketing tips, how-to videos,
                  webinars and more to grow your brand.
                </Typography>
                <Button variant="contained">Visit Youtube Channel</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
Support.getLayout = getTopBarLayout;
export default Support;
