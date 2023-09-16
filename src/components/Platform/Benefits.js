import React from "react";
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  Image,
  IconButton,
  Rating,
  Paper,
} from "@mui/material";
import {
  AccountBalance,
  VolunteerActivism,
  Landscape,
  Gavel,
  CarRepair,
  MedicalInformation,
  Carpenter,
  Business,
  ChildFriendly,
  Brush,
  SelfImprovement,
  PermIdentity,
  PestControl,
  Plumbing,
  Nightlife,
  Restaurant,
  LocalGroceryStore,
  Storefront,
  Spa,
  RemoveRedEye,
  Celebration,
  Roofing,
  CreditScore,
  FitnessCenter,
  Psychology,
  Park,
  Warehouse,
  Event,
  CleaningServices,
  Hvac,
  CheckCircleOutline,
} from "@mui/icons-material";
const Benefits = () => {
  return (
    <Container maxWidth="xl">
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h6" gutterBottom>
          Plus, all of these great benefits
        </Typography>
        <Typography variant="h6" gutterBottom>
          Everything you need to compete and win online. Not only do you get the
          tools you need to manage your business, but you also get the dedicated
          marketing team you need to grow your business — all in one platform.
        </Typography>
      </Container>
      <Grid container>
        {industries.map((indust) => (
          <Grid md={4} xl={3} lg={3} sm={6} xs={12} key={indust.name}>
            <Paper
              sx={{
                display: "flex",
                p: 2,
                alignItems: "center",
                border: "1px solid #eee",
                m: 1,
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              <IconButton>{indust.icon}</IconButton>
              <Typography variant="subtitle2" sx={{ mx: 2 }}>
                {indust.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", my: 2 }}>
        <Button variant="contained">
          See how it all works in your industry
        </Button>
      </Box>
      <Container sx={{ my: 5, textAlign: "center" }} maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Get everything you need to manage and grow your business.
        </Typography>
        <Button variant="contained">Plan &amp; Pricing</Button>
        <Typography variant="subtitle1" gutterBottom>
          Plus, explore free account tools. No credit card required.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Rating
            name="simple-controlled"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />

          <Box>3,500+ Reviews</Box>
        </Box>

        <Grid container>
          <Grid md={6} xl={6} lg={6} sm={12} xs={12}></Grid>
        </Grid>
      </Container>
    </Container>
  );
};
const industries = [
  {
    name: "Accounting Firm/CPA",
    icon: <AccountBalance />,
  },
  {
    name: "Assisted Living",
    icon: <VolunteerActivism />,
  },
  {
    name: "LandScaping",
    icon: <Landscape />,
  },
  {
    name: "Attorny / Law Firm",
    icon: <Gavel />,
  },
  {
    name: "Auto Repair",
    icon: <CarRepair />,
  },
  {
    name: "Medical",
    icon: <MedicalInformation />,
  },
  {
    name: "Carpet Cleaning",
    icon: <Carpenter />,
  },
  {
    name: "Moving Company",
    icon: <Business />,
  },
  {
    name: "Child Care",
    icon: <ChildFriendly />,
  },
  {
    name: "Painting Contractor",
    icon: <Brush />,
  },
  {
    name: "Chiropractor",
    icon: <SelfImprovement />,
  },
  {
    name: "Personal Brand",
    icon: <PermIdentity />,
  },
  {
    name: "Pest Control",
    icon: <PestControl />,
  },
  {
    name: "Plumbing Conotractor",
    icon: <Plumbing />,
  },
  {
    name: "Dance Studio",
    icon: <Nightlife />,
  },
  {
    name: "Restaurant",
    icon: <Restaurant />,
  },
  {
    name: "ECommerce Store",
    icon: <LocalGroceryStore />,
  },
  {
    name: "Retail Store",
    icon: <Storefront />,
  },
  {
    name: "Spa",
    icon: <Spa />,
  },
  {
    name: "Optometrist/ Eye Doctor",
    icon: <RemoveRedEye />,
  },
  {
    name: "Event Planner",
    icon: <Celebration />,
  },
  {
    name: "Roofing",
    icon: <Roofing />,
  },
  {
    name: "Financial",
    icon: <CreditScore />,
  },
  {
    name: "Fitness/ Trainer / Gym",
    icon: <FitnessCenter />,
  },
  {
    name: "Therapist",
    icon: <Psychology />,
  },
  {
    name: "Tree Services",
    icon: <Park />,
  },
  {
    name: "Garage Door Contractor",
    icon: <Warehouse />,
  },
  {
    name: "Venue/Events",
    icon: <Event />,
  },
  {
    name: "House Cleaning",
    icon: <CleaningServices />,
  },
  {
    name: "HVAC Contractor",
    icon: <Hvac />,
  },
  {
    name: "Other",
    icon: <CheckCircleOutline />,
  },
];
export default Benefits;
