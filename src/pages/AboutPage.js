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
  Container,
} from "@mui/material";
import {
  Visibility,
  Flag,
  Star,
  School,
  AutoStories,
  EmojiEvents,
  Groups,
  Lightbulb,
} from "@mui/icons-material";
import About from "../components/About/About";
import SchoolWord from "../components/SchoolWord/SchoolWord";
import SchoolLifeAndFacilities from "../components/SchoolLifeAndFacilities/SchoolLifeAndFacilities";
import AcademicAchievements from "../components/AcademicAchievements/AcademicAchievements";

const AboutPage = () => {
  const cardStyle = {
    height: "100%",
    borderRadius: "16px",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    border: "1px solid rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 30px rgba(13, 71, 161, 0.15)",
      borderColor: "rgba(13, 71, 161, 0.2)",
    },
  };

  const iconBoxStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "rgba(13, 71, 161, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    color: "#0d47a1",
  };

  return (
    <Box sx={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "75vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          mb: 8,
          borderRadius: { xs: 0, md: "0 0 80px 80px" },
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
        }}
      >
        {/* Background Overlay with Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(13, 71, 161, 0.7), rgba(13, 71, 161, 0.7)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            px: 3,
            animation: "fadeInUp 1s ease-out",
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(30px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#f9a825",
              fontWeight: 700,
              letterSpacing: 4,
              fontSize: "1.1rem",
              mb: 1,
              display: "block",
            }}
          >
            Welcome to Excellence
          </Typography>
          <Box
            sx={{
              width: "60px",
              height: "4px",
              bgcolor: "#f9a825",
              mx: "auto",
              mb: 3,
              borderRadius: "2px",
            }}
          />
          {/* <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", sm: "4rem", md: "5.5rem" },
              mb: 2,
              color: "white",
              letterSpacing: "-0.02em",
              textShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            Lodwar High School
          </Typography> */}
          <Typography
            variant="h5"
            sx={{
              maxWidth: 750,
              mx: "auto",
              color: "rgba(255,255,255,0.9)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
              lineHeight: 1.6,
              mb: 5,
            }}
          >
            "Hardwork & Discipline Shaping Tomorrow’s Leaders"
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <About />

        {/* Welcome Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            mb: 8,
            borderRadius: "24px",
            background: "white",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.02)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="overline"
              sx={{ color: "#f9a825", fontWeight: "bold", letterSpacing: 2 }}
            >
              Principal's Message
            </Typography>
            <Typography
              variant="h3"
              fontWeight="800"
              color="#0d47a1"
              sx={{ mt: 1 }}
            >
              A Word From Our School
            </Typography>
          </Box>
          <SchoolWord />
        </Paper>

        {/* Mission, Vision, Values */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {/* Vision */}
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle}>
                <CardContent sx={{ p: 4, flexGrow: 1, textAlign: "center" }}>
                  <Box sx={{ ...iconBoxStyle, mx: "auto" }}>
                    <Visibility sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    color="#1e293b"
                    gutterBottom
                  >
                    Our Vision
                  </Typography>
                  <Typography color="#64748b" sx={{ lineHeight: 1.7 }}>
                    A dynamic institution producing disciplined, innovative and
                    responsible leaders, grounded in academic excellence and
                    moral uprightness.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Mission */}
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle}>
                <CardContent sx={{ p: 4, flexGrow: 1, textAlign: "center" }}>
                  <Box sx={{ ...iconBoxStyle, mx: "auto" }}>
                    <Flag sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    color="#1e293b"
                    gutterBottom
                  >
                    Our Mission
                  </Typography>
                  <Typography color="#64748b" sx={{ lineHeight: 1.7 }}>
                    To deliver quality education enriched with character
                    formation that prepares learners for life beyond the
                    classroom.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Core Values */}
            <Grid item xs={12} md={4}>
              <Card sx={cardStyle}>
                <CardContent sx={{ p: 4, flexGrow: 1, textAlign: "center" }}>
                  <Box sx={{ ...iconBoxStyle, mx: "auto" }}>
                    <Star sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    color="#1e293b"
                    gutterBottom
                  >
                    Core Values
                  </Typography>
                  <Stack spacing={1.5} sx={{ mt: 2 }}>
                    {[
                      "Discipline",
                      "Respect",
                      "Integrity",
                      "Excellence",
                      "Responsibility",
                    ].map((value) => (
                      <Box
                        key={value}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 1,
                          backgroundColor: "#f1f5f9",
                          borderRadius: "8px",
                          color: "#334155",
                          fontWeight: 600,
                          "&:hover": {
                            backgroundColor: "#e2e8f0",
                            color: "#0d47a1",
                          },
                        }}
                      >
                        {value}
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 8, opacity: 0.1 }} />

        {/* Academic Performance Highlight */}
        <AcademicAchievements />

        {/* Facilities & Life at School */}
        <Box sx={{ mt: 8 }}>
          <SchoolLifeAndFacilities />
        </Box>

        {/* Contact & Visit Section */}
        <Paper
          sx={{
            p: { xs: 4, md: 8 },
            mt: 8,
            borderRadius: "30px",
            background: "linear-gradient(135deg, #0d47a1 0%, #062e6f 100%)",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
          elevation={4}
        >
          {/* Decorative circle */}
          <Box
            sx={{
              position: "absolute",
              top: -100,
              left: -100,
              width: 300,
              height: 300,
              background: "rgba(255,255,255,0.05)",
              borderRadius: "50%",
            }}
          />

          <Typography variant="h3" fontWeight="800" sx={{ mb: 3 }}>
            Join Our Journey
          </Typography>
          <Typography
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 5,
              fontSize: "1.1rem",
              opacity: 0.9,
              lineHeight: 1.8,
            }}
          >
            We welcome you to visit us, learn more about our programs, and
            become part of our community. Lodwar High School continues to uphold
            values of excellence, discipline and service to humanity.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#f9a825",
                color: "white",
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "50px",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#f57f17" },
              }}
            >
              Visit Us
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.5)",
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: "50px",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;
