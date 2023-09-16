import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import Organization from "../../../src/components/CRM/Organization";
import { Container } from "@mui/material";
const Organizations = () => {
  return (
    <Container>
      <Organization />
    </Container>
  );
};

Organizations.getLayout = getCRMLayout;
export default Organizations;
