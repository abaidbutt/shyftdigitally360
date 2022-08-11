import {
  InputLabel,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  Box,
  Grid,
  TextField,
  FormControl,
  Select,
  Typography,
  Button,
  Paper,
  Container,
} from "@mui/material";

import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import AddIcon from "@mui/icons-material/Add";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { useRouter } from "next/dist/client/router";
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

const AddInovices = () => {
  const router = useRouter();
  const [age, setAge] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = React.useState("female");

  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, my: 2 }}>
        <Typography
          sx={{
            fontSize: "20px",
          }}
          variant="h5"
        >
          Create Invoice
        </Typography>

        <Typography variant="h6">Customer Information</Typography>

        <FormControl
          sx={{
            minWidth: "460px",
            mt: 2,
          }}
          size="small"
        >
          <InputLabel id="demo-select-small">Select a Customer</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Select a Customer"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="h6" sx={{ mt: 8, mb: 2 }}>
          Invoice Items
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <Typography>Description</Typography>
            <TextField
              required
              fullWidth
              sx={{
                maxWidth: 500,
              }}
              size="small"
              name="Phone"
            />
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Typography>Quality</Typography>
            <TextField required fullWidth size="small" name="Phone" />
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Typography>Price</Typography>
            <TextField required fullWidth size="small" name="Phone" />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1}>
            <Typography>Total</Typography>
            <Box sx={{ display: "flex", fontSize: "12px" }}>
              CA$0.00
              <MoreVertIcon onClick={handleClick} />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{
                  mr: 10,
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>

        <Grid>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, mt: 5, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="   Memo Text" {...a11yProps(0)} />
                <Tab label="    Footer Text" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid xs={12}>
                <TextField
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                ></TextField>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Footer Text
            </TabPanel>
          </Box>
          <Typography>
            This customer doesn’t have any valid payment methods on file.
          </Typography>
          <Button
            variant="outlined"
            sx={{ py: 1.5, fontWeight: 500, textTransform: "capabalize" }}
            startIcon={<AddIcon />}
          >
            Add Credit Card
          </Button>

          <RadioGroup
            sx={{ mt: 8 }}
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            defaultChecked
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Email invoice to the customer to pay manually"
            />
          </RadioGroup>

          <Typography sx={{ mt: 2 }} variant="h6">
            Payment Due
          </Typography>
          <OutlinedInput
            id="outlined-adornment-weight"
            sx={{ width: 120 }}
            endAdornment={<InputAdornment position="end">Days</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
          <Typography>after invoice is sent</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button sx={{ p: 1.7, mx: 1 }} variant="outlined">
              Close
            </Button>
            <Button sx={{ p: 1.7, mx: 1 }} variant="outlined">
              Save
            </Button>
            <Button sx={{ p: 1.7, mx: 1 }} variant="contained">
              Finalize &amp; Send
            </Button>
          </Box>
        </Grid>
      </Paper>
    </Container>
  );
};
AddInovices.getLayout = getPaymentLayout;

export default AddInovices;
