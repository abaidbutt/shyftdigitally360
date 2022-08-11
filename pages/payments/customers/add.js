import React from "react";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Checkbox,
  MenuItem,
  Paper,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
const AddCustomer = () => {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h4">Add Customer </Typography>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Name</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Email Address</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Description</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Billing Information</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Country</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              >
                <MenuItem value="pakistan">pakistan</MenuItem>
                <MenuItem value="india">india</MenuItem>
                <MenuItem value="canada">canada</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography>Address 1</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Address 2</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>City</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>State</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Postal Code</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Phone Number</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Shipping Details</Typography>
              <Checkbox />
              {/* <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="Phone"
            /> */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Invoice Prefix</Typography>

              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} container columnSpacing={1}>
              <Grid item xs={12}>
                <Typography>Tax IDs</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  sx={{ background: "White" }}
                  size="small"
                  name="Phone"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  sx={{ background: "White" }}
                  size="small"
                  name="Phone"
                />
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="outlined" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{ ml: 1 }}>
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};
AddCustomer.getLayout = getPaymentLayout;
export default AddCustomer;
