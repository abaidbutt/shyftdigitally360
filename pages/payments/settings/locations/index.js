import * as React from "react";
import { getPaymentSettingsLayout } from "../../../../src/layout/Payment/Settings";
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Location from "../../../../src/components/Payment/Settings/Location";
const Settings = () => {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3">Location</Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/payments/settings/locations/add")}
        >
          Add Location
        </Button>
        <Location />
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
