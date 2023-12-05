import * as React from "react";
import { Container, Typography } from "@mui/material";

import { getTopBarLayout } from "../../src/layout/Topbar";
import Scheduling from "../../src/components/Platform/Scheduling";
function Schedule() {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Scheduling title="Ads"  src="/content.jpg"  />
    </Container>
  );
}
Schedule.getLayout = getTopBarLayout;
export default Schedule;
