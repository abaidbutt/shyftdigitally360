import React from "react";
import {
  Container,
  Grid,
  Box,
  Paper,
  Button,
  Typography,
  Image,
} from "@mui/material";

const More = () => {
  return (
    <Container maxWidth="xl">
      {/* calender */}
      <Grid
        container
        alignItems="stretch"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {partners.map((partner, index) => (
          <Grid md={6} xl={4} lg={4} sm={12} xs={12} item key={index}>
            <Paper
              sx={{
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                alignItems: "center",
                textAlign: "center",
                p: 4,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {partner.name}
              </Typography>
              <Box>
                <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
                  {partner.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {partner.description}
                </Typography>
              </Box>
              <Button>Learn More</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
const partners = [
  {
    name: "IDX Broker",
    description:
      "IDX Broker powers the growth of real estate professionals through MLS home search, lead management solutions and fully hosted websites!",
    url: "",
    link: "",
  },
  {
    name: "Route",
    description:
      "Route is the premier post-purchase experience solution for ecommerce merchants.",
    url: "",
    link: "",
  },
  {
    name: "Massively.ai",
    description:
      "Automated and live chat by Massively. Generate more leads and deliver better customer service by engaging with customers on the channels they prefer like Web, Facebook & SMS.",
    url: "",
    link: "",
  },
  {
    name: "verbTeams",
    description:
      "Find, share, and inspire with verbTEAMS. Streamline your selling process and close deals faster than ever with the #1 sales enablement platform for small businesses.",
    url: "",
    link: "",
  },
  {
    name: "snapWidget",
    description:
      "SnapWidget helps you display Instagram, Twitter, Facebook and YouTube on your website to increase your followers.",
    url: "",
    link: "",
  },
  {
    name: "Lendflow",
    description:
      "Lendflow helps non-traditional players offer services that were once only available through large financial organizations. The result? Capital that's faster and easier to access.",
    url: "",
    link: "",
  },
];
export default More;
