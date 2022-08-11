import React, { useState } from "react";
import { getPaymentReportsLayout } from "../../../src/layout/Payment/Reports";
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
import Dispute from "../../../src/components/Payment/Report/Dispute";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Disputes = () => {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3"> Dispute</Typography>

        <Dispute />
      </Container>
    </div>
  );
};

Disputes.getLayout = getPaymentReportsLayout;
export default Disputes;
