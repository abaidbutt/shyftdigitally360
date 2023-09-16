import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Container,
  Avatar,
  Box,
  IconButton,
  Button,
  Tooltip,
  Hidden,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useRouter } from "next/router";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const toptabsName = [
  {
    name: "Contacts",

    route: "/crm/contacts",
  },
  {
    name: "Organizations",

    route: "/crm/organizations",
  },
  {
    name: "History",

    route: "/crm/history",
  },
  {
    name: "Deals",

    route: "/crm/deals",
  },
  {
    name: "Projects",

    route: "/crm/projects",
  },
  {
    name: "Tasks",

    route: "/crm/tasks",
  },
  {
    name: "Calender",

    route: "/crm/calender",
  },
  {
    name: "Reports",

    route: "/crm/reports",
  },
  {
    name: "Settings",

    route: "/crm/settings/contact-types",
  },
];
const CRM = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();

  let valueSet = toptabsName
    .map((object) => object.route)
    .indexOf(router.asPath);
  const [value, setValue] = React.useState(valueSet);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} sx={{}} position="static" color="inherit">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <>
                <Avatar
                  src="/shyft-360.png"
                  sx={{ width: "150px", height: "39px" }}
                  variant="square"
                />
              </>
              {/* <Button endIcon={<KeyboardArrowDown color={"action"} />}>
                <Typography variant="h6" color="black">
                  CRM
                </Typography>
              </Button> */}
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src="https://marketing360.s3.amazonaws.com/partners/torstar-32x32.png"
                  sx={{ width: "30px", height: "30px" }}
                />
                <Typography variant="h6" color="black" sx={{ ml: 1 }}>
                  CRM
                </Typography>
              </IconButton> */}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {toptabsName.map((tab, index) => {
              return (
                <Tab
                  key={index}
                  sx={{
                    borderBottom:
                      router.asPath === tab.route ? "#2065D1" : "#9e9e9e",
                  }}
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
              );
            })}
          </Tabs>
        </Box>
      </Box>
      {children}
    </>
  );
};

export const getCRMLayout = (page) => <CRM>{page}</CRM>;

export default CRM;
