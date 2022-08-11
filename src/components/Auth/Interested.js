import React from "react";
import { TextField, Grid, MenuItem } from "@mui/material";
const Business = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Business Type"
            autoFocus
            select
          >
            {businessModel?.map((item, index) => (
              <MenuItem value={item.title} key={index}>
                {item.title}
              </MenuItem>
            ))}
            {/* <MenuItem value={"Accounting"}>Accounting</MenuItem>
            <MenuItem value={"Electrician"}>Electrician</MenuItem>
            <MenuItem value={"Barber "}>Barber </MenuItem> */}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField required fullWidth label="Business Name" name="email" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="Country"
            required
            fullWidth
            id="firstName"
            label="Country Name"
            autoFocus
            select
          >
            <MenuItem value={"USA"}>USA</MenuItem>
            <MenuItem value={"Canada"}>Canada</MenuItem>
            <MenuItem value={"Austrial"}>Austrial</MenuItem>
            <MenuItem value={"New Zeland "}>New Zeland </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField required fullWidth label="Mobile Phone" name="email" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Website or Desired Domain Name"
            name="email"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Business;
const businessModel = [
  { title: "Accounting / CPA" },
  { title: "Assisted Living" },
  { title: "Attorney / Law Firm" },
  { title: "Auto Repair" },
  { title: "Carpet Cleaning" },
  { title: "Child Care" },
  { title: "Child Care with Education" },
  { title: "Chiropractor" },
  { title: "Consultant" },
  { title: "Creative" },
  { title: "Dance Studio" },
  { title: "Dentist" },
  { title: "Electrician" },
  { title: "Event Planner" },
  { title: "Financial" },
  { title: "Fitness / Trainer /Gym" },
  { title: "Florring Contractor /Store" },
  { title: "Franchise" },
  { title: "Garge Door Contractor" },
  { title: "HVAC Contractor" },
  { title: "House Cleaning" },
  { title: "Insurance" },
  { title: "Landscaping" },
  { title: "Lawn Care" },
  { title: "Marketing Agency" },
  { title: "Med Spa" },
  { title: "Medical" },
  { title: "Moving Company" },
  { title: "Optometrist / Eye Doctor" },
  { title: "Other" },
  { title: "Painting Contractor" },
  { title: "Personal Brand" },
  { title: "Pest Control" },
  { title: "Plumbing Contractor" },
  { title: "Proschools" },
  { title: "Real Estate" },
  { title: "Resturant / Bar" },
  { title: "Retail Store" },
  { title: "Roofing" },
  { title: "Salon / Barber Shop" },
  { title: "Self Storage Center" },
  { title: "Spa" },
  { title: "Therapist" },
  { title: "Venue / Events" },
  { title: "Veterinarian" },
  { title: "eCommerce Store" },
];
