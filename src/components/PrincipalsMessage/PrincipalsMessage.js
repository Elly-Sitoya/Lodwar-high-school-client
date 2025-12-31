import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "./PrincipalsMessage.css";
import Principal from "../../assets/Principal_1.jpg";

const PrincipalsMessage = () => {
  return (
    <Box className="principals-section">
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Image Side */}
          <Grid item xs={12} md={5}>
            <Box className="image-wrapper">
              <img
                src={Principal}
                alt="Principal"
                className="principal-image"
              />
              <Box className="image-accent"></Box>
              <Box className="principal-badge">
                <Typography variant="h6" fontWeight="bold">
                  Mr. Patrick Lokwayen
                </Typography>
                <Typography variant="body2">School Principal</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Text Side */}
          <Grid item xs={12} md={7}>
            <Box className="content-wrapper">
              <Box className="quote-icon-container">
                <FormatQuoteIcon className="quote-icon" />
              </Box>
              <Typography variant="overline" className="message-label">
                A Message from the Principal
              </Typography>
              <Typography variant="h3" className="message-title">
                Building a <span className="highlight">Foundation</span> for the
                Future
              </Typography>
              <Typography className="message-text">
                Welcome to Lodwar High School. Our mission is to provide an
                academic environment where every student is challenged to reach
                their full potential through discipline, hard work, and moral
                integrity.
              </Typography>
              <Typography className="message-text">
                At Lodwar High, we don't just teach; we inspire leadership and
                innovation. We believe that education is the most powerful
                weapon which you can use to change the world. Our dedicated
                faculty and state-of-the-art facilities are here to ensure that
                your journey through high school is both transformative and
                empowering.
              </Typography>
              <Typography className="message-text">
                Join us as we continue to shape the leaders of tomorrow, one
                scholar at a time. Together, we are building a legacy of
                excellence that will resonate for generations to come.
              </Typography>
              <Button
                variant="outlined"
                className="read-more-btn"
                sx={{ mt: 3 }}
              >
                Read Full Statement
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrincipalsMessage;
