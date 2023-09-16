import React from "react";
import { Grid } from "@mui/material";
import { CustomCheckbox, Input } from "../Custom/Input";
import { useFormContext } from "react-hook-form";

const User = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Input label="First Name" namer="firstName" control={control} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input label="Last Name" namer="lastName" control={control} />
        </Grid>
        <Grid item xs={12}>
          <Input label="Email" namer="email" control={control} />
        </Grid>
        <Grid item xs={12}>
          <Input
            label="Password"
            namer="password"
            control={control}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomCheckbox
            label="I've read and accepted the Terms of Service and Privacy Policy."
            namer="accept"
            control={control}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default User;
