import { Container } from "@mui/material";
import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import Report from "../../../src/components/CRM/Report";
const Reports = () => {
  return (
    <Container>
      <Report />
    </Container>
  );
};

Reports.getLayout = getCRMLayout;
export default Reports;
