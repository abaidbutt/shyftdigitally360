import React from "react";
import DataTable from "./DataTable";
import { Typography, Button, Box, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
const Embed = () => {
  return (
    <div>
      <Box>
        <Typography variant="h5">Embed Form Code</Typography>
        <Typography variant="subtitle2">
          Copy and paste this link to your website to use the form.
        </Typography>
      </Box>
      <TextField
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
        placeholder="Search here"
      />
      <Box sx={{ my: 2 }}>
        <Button variant="outlined" sx={{ py: 2, borderRadius: 0 }}>
          Copy Embed Code
        </Button>
      </Box>
    </div>
  );
};

export default Embed;
