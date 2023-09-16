import React from "react";
import { Container, Typography, Button, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { useRouter } from "next/dist/client/router";
import Invoice from "../../../src/components/Payment/Invoice";
const Invoices = () => {
  const router = useRouter();
  return (
    <div>
      <Container>
        <Box component="main" sx={{ my: 2 }}>
          <Invoice />
        </Box>
      </Container>
    </div>
  );
};
Invoices.getLayout = getPaymentLayout;
export default Invoices;
