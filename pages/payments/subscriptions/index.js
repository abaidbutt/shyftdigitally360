import React, { useState } from "react";
import { getPaymentSubscriptionsLayout } from "../../../src/layout/Payment/Subscriptions";
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
import Subscription from "../../../src/components/Payment/Subscription";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Subscriptions = () => {
  const router=useRouter()
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3"> Assigned Subscriptions</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            startIcon={<Add />}
            size="large"
            variant="contained"
            sx={{ p: 2 }}
            onClick={() => router.push("/payments/subscriptions/add")}
          >
            Start New Subscription
          </Button>
          <Box>
            <TextField
              variant="outlined"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              placeholder="Search here"
            />
            <Button
              variant="outlined"
              endIcon={<Search />}
              sx={{ py: 2, borderRadius: 0 }}
            />
          </Box>
        </Box>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid xs={12} item md={5}>
              <Box>
                <Typography variant="h5">
                  Monthly Recurring Revenue (Last 90 Days)
                </Typography>
                <Typography variant="h5">CA$0.00</Typography>
              </Box>
            </Grid>
            <Grid xs={12} item md={7}>
              <Box>
                <Typography variant="h3"> Subscription Overview</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <Typography variant="h5">Total Subscription</Typography>
                    <Typography variant="h5">1</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5">Active</Typography>
                    <Typography variant="h5">1</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5">Inactive</Typography>
                    <Typography variant="h5">0</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5">Trials</Typography>
                    <Typography variant="h5">1</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <MediaCard />
            </Grid>
          </Grid>
        </Paper>
        <Subscription />
      </Container>
    </div>
  );
};

Subscriptions.getLayout = getPaymentSubscriptionsLayout;
export default Subscriptions;
function MediaCard() {
  const [state, setState] = useState({
    series: [
      {
        name: "Desktops",
        data: [0.01, 0.04],
      },
    ],
    options: {
      chart: {
        height: 35,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Monthly Revenue Details",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          // "Jan",
          // "Feb",
          // "Mar",
          // "Apr",
          // "May",
          // "Jun",
          // "Jul",
          // "Aug",
          // "Sep",
        ],
      },
    },
  });
  return (
    <Card>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={200}
      />
    </Card>
  );
}
