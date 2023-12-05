import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  IconButton,
  Button,
  Hidden,
  Menu,
  MenuItem,
} from "@mui/material";
import { Call, ArrowBack } from "@mui/icons-material";
import Link from "../../Link";
import { useRouter } from "next/router";
import Footer from "./Footer";
const TopBar = ({ children }) => {
  // const [userDetails, setUserDetails] = useState("");
  const router = useRouter();

  const { query } = router;

  return (
    <div>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Box onClick={() => router.push("/")} sx={{ cursor: "pointer" }}>
            <Avatar
              alt="Remy Sharp"
              src={"/shyft-360.png"}
              sx={{
                width: 200,
                objectFit: "contain",
                height: "52px",
              }}
              variant="square"
            />
          </Box>
          <Box sx={{ ml: [1, 1.5], flexGrow: 1 }}>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {!router.asPath.startsWith("/auth") &&
                HomeLinks?.map((item, i) =>
                  item?.links ? (
                    <MenuItemComponent
                      router={router}
                      query={query}
                      item={item}
                    />
                  ) : (
                    <Button
                      key={i}
                      variant="inherit"
                      component={Link}
                      href={{
                        pathname: item?.link,
                        // query: { name: item.name, title: item.title },
                      }}
                      sx={{
                        py: 1,
                        px: 1.5,
                        fontWeight: "700",
                        fontSize: "14px",
                        padding: "22px 16px",
                        textTransform: "none",
                        borderBottom:
                          item.name === query?.name ? `2px solid #2AC084` : "",
                      }}
                    >
                      {item.name}
                    </Button>
                  )
                )}
            </Box>
          </Box>
          <Box sx={{ mx: 1.5, gap: "5px" }}>
            {!router.asPath.startsWith("/auth") ? (
              <Box>
                <IconButton color="primary" component={Link} href={"/login"}>
                  <Avatar variant="rounded" sx={{ bgcolor: "#d1443B" }}>
                    <Call />
                  </Avatar>
                </IconButton>
                <Button
                  color="primary"
                  component={Link}
                  href={"/login"}
                  variant="outlined"
                  sx={{ mr: 1 }}
                >
                  Login
                </Button>
                <Button
                  color="primary"
                  component={Link}
                  href={"/signup"}
                  variant="contained"
                >
                  Plan &amp; Pricing
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: "flex", gap: "10px" }}>
                {router.asPath === "/auth/profileset" && (
                  <Button
                    color="inherit"
                    component={Link}
                    href={
                      router.asPath === "/auth/profileset"
                        ? "/signup"
                        : "/login"
                    }
                    sx={{
                      backgroundColor: "#F7F7F7",
                      borderRadius: "10px",
                      paddingY: "11px",
                      paddingX: "21px",
                      color: "#908E8E",
                      fontWeight: 700,
                    }}
                    startIcon={<ArrowBack />}
                  >
                    Back
                  </Button>
                )}
                <Button
                  color="inherit"
                  component={Link}
                  href={router.asPath === "/login" ? "/signup" : "/login"}
                  sx={{
                    backgroundColor: "#F7F7F7",
                    borderRadius: "10px",
                    paddingY: "11px",
                    paddingX: "21px",
                    color: "#908E8E",
                    fontWeight: 700,
                  }}
                >
                  {router.asPath === "/login" ? "Sign Up" : "Sign In"}
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};
const MenuItemComponent = ({ item, router, query }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event, name) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box key={item.name}>
      <Button
        variant="inherit"
        sx={{
          py: 1,
          px: 1.5,
          fontWeight: "700",
          fontSize: "14px",
          padding: "22px 16px",
          textTransform: "none",
          borderBottom: item.name === query?.name ? `2px solid #2AC084` : "",
        }}
        onClick={handleClick}
      >
        {item.name}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {item?.links.map((itm) => (
          <MenuItem
            key={itm?.name}
            onClick={() => {
              router.push({
                pathname: itm?.link,
                // query: { name: itm.name, title: itm.title },
              });
              handleClose();
            }}
            variant="inherit"
            sx={{
              py: 1,
              px: 1.5,
              fontWeight: "700",
              fontSize: "14px",
              padding: "22px 16px",
              textTransform: "none",
              borderBottom: itm.name === query?.name ? `3px solid #2AC084` : "",
            }}
          >
            {itm?.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export const getTopBarLayout = (page) => (
  <TopBar>
    {page}
    <Footer />
  </TopBar>
);

// {/* <Footer /> */}
export default TopBar;
const HomeLinks = [
  { name: "Home", link: "/" },
  {
    name: "Tour Platform",
    links: [
      {
        name: "Marketing Team",
        link: "/platform/marketing-team",
        title: "Marketing Team",
      },
      { name: "Websites", link: "/platform/websites", title: "Websites" },
      { name: "Ecommerce", link: "/platform/ecommerce", title: "Ecommerce" },
      {
        name: "Payments",
        link: "/platform/payments",
        title: "Payments",
      },
      {
        name: "Point of Sale",
        link: "/platform/point-of-sale",
        title: "Point of Sale",
      },
      {
        name: "CRM",
        link: "/platform/crm",
        title: "CRM",
      },
      {
        name: "Form",
        link: "/platform/forms",
        title: "Form",
      },
      {
        name: "Scheduling",
        link: "/platform/schedule",
        title: "Scheduling",
      },
      {
        name: "Email Marketing",
        link: "/platform/email-marketing",
        title: "Email Marketing",
      },
      {
        name: "Listings",
        link: "/platform/listings",
        title: "Listings",
      },
      {
        name: "Reputation",
        link: "/platform/reputations",
        title: "Reputation",
      },
      {
        name: "Social",
        link: "/platform/social",
        title: "Social",
      },
      {
        name: "Content",
        link: "/platform/content",
        title: "Content",
      },
      {
        name: "Ads",
        link: "/platform/ads",
        title: "Ads",
      },
      {
        name: "Intelligence",
        link: "/platform/intelligence",
        title: "Intelligence",
      },
    ],
  },
  {
    name: "Tour by Industry",
    link: "/tour-by-industry",
    title: "Industry Tours",
  },
  {
    name: "CRM",
    link: "/crm/contacts",
    title: "CRM",
  },
  {
    name: "Payments",
    link: "/payments",
    title: "Payments",
  },
  {
    name: "Forms",
    link: "/forms",
    title: "Forms",
  },
  {
    name: "Builder",
    link: "/banner/builder",
    title: "Builder",
  },

  {
    name: "More",
    links: [
      // {
      //   name: "About",
      //   link: "/platform/items",
      //   title: "About",
      // },
      {
        name: "Creative Services",
        link: "/creative-services",
        title: "Creative Services",
      },
      {
        name: "Success Stories",
        link: "/success-stories",
        title: "Success Stories",
      },
      // {
      //   name: "Our Reviews",
      //   link: "/platform/items",
      //   title: "Our Reviews",
      // },
      // {
      //   name: "Partner With Us",
      //   link: "/platform/items",
      //   title: "Partner With Us",
      // },
      {
        name: "Marketplace",
        link: "/marketplace",
        title: "Marketplace",
      },
      {
        name: "Support",
        link: "/support",
        title: "Support",
      },
      // {
      //   name: "Blog",
      //   link: "/platform/items",
      //   title: "Blog",
      // },
      // {
      //   name: "Contact Us",
      //   link: "/platform/items",
      //   title: "Contact Us",
      // },
    ],
  },
  // { name: "Careers", link: "/contact" },
];

