import * as React from "react";
import { getPaymentLayout } from "../../../src/layout/Payment/Topbar";
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const ECommerce = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3">Get Started with E-Commerce</Typography>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <Grid item md={6} sm={12} lg={6} xs={12} key={i}>
              <MediaCard key={i} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5" sx={{ my: 2 }}>
          Ready to get started? Contact a Payment Consultant today!
        </Typography>
      </Container>
    </div>
  );
};

ECommerce.getLayout = getPaymentLayout;
export default ECommerce;
function MediaCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sell Products Online
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Want to build an online store? Create a sleek, modern online store
          using the Websites 360® Shop App. Stay organized while managing
          customers and payments and sell your products everywhere online.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
