import React from "react";
import { Container } from "@mui/material";
import CreativeService from "../src/components/CreativeService";
import { getTopBarLayout } from "../src/layout/Topbar";

const CreativeServices = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <CreativeService />
    </Container>
  );
};
CreativeServices.getLayout = getTopBarLayout;
export default CreativeServices;
