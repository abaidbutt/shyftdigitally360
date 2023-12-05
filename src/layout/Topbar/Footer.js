import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Box,
  Avatar,
} from "@mui/material";
import Link from "../../Link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return router.asPath.startsWith("/auth") ? (
    <Box
      component="footer"
      sx={{ bottom: 0, right: 0, zIndex: -1, width: "100%", mt: "auto" }}
    >
      <Box justifyContent="flex-end" display="flex">
        <Avatar
          alt="Remy Sharp"
          src="/assets/footer.png"
          sx={{ width: 406, height: 271 }}
          variant="square"
        />
      </Box>
    </Box>
  ) : (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{ backgroundColor: "#000", mt: "auto" }}
    >
      <Container
        maxWidth="lg"
        component="footer"
        sx={{
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="white" gutterBottom>
                {footer.title}
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {footer.description.map((item) => (
                  <Typography component="li" key={item} sx={{ p: 0, m: 0 }}>
                    <Link href="/" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </Typography>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Copyright />
    </Container>
  );
};

export default Footer;
function Copyright(props) {
  return (
    <Container
      maxWidth="xxl"
      sx={{ backgroundColor: "#000", paddingY: "10px" }}
      disableGutters
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: { xs: "5px", sm: "20px" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {tiers.map((ty) => (
            <Link style={{color:"White"}} href="https://towntown.io/term.html">
              {ty.title}
            </Link>
          ))}
          {/* <Typography variant="body2" color="text.secondary" align="center">
            {" © "} {new Date().getFullYear()} All rights reserved
          </Typography>
          <Link color="inherit" href="https://towntown.io/privacy.html">
            Terms of Use
          </Link>{" "} */}
        </Box>
      </Container>
    </Container>
  );
}

const tiers = [
  {
    title: "Brand Guidelines",
  },
  {
    title: "Legal",
  },
  {
    title: "Privacy Policy",
  },
  {
    title: "Do Not Sell My Info",
  },
  {
    title: "Your California Privacy Rights",
  },
  {
    title: "Affiliate Links Disclosures",
  },
];

const footers = [
  {
    title: "Tour Platform",
    description: [
      "Marketing Team",
      "Website",
      "Ecommerce",
      "Payments",
      "Point of Sale",
      "CRM",
      "Forms",
      "Scheduling",
      "Email Marketing",
      "Listings",
      "Reputation",
      "Social",
      "Ads",
      "Content",
      "Intelligence",
    ],
  },
  {
    title: "Tour by Industry",
    description: [
      "E-Commerce",
      "Contractor",
      "Fitness",
      "Medical",
      "Real EState" < "Attorney",
      "More Industries...",
    ],
  },
  {
    title: "More",
    description: [
      "About Us",
      "Creative SErvices",
      "Success Stories",
      "Our Reviews",
      "Partner With Us",
      "MarketPlac",
      "Blog",
      "Podcast",
      "Community Offers",
      "integrations",
    ],
  },
  {
    title: "Support",
    description: ["Online Help Center", "Contact Us"],
  },
  {
    title: "Sales",
    description: ["833-203-9165"],
  },
  {
    title: "Client Services",
    description: ["855-773-8171"],
  },
];
