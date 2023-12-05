import React from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
const More = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{ p: 5 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Websites
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Get a website or online store
            </Typography>
            <Typography variant="title2" gutterBottom>
              Create your own website using an easy drag-and-drop builder, or
              work with our team to design the website or online store of your
              dreams. See how it easy it is.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/website.jpg" // Path to your image from the public directory
            alt="website"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/ecommerce.jpg" // Path to your image from the public directory
            alt="Market team"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{ p: 5 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Ecommerce
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Sell your Products Online
            </Typography>
            <Typography variant="title2" gutterBottom>
              Make your products stand out by utilizing best-in-class tools that
              allow customers to browse products, select options and checkout
              with ease. Learn how.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Payments
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Accept and manage payments
            </Typography>
            <Typography variant="title2" gutterBottom>
              Send invoices, manage subscriptions, accept payments online or
              in-person and more. Get approved and connect to your bank account
              in minutes. See how it works.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/bank.jpeg" // Path to your image from the public directory
            alt="Payments"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/pos.jpg" // Path to your image from the public directory
            alt="Point of Sale"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Point of Sale
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Simplify Business Managment
            </Typography>
            <Typography variant="title2" gutterBottom>
              From checking out customers to managing inventory, our Point of
              Sale app has everything you need to manage your business your way.
              See how easy it is.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* CRM */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              CRM
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Stay Organized your way
            </Typography>
            <Typography variant="title2" gutterBottom>
              Organize all of your contacts and their information with a
              customizable, easy-to-use CRM. Assign tasks, view reports and
              more. Ranked #1 by Capterra. Explore it.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/crm.jpeg" // Path to your image from the public directory
            alt="Customer Relationship Managment"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      {/* forms */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/forms.jpg" // Path to your image from the public directory
            alt="Forms"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Forms
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Create Custom Forms
            </Typography>
            <Typography variant="title2" gutterBottom>
              Create forms for use anywhere leads or customers may want to get
              in touch with you. Their info automatically syncs with the rest of
              the platform. Learn how.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* scheduling */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Scheduling
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Book appointments and classes
            </Typography>
            <Typography variant="title2" gutterBottom>
              Have customers book on your website, or schedule appointments
              yourself and accept payments for them at once. Send automated
              reminders for upcoming events and get detailed reports. Learn
              more.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/schedule.jpg" // Path to your image from the public directory
            alt="schedule"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      {/* Email */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/email_marketing.jpg" // Path to your image from the public directory
            alt="Email Marketing"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Email Marketing
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Send automated Emails
            </Typography>
            <Typography variant="title2" gutterBottom>
              Use the visual builder to create email journeys that automatically
              deploy or send one-time campaigns. Pick from hundreds of templates
              to get started. We can even build it for you.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Text Marketing */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Text Marketing
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Nurture Customers via text
            </Typography>
            <Typography variant="title2" gutterBottom>
              Reach customers where it’s convenient for them, and stay top of
              mind with automated text messages, birthday alerts and more. See
              what’s possible.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/text_marketing.jpg" // Path to your image from the public directory
            alt="Text Marketing"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      {/* listing */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/intelligence.jpg" // Path to your image from the public directory
            alt="Listings"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Listings
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Control your business listings
            </Typography>
            <Typography variant="title2" gutterBottom>
              Control how your business looks on 50+ directories, websites and
              apps. Changing your hours? Do it once, and watch it update
              everywhere. See how.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* reputation */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Reputation
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Stand out with excellent reviews
            </Typography>
            <Typography variant="title2" gutterBottom>
              Protect and build your brand’s online reputation with ease.
              Request reviews with customized email or text templates, and
              respond to reviews in one place. See how easy it is.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/repute.jpg" // Path to your image from the public directory
            alt="Reputation"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      {/* social */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/social.jpg" // Path to your image from the public directory
            alt="Social "
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Social
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Manage your social media
            </Typography>
            <Typography variant="title2" gutterBottom>
              Build real connections with potential customers and those who
              already love your brand. Schedule your social posts and manage
              your profiles in one place. Learn more.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* content */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Content
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Show up at the top of search
            </Typography>
            <Typography variant="title2" gutterBottom>
              Track performance on popular search engines, like Google, to
              improve SEO. Work with our Content Marketing Specialists to help
              your organic traffic grow. Watch it in action.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>

        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/market_team.jpg" // Path to your image from the public directory
            alt="Market team"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      {/* ads */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/content.jpg" // Path to your image from the public directory
            alt="Ads "
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Ads
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Run ads where it counts
            </Typography>
            <Typography variant="title2" gutterBottom>
              Reach new customers. Get the tools and expert help you need to
              effectively run multi-channel ad campaigns across Google,
              Facebook, Instagram and more! See how it works.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* intelligence */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Intelligence
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              Business Reporting
            </Typography>
            <Typography variant="title2" gutterBottom>
              Get the ultimate performance dashboard for your business. Gain
              insight from reports, and look at every aspect of your operations
              to make better decisions. Take the tour.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/content_search.jpg" // Path to your image from the public directory
            alt="Content Search"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
      {/* calender */}
      <Grid container>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} sx={{ padding: 5 }} item>
          <Image
            src="/calender.jpg" // Path to your image from the public directory
            alt="Calender"
            width={1200} // The maximum width of the image
            height={800} // The maximum height of the image
            layout="responsive" // Enables responsive behavior
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid md={6} xl={6} lg={6} sm={12} xs={12} item sx={{p:5}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Calender
            </Typography>
            <Typography variant="h5" gutterBottom fontWeight={"bolder"}>
              All this in one calender
            </Typography>
            <Typography variant="title2" gutterBottom>
              Manage your team and customers using the Calendar so you stay
              organized with projects and deals youre working on every day.
            </Typography>
            <Box sx={{ my: 3 }}>
              <Button variant="contained">Plan &amp; Pricing</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default More;
