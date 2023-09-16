import React from "react";
import { getPaymentLayout } from "../../src/layout/Payment/Topbar";
import { Container } from "@mui/material";

import Overview from "../../src/components/Payment/Overview";
const Payments = () => {
  return (
    <Container>
      <Overview />
    </Container>
  );
};

Payments.getLayout = getPaymentLayout;
export default Payments;
