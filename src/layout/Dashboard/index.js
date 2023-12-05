import React from "react";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Avatar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import Link from "next/link";
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Box>
        <AppBar elevation={0} sx={{}} position="static" color="inherit">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link style={{  cursor: "pointer" }} href={"/"}>
                <Avatar
                  src="/shyft-360.png"
                  sx={{ width: "150px", height: "39px" }}
                  variant="square"
                />
              </Link>
              {/* <Button endIcon={<KeyboardArrowDown color={"action"} />}>
                <Typography variant="h6" color="black">
                  Payment
                </Typography>
              </Button> */}
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  src="https://marketing360.s3.amazonaws.com/partners/torstar-32x32.png"
                  sx={{ width: "30px", height: "30px" }}
                />
                <Typography variant="h6" color="black" sx={{ ml: 1 }}>
                  Payment
                </Typography>
              </IconButton> */}
            </Toolbar>
          </Container>
        </AppBar>
        {children}
      </Box>
    </div>
  );
};

export const getDashboardLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);
export default DashboardLayout;
