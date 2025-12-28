import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 6 }}>
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 700 }}>
            Get in touch with Lodwar High School for inquiries, admissions
            support, or general information.
          </Typography>
        </Container>
      </Box>

      {/* CONTACT DETAILS */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              School Contacts
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Address:</strong> P.O. Box 123, Lodwar, Kenya
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <strong>Phone:</strong> +254 7XX XXX XXX
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <strong>Email:</strong> info@lodwarhighschool.ac.ke
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <strong>Office Hours:</strong> Monday – Friday, 8:00am – 5:00pm
            </Typography>
          </Grid>

          {/* CONTACT FORM */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              Send Us a Message
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <input placeholder="Full Name" style={inputStyle} />
              <input placeholder="Email Address" style={inputStyle} />
              <textarea
                placeholder="Your Message"
                rows={4}
                style={inputStyle}
              />
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: "#f9a825" }}
              >
                Submit Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* MAP */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Our Location
          </Typography>
          <iframe
            title="School Location"
            src="https://maps.google.com/maps?q=lodwar&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ width: "100%", height: "400px", border: 0 }}
            loading="lazy"
          ></iframe>
        </Container>
      </Box>
    </Box>
  );
};

// SIMPLE INPUT STYLE
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default ContactPage;
