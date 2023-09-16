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

const data = [
  {
    name: "All the tools you need to grow and manage your business",
    logo: "/shyft-360.png",
  },
  {
    name: "Beautiful websites that drive results",
    logo: "/shyft-360.png",
  },
  {
    name: "Monitor reviews and manage your online reputation",
    logo: "/shyft-360.png",
  },
];
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
  })
  .required();

const options = [
  { value: "chocolate", name: "Chocolate" },
  { value: "strawberry", name: "Strawberry" },
  { value: "vanilla", name: "Vanilla" },
];

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
              Add Contacts
            </Typography>
            <IconButton>
              <KeyboardBackspace />
            </IconButton>
          </Box>
          <Divider />

          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* <Typography>Name</Typography> */}
              <Input namer="name" control={control} label="Name" />
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
              {/* <Typography>Source</Typography> */}
              <CustomSelect
                namer="source"
                control={control}
                label="Source"
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
              />
              {/* <CustomMultiSelect
              namer="source"
              control={control}
              label="Source"
              data={options.map((item, index) => (
                <MenuItem
                  key={index}
                  value={item}
                  style={getStyles(item.name, getValues("source"), theme)}
                >
                  {item.name}
                </MenuItem>
              ))}
              render={(selected) => (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5,
                  }}
                >
                  {selected.map((value, index) => (
                    <Chip key={index} label={value.name} />
                  ))}
                </Box>
              )}
            /> */}
              {/* <Select options={options} /> */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Assigned To</Typography>
              <MultiSelect
                namer="assignTo"
                label="Assigned To"
                control={control}
                data={options}
                // getValues={getValues}
              />
              {/* <FormAutoComplete name="assignTo" control={control} /> */}
              {/* <Select options={options} /> */}
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Contact Type</Typography>
            <Select options={options} /> */}
              <CustomSelect
                namer="types"
                label="Types"
                control={control}
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Contact Status</Typography> */}
              {/* <Select options={options} /> */}
              <CustomSelect
                namer="status"
                label="Status"
                control={control}
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Color</Typography> */}
              {/* <Select options={options} /> */}
              <CustomSelect
                namer="color"
                label="Choose Color for this"
                control={control}
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Best Way to Contact</Typography> */}
              {/* <Select options={options} /> */}
              <CustomSelect
                namer="bestway"
                label="Besy Way to Contact"
                control={control}
                data={options?.map((item) => (
                  <MenuItem value={item.value}>{item.name}</MenuItem>
                ))}
              />
            </Grid>
            <Grid item xs={12}>
              <Input namer="phone" control={control} label="Phone" />

              {/* <Typography>Phone</Typography>
            <TextField
            required
            fullWidth
            sx={{ background: "White" }}
            size="small"
            name="Phone"
          /> */}
            </Grid>
            <Grid item xs={12}>
              {/* <Typography>Other Phone</Typography> */}
              <Input namer="other" control={control} label="Other Phone" />

              {/* <TextField
              required
              fullWidth
              sx={{ background: "White" }}
              size="small"
              name="other Phone"
            /> */}
            </Grid>
            <Grid item xs={12}>
              <Input namer="email" control={control} label="Email" />

              {/* <Typography>Email</Typography>
            <TextField
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
Add.getLayout = getCRMLayout;
export default Add;
