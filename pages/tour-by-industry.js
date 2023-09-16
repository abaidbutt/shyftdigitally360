import React from "react";
import { Container } from "@mui/material";
import TourIndustry from "../src/components/TourIndustry";
import { getTopBarLayout } from "../src/layout/Topbar";

const TourByIndustry = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <TourIndustry />
    </Container>
  );
};
TourByIndustry.getLayout = getTopBarLayout;
export default TourByIndustry;
