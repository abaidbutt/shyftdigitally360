import {
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "./DataTable";

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Invoice = ({ href }) => {
  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <>
        <Typography sx={{ mb: 1 }} variant="h6">
          Invoices
        </Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", fontSize: "14px", py: 1.5 }}
          startIcon={<AddIcon />}
          onClick={() => router.push("/payments/invoices/add")}
        >
          Add New Invoice{" "}
        </Button>
        <Paper sx={{ p: 2, my: 3 }}>
          <Grid container spacing={0}>
            <Grid xs={12} sm={6} md={6} lg={6} item>
              <Typography variant="h6">Invoices Overview</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={6} item>
              <Typography variant="h6">Amount Breakdown</Typography>
              <Typography sx={{ color: "gray" }} variant="subtitle1">
                Last 90 days
              </Typography>
              <Grid container spacing={0} item>
                <Grid xs={3} sm={3} md={3} lg={3} item>
                  <Typography sx={{ fontWeight: 600 }}>
                    Total Invoices
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "30px" }}>
                    7
                  </Typography>
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} item>
                  <Typography sx={{ fontWeight: 600 }}>Paid </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "30px" }}>
                    0
                  </Typography>
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} item>
                  <Typography sx={{ fontWeight: 600 }}>Open</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "30px" }}>
                    3
                  </Typography>
                </Grid>
                <Grid xs={3} sm={3} md={3} lg={3} item>
                  <Typography sx={{ fontWeight: 600 }}>Overdue</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: "30px" }}>
                    2
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ textTransform: "capitalize" }}
                  label="All Invoices"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "capitalize" }}
                  label="Draft"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "capitalize" }}
                  label="Open"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ textTransform: "capitalize" }}
                  label="Overdue"
                  {...a11yProps(3)}
                />
                <Tab
                  sx={{ textTransform: "capitalize" }}
                  label="Paid"
                  {...a11yProps(4)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <DataTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <DataTable />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <DataTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <DataTable />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <DataTable />
            </TabPanel>
          </Box>
        </Paper>
      </>
    </div>
  );
};

export default Invoice;
