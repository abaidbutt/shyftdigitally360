import * as React from "react";
import {
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
} from "@mui/material/";
import MoreVertIcon from "@mui/icons-material/MoreVert";
Menu;

function createData(name, calories, fat, carbs, protein, status, menu) {
  return { name, calories, fat, carbs, protein, status, menu };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 24, <MoreVertIcon />),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 24, <MoreVertIcon />),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 24, <MoreVertIcon />),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 24, <MoreVertIcon />),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 24, <MoreVertIcon />),
];

export default function AcccessibleTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Invoice</TableCell>
              <TableCell align="right">Balance</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Finalized</TableCell>
              <TableCell align="right">Due Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell
                  align="right"
                  sx={{ cursor: "pointer" }}
                  onClick={handleClick}
                >
                  {row.menu}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Edit Draft</MenuItem>
        <MenuItem onClick={handleClose}>Delete Draft</MenuItem>
        <MenuItem onClick={handleClose}>Charge Customers</MenuItem>
        <MenuItem onClick={handleClose}>View Invoice Details</MenuItem>
        <MenuItem onClick={handleClose}>View Customers</MenuItem>
      </Menu>
    </>
  );
}
