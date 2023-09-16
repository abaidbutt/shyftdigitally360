import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { OutlinedInput } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { userData } from "../../store/counterSlice";
import { ListItemIcon, ListItemText } from "@mui/material";

const classes = {
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  indeterminateColor: {
    color: "#f50057",
  },
  selectAllText: {
    fontWeight: 500,
  },
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Naveed", "Muhammad Ans", "Shyft"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
// const ListItem = styled('li')(({ theme }) => ({
//     margin: theme.spacing(0.5),
// }));

const Task = () => {
  const dispatch = useDispatch();
  const options = [
    { label: "foo", value: "foo" },
    { label: "bar", value: "bar" },
    { label: "jar", value: "jar" },
    { label: "nar", value: "nar" },
    { label: "mar", value: "mar" },
    { label: "far", value: "far" },
  ];
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      // selectTemplate: {},
      flagCheckbox: false,
      summary: "",
      contact: "",
      details: "",
      url: "",
      projectLinks: "",
      deals: "",
      attachments: "",
      assignedTo: [],
      repeatEvery: "",
      repeatEveryNumber: "",
      datePickerEndFrom: "",
      dataPickerEndTo: "",
      dataPickerStartFrom: "",
      dataPickerStartTo: "",
      selectAll: [],
      // image: '',
      // specificColor: false,
      // select: {},
      privateCheckbox: false,
      repeatingEndsDate: "",
      remindMe: "",
      remindMeNumber: "",
    },
  });
  const isAllSelected =
    options.length > 0 && getValues("selectAll").length === options.length;
  const onSubmit = (data) => {
    console.log(data);
  };
  const userAllData = useSelector((state) => state.counter.data);
  console.log(userAllData, "task data");
  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);
  const [value, setValue] = useState([]);
  console.log(value);

  return (
    <>
      <Container maxWidth="md">
        <Paper sx={{ p: 4, my: 2 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="subtitle1">Select Template</Typography>
                <Box sx={{ minWidth: 120 }}>
                  <Controller
                    name="selectTemplate"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <Select
                          {...field}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label=""
                        >
                          <MenuItem value="none">None</MenuItem>
                          <MenuItem value="forpsychology">
                            forpsychology
                          </MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Box>
                <Controller
                  name="flagCheckbox"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <FormGroup sx={{ my: 4 }}>
                      <FormControlLabel
                        {...field}
                        control={<Checkbox />}
                        label="Flag this task as urgent"
                      />
                    </FormGroup>
                  )}
                />
                <Typography variant="subtitle1" sx={{ mt: 2, mb: 0 }}>
                  Contact
                </Typography>
                <Controller
                  name="contact"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      {...field}
                      placeholder="contact"
                      sx={{ background: "White", mt: 2 }}
                      size="small"
                    />
                  )}
                />
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  Summary/Title
                </Typography>
                <Controller
                  name="summary"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      sx={{ background: "White", mt: 2, mb: 2 }}
                      size="small"
                      {...field}
                      placeholder="summary/title"
                    />
                  )}
                />
                <Typography variant="subtitle1" sx={{ pt: 3 }}>
                  Details
                </Typography>
                <Controller
                  name="details"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="outlined-multiline-static"
                      label=""
                      multiline
                      {...field}
                      fullWidth
                      rows={4}
                      placeholder="details"
                    />
                  )}
                />
                <Typography variant="subtitle1" sx={{ mt: 3 }}>
                  URL/Link
                </Typography>
                <Controller
                  name="url"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      {...field}
                      placeholder="URL/link"
                      sx={{ background: "White", pt: 1 }}
                      size="small"
                    />
                  )}
                />
                <Divider />
                <Typography variant="subtitle1" sx={{ mt: 3 }}>
                  Link to Projects
                </Typography>
                <Controller
                  name="projectLinks"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      {...field}
                      placeholder="Link to Projects"
                      sx={{ background: "White", pt: 1 }}
                      size="small"
                    />
                  )}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "gray", pt: 1, fontWeight: 100 }}
                >
                  Begin typing to search for projects to link to this task
                  (optional).
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 3 }}>
                  Link to Deals
                </Typography>
                <Controller
                  name="deals"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      {...field}
                      placeholder="Link to Deals"
                      sx={{ background: "White", pt: 1 }}
                      size="small"
                    />
                  )}
                />
                <Typography
                  variant="body1"
                  sx={{ color: "gray", pt: 1, fontWeight: 100 }}
                >
                  Begin typing to search for deals to link to this task
                  (optional).
                </Typography>
                <FormGroup sx={{ mt: 3 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Assign a specific color to this task"
                  />
                </FormGroup>
                <Divider sx={{ my: 4 }} />
                <Typography variant="subtitle1">Attachments</Typography>
                <Box>
                  <Controller
                    name="attachments"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Button
                          sx={{
                            py: 4,
                            display: "flex",
                            justifyContent: "center",
                          }}
                          variant="outlined"
                          fullWidth
                          component="label"
                        >
                          <CloudUploadIcon fontSize="large" />
                          <input
                            {...field}
                            hidden
                            accept="image/*pdf"
                            type="file"
                          />
                        </Button>
                      </Stack>
                    )}
                  />
                </Box>
                <Divider />
                <Typography sx={{ mt: 2 }}>Assigned to</Typography>
                <Controller
                  name="selectAll"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      fullWidth
                      labelId="mutiple-select-label"
                      multiple
                      value={value}
                      onChange={onChange}
                      renderValue={(value) => value.join(", ")}
                      MenuProps={MenuProps}
                    >
                      <MenuItem
                        value={value}
                        classes={{
                          root: isAllSelected ? classes.selectedAll : "",
                        }}
                      >
                        <ListItemIcon>
                          <Checkbox
                            classes={{
                              indeterminate: classes.indeterminateColor,
                            }}
                            checked={isAllSelected}
                            indeterminate={
                              getValues("selectAll").length > 0 &&
                              getValues("selectAll").length < options.length
                            }
                          />
                        </ListItemIcon>
                        <ListItemText
                          classes={{ primary: classes.selectAllText }}
                          primary="Select All"
                        />
                      </MenuItem>
                      {options.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                          <ListItemIcon>
                            <Checkbox
                              checked={
                                getValues("selectAll").indexOf(option) > -1
                              }
                            />
                          </ListItemIcon>
                          <ListItemText primary={option.label} />
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />

                <Box sx={{ minWidth: 120, mb: 3 }}>
                  <Controller
                    name="assignedTo"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field, value, ...otherOptions }) => (
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          defaultValue={[]}
                          value={value}
                          {...field}
                          // onChange={handleChange}
                          input={
                            <OutlinedInput id="select-multiple-chip" label="" />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                          {...otherOptions}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </Box>

                <Box sx={{ display: "flex", width: 365 }}>
                  <Typography sx={{ pt: 2, pr: 2 }}>Start:</Typography>
                  <Controller
                    name="dataPickerStartFrom"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Select Date"
                          {...field}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  <Controller
                    name="dataPickerStartTo"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <Box sx={{ ml: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Select Date"
                            {...field}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Box>
                    )}
                  />
                </Box>
                <Box sx={{ display: "flex", mt: 2, width: 365 }}>
                  <Typography sx={{ pt: 2, pr: 3 }}>End:</Typography>
                  <Controller
                    name="datePickerEndFrom"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Select Date"
                          {...field}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    )}
                  />
                  <Controller
                    name="dataPickerEndTo"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <Box sx={{ ml: 1 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Select Date"
                            {...field}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Box>
                    )}
                  />
                </Box>
                <FormGroup sx={{ my: 4 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="This is an all day event"
                  />
                </FormGroup>
                <Divider />
                <Typography sx={{ mt: 3 }}>Repeat every</Typography>
                <Box>
                  <Controller
                    name="repeatEveryNumber"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        style={{
                          width: "60px",
                          height: "30px",
                          textAlign: "center",
                          marginTop: "13px",
                          marginRight: "10px",
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="repeatEvery"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <FormControl sx={{ pt: 1, width: 82 }}>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label=""
                          placeholder="Days"
                          {...field}
                          size="small"
                        >
                          <MenuItem value="days">Days</MenuItem>
                          <MenuItem value="week">Week</MenuItem>
                          <MenuItem value="month">Month</MenuItem>
                          <MenuItem value="year">Year</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Box>
                <Typography sx={{ pt: 2 }}>Repeating Ends On</Typography>
                <Box sx={{ width: 170, pt: 1 }}>
                  <Controller
                    name="repeatingEndsDate"
                    control={control}
                    render={({ field }) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Select Date"
                          {...field}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    )}
                  />
                </Box>
                <Controller
                  name="privateCheckbox"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <FormGroup sx={{ my: 4 }}>
                      <FormControlLabel
                        {...field}
                        control={<Checkbox />}
                        label="Keep Task Private (no other team member will be able to see this task)"
                      />
                    </FormGroup>
                  )}
                />
                <Box sx={{ display: "flex" }}>
                  <Controller
                    name="remindMeNumber"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="number"
                        style={{
                          width: "60px",
                          height: "30px",
                          textAlign: "center",
                          marginTop: "13px",
                          marginRight: "10px",
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="remindMe"
                    control={control}
                    // rules={{ required: true }}
                    render={({ field }) => (
                      <FormControl sx={{ pt: 1, width: 100 }}>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label=""
                          {...field}
                          size="small"
                        >
                          <MenuItem value={"days"}>Days</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />

                  <Typography sx={{ pl: 1, pt: 2 }}>
                    before task starts.
                  </Typography>
                </Box>
                {/* multi select */}
                <Controller
                  name="assignedTo"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel>Chip</InputLabel>
                      <Select
                        multiple
                        {...field}
                        input={<OutlinedInput label={"Name"} />}
                        renderValue={(selected) => {
                          return (
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
                          );
                        }}
                        MenuProps={MenuProps}
                      >
                        {names.map((item, index) => (
                          <MenuItem
                            key={index}
                            value={item}
                            style={getStyles(
                              item.name,
                              getValues("assignedTo"),
                              theme
                            )}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                <Divider sx={{ my: 4 }} />
                {/* select all */}
                <Controller
                  name="selectAll"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      fullWidth
                      multiple
                      value={value}
                      onChange={onChange}
                      renderValue={(selected) => {
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 0.5,
                            }}
                          >
                            {selected.map((item, index) => (
                              <Chip
                                key={index}
                                label={item.label}
                                onMouseDown={(event) => {
                                  event.stopPropagation();
                                }}
                                onDelete={() => {
                                  setValue(
                                    "selectAll",
                                    selected.filter((selec) => selec !== item)
                                  );
                                }}
                              />
                            ))}
                          </Box>
                        );
                      }}
                      MenuProps={MenuProps}
                    >
                      <ListItem
                        classes={{
                          root: isAllSelected ? classes.selectedAll : "",
                        }}
                      >
                        <ListItemIcon>
                          <Checkbox
                            classes={{
                              indeterminate: classes.indeterminateColor,
                            }}
                            checked={isAllSelected}
                            indeterminate={
                              selectedItems.length > 0 &&
                              selectedItems.length < options.length
                            }
                            onChange={(event) => {
                              if (event.target.checked) {
                                setValue("selectAll", options);
                              } else {
                                setValue("selectAll", []);
                              }
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          classes={{ primary: classes.selectAllText }}
                          primary="Select All"
                        />
                      </ListItem>
                      {options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          <ListItemIcon>
                            <Checkbox
                              checked={
                                selectedItems.findIndex(
                                  (item) => item.value === option.value
                                ) > -1
                              }
                            />
                          </ListItemIcon>
                          <ListItemText primary={option.label} />
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
export default Task;
