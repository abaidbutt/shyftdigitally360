import * as React from "react";
import { Container, Typography } from "@mui/material";

import { getTopBarLayout } from "../src/layout/Topbar";
import Home from "../src/components/Home";
import About from "../src/components/Home/About";
import More from "../src/components/Home/More";
import Team from "../src/components/Home/Team";
function HomePage() {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Home />
      <About />
      <More />
      <Team />
    </Container>
  );
}
HomePage.getLayout = getTopBarLayout;
export default HomePage;
