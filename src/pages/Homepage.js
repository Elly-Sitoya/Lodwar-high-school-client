import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Admissions from "../components/LandingPage/Admissions";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutSummary from "../components/AboutSummary/AboutSummary";
import CoreFeatures from "../components/CoreFeatures/CoreFeatures";
import Hero_1 from "../assets/hero_1.jpg";

const Homepage = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage: `url(${Hero_1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Welcome to Lodwar High School
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, maxWidth: 600 }}>
            A Center of Academic Excellence, Discipline, and Moral Integrity.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 4, backgroundColor: "#f9a825" }}
            component={Link}
            to="/onlineadmissionform"
          >
            Apply for Admission
          </Button>
        </Container>
      </Box>

      {/* ABOUT SUMMARY SECTION */}
      <AboutSummary />

      {/* CORE FEATURES SECTION */}
      <CoreFeatures />

      {/* ADMISSIONS SECTION */}
      <Box sx={{ py: 6 }}>
        <Container>
          <Admissions />
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      <Box sx={{ py: 6 }}>
        <Testimonials />
      </Box>

      {/* FOOTER */}
      {/* <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 4 }}>
        <Container>
          <Typography align="center">
            © {new Date().getFullYear()} Lodwar High School | Excellence is Our
            Pride
          </Typography>
        </Container>
      </Box> */}
    </Box>
  );
};

export default Homepage;
