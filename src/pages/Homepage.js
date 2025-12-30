import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import Admissions from "../components/LandingPage/Admissions";
import Testimonials from "../components/Testimonials/Testimonials";
import Hero_1 from "../assets/hero_1.jpg";
import about_1 from "../assets/about_1.jpg";
import about_2 from "../assets/about_2.jpg";

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

      {/* ABOUT SECTION */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              About Our School
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Lodwar High School is a leading secondary institution committed to
              academic excellence, discipline, and holistic student development.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={about_2}
              alt="school"
              style={{ width: "100%", borderRadius: 8 }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* FEATURES */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            {[
              {
                title: "Quality Education",
                desc: "Highly qualified teachers and KCSE excellence.",
              },
              {
                title: "Modern Facilities",
                desc: "Well-equipped labs, library, and ICT rooms.",
              },
              {
                title: "Discipline & Values",
                desc: "Strong moral foundation and leadership training.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography sx={{ mt: 1 }}>{item.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
