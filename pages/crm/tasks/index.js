import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import Task from "../../../src/components/CRM/Task";
import { Container } from "@mui/material";
const Tasks = () => {
  return (
    <Container>
      <Task />
    </Container>
  );
};

Tasks.getLayout = getCRMLayout;
export default Tasks;
