import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import User from "./User";
import Business from "./Business";
import Interested from "./Interested";
import Thanks from "./Thanks";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const steps = ["", "", ""];
const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  accept: false,
  topics: [],
  years: "",
  sales: "",
  domain: "",
  phone: "",
  type: "",
  country: "",
  businessname: "",
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <User />;
    case 1:
      return <Business />;
    case 2:
      return <Interested />;

    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const validationSchema = [
    //validation for step1
    yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
      accept: yup.boolean().oneOf([true], "Field must be checked"),
    }),
    //validation for step2
    yup.object({
      topics: yup.array().min(1),
      years: yup.string().required(),
      sales: yup.string().required(),
    }),
    //validation for step3
    yup.object({
      type: yup.string().required(),
      businessname: yup.string().required(),
      country: yup.string().required(),
      phone: yup.string().required(),
      domain: yup.string().required(),
    }),
  ];
  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    shouldUnregister: false,
    mode: "onChange",
  });
  const { handleSubmit, reset, trigger, errors } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };
  console.log(errors);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" align="center">
          Signup
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Button onClick={handleReset} variant="outlined">
                Reset
              </Button>
            </React.Fragment>
          ) : (
            <FormProvider {...methods}>
              <form>
                {getStepContent(activeStep)}
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  style={{ paddingTop: "5vh" }}
                >
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </form>
            </FormProvider>
          )}
        </React.Fragment>
      </Container>
    </ThemeProvider>
  );
}
