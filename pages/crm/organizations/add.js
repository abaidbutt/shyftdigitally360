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
  MenuItem,
  IconButton,
} from "@mui/material";

import Select from "react-select";
import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
import { KeyboardBackspace } from "@mui/icons-material";
import {
  FormAutoComplete,
  Input,
  CustomMultiSelect,
  MultiSelect,
  CustomSelect,
} from "../../../src/components/Custom/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const options = [
  { value: "chocolate", name: "Chocolate" },
  { value: "strawberry", name: "Strawberry" },
  { value: "vanilla", name: "Vanilla" },
];
const schema = yup
  .object({
    name: yup.string().required(),
    website: yup.string().required(),
  })
  .required();
const Add = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: "",
      assignTo: [],
      street: "",
      office: "",
      state: "",
      city: "",
      zipcode: "",
      website: "",
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
              Add Organization
            </Typography>
            <IconButton>
              <KeyboardBackspace />
            </IconButton>
          </Box>
          <Divider />

          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* <Typography>Name</Typography>
              <TextField
                name="Name"
                required
                fullWidth
                autoFocus
                sx={{ background: "White" }}
                size="small"
              /> */}
              <Input namer="name" control={control} label="Name" />
            </Grid>
            <Grid item xs={12}>
              {/* <Typography> Address</Typography>
              <TextField
                name="street"
                required
                fullWidth
                autoFocus
                sx={{ background: "White" }}
                size="small"
              /> */}
              <Input namer="street" control={control} label="Street" />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                name="office"
                required
                fullWidth
                autoFocus
                sx={{ background: "White" }}
                size="small"
              /> */}
              <Input namer="office" control={control} label="Office" />
            </Grid>
            <Grid item container spacing={1}>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  name="City"
                  required
                  fullWidth
                  autoFocus
                  sx={{ background: "White" }}
                  size="small"
                /> */}
                <Input namer="city" control={control} label="City" />
              </Grid>
              <Grid item xs={12} sm={3}>
                {/* <Select options={options} placeholder="State" /> */}
                <CustomSelect
                  namer="state"
                  control={control}
                  label="State"
                  data={options?.map((item) => (
                    <MenuItem value={item.value}>{item.name}</MenuItem>
                  ))}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Input namer="zipcode" control={control} label="zipcode" />

                {/* <TextField
                  name="zipcode"
                  required
                  fullWidth
                  autoFocus
                  sx={{ background: "White" }}
                  size="small"
                /> */}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Input namer="website" control={control} label="Website" />

              {/* <Typography>Website</Typography>
              <TextField
                name="website"
                required
                fullWidth
                autoFocus
                sx={{ background: "White" }}
                size="small"
              /> */}
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Assign To</Typography>
              
              <Select options={options} /> */}
              <Typography>Assigned To</Typography>
              <MultiSelect
                namer="assignTo"
                label="Assigned To"
                control={control}
                data={options}
                // getValues={getValues}
              />
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
