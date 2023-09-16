import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  Divider,
  IconButton,
  Avatar,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { getCRMLayout } from "../../../../src/layout/CRM/Topbar";
import { Call, Edit, Email, Message } from "@mui/icons-material";
const DynamicOrganization = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ width: "160px", height: "160px" }}>
                  <Image
                    alt="Mountains"
                    src={"https://source.unsplash.com/random"}
                    layout="fill"
                    objectFit="contain"
                  />
                </Avatar>
                <Typography>Name</Typography>
                <Typography>https://Website.com</Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outlined">
                    <Call />
                  </Button>
                  <Button variant="outlined">
                    <Message />
                  </Button>
                  <Button variant="outlined">
                    <Email />
                  </Button>
                </Box>
              </Box>
              <Box>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Details
                    </Typography>
                    {/* <Typography sx={{ color: "text.secondary" }}>
                      Filtering has been entirely disabled for whole web server
                    </Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer>
                      <Table>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>{"9203 9023"}</TableCell>
                          <TableCell>
                            <Edit />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Phone</TableCell>
                          <TableCell>{"3"}</TableCell>
                          <TableCell>
                            <Edit />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Address</TableCell>
                          <TableCell>{"3"}</TableCell>
                          <TableCell>
                            <Edit />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Website</TableCell>
                          <TableCell>{"3"}</TableCell>
                          <TableCell>
                            <Edit />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Email</TableCell>
                          <TableCell>{"3"}</TableCell>
                          <TableCell>
                            <Edit />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Assigned To</TableCell>
                          <TableCell>{"3"}</TableCell>
                          <TableCell>
                            <Edit />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tags</TableCell>
                          <TableCell>{"3"}</TableCell>
                          <TableCell>
                            <Edit />
                          </TableCell>
                        </TableRow>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      About
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer>
                      <Table>
                        <TableRow>
                          <TableCell>Created</TableCell>
                          <TableCell>{"9203 9023"}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>{"3"}</TableCell>
                        </TableRow>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Contacts</Typography>
                <Button>Associate Contact</Button>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Avatar />
                  <Box>
                    <Typography>Person Name</Typography>
                    <Typography>Name Oranization</Typography>
                  </Box>
                </Box>
                <Button>Remove</Button>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton>
                    <Call />
                  </IconButton>
                  <Typography>02309409230923</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton>
                    <Email />
                  </IconButton>
                  <Typography>bestabaid@gmail.com</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
DynamicOrganization.getLayout = getCRMLayout;

export default DynamicOrganization;
