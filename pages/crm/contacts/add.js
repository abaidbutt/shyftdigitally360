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
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { KeyboardBackspace } from "@mui/icons-material";
import { Input } from "../../../src/components/Custom/Input";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Add = () => {
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
            Add Contacts
          </Typography>
          <IconButton>
            <KeyboardBackspace />
          </IconButton>
        </Box>
        <Divider />

        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item xs={12}>
            <Typography>Name</Typography>
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
            <Typography>Source</Typography>
            <Select options={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Assigned To</Typography>
            <Select options={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Contact Type</Typography>
            <Select options={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Contact Status</Typography>
            <Select options={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Color Tag</Typography>
            <Select options={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Best Way to Contact</Typography>
            <Select options={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Phone</Typography>
            <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="Phone"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Other Phone</Typography>
            <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="other Phone"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Email</Typography>
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
Add.getLayout = getCRMLayout;
export default Add;
