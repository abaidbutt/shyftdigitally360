import React from "react";
import {
  Paper,
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Business = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>What are you most intereste din</Typography>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Using the Marketing 360 Software Platform"
          />
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Help with designing a website"
          />
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Help with cSocial media marketing"
          />
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Help with digital advertising"
          />
        </Grid>

        <Grid item xs={12}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="New">New</ToggleButton>
            <ToggleButton value="6-24 mos.">6-24 mos.</ToggleButton>
            <ToggleButton value="2-3 years">2-3 years</ToggleButton>
            <ToggleButton value="3+ years">3+ years</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="0-100$k">0-100$k</ToggleButton>
            <ToggleButton value="100-250$k">100-250$k</ToggleButton>
            <ToggleButton value="250$k+">250$k+</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {/* <Grid item xs={12}>
          <TextField required fullWidth label="Mobile Phone" name="email" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Website or Desired Domain Name"
            name="email"
          />
        </Grid> */}
      </Grid>
    </>
  );
};

export default Business;
