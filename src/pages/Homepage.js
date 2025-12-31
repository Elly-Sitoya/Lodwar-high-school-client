import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Admissions from "../components/LandingPage/Admissions";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutSummary from "../components/AboutSummary/AboutSummary";
import PrincipalsMessage from "../components/PrincipalsMessage/PrincipalsMessage";
import HomeHero from "../components/HomeHero/HomeHero";
import CoreFeatures from "../components/CoreFeatures/CoreFeatures";

const Homepage = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <HomeHero />

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

      {/* PRINCIPAL'S MESSAGE */}
      <PrincipalsMessage />

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
