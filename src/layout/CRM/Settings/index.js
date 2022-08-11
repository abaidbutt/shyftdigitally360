import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Paper } from "@mui/material";
import Link from "next/link";
import TopBar from "../Topbar";
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
    name: "Contact Types",
    route: "/crm/settings/contact-types",
  },
  {
    name: "Contact Statuses",
    route: "/crm/settings/contact-statuses",
  },
  {
    name: "Contact Fields",
    route: "/crm/settings/contact-fields",
  },
  {
    name: "Contact Sources",
    route: "/crm/settings/contact-sources",
  },
  {
    name: "Project Statuses",
    route: "/crm/settings/project-statuses",
  },
  {
    name: "Deal Statuses",
    route: "/crm/settings/deal-statuses",
  },
  {
    name: "History Types",
    route: "/crm/settings/history-types",
  },
  {
    name: "History Flags",
    route: "/crm/settings/history-flags",
  },
  {
    name: "Tags",
    route: "/crm/settings/tags",
  },
  {
    name: "Task Templates",
    route: "/crm/settings/templates",
  },
];
function VerticalTabs({ children }) {
  const router = useRouter();

  let valueSet = settingsContact
    .map((object) => object.route)
    .indexOf(router.asPath);
  const [value, setValue] = React.useState(valueSet);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
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
                label={
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: value === index ? "#2065D1" : "#9e9e9e",
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
          <Container>{children}</Container>
        </Grid>
      </Grid>
    </Box>
  );
}
export const getCRMSettingsLayout = (page) => (
  <TopBar>
    <VerticalTabs>{page}</VerticalTabs>
  </TopBar>
);

export default VerticalTabs;
