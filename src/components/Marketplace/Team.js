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
          Become a Partner Today
        </Typography>
        <Typography variant="h6" gutterBottom>
          Interested in becoming a partner? Get started today by contacting one
          of our partner managers for a free product demo.
        </Typography>
      </Container>

      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Button variant="contained">Become a Partner</Button>
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
