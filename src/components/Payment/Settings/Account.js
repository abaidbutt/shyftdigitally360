import React from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  Divider,
  MenuItem,
  InputLabel,
  Container,
  Box,
  Grid,
  TextField,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { height } from "@mui/system";

const Account = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <>
        <Paper sx={{ p: 4, my: 2 }}>
          <Typography sx={{ py: 1 }} variant="h5">
            Account Information
          </Typography>
          <Typography>
            Update your account and public business information.
          </Typography>
          {/* <Typography variant="h6">Account Settings</Typography> */}
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                First Name
              </Typography>
              <TextField required fullWidth size="small" name="Phone" />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Last Name
              </Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Bussiness Address
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                required
                placeholder="Address line 1"
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                required
                placeholder="Address line 2"
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                required
                placeholder="City"
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                required
                fullWidth
                placeholder="Postal/Zip code"
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Default Currencny
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={20}>CAD</MenuItem>
                    <MenuItem value={30}>USD</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 5 }} />
          <Typography sx={{ mt: 5 }} variant="h6">
            Public Business Information
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            This information helps customers recognize your business and
            understand your products and terms of service. Your support
            information may be visible in payment statements, invoices, and
            receipts.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Public Business Name
              </Typography>
              <TextField required fullWidth size="small" name="Phone" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Support Email
              </Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Support Phone
              </Typography>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Support Address (Optional)
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Use Business Address"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={20}>CAD</MenuItem>
                    <MenuItem value={30}>USD</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                required
                fullWidth
                placeholder="Address line 1"
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>{" "}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                required
                fullWidth
                placeholder="Address line 2"
                sx={{ background: "White" }}
                size="small"
                name="Phone"
              />
            </Grid>{" "}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                placeholder="City"
                name="Phone"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                required
                fullWidth
                sx={{ background: "White" }}
                size="small"
                placeholder="Postal/Zip code"
                name="Phone"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Default Currencny
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={20}>CAD</MenuItem>
                    <MenuItem value={30}>USD</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Statement Descriptor
              </Typography>
              <TextField required fullWidth size="small" name="Phone" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Shortened Statement Descriptor
              </Typography>
              <TextField required fullWidth size="small" name="Phone" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Business Website
              </Typography>
              <TextField required fullWidth size="small" name="Phone" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
                Support Website
              </Typography>
              <TextField required fullWidth size="small" name="Phone" />
            </Grid>
          </Grid>
          <Box
            sx={{ mt: 1, mb: 6, display: "flex", justifyContent: "flex-start" }}
          >
            <Button sx={{ p: 1, my: 1 }} variant="contained">
              Save
            </Button>
            <Button
              sx={{ p: 1, my: 1, mx: 1, color: "#000", borderColor: "#000" }}
              variant="outlined"
            >
              Cancel
            </Button>
          </Box>
          <Divider sx={{ mt: 5, mb: 5 }} />
          <Typography sx={{ fontWeight: 600 }} variant="h6">
            Close Account
          </Typography>

          <Typography>
            Closing your Payments account will cause you to lose access to your
            financial data and your keys will be expired. This action is
            irreversible. If you want to close your account, call us at{" "}
            <a>(855) 462-3343</a>
          </Typography>
        </Paper>
      </>
    </>
  );
};
export default Account;
