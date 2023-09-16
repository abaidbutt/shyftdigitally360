import * as React from "react";
import { Container, Typography } from "@mui/material";

import { getTopBarLayout } from "../src/layout/Topbar";
import Home from "../src/components/Marketplace";
import About from "../src/components/Marketplace/About";
import More from "../src/components/Marketplace/More";
import Team from "../src/components/Marketplace/Team";
function MarketPlace() {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Home />
      <About />
      <More />
      <Team />
    </Container>
  );
}
MarketPlace.getLayout = getTopBarLayout;
export default MarketPlace;
