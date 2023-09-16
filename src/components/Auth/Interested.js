import React from "react";
import { Grid, MenuItem } from "@mui/material";
import { Input, CustomSelect } from "../Custom/Input";
import { useFormContext } from "react-hook-form";

const Business = () => {
  const { control } = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomSelect
            label="Business Type"
            namer="type"
            control={control}
            data={businessModel?.map((item, index) => (
              <MenuItem value={item.title} key={index}>
                {item.title}
              </MenuItem>
            ))}
          />
        </Grid>

        <Grid item xs={12}>
          <Input label="Business Name" namer="businessname" control={control} />
        </Grid>
        <Grid item xs={12}>
          <CustomSelect
            label="Country Name"
            namer="country"
            control={control}
            data={["USA", "Canada", "Austrlia", "New Zeland"]?.map(
              (item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              )
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Input label="Mobile Phone" namer="phone" control={control} />
        </Grid>
        <Grid item xs={12}>
          <Input label="Desired Domain" namer="domain" control={control} />
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
