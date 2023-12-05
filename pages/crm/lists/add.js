import { useState, useLayoutEffect } from "react";

const App = () => {
  const [name, setName] = useState("Leonardo");

  useLayoutEffect(() => {
    if (name === "Leonardo") {
      setName("Jose");
    }
  }, [name]);

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};
export default App;
// import React from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Paper,
//   Button,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Typography,
//   Divider,
//   IconButton,
//   Radio,
//   RadioGroup,
//   FormControl,
//   FormLabel,
// } from "@mui/material";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

// import Select from "react-select";
// import { getCRMLayout } from "../../../src/layout/CRM/Topbar";
// import { KeyboardBackspace } from "@mui/icons-material";
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// const Add = () => {
//   const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };
//   const [contactValue, setContactValue] = React.useState("female");

//   const handleContact = (event) => {
//     setContactValue(event.target.contactValue);
//   };

//   return (
//     <Container maxWidth="md">
//       <Paper component="form" noValidate sx={{ m: 3 }}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             p: 3,
//             pb: 0,
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Add List
//           </Typography>
//           <IconButton>
//             <KeyboardBackspace />
//           </IconButton>
//         </Box>
//         <Divider />

//         <Grid container spacing={2} sx={{ p: 3 }}>
//           <Grid item xs={12}>
//             <Typography>List Name</Typography>
//             <TextField
//               name="Title"
//               required
//               fullWidth
//               sx={{ background: "White" }}
//               size="small"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography>Details</Typography>
//             <TextField
//               name="Details"
//               required
//               fullWidth
//               multiline
//               rows={4}
//               autoFocus
//               sx={{ background: "White" }}
//               size="small"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography>Include contacts with these types</Typography>
//             <Select options={options} />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControl>
//               <RadioGroup
//                 name="controlled-radio-buttons-group"
//                 value={contactValue}
//                 onChange={handleContact}
//               >
//                 <FormControlLabel
//                   value="all contact"
//                   control={<Radio />}
//                   label="all contact"
//                 />

//                 <FormControlLabel
//                   value="contacts assigned between"
//                   control={<Radio />}
//                   label="contacts assigned between"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12}>
//             <Typography>Link to Projects</Typography>
//             <Select options={options} placeholder="State" />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography>Link to Deals</Typography>
//             <Select options={options} placeholder="State" />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox value="allowExtraEmails" color="primary" />}
//               label="Assign a specific Color to this task"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography>Assigned To</Typography>
//             <Select options={options} placeholder="State" />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography>Time Span Start</Typography>
//             <DesktopDatePicker
//               inputFormat="MM/dd/yyyy"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} size="small" />}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography>Time Span End</Typography>
//             <DesktopDatePicker
//               inputFormat="MM/dd/yyyy"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} size="small" />}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox value="allowExtraEmails" color="primary" />}
//               label="This is an all day event"
//             />
//           </Grid>
//           <Grid container item sm={12}>
//             <Grid item xs={12}>
//               <Typography>Repeat Every</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="Days"
//                 required
//                 fullWidth
//                 sx={{ background: "White" }}
//                 size="small"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Select options={options} placeholder="State" />
//             </Grid>
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={<Checkbox value="allowExtraEmails" color="primary" />}
//               label="Keep Task Private(no other team member)"
//             />
//           </Grid>
//           <Grid container item sm={12}>
//             <Grid item xs={12}>
//               <Typography>Remind me</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="Days"
//                 required
//                 fullWidth
//                 sx={{ background: "White" }}
//                 size="small"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Select options={options} placeholder="State" />
//             </Grid>
//           </Grid>
//           <Grid item xs={12}>
//             <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
//               <Button variant="outlined" sx={{ mx: 1 }}>
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 // fullWidth
//                 variant="contained"
//               >
//                 Save
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };
// Add.getLayout = getCRMLayout;
// export default Add;
