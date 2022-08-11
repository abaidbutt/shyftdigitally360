import React from "react";
import { Container, Typography, Button, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { useRouter } from "next/dist/client/router";
import DataTable from "../../../src/components/Payment/Customers/DataTable";
const Customers = () => {
  const router = useRouter();
  return (
    <div>
      <Container>
        <Typography variant="h3"> Customers</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            startIcon={<Add />}
            size="large"
            variant="contained"
            sx={{ p: 2 }}
            onClick={() => router.push("/payments/customers/add")}
          >
            Add Customer
          </Button>
          <Box>
            <TextField
              variant="outlined"
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
              placeholder="Search here"
            />
            <Button
              variant="outlined"
              endIcon={<Search />}
              sx={{ py: 2, borderRadius: 0 }}
            />
          </Box>
        </Box>
        <Box component="main" sx={{ my: 2 }}>
          <DataTable />
        </Box>
      </Container>
    </div>
  );
};
Customers.getLayout = getPaymentLayout;
export default Customers;
