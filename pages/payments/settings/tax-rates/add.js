import React, { useState } from "react";
import { getPaymentSettingsLayout } from "../../../../src/layout/Payment/Settings";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
import Plan from "../../../../src/components/Payment/Plan";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LocationsAdd = () => {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 1, p: 4, my: 2 }} elevation={5}>
          <Typography variant="h3"> Add Tax Rate</Typography>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Type</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Region</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="description"
              />
            </Grid>

            <Grid item xs={12} container spacing={1}>
              <Grid item xs={12}>
                Rate
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  required
                  fullWidth
                  sx={{ background: "White" }}
                  size="small"
                  name="Price"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  sx={{ background: "White" }}
                  size="small"
                  name="Price"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography>Description</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Price"
              />
            </Grid>
            <Grid xs={12} item>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="outlined" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{ ml: 1 }}>
                  Add Tax rate
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

LocationsAdd.getLayout = getPaymentSettingsLayout;
export default LocationsAdd;
