import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  Stack,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import About from "../components/About/About";
import SchoolWord from "../components/SchoolWord/SchoolWord";
import SchoolLifeAndFacilities from "../components/SchoolLifeAndFacilities/SchoolLifeAndFacilities";
import AcademicAchievements from "../components/AcademicAchievements/AcademicAchievements";
const AboutPage = () => (
  <Box sx={{ p: { xs: 2, md: 5 } }}>
    <About />
    {/* Hero Section */}
    <Box
      sx={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560264280-4920a64583c5')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        py: 10,
        mb: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Lodwar High School
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, maxWidth: 800, mx: "auto" }}>
        Hardwork & Discipline Shaping Tomorrow’s Leaders
      </Typography>
    </Box>

    {/* Welcome Section */}
    <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        A Word From Our School
      </Typography>
      <SchoolWord />
    </Paper>

    {/* Mission, Vision, Values */}
    <Grid container spacing={4} sx={{ mb: 4 }}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, height: "100%" }} elevation={2}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Vision
          </Typography>
          <Typography>
            A dynamic institution producing disciplined, innovative and
            responsible leaders, grounded in academic excellence and moral
            uprightness.
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, height: "100%" }} elevation={2}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Mission
          </Typography>
          <Typography>
            To deliver quality education enriched with character formation that
            prepares learners for life beyond the classroom.
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, height: "100%" }} elevation={2}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Core Values
          </Typography>
          <Stack spacing={1}>
            <Typography>• Discipline</Typography>
            <Typography>• Respect</Typography>
            <Typography>• Integrity</Typography>
            <Typography>• Excellence</Typography>
            <Typography>• Responsibility</Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>

    <Divider sx={{ mb: 4 }} />

    {/* Academic Performance Highlight */}
    <AcademicAchievements />

    {/* Facilities & Life at School */}
    <SchoolLifeAndFacilities />

    {/* Contact & Visit Section */}
    <Paper sx={{ p: 4, mb: 4 }} elevation={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Join Our Journey
      </Typography>
      <Typography paragraph>
        We welcome you to visit us, learn more about our programs, and become
        part of our community. Lodwar High School continues to uphold values of
        excellence, discipline and service to humanity.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Visit Us
        </Button>
        <Button variant="outlined" color="primary">
          Contact Us
        </Button>
      </Stack>
    </Paper>
  </Box>
);

export default AboutPage;
