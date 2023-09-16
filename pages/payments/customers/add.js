import React from "react";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Checkbox,
  MenuItem,
  Paper,
} from "@mui/material";
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

import { Box } from "@mui/system";
import { useRouter } from "next/dist/client/router";
const options = [
  { name: "Canada", value: "CA" },
  { name: "America", value: "USA" },
  { name: "Australia", vlaue: "Aus" },
];
const AddCustomer = () => {
  const router = useRouter();
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
    <div>
      <Container maxWidth="md">
        <Typography variant="h4">Add Customer </Typography>
        <Paper sx={{ p: 4 }} elevation={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography>Name</Typography>
                <Input namer="name" control={control} />
                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Email Address</Typography>
                <Input namer="email" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Description</Typography>
                <Input
                  namer="description"
                  control={control}
                  multiline
                  rows={4}
                />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Billing Information</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Country</Typography>
                <CustomSelect
                  control={control}
                  namer="country"
                  data={options?.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.name}
                    </MenuItem>
                  ))}
                />
                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
                >
                <MenuItem value="pakistan">pakistan</MenuItem>
                <MenuItem value="india">india</MenuItem>
                <MenuItem value="canada">canada</MenuItem>
              </TextField> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Address 1</Typography>
                <Input namer="address1" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Address 2</Typography>
                <Input namer="address2" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>City</Typography>
                <Input namer="city" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>State</Typography>
                <Input namer="state" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Postal Code</Typography>
                <Input namer="postalCode" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Phone Number</Typography>
                <Input namer="phone" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Shipping Details</Typography>
                <CustomCheckbox control={control} namer="shipping" />
                {/* <Checkbox /> */}
                {/* <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="Phone"
            /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography>Invoice Prefix</Typography>
                <Input namer="prefix" control={control} />

                {/* <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              /> */}
              </Grid>
              <Grid item xs={12} container columnSpacing={1}>
                <Grid item xs={12}>
                  <Typography>Tax IDs</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input namer="tax" control={control} />

                  {/* <TextField
                  required
                  fullWidth
                  sx={{ background: "White" }}
                  size="small"
                  name="Phone"
                /> */}
                </Grid>
                <Grid item xs={6}>
                  <Input namer="ids" control={control} />

                  {/* <TextField
                  required
                  fullWidth
                  sx={{ background: "White" }}
                  size="small"
                  name="Phone"
                /> */}
                </Grid>
              </Grid>
              <Grid xs={12} item>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="outlined" onClick={() => router.back()}>
                    Cancel
                  </Button>
                  <Button variant="contained" sx={{ ml: 1 }} type="submit">
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
AddCustomer.getLayout = getPaymentLayout;
export default AddCustomer;
