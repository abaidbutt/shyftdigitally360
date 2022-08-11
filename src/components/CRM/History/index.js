import * as React from "react";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import {
  Typography,
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Grid,
  Avatar,
} from "@mui/material";
import { Add, Circle, FilterList, MoreVert, Search } from "@mui/icons-material";

export default function BasicTable() {
  return (
    <>
      <Box>
        <Typography variant="h5">History</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button endIcon={<FilterList />} variant="outlined" sx={{ mx: 1 }}>
              Filter
            </Button>
            <TextField
              variant="outlined"
              sx={{ background: "white" }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <Link href="/crm/history/add" passHref>
              <Button variant="contained" startIcon={<Add />}>
                History
              </Button>
            </Link>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Paper sx={{ p: 3, m: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={2} md={2} sm={2} lg={2}>
            <Box>
              <Typography>May</Typography>
              <Typography>16</Typography>
            </Box>
          </Grid>
          <Grid item xs={10} sm={8} md={6} lg={6}>
            <Box>
              <Typography>5/16/2022 • 8:23 PM • muhammad ans</Typography>
              <Typography>
                Successfully associate 1 contact to digitally Organization.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar>ans</Avatar>
              <Typography>ABaid Butt</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Contact</Typography>
              <IconButton>
                <Circle />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
