import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Paper } from "@mui/material";
import Link from "next/link";
import { getCRMLayout } from "../Topbar";
import { useRouter } from "next/router";
import ProfileView from "./ProfileView";
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
    name: "Notes",
    route: "/crm/contacts/view/notes",
  },
  {
    name: "Tasks",
    route: "/crm/contacts/view/tasks",
  },
  {
    name: "Deals",
    route: "/crm/contacts/view/deals",
  },
  {
    name: "Projects",
    route: "/crm/contacts/view/projects",
  },
  {
    name: "Files",
    route: "/crm/contacts/view/files",
  },
  {
    name: "Lists",
    route: "/crm/contacts/view/lists",
  },
  {
    name: "History",
    route: "/crm/contacts/view/history",
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
        m: 2,
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={5}>
          <ProfileView />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Paper
            elevation={5}
            sx={{
              p: 2,
              height: "500px",
              overflow: "hidden",
              overflowY: "scroll", // added scroll
            }}
          >
            <Tabs
              variant="scrollable"
              value={value}
              onChange={handleChange}
              sx={{ borderBottom: "red", borderColor: "divider" }}
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
            <Box sx={{ p: 2 }}>{children}</Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
export const getCRMViewLayout = (page) =>
  getCRMLayout(<VerticalTabs>{page}</VerticalTabs>);

export default VerticalTabs;
