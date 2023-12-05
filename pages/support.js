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
        <Typography variant="h1" gutterBottom>
          Support
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Three ways to get help
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <Grid container>
          <Grid sm={12} xs={12}>
            <Box sx={{ my: 5, display: "flex", alignItems: "flex-start" }}>
              <Avatar
                variant="square"
                sx={{ width: "200px", height: "200px", borderRadius: 5, mx: 2 }}
              >
                <Image
                  alt="Mountains"
                  src={"/bussiness.jpg"}
                  layout="fill"
                  objectFit="cover"
                />
              </Avatar>

              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4" gutterBottom fontWeight={"bolder"}>
                  Online Help Center
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Get app walkthrough videos, tutorials, best practices and more
                  when you browse our extensive support documentation.
                </Typography>
                <Box sx={{my:2}}>
                  <Button variant="contained">Go to Support</Button>
                </Box>
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
