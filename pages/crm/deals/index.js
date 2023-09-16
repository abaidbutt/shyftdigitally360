import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import Deal from "../../../src/components/CRM/Deal";
import { Container } from "@mui/material";
const Deals = () => {
  return (
    <Container>
      <Deal />
    </Container>
  );
};

Deals.getLayout = getCRMLayout;
export default Deals;
