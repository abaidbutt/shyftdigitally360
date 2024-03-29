import React, { useState } from "react";
import { getPaymentSubscriptionsLayout } from "../../../src/layout/Payment/Subscriptions";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Paper,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
import Plan from "../../../src/components/Payment/Plan";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Select from "react-select";
const options = [
  { value: "abc@gmail.com", label: "abc@gmail.com" },
  { value: "xyz", label: "xyz" },
  { value: "uvw@gail.com", label: "uvw@gail.com" },
];

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Subscriptions = () => {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="md">
        <Paper sx={{ p: 4, my: 2 }} elevation={5}>
          <Typography variant="h3"> Add New Plan</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Customer </Typography>
              <Select options={options} />
            </Grid>
            <Grid item xs={12}>
              <Typography>Pricing </Typography>
              <Select options={options} />
              <Button startIcon={<Add />}>Add Additional Subscription</Button>
            </Grid>
            <Grid item xs={12} container spacing={0}>
              <Grid xs={12} item>
                Billing
              </Grid>
              <Grid xs={12} sm={6}>
                <Typography>
                  Automatically charge a payment method on file
                </Typography>
                <Typography variant="subtitle2">
                  This customer doesnt have any valid payment methods on file.
                </Typography>
                <Button startIcon={<Add />} variant="contained" sx={{ p: 2 }}>
                  Add Credit Card
                </Button>
              </Grid>
              <Grid xs={12} sm={6}>
                <Typography>
                  Email invoice to the customer to pay manually
                </Typography>
                <Typography variant="subtitle2">
                  Payment Due (after invoice is sent)
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  sx={{ width: 120 }}
                  endAdornment={
                    <InputAdornment position="end">Days</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container>
              <Grid xs={12} item>
                <Typography>Schedule</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Start..
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="immediately"
                      control={<Radio />}
                      label="immediately"
                    />
                    <FormControlLabel
                      value="on the 1st of next month"
                      control={<Radio />}
                      label="on the 1st of next month"
                    />
                    <FormControlLabel
                      value="on a custom date"
                      control={<Radio />}
                      label="on a custom date"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    End...
                  </FormLabel>
                  <RadioGroup name="radio-buttons-group">
                    <FormControlLabel
                      value="Never"
                      control={<Radio />}
                      label="Never"
                    />
                    <FormControlLabel
                      value="On a Custom Date"
                      control={<Radio />}
                      label="On a Custom Date"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid xs={12} item>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="outlined" onClick={() => router.back()}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{ ml: 1 }}>
                  Start Subscription
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

Subscriptions.getLayout = getPaymentSubscriptionsLayout;
export default Subscriptions;
