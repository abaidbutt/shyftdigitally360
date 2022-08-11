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
} from "@mui/material";
import Image from "next/image";
const Login = () => {
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
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            justifyContent: "space-evenly",

            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#595959", textAlign: "center" }}
            >
              One account, multiple powerful tools to grow your business
            </Typography>
          </Container>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ width: "30%" }}>
              <Box sx={{ marginLeft: 7 }}>
                <Image
                  src={"/shyft-360.png"}
                  // src={
                  //   "https://d22if4xzkonim2.cloudfront.net/logo-marketing360.svg"
                  // }
                  layout="fixed"
                  width={"160px"}
                  height={"35px"}
                  alt="marketing360"
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#848586", textAlign: "center" }}
              >
                All the tools you need to grow and manage your business
              </Typography>
            </Box>

            <Box sx={{ width: "30%" }}>
              <Box sx={{ marginLeft: 7 }}>
                <Image
                  src={"/shyft-360.png"}
                  // src={
                  //   "https://d22if4xzkonim2.cloudfront.net/logo-marketing360.svg"
                  // }
                  alt="marketing360"
                  layout="fixed"
                  width={"160px"}
                  height={"35px"}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#848586", textAlign: "center" }}
              >
                Beautiful websites that drive results
              </Typography>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Box sx={{ marginLeft: 7 }}>
                <Image
                  src={"/shyft-360.png"}
                  // src={"https://d22if4xzkonim2.cloudfront.net/logo-trl.svg"}
                  layout="fixed"
                  width={"160px"}
                  alt="marketing360"
                  height={"35px"}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: "#848586", textAlign: "center" }}
              >
                Monitor reviews and manage your online reputation
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
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
          <Paper elevation={3} sx={{ py: 10, px: "2.5rem", maxWidth: "420px" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontSize: "22px", color: "#595959" }}
            >
              Sign in to your Marketing 360® account
            </Typography>
            <Box sx={{ mt: "1.0rem" }}>
              <TextField placeholder="Email" fullWidth size="small" />
            </Box>
            <Box sx={{ mt: "0.4rem" }}>
              <TextField placeholder="Password" fullWidth size="small" />
            </Box>
            <Box>
              <Button
                variant="text"
                sx={{
                  ml: "7px",
                  textTransform: "none",
                  color: "rgb(0,0,0,0.45)",
                  mt: "10px",
                }}
              >
                Forgot Password?
              </Button>
            </Box>
            <Box sx={{ mt: "1.5rem" }}>
              <Button
                variant="contained"
                size="small"
                fullWidth
                sx={{
                  width: "100%",
                  textTransform: "none",
                  padding: "0.75rem",
                  backgroundColor: "#006DD0",
                }}
              >
                <Typography>Sign in</Typography>
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
