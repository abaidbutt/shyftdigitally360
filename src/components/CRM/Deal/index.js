import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
} from "@mui/material";
import { Add, FilterList, Search } from "@mui/icons-material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <>
      <Box>
        <Typography variant="h5">Organization</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Button endIcon={<FilterList />} variant="outlined" sx={{ mx: 1 }}>
              Filter
            </Button>
            <TextField
              variant="outlined"
              sx={{ background: "#fff" }}
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
          <Link href="/crm/deals/add" passHref>
            <Button variant="contained" startIcon={<Add />}>
              Deals
            </Button>
          </Link>
        </Box>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={1} sx={{ my: 2 }}>
        <Grid lg={2} xl={2} md={3} sm={4} xs={6} item>
          <Paper
            sx={{ textAlign: "center", borderRadius: 2, height: "100%", p: 4 }}
            elevation={5}
          >
            <Typography variant="h6">One-Time</Typography>
            <Typography variant="h5"> $ 0.00</Typography>
          </Paper>
        </Grid>
        <Grid lg={2} xl={2} md={3} sm={4} xs={6} item>
          <Paper
            sx={{ textAlign: "center", borderRadius: 2, height: "100%", p: 4 }}
            elevation={5}
          >
            <Typography variant="h6">Per-Day</Typography>
            <Typography variant="h5"> $ 0.00</Typography>
          </Paper>
        </Grid>
        <Grid lg={2} xl={2} md={3} sm={4} xs={6} item>
          <Paper
            sx={{ textAlign: "center", borderRadius: 2, height: "100%", p: 4 }}
            elevation={5}
          >
            <Typography variant="h6">Per Week</Typography>
            <Typography variant="h5"> $ 0.00</Typography>
          </Paper>
        </Grid>
        <Grid lg={2} xl={2} md={3} sm={4} xs={6} item>
          <Paper
            sx={{ textAlign: "center", borderRadius: 2, height: "100%", p: 4 }}
            elevation={5}
          >
            <Typography variant="h6">Per Month</Typography>
            <Typography variant="h5"> $ 0.00</Typography>
          </Paper>
        </Grid>
        <Grid lg={2} xl={2} md={3} sm={4} xs={6} item>
          <Paper
            sx={{ textAlign: "center", borderRadius: 2, height: "100%", p: 4 }}
            elevation={5}
          >
            <Typography variant="h6">Per Quarter</Typography>
            <Typography variant="h5"> $ 0.00</Typography>
          </Paper>
        </Grid>
        <Grid lg={2} xl={2} md={3} sm={4} xs={6} item>
          <Paper
            sx={{ textAlign: "center", borderRadius: 2, height: "100%", p: 4 }}
            elevation={5}
          >
            <Typography variant="h6">Per Year</Typography>
            <Typography variant="h5"> $ 0.00</Typography>
          </Paper>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ p: 4, borderRadius: 1, my: 2 }}
      elevation={5}  >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Date Created</StyledTableCell>
              <StyledTableCell align="right">Contacts</StyledTableCell>
              <StyledTableCell align="right">Assigned To</StyledTableCell>
              <StyledTableCell align="right">Value</StyledTableCell>
              <StyledTableCell align="right">Paid</StyledTableCell>
              <StyledTableCell align="right">Est. Close Date</StyledTableCell>
              <StyledTableCell align="right"> Status</StyledTableCell>
              <StyledTableCell align="right">History</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
