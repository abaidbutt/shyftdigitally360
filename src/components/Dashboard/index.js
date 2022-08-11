import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            subheader={<ListSubheader>Settings</ListSubheader>}
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <WifiIcon />
                </ListItemIcon>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary={`data-${index + item}`}
                />
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body1">
                    A better way to build your websites
                  </Typography>
                  <KeyboardArrowRight />
                </Box>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Paper elevation={5} sx={{p:4}}>
            <Button
              variant="outlined"
              sx={{ borderColor: "red", color: "red" }}
            >
              Go to Help
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
