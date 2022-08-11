import React from "react";
import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material";
import Trend from "./Trend";
import Transactions from "./transactioins";
const OneTimePayment = () => {
  return (
    <>
      <Typography variant="h5">OverView</Typography>
      <Button>Add One-Time Payment</Button>
      <Paper>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={6}>
            <Trend />
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Paper sx={{ width: 250, p: 3, m: 1 }} elevation={5}>
                <Typography variant="h6">2</Typography>
                <Typography variant="subtitle2">New Customer</Typography>
              </Paper>
              <Paper sx={{ width: 250, p: 3, m: 1 }} elevation={5}>
                <Typography variant="h6">2</Typography>
                <Typography variant="subtitle2">Repeat Customer</Typography>
              </Paper>
              <Paper sx={{ width: 250, p: 3, m: 1 }} elevation={5}>
                <Typography variant="h6">2</Typography>
                <Typography variant="subtitle2">Transactions </Typography>
              </Paper>
              <Paper sx={{ width: 250, p: 3, m: 1 }} elevation={5}>
                <Typography variant="h6">2</Typography>
                <Typography variant="subtitle2">In Refunds</Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Transactions />
    </>
  );
};

export default OneTimePayment;

