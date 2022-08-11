import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Paper } from "@mui/material";
import Link from "next/link";
import TopBar from "./Topbar";
import { useRouter } from "next/router";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const subscriptionContact = [
  {
    name: "Transactions",
    route: "/payments/reports",
  },
  {
    name: "Disputes",
    route: "/payments/reports/disputes",
  },
];
function ReportsTab({ children }) {
  const router = useRouter();

  let valueSet = subscriptionContact
    .map((object) => object.route)
    .indexOf(router.asPath);
  const [value, setValue] = React.useState(valueSet);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {subscriptionContact.map((tab, index) => (
              <Tab
                key={index}
                {...a11yProps(index)}
                onClick={(event) => {
                  event.preventDefault();
                  router.push(tab.route);
                }}
                sx={{ alignItems: "flex-start" }}
                label={
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: value === index ? "#2065D1" : "#9e9e9e",
                      textAlign: "left",
                    }}
                    component="a"
                  >
                    {tab.name}
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={9}>
          <>{children}</>
        </Grid>
      </Grid>
    </Container>
  );
}
export const getPaymentReportsLayout = (page) => (
  <TopBar>
    <ReportsTab>{page}</ReportsTab>
  </TopBar>
);

export default ReportsTab;
