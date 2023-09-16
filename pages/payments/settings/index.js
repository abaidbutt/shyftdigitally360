import * as React from "react";
import { getPaymentSettingsLayout } from "../../../src/layout/Payment/Settings";
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Settings = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3">Get Started with a Point of Sale</Typography>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <Grid item md={6} sm={12} lg={6} xs={12} key={i}>
              <MediaCard key={i} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5" sx={{ my: 2 }}>
          Ready to get started? Contact a Payment Consultant today!
        </Typography>
      </Container>
    </div>
  );
};

Settings.getLayout = getPaymentSettingsLayout;
export default Settings;
function MediaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mobile Based Businesses
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Does your business need a way to accept and manage payments securely
          while youre on the go? See our mobile point of sale options that go
          wherever your business takes you.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
