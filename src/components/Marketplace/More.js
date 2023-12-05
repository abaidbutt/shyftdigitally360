import React from "react";
import {
  Container,
  Grid,
  Box,
  Paper,
  Button,
  Typography,
  Image,
  CardMedia,
} from "@mui/material";

const More = () => {
  return (
    <Container maxWidth="xl">
      {/* calender */}
      <Grid
        container
        alignItems="stretch"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
      >
        {partners.map((partner, index) => (
          <Grid md={6} xl={4} lg={4} sm={12} xs={12} item key={index}>
            <Paper
              sx={{
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                alignItems: "center",
                textAlign: "center",
                // p: 4,
              }}
              elevation={5}
            >
              <CardMedia
                component="img"
                height="240"
                image={partner.url}
                alt="green iguana"
                sx={{
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  objectFit: "cover",
                }}
              />
              <Box sx={{ py: 5 }}>
                <Typography variant="h4" gutterBottom fontWeight={"bolder"}>
                  {partner.name}
                </Typography>
                <Typography variant="title2" gutterBottom>
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
    url: "/7.jpg",
    link: "",
  },
  {
    name: "Route",
    description:
      "Route is the premier post-purchase experience solution for ecommerce merchants.",
    url: "/5.jpg",
    link: "",
  },
  {
    name: "Massively.ai",
    description:
      "Automated and live chat by Massively. Generate more leads and deliver better customer service by engaging with customers on the channels they prefer like Web, Facebook & SMS.",
    url: "/4.jpg",
    link: "",
  },
  {
    name: "verbTeams",
    description:
      "Find, share, and inspire with verbTEAMS. Streamline your selling process and close deals faster than ever with the #1 sales enablement platform for small businesses.",
    url: "/2.jpg",
    link: "",
  },
  {
    name: "snapWidget",
    description:
      "SnapWidget helps you display Instagram, Twitter, Facebook and YouTube on your website to increase your followers.",
    url: "/bussiness.jpg",
    link: "",
  },
  {
    name: "Lendflow",
    description:
      "Lendflow helps non-traditional players offer services that were once only available through large financial organizations. The result? Capital that's faster and easier to access.",
    url: "/digital.jpeg",
    link: "",
  },
];
export default More;
