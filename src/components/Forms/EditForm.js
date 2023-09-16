import React from "react";

import { Typography, Button, Box, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import DragnDrop from "./DragnDrop";
const EditForm = () => {
  return (
    <div>
      <Box sx={{ my: 2 }}>
        <DragnDrop />
      </Box>

      <Button variant="outlined" sx={{ py: 2, borderRadius: 0 }}>
        Add Field
      </Button>
      <Button variant="outlined" sx={{ py: 2, borderRadius: 0 }}>
        Add Heading, subheading, Paragraph
      </Button>
    </div>
  );
};

export default EditForm;
