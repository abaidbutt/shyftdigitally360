import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
// import {}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "butt",
    "butt@gmail.com",
    "state descriptioon window ssd",
    4.0
  ),
  createData("Ice cream sandwich", "shyft", "shyft@gmail.com", "", 4.3),
  createData(
    "Eclair",
    "new",
    "new@gmail.com",
    "state descriptioon window ssd",
    6.0
  ),
  createData(
    "Cupcake",
    "butt",
    "butt@gmail.com",
    "state descriptioon window ssd",
    4.3
  ),
  createData(
    "Gingerbread",
    "info",
    "info@gmail.com",
    "state descriptioon window ssd",
    3.9
  ),
];

export default function DataTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ p: 4, borderRadius: 1, my: 2 }}
      elevation={5}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Submitted On</TableCell>
            <TableCell>Submission</TableCell>

            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>

              <TableCell align="right">
                <MoreVert />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
