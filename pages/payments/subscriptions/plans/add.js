import React, { useState } from "react";
import { getPaymentSubscriptionsLayout } from "../../../../src/layout/Payment/Subscriptions";
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

const Subscriptions = () => {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3"> Add New Plan</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography>Name</Typography>
            <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Description</Typography>
            <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="description"
            />
          </Grid>
          <Grid item xs={12} container>
            <Grid xs={12} item>
              <Typography>Pricing</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Price</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Price"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Billing Interval</Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Price"
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
      </Container>
    </div>
  );
};

Subscriptions.getLayout = getPaymentSubscriptionsLayout;
export default Subscriptions;
