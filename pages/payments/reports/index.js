import React, { useState } from "react";
import { getPaymentReportsLayout } from "../../../src/layout/Payment/Reports";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Paper,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import Card from "@mui/material/Card";
import dynamic from "next/dynamic";
import Transaction from "../../../src/components/Payment/Report/Transaction";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Select from "react-select";
const options = [
  { value: "abc@gmail.com", label: "abc@gmail.com" },
  { value: "xyz", label: "xyz" },
  { value: "uvw@gail.com", label: "uvw@gail.com" },
];
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Reports = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3"> Transaction</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="large"
            variant="contained"
            sx={{ p: 2 }}
            onClick={handleClickOpen}
          >
            Export Transaction
          </Button>
          <Box>
            <FormDialog open={open} handleClose={handleClose} />
          </Box>
        </Box>

        <Transaction />
      </Container>
    </div>
  );
};

Reports.getLayout = getPaymentReportsLayout;
export default Reports;

function FormDialog({ open, handleClose }) {
  const router = useRouter();
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth={"sm"} fullWidth>
        <DialogTitle>Export Transaction</DialogTitle>
        <DialogContent>
          <Typography>File Type</Typography>
          <Select options={options} />

          <FormControl>
            <FormLabel>Date</FormLabel>
            <RadioGroup name="radio-buttons-group">
              <FormControlLabel
                value="yesterday"
                control={<Radio />}
                label="yesterday"
              />
              <FormControlLabel
                value="Current Month"
                control={<Radio />}
                label="Current Month"
              />
              <FormControlLabel
                value="Previous Month"
                control={<Radio />}
                label="Previous Month"
              />
              <FormControlLabel
                value="On a Custom Date"
                control={<Radio />}
                label="On a Custom Date"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" sx={{ ml: 1 }}>
              Export
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
