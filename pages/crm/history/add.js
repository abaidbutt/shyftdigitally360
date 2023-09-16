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
const schema = yup.object({}).required();

const Add = () => {
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
              Add History
            </Typography>
            <IconButton>
              <KeyboardBackspace />
            </IconButton>
          </Box>
          <Divider />

          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* <Typography>Contact *</Typography>

            <Select options={options} /> */}
              <CustomSelect
                namer="contact"
                control={control}
                label="Contact"
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Details</Typography> */}
              {/* <TextField
              name="Details"
              required
              fullWidth
              multiline
              rows={4}
              autoFocus
              sx={{ background: "White" }}
              size="small"
            /> */}
              <Input
                namer="detail"
                control={control}
                label="Details"
                multiline
                rows={4}
              />
            </Grid>

            <Grid item xs={12}>
              {/* <Typography>History Type</Typography>
            <Select options={options} placeholder="State" /> */}
              <CustomSelect
                namer="historyTypes"
                control={control}
                label="historyTypes"
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Notify Users</Typography>
            <Select options={options} placeholder="State" /> */}
              <CustomSelect
                namer="notify"
                control={control}
                label="Notify Users"
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
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
