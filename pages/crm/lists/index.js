import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import List from "../../../src/components/CRM/List";
import { Container } from "@mui/material";
const Lists = () => {
  return (
    <Container>
      <List />
    </Container>
  );
};

Lists.getLayout = getCRMLayout;
export default Lists;
