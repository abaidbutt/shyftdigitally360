import {
  TextField,
  FormHelperText,
  FormControl,
  Select,
  InputLabel,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
  OutlinedInput,
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
  MenuItem,
  Autocomplete,
  Stack,
} from "@mui/material";
import { useController, useWatch } from "react-hook-form";
import { useTheme } from "@emotion/react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

export function Input({ control, namer, label, ...props }) {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { isTouched, isDirty },
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });

  return (
    <>
      <TextField
        {...props}
        fullWidth
        onChange={onChange} // send value to hook form
        label={label}
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={name} // send down the input name
        inputRef={ref} // send input ref, so we can focus on input when error appear
        error={!!errors[namer]?.message}
      />
      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message && "This field is required"}
      </FormHelperText>
    </>
  );
}
export function CustomSelect({ control, namer, label, ...props }) {
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });

  return (
    <>
      <FormControl fullWidth error={!!errors[namer]?.message}>
        <InputLabel>{label}</InputLabel>
        <Select {...field} label={label}>
          {props.data}
        </Select>
      </FormControl>

      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message && "This field is required"}
      </FormHelperText>
    </>
  );
}
export function CustomPicker({ control, namer, label, ...props }) {
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });

  return (
    <>
      <DatePicker
        label={label}
        {...field}
        {...props}
        renderInput={(params) => (
          <TextField {...params} error={!!errors[namer]?.message} />
        )}
      />

      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message && "This field is required"}
      </FormHelperText>
    </>
  );
}
export function CustomMultiSelect({ control, namer, label, ...props }) {
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });

  return (
    <>
      <FormControl fullWidth error={!!errors[namer]?.message}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          {...field}
          input={<OutlinedInput label={label} />}
          renderValue={props.render}
          MenuProps={MenuProps}
        >
          {props.data}
        </Select>
      </FormControl>

      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message && "This field is required"}
      </FormHelperText>
    </>
  );
}
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function MultiSelect({ control, namer, getValues, label, ...props }) {
  const theme = useTheme();
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });
  const getValue = useWatch({ control, name: namer });
  // console.log(getValues(namer), getValue);
  return (
    <>
      <FormControl fullWidth error={!!errors[namer]?.message}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          {...field}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
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
          MenuProps={MenuProps}
        >
          {props?.data?.map((item, index) => (
            <MenuItem
              key={index}
              value={item}
              style={getStyles(item.name, getValue, theme)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message && "This field is required"}
      </FormHelperText>
    </>
  );
}
export function CustomCheckbox({ control, namer, label, ...props }) {
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });

  return (
    <>
      <FormControlLabel
        control={<Checkbox color="primary" {...field} checked={field.value} />}
        label={label}
      />
      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message}
      </FormHelperText>
    </>
  );
}
export function CustomToggleButton({ control, namer, label, ...props }) {
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <ToggleButtonGroup color="primary" exclusive {...field}>
        {props?.data?.map((item) => (
          <ToggleButton value={item.value}>{item.name}</ToggleButton>
        ))}
      </ToggleButtonGroup>

      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message}
      </FormHelperText>
    </>
  );
}
export function CustomCheckboxs({ control, namer, label, ...props }) {
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });

  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">{label}</FormLabel>
        <FormGroup>
          {props?.data.map((fruitOption) => (
            <FormControlLabel
              key={fruitOption.value}
              label={fruitOption.label}
              control={
                <Checkbox
                  value={fruitOption.value}
                  // For some reason codesandbox doesn't support `field.value.includes(...)`
                  checked={field.value.some(
                    (existingValue) => existingValue === fruitOption.value
                  )}
                  onChange={(event, checked) => {
                    if (checked) {
                      field.onChange([...field.value, event.target.value]);
                    } else {
                      field.onChange(
                        field.value.filter(
                          (value) => value !== event.target.value
                        )
                      );
                    }
                  }}
                />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
      <FormHelperText error={errors[namer]?.message ? true : false}>
        {errors[namer]?.message}
      </FormHelperText>
    </>
  );
}
export function FormAutoComplete({
  namer,
  control,
  label,
  setValue,
  ...props
}) {
  const {
    field,
    formState: { errors },
  } = useController({
    name: namer,
    control,
  });
  // const [selectedItems, setSelectedItems] = useState([]);
  // const selectedItems = useWatch({ control, name: namer }); // import useWatch from react-hook-form
  // const selectedItemChip = selectedItems.map((item) => {
  //   return (
  //     <Chip
  //       key={item}
  //       label={item.name}
  //       // deleteIcon={<Close />}
  //       onMouseDown={(event) => {
  //         event.stopPropagation();
  //       }}
  //       onDelete={() => {
  //         // setSelectedItems((prev) => [...prev.filter((entry) => entry !== item)]);
  //         setValue(
  //           namer,
  //           selectedItems.filter((entry) => entry !== item)
  //         );
  //       }}
  //     />
  //   );
  // });

  return (
    <>
      <Autocomplete
        multiple
        options={props.data}
        getOptionLabel={(option) => option.name}
        {...field}
        onChange={(e, newValue) => {
          field.onChange(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            label={label}
            error={!!errors[namer]?.message}
            helperText={errors[namer]?.message && "This Field is Required"}
          />
        )}
      />
    </>
  );
}

    export function MultiSelectAll({ control, namer, label, setValue, ...props }) {
      const {
        field,
        formState: { errors },
      } = useController({
        name: namer,
        control,
      });
      const selectedItems = useWatch({ control, name: namer });
      const isAllSelected =
        selectedItems.length > 0 && selectedItems.length === props?.data?.length;
      return (
        <>
          <FormControl fullWidth error={!!errors[namer]?.message}>
            <InputLabel>{label}</InputLabel>
            <Select
              fullWidth
              multiple
              {...field}
              input={<OutlinedInput label={label} />}
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
                        label={item.name}
                        onMouseDown={(event) => {
                          event.stopPropagation();
                        }}
                        onDelete={() => {
                          setValue(
                            namer,
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
                      selectedItems.length < props?.data?.length
                    }
                    onChange={(event) => {
                      if (event.target.checked) {
                        setValue(namer, props?.data);
                      } else {
                        setValue(namer, []);
                      }
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.selectAllText }}
                  primary="Select All"
                />
              </ListItem>
              {props?.data?.map((option, index) => (
                <MenuItem key={index} value={option}>
                  <ListItemIcon>
                    <Checkbox
                      checked={
                        selectedItems.findIndex((item) => item.id === option.id) >
                        -1
                      }
                    />
                  </ListItemIcon>
                  <ListItemText primary={option.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
    
          <FormHelperText error={errors[namer]?.message ? true : false}>
            {errors[namer]?.message && "This field is required"}
          </FormHelperText>
        </>
      );
    }