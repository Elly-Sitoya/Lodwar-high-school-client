import React from "react";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Hero_1 from "../../assets/hero_1.jpg";
import "./HomeHero.css";

const HomeHero = () => {
  const stats = [
    { icon: <GroupsIcon />, value: "1200+", label: "Students" },
    { icon: <SchoolIcon />, value: "60+", label: "Teachers" },
    { icon: <EmojiEventsIcon />, value: "94%", label: "Success Rate" },
  ];

  return (
    <Box className="home-hero" sx={{ backgroundImage: `url(${Hero_1})` }}>
      <Box className="hero-overlay"></Box>
      <Container className="hero-content">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="overline" className="hero-subtitle">
              Achieving Excellence through Discipline
            </Typography>
            <Typography variant="h1" className="hero-title">
              Empowering Minds, <br />
              <span className="hero-highlight">Leading the Future</span>
            </Typography>
            <Typography variant="h6" className="hero-description">
              Welcome to Lodwar High School, a center of academic excellence and
              leadership development. We are dedicated to nurturing scholars who
              are ready to make a positive impact on the world.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                className="hero-btn-primary"
                component={Link}
                to="/onlineadmissionform"
                endIcon={<ArrowForwardIcon />}
              >
                Apply for Admission
              </Button>
              <Button
                variant="outlined"
                className="hero-btn-secondary"
                component={Link}
                to="/about"
              >
                Learn More
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* Stats Bar */}
        <Box className="stats-bar">
          <Grid container spacing={2}>
            {stats.map((stat, index) => (
              <Grid item xs={4} key={index}>
                <Box className="stat-item">
                  <Box className="stat-icon">{stat.icon}</Box>
                  <Box>
                    <Typography className="stat-value">{stat.value}</Typography>
                    <Typography className="stat-label">{stat.label}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
