import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactPage = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundColor: "#0b3c5d",
          color: "white",
          py: 10,
          textAlign: "center",
          backgroundImage:
            "linear-gradient(rgba(11, 60, 93, 0.85), rgba(11, 60, 93, 0.85)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.9,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Have a question or need assistance? Reach out to the Lodwar High
            School team. We're committed to providing the support you need for
            admissions, inquiries, and more.
          </Typography>
        </Container>
      </Box>

      {/* CONTACT COMPONENT */}
      <ContactUs />

      {/* MAP SECTION */}
      <Box sx={{ backgroundColor: "#fff", py: 8 }}>
        <Container>
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <iframe
              title="School Location"
              src="https://maps.google.com/maps?q=lodwar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ width: "100%", height: "450px", border: 0 }}
              loading="lazy"
            ></iframe>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
