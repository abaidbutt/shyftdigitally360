import * as React from "react";
import { Container, Typography } from "@mui/material";

import { getTopBarLayout } from "../../src/layout/Topbar";
import Scheduling from "../../src/components/Platform/Scheduling";
function Schedule() {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Scheduling title="Email Marketing"        src="/email_marketing.jpg"  />
    </Container>
  );
}
Schedule.getLayout = getTopBarLayout;
export default Schedule;
