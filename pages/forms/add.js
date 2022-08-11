import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import { getDashboardLayout } from "../../src/layout/Dashboard";
const AddForms = () => {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="md" component={Paper} sx={{ p: 4, my: 2 }}>
        <Typography variant="h4"> Create Forms</Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Form Name</Typography>
            <TextField
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="form name"
            />
          </Grid>

          <Grid xs={12} item>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outlined" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button variant="contained" sx={{ ml: 1 }}>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
AddForms.getLayout = getDashboardLayout;
export default AddForms;
