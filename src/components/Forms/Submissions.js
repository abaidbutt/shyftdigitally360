import React from "react";
import DataTable from "./DataTable";
import { Typography, Button, Box, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
const Submissions = () => {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Form Submission</Typography>
        <Box>
          <TextField
            variant="outlined"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
            placeholder="Search here"
          />
          <Button
            variant="outlined"
            endIcon={<Search />}
            sx={{ py: 2, borderRadius: 0 }}
          />
        </Box>
      </Box>
      <DataTable />
    </div>
  );
};

export default Submissions;
