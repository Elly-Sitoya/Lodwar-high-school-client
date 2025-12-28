import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 6 }}>
        <Container>
          <Typography variant="h3" fontWeight="bold">
            About Us
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 700 }}>
            Learn more about Lodwar High School, our mission, values, and the
            journey of our community.
          </Typography>
        </Container>
      </Box>

      {/* VISION & MISSION */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Our Vision
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  To be a leading secondary school producing academically
                  excellent, disciplined, and morally upright citizens.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Our Mission
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  To provide quality education through effective teaching,
                  strong discipline, and a supportive learning environment that
                  nurtures talent and character.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CORE VALUES */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          Core Values
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[
            "Discipline",
            "Integrity",
            "Academic Excellence",
            "Respect",
            "Responsibility",
            "Teamwork",
          ].map((value, index) => (
            <Grid item xs={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography fontWeight="bold">{value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SCHOOL MOTTO */}
      <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 6 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold">
            School Motto
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            "Excellence Through Discipline"
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
