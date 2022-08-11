import React from "react";
import {
  Paper,
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Auth from "../src/components/Auth";
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "1.5rem",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Grid container spacing={2} sx={{ display: "flex" }}>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            justifyContent: "space-evenly",

            display: "flex",
            flexDirection: "column",
          }}
        >
          <>
            {/* <Paper > */}
            <Box>
              <Image
                src={"/shyft-360.png"}
                layout="fixed"
                width={"200"}
                height={"80"}
                alt="marketing360"
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#595959",
                textAlign: "center",
              }}
            >
              One account, multiple powerful tools to grow your business
            </Typography>
            <Box>
              <Image
                alt="Mountains"
                src={"/register.png"}
                layout="responsive"
                width="500"
                height="350"
              />
            </Box>
            {/* </Paper> */}
          </>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ width: "30%" }}></Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            boxSizing: "border-box",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Paper sx={{ p: 4, m: 2 }} elevation={3}>
            <Auth />
            {/* <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I've read and accepted the Terms of Service and Privacy Policy."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Access Free Account Tools
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography>Already have an account?</Typography>
                    <Link href="#" variant="body2">
                      Sign in here
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
