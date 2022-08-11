import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Chip,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { Delete } from "@mui/icons-material";
import { getDashboardLayout } from "../../src/layout/Dashboard";
import { useRouter } from "next/router";
const Forms = () => {
  const router = useRouter();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ my: 2 }}>
        <Typography variant="h4">Forms</Typography>
        <Button
          variant="contained"
          sx={{ my: 2, p: 2 }}
          onClick={() => router.push("/forms/add")}
        >
          Create Forms
        </Button>

        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          disablePadding
        >
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-${value}-label`;

            return (
              <ListItem
                key={value}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <Delete />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={() => {
                    handleToggle(value);
                    router.push({
                      pathname: "/forms/edit/[ids]",
                      query: { ids: labelId },
                    });
                  }}
                >
                  {/* <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon> */}
                  <ListItemText
                    id={labelId}
                    primary={`Contact Form`}
                    secondary={`0 Submission`}
                  />
                  <Box>
                    <Chip label="Basic" variant="outlined" />
                  </Box>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
};
Forms.getLayout = getDashboardLayout;
export default Forms;
// import React from "react";
// import Select from "react-select";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const options = [
//   {
//     value: "name",
//     label: "Name",
//   },
//   {
//     value: "Website",
//     label: "Website",
//   },
//   {
//     value: "Phone",
//     label: "Phone",
//   },
//   {
//     value: "Email",
//     label: "Email",
//   },
// ];
// const Forms = () => {
//   return (
//     <div>
//       <Container maxWidth="md">
//         <Typography>Add Field</Typography>
//         <Grid container>
//           <Grid xs={12} item>
//             <Typography variant="subtitle1">Field Type</Typography>
//             <Select options={options} />
//           </Grid>
//           <Grid xs={12} item>
//             <Checkbox labe="Sync with field with the CRM" />
//           </Grid>
//           <Grid xs={12} item>
//             <Typography>Settings</Typography>
//           </Grid>
//           <Grid xs={12} item>
//             <Box>
//               <Accordion>
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   //   aria-controls="panel1a-content"
//                   //   id="panel1a-header"
//                 >
//                   <Typography>Form Field Label</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Grid container>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Label</Typography>
//                       <TextField
//                         fullWidth
//                         sx={{ background: "White" }}
//                         size="small"
//                         name="Phone"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Position</Typography>
//                       <Select options={options} />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Checkbox label={"Hide Label"} />
//                     </Grid>
//                   </Grid>
//                 </AccordionDetails>
//               </Accordion>
//               <Accordion>
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel2a-content"
//                   id="panel2a-header"
//                 >
//                   <Typography>Form Field Display Option</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Grid container>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Description</Typography>
//                       <TextField
//                         fullWidth
//                         sx={{ background: "White" }}
//                         size="small"
//                         name="Phone"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Placeholder</Typography>
//                       <TextField
//                         fullWidth
//                         sx={{ background: "White" }}
//                         size="small"
//                         name="Phone"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Color</Typography>
//                       <Select options={options} />
//                     </Grid>
//                     {/* <Grid item xs={12}>
//                       <Checkbox labe={"Hide Label"} />
//                     </Grid> */}
//                   </Grid>
//                 </AccordionDetails>
//               </Accordion>
//               <Accordion>
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel3a-content"
//                   id="panel3a-header"
//                 >
//                   <Typography>Form Field Rules</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Grid container>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Max Length</Typography>
//                       <TextField
//                         fullWidth
//                         sx={{ background: "White" }}
//                         size="small"
//                         name="Phone"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Min Length</Typography>
//                       <TextField
//                         fullWidth
//                         sx={{ background: "White" }}
//                         size="small"
//                         name="Phone"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">
//                         Custom Error Message
//                       </Typography>
//                       <TextField
//                         fullWidth
//                         sx={{ background: "White" }}
//                         size="small"
//                         name="Phone"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography variant="subtitle1">Pattern</Typography>
//                       <TextField
//                         fullWidth
//                         sx={{ background: "White" }}
//                         size="small"
//                         name="Phone"
//                       />
//                     </Grid>

//                     <Grid item xs={12}>
//                       <Checkbox label={"Required"} />
//                     </Grid>
//                   </Grid>
//                 </AccordionDetails>
//               </Accordion>
//             </Box>
//           </Grid>
//           <Grid xs={12} item>
//             <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//               <Button variant="outlined" onClick={() => router.back()}>
//                 Cancel
//               </Button>
//               <Button variant="contained" sx={{ ml: 1 }}>
//                 Save Changes
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Forms;
