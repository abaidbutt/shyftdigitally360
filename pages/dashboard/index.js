import React from "react";
import { getDashboardLayout } from "../../src/layout/Dashboard";
import Dashboard from "../../src/components/Dashboard";
import { Typography, Container } from "@mui/material";
const Dash = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h2">Welcome, User</Typography>
        <Dashboard />
      </Container>
    </div>
  );
};
Dash.getLayout = getDashboardLayout;

export default Dash;