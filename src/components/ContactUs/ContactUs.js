import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import "./ContactUs.css";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <LocationOn className="contact-icon" />,
      title: "Address",
      detail: "P.O. Box 123, Lodwar, Kenya",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone",
      detail: "+254 7XX XXX XXX",
    },
    {
      icon: <Email className="contact-icon" />,
      title: "Email",
      detail: "info@lodwarhighschool.ac.ke",
    },
    {
      icon: <AccessTime className="contact-icon" />,
      title: "Office Hours",
      detail: "Mon – Fri, 8:00am – 5:00pm",
    },
  ];

  return (
    <Box className="contact-section">
      <Container>
        <Grid container spacing={4}>
          {/* Contact Details cards */}
          <Grid item xs={12} lg={5}>
            <Typography variant="h4" className="section-title">
              School Contacts
            </Typography>
            <Typography className="section-subtitle">
              We're here to help. Reach out through any of these channels.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              {contactInfo.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card className="contact-card">
                    <CardContent>
                      <Box className="icon-wrapper">{item.icon}</Box>
                      <Typography variant="h6" className="card-title">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" className="card-detail">
                        {item.detail}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Social Media */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Follow Us
              </Typography>
              <Box>
                <IconButton className="social-icon">
                  <Facebook />
                </IconButton>
                <IconButton className="social-icon">
                  <Twitter />
                </IconButton>
                <IconButton className="social-icon">
                  <Instagram />
                </IconButton>
                <IconButton className="social-icon">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <Card className="form-card">
              <CardContent>
                <Typography variant="h4" className="form-title">
                  Send Us a Message
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      className="contact-input"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={6}
                      className="contact-input"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      className="submit-button"
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
