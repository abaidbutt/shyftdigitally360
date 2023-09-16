import React from "react";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import Project from "../../../src/components/CRM/Project";
import { Container } from "@mui/material";
const Projects = () => {
  return (
    <Container>
      <Project />
    </Container>
  );
};

Projects.getLayout = getCRMLayout;
export default Projects;
