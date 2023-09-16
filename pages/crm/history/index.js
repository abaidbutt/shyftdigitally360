import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import History from "../../../src/components/CRM/History";
import { Container } from "@mui/material";
const Histories = () => {
  return (
    <Container>
      <History />
    </Container>
  );
};

Histories.getLayout = getCRMLayout;
export default Histories;
