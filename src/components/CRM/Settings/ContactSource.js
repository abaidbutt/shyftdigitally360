import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ModalBox from "../../Custom/ModalBox";
import { Input } from "../../Custom/Input";
import { useForm } from "react-hook-form";
import {
  Typography,
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
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

export default function ContactSource() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Box>
        <Typography variant="h5">Contact Types</Typography>
        <Typography variant="subtitle1">
          Contact types allow you to organize the CRM by assigning a label that
          can be assigned to contacts.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleClick}
            >
              Add Contact Source
            </Button>
            <ModalBox
              open={open}
              label="Add a Contact"
              handleClose={handleClose}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input namer="name" control={control} />
                <Box sx={{ my: 2 }}>
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    size="large"
                    sx={{ mx: 1 }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </ModalBox>
          </Box>
          <TextField
            variant="outlined"
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
      </Box>
      <TableContainer
        component={Paper}
        sx={{ p: 4, borderRadius: 1, my: 2 }}
        elevation={5}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Types</StyledTableCell>
              <StyledTableCell align="right">Contacts</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
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
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
