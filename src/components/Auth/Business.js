import React from "react";
import { Grid } from "@mui/material";

import { useFormContext } from "react-hook-form";
import { CustomCheckboxs, CustomToggleButton } from "../Custom/Input";
const data = [
  {
    label: "Using the Marketing 360 Software Platform",
    value: "Using the Marketing 360 Software Platform",
  },
  {
    label: "Help with designing a website",
    value: "Help with designing a website",
  },
  {
    label: "Help with cSocial media marketing",
    value: "Help with cSocial media marketing",
  },
  {
    label: "Help with digital advertising",
    value: "Help with digital advertising",
  },
];
const Business = () => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomCheckboxs
            namer="topics"
            label="Interestd Business"
            control={control}
            data={data}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomToggleButton
            namer="years"
            control={control}
            label="How Many Years of your Business"
            data={[
              { name: "New", value: "New" },
              { name: "6-24 Months", value: "6-24 Months" },
              { name: "2-3 Years", value: "2-3 Years" },
              { name: "3+ Years", value: "3+ Years" },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomToggleButton
            namer="sales"
            control={control}
            label="Per Year Sales of your Company"
            data={[
              { name: "0-100$k", value: "0-100$k" },
              { name: "100-250$k", value: "100-250$k" },
              { name: "250$k", value: "250$k" },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Business;
