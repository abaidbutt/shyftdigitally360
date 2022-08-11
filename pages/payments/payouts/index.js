import * as React from "react";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import Payout from "../../../src/components/Payment/Payout";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

const Payouts = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3">Payouts</Typography>
        <MediaCard />
        <Payout />
      </Container>
    </div>
  );
};

Payouts.getLayout = getPaymentLayout;
export default Payouts;
function MediaCard() {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Payouts - Balance Overview
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          On the way to your Bank
        </Typography>
        <Box sx={{ background: "#F9F9FA", p: 4, borderRadius: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Payments</Typography>
            <Typography variant="h6">CA$0.00</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Refunds</Typography>
            <Typography variant="h6">CA$0.00</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Adjustment</Typography>
            <Typography variant="h6">CA$0.00</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">CA$0.00</Typography>
          </Box>
        </Box>

        <Typography variant="h4">Estimated Future Payouts</Typography>
        <Box sx={{ background: "#F9F9FA", p: 4, borderRadius: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">CA$0.00</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
