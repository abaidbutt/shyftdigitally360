import * as React from "react";
import PropTypes from "prop-types";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Active from "./Active";
import AllSubscriptions from "./AllSubscriptions";
import Canceled from "./Canceled";
import Expired from "./Expired";
import Incomplete from "./Incomplete";
import PastDue from "./PastDue";
import Trial from "./Trial";
import Scheduled from "./Scheduled";
import Unpaid from "./Unpaid";
const subscriptionContact = [
  {
    name: "All Subscription",
    route: <AllSubscriptions />,
  },
  {
    name: "Active",
    route: <Active />,
  },
  {
    name: "Past Due",
    route: <PastDue />,
  },
  {
    name: "Unpaid",
    route: <Unpaid />,
  },
  {
    name: "Canceled",
    route: <Canceled />,
  },
  {
    name: "Incomplete",
    route: <Incomplete />,
  },
  {
    name: "Expired",
    route: <Expired />,
  },
  {
    name: "Trial",
    route: <Trial />,
  },
  {
    name: "Scheduled",
    route: <Scheduled />,
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  // let valueSet = subscriptionContact
  //   .map((object) => object.route)
  //   .indexOf(router.asPath);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          // variant="fullWidth"
          variant="scrollable"
          scrollButtons="auto"
        >
          {subscriptionContact.map((tab, index) => (
            <Tab
              key={index}
              {...a11yProps(index)}
              onClick={(event) => {
                event.preventDefault();
                // router.push(tab.route);
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
      </>
      {subscriptionContact.map((tab, index) => (
        <TabPanel value={value} key={index} index={index} dir={theme.direction}>
          {tab.route}
        </TabPanel>
      ))}
    </Box>
  );
}
