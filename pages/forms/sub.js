import React from "react";
import Select from "react-select";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const options = [
  {
    value: "heading",
    label: "heading",
  },
  {
    value: "subheading",
    label: "subheading",
  },
  {
    value: "paragraph",
    label: "paragraph",
  },
];
const Forms = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography>Add Field</Typography>
        <Grid container>
          <Grid xs={12} item>
            <Typography variant="subtitle1">Field Type</Typography>
            <Select options={options} />
          </Grid>

          <Grid xs={12} item>
            <Typography>Settings</Typography>
          </Grid>
          <Grid xs={12} item>
            <Box>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  //   aria-controls="panel1a-content"
                  //   id="panel1a-header"
                >
                  <Typography>Display</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">Text</Typography>
                      <TextField
                        fullWidth
                        sx={{ background: "White" }}
                        size="small"
                        name="Phone"
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Form Field Display Option</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">Color</Typography>
                      <Select options={options} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1">
                        Background Color
                      </Typography>
                      <Select options={options} />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid xs={12} item>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outlined" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button variant="contained" sx={{ ml: 1 }}>
                Save Changes
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Forms;
