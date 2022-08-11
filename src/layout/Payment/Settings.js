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

const settingsContact = [
  {
    name: "Account Information",
    route: "/payments/settings/account-info",
  },
  // {
  //   name: "Tax Details",
  //   route: "/payments/settings/tax-details",
  // },
  {
    name: "Tax Rates",
    route: "/payments/settings/tax-rates",
  },
  // {
  //   name: "Bank Accounts & Scheduling",
  //   route: "/payments/settings/accounts-scheduling",
  // },
  // {
  //   name: "E-Commerce Integrations",
  //   route: "/payments/settings/commerce-integrations",
  // },
  // {
  //   name: "Manage Payment Devices",
  //   route: "/payments/settings/payment-device",
  // },
  // {
  //   name: "Accounting Integrations",
  //   route: "/payments/settings/account-integrations",
  // },
  {
    name: "Locations",
    route: "/payments/settings/locations",
  },
];
function SettingsTab({ children }) {
  const router = useRouter();

  let valueSet = settingsContact
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
            {settingsContact.map((tab, index) => (
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
export const getPaymentSettingsLayout = (page) => (
  <TopBar>
    <SettingsTab>{page}</SettingsTab>
  </TopBar>
);

export default SettingsTab;
