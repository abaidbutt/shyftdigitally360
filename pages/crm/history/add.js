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
            Add History
          </Typography>
          <IconButton>
            <KeyboardBackspace />
          </IconButton>
        </Box>
        <Divider />

        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item xs={12}>
            <Typography>Contact *</Typography>
            <Select options={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Details</Typography>
            <TextField
              name="Details"
              required
              fullWidth
              multiline
              rows={4}
              autoFocus
              sx={{ background: "White" }}
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>History Type</Typography>
            <Select options={options} placeholder="State" />
          </Grid>
          <Grid item xs={12}>
            <Typography>Notify Users</Typography>
            <Select options={options} placeholder="State" />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
              <Button variant="outlined" sx={{ mx: 1 }}>
                Cancel
              </Button>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
Add.getLayout = getCRMLayout;
export default Add;
