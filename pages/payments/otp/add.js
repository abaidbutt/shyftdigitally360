import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import Select from "react-select";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { KeyboardBackspace } from "@mui/icons-material";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddOTP = () => {
  return (
    <Container maxWidth="md">
      <Paper component="form" noValidate sx={{ m: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            pb: 0,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add One-Time Payment
          </Typography>
          <IconButton>
            <KeyboardBackspace />
          </IconButton>
        </Box>
        <Divider />

        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item xs={12}>
            <Typography>Amount</Typography>
            <TextField
              name="Name"
              required
              fullWidth
              autoFocus
              sx={{ background: "White" }}
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Cardholder Name</Typography>
            <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="Phone"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Email</Typography>
            <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="other Phone"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Description</Typography>
            <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="email"
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ m: 3, mb: 2 }}
            >
              Submit{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
AddOTP.getLayout = getPaymentLayout;
export default AddOTP;
