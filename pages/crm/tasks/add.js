import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
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
      commission: "",
      allowExtraEmails: false,
      linkProject: [],
      linkDeals: [],
    },
    resolver: yupResolver(schema),
    shouldUnregister: false,
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Paper component="form" noValidate sx={{ m: 3 }}>
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
            Add Task
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
            <Typography>Link to Projects</Typography>
            <MultiSelect namer="linkProject" control={control} data={options} />
          </Grid>
          <Grid item xs={12}>
            <Typography>Link to Deals</Typography>
            <MultiSelect namer="linkDeals" control={control} data={options} />
          </Grid>
          <Grid item xs={12}>
            <CustomCheckbox
              namer="color"
              control={control}
              label="Assign a color "
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Assigned To</Typography>
            <MultiSelect namer="assignTo" control={control} data={options} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Time Span Start</Typography>
            <CustomPicker namer="start" control={control} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Time Span End</Typography>
            <CustomPicker namer="end" control={control} />
          </Grid>
          <Grid item xs={12}>
            <CustomCheckbox
              namer="allday"
              control={control}
              label="All Day Event "
            />
          </Grid>
          <Grid container item sm={12}>
            <Grid item xs={12}>
              <Typography>Repeat Every</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input control={control} namer="day" placeholder={"Days"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                namer="slect"
                control={control}
                data={options?.map((item, index) => (
                  <MenuItem value={item.value} key={index}>
                    {" "}
                    {item.name}
                  </MenuItem>
                ))}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomCheckbox
              namer="allday"
              control={control}
              label="Keep task private "
            />
          </Grid>
          <Grid container item sm={12}>
            <Grid item xs={12}>
              <Typography>Remind me</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input control={control} namer="day" placeholder={"Days"} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomSelect
                namer="slect"
                control={control}
                data={options?.map((item, index) => (
                  <MenuItem value={item.value} key={index}>
                    {" "}
                    {item.name}
                  </MenuItem>
                ))}
              />
            </Grid>
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
      </Paper>
    </Container>
  );
};
Add.getLayout = getCRMLayout;
export default Add;
