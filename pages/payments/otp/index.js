import React from "react";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { Container } from "@mui/material";

import OneTimePayment from "../../../src/components/Payment/OneTimePayment";
const OTP = () => {
  return (
    <Container>
      <OneTimePayment />
    </Container>
  );
};

OTP.getLayout = getPaymentLayout;
export default OTP;
