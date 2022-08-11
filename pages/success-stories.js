import React from "react";
import { Container } from "@mui/material";
import CreativeService from "../src/components/CreativeService";
import { getTopBarLayout } from "../src/layout/Topbar";

const SuccessStories = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <CreativeService />
    </Container>
  );
};
SuccessStories.getLayout = getTopBarLayout;
export default SuccessStories;
