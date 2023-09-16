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
  MenuItem,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Select from "react-select";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { KeyboardBackspace } from "@mui/icons-material";
import {
  FormAutoComplete,
  Input,
  CustomMultiSelect,
  MultiSelect,
  CustomSelect,
  CustomPicker,
} from "../../../src/components/Custom/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const options = [
  { value: "chocolate", name: "Chocolate" },
  { value: "strawberry", name: "Strawberry" },
  { value: "vanilla", name: "Vanilla" },
];
const schema = yup.object({}).required();
const Add = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      contact: [],
      title: "",
      detail: "",
      link: "",
      value: "",
      payment: "",

      assignTo: [],

      status: [],
      closingdate: new Date(Date.now()),
    },
    resolver: yupResolver(schema),
    shouldUnregister: false,
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  

  return (
    <Container maxWidth="md">
      <Paper elevation={5} sx={{ m: 3 }}>
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
              Add Deals
            </Typography>
            <IconButton>
              <KeyboardBackspace />
            </IconButton>
          </Box>
          <Divider />

          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item xs={12}>
              <Typography>Contact *</Typography>
              <MultiSelect namer="contact" control={control} data={options} />
            </Grid>
            <Grid item xs={12}>
              <Typography>Title</Typography>
              <Input control={control} namer="title" placeholder={"Title"} />
            </Grid>
            <Grid item xs={12}>
              <Typography>Details</Typography>
              <Input
                control={control}
                namer="detail"
                placeholder={"Details"}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Url/Link</Typography>
              <Input control={control} namer="link" placeholder={"Url/Link"} />
            </Grid>
            <Grid item xs={12}>
              <Typography>$Value</Typography>
              <Input
                control={control}
                namer="value"
                placeholder={"Value in $"}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Payment Schedule</Typography>

              <CustomSelect
                namer="payment"
                control={control}
                data={options?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Estimated Closing Date</Typography>
              <CustomPicker namer="closingdate" control={control} />
              {/* <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} size="small" />}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Assigned To</Typography>
              <MultiSelect namer="assignTo" control={control} data={options} />
            </Grid>
            <Grid item xs={12}>
              <Typography>Status</Typography>
              <MultiSelect namer="status" control={control} data={options} />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                <Button variant="outlined" sx={{ mx: 1 }}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  // fullWidth
                  variant="contained"
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
Add.getLayout = getCRMLayout;
export default Add;
