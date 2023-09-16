import React from "react";
import { getDashboardLayout } from "../../../src/layout/Dashboard";
import { Container, Grid, Typography, Box, Button, Paper } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import Submissions from "../../../src/components/Forms/Submissions";
import Embed from "../../../src/components/Forms/Embed";
import EditForm from "../../../src/components/Forms/EditForm";

const EditIds = () => {
  const router = useRouter();
  const edit = router.query;
  console.log(edit);

  //   let valueSet = subscriptionContact
  //     .map((object) => object.route)
  //     .indexOf(router.asPath);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Typography variant="h4">Edit Forms</Typography>
        <Button variant="outlined" sx={{ my: 2, p: 2 }}>
          Preview Forms
        </Button>
        <Paper sx={{ p: 4, my: 2 }} elevation={5}>
          <Typography variant="h4">Contact Forms</Typography>
          <Grid container>
            <Grid item xs={12}>
              <Tabs
                // orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                {subscriptionContact.map((tab, index) => (
                  <Tab
                    key={index}
                    {...a11yProps(index)}
                    onClick={(event) => {
                      event.preventDefault();
                      //   router.push(tab.route);
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
              {subscriptionContact.map((tab, index) => (
                <TabPanel value={value} index={index}>
                  {tab.route}
                </TabPanel>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};
EditIds.getLayout = getDashboardLayout;
export default EditIds;
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
    name: "Edit Form",
    route: <EditForm />,
  },
  {
    name: "Settings",
    route: "/payments/subscriptions/plans",
  },
  {
    name: "Submissions",
    route: <Submissions />,
  },
  {
    name: "Embed",
    route: <Embed />,
  },
];
