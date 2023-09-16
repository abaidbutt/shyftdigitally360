import React from "react";
import { Paper, Container, Box, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import {
  CustomMultiSelect,
  FormAutoComplete,
  Input,
  MultiSelectAll,
} from "../src/components/Custom/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const options = [
  { name: "foo", id: "foo" },
  { name: "bar", id: "bar" },
  { name: "jar", id: "jar" },
  { name: "nar", id: "nar" },
  { name: "mar", id: "mar" },
  { name: "far", id: "far" },``
];

const names = [
  { name: "Oliver Hansen", id: 1 },
  { name: "Van Henry", id: 2 },
  { name: "April Tucker", id: 3 },
  { name: "Ralph Hubbard", id: 4 },
  { name: "Omar Alexander", id: 5 },
  { name: "Carlos Abbott", id: 6 },
  { name: "Miriam Wagner", id: 7 },
  { name: "Bradley Wilkerson", id: 8 },
  { name: "Virginia Andrews", id: 9 },
  { name: "Kelly Snyder", id: 10 },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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
    email: yup.string().required(),
    password: yup.string().required(),
    // selectAll: yup.array().min(1),
    // assignTo: yup.array().min(1),
  })
  .required();

const Login = () => {
  const theme = useTheme();
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      email: "",
      password: "",
      // assignTo: [],
      // selectAll: [],
    },
    resolver: yupResolver(schema),
    shouldUnregister: false,
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "1.5rem",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Grid container spacing={2} sx={{ display: "flex" }}>
        <Grid
          item
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            justifyContent: "space-evenly",

            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#595959", textAlign: "center" }}
            >
              One account, multiple powerful tools to grow your business
            </Typography>
          </Container>
          <Container>
            <Grid container>
              {data?.map((prod, index) => (
                <Grid
                  item
                  md={4}
                  lg={4}
                  sm={6}
                  sx={{ textAlign: "center" }}
                  key={index}
                >
                  <Image
                    src={"/shyft-360.png"}
                    layout="fixed"
                    width={"160px"}
                    height={"35px"}
                    alt="marketing360"
                  />

                  <Typography variant="body1" sx={{ color: "#848586" }}>
                    {prod?.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={12}
          xs={12}
          sx={{
            boxSizing: "border-box",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper
              elevation={3}
              sx={{ py: 10, px: "2.5rem", maxWidth: "420px" }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: "22px", color: "#595959" }}
              >
                Sign in to your Marketing 360® account
              </Typography>
              <Box sx={{ mt: "1.0rem" }}>
                <Input label="Email" namer="email" control={control} />
              </Box>
              <Box sx={{ mt: "0.4rem" }}>
                <Input
                  label="Password"
                  namer="password"
                  control={control}
                  type="password"
                />
              </Box>
              <Box>
                {/* <CustomMultiSelect
                  namer="assignTo"
                  control={control}
                  label="Assigned To"
                  data={names.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item}
                      style={getStyles(item.name, getValues("assignTo"), theme)}
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
              </Box>
              <Box>
                {/* <MultiSelectAll
                  namer="selectAll"
                  label="All Selection"
                  control={control}
                  data={options}
                  setValue={setValue}
                /> */}
                {/* <FormAutoComplete
                  namer="selectAll"
                  label="All Selection"
                  control={control}
                  data={options}
                  setValue={setValue}
                /> */}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                  variant="button"
                  sx={{
                    ml: "7px",
                    textTransform: "none",
                    color: "rgb(0,0,0,0.45)",
                    mt: "10px",
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Box>
              <Box sx={{ mt: "1.5rem" }}>
                <Button
                  variant="contained"
                  size="small"
                  fullWidth
                  sx={{
                    width: "100%",
                    textTransform: "none",
                    padding: "0.75rem",
                    backgroundColor: "#006DD0",
                  }}
                  type="submit"
                >
                  <Typography>Sign in</Typography>
                </Button>
              </Box>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
