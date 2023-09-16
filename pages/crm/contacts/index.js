import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { Container } from "@mui/material";
import Contact from "../../../src/components/CRM/Contact";
const Contacts = () => {
  return (
    <Container>
      <Contact />
    </Container>
  );
};

Contacts.getLayout = getCRMLayout;
export default Contacts;
