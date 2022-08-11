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
      <Container maxWidth="lg">
        <Typography variant="h3"> Plan</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            startIcon={<Add />}
            size="large"
            variant="contained"
            sx={{ p: 2 }}
            onClick={() => router.push("/payments/subscriptions/plans/add")}
          >
            Add New Plan
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

        <Plan />
      </Container>
    </div>
  );
};

Subscriptions.getLayout = getPaymentSubscriptionsLayout;
export default Subscriptions;
