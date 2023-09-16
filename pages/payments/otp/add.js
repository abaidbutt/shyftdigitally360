import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";

import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { KeyboardBackspace } from "@mui/icons-material";
import {
  FormAutoComplete,
  Input,
  CustomMultiSelect,
  MultiSelect,
  CustomSelect,
  CustomCheckbox,
} from "../../../src/components/Custom/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const options = [
  { value: "chocolate", name: "Chocolate" },
  { value: "strawberry", name: "Strawberry" },
  { value: "vanilla", name: "Vanilla" },
];

const AddOTP = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: "",
      source: "",
      email: "",
      assignTo: [],
      phone: "",
      other: "",
      bestway: "",
      color: "",
      status: "",
      types: "",
    },
    resolver: yupResolver(schema),
    shouldUnregister: false,
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ m: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 3,
              pb: 0,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add One-Time Payment
            </Typography>
            <IconButton>
              <KeyboardBackspace />
            </IconButton>
          </Box>
          <Divider />

          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item xs={12}>
              <Typography>Amount</Typography>
              <Input namer="amount" control={control} />
              {/* <TextField
                name="Name"
                required
                fullWidth
                autoFocus
                sx={{ background: "White" }}
                size="small"
              /> */}
            </Grid>

            <Grid item xs={12}>
              <Typography>Cardholder Name</Typography>
              <Input namer="holdername" control={control} />
              {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Email</Typography>
              <Input namer="email" control={control} />
              {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="other Phone"
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Description</Typography>
              <Input namer="description" control={control} />

              {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="email"
              /> */}
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ m: 3, mb: 2 }}
              >
                Submit{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
AddOTP.getLayout = getPaymentLayout;
export default AddOTP;
