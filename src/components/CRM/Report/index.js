import React from "react";
import { Grid, Box, Paper, Typography, Button } from "@mui/material";
import dynamic from "next/dynamic";
import TypeContact from "./TypeContact";
import StatusContact from "./StatusContact";
import SourceContact from "./SourceContact";
import DealStatus from "./DealStatus";
import ProjectStatus from "./ProjectStatus";

const TotalContact = dynamic(() => import("./TotalContact"), { ssr: false });

const Report = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Contacts
        </Typography>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={8}>
          <Paper sx={{ p: 3 }} elevation={5}>
            <TotalContact />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }} elevation={5}>
            <TypeContact />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }} elevation={5}>
            <StatusContact />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }} elevation={5}>
            <SourceContact />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Other Reports
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }} elevation={5}>
            <DealStatus />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }} elevation={5}>
            <ProjectStatus />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Report;
