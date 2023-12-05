import * as React from "react";
import { Container, Typography } from "@mui/material";

import { getTopBarLayout } from "../../src/layout/Topbar";
import Scheduling from "../../src/components/Platform/Scheduling";
function Schedule() {
  return (
    <Container maxWidth="xxl" disableGutters>
      <Scheduling title="Customer Relationship Managment"  src="/crm.jpeg"   />
    </Container>
  );
}
Schedule.getLayout = getTopBarLayout;
export default Schedule;
