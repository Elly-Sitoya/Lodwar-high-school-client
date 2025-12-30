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

// Placeholder images for history and facilities
const historyImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
];

const facilitiesImages = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1531379410501-8b58f6916b18",
  "https://images.unsplash.com/photo-1557682250-cc3f3d9ad81e",
];

const AboutPage = () => (
  <Box sx={{ p: { xs: 2, md: 5 } }}>
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
      <Typography paragraph>
        Greetings from Lodwar High School — a community rooted in excellence and
        purpose. Nestled in the heart of Turkana County, we have been nurturing
        young minds since 1968. What began as a modest classroom with 40
        learners has grown into a dynamic institution of learning, character,
        and leadership.
      </Typography>
      <Typography paragraph>
        At Lodwar High School, we are committed to empowering every student to
        discover their potential, embrace resilience, and contribute to society
        with confidence and integrity. Our story is one of growth,
        determination, and community — because here, every student matters.
      </Typography>
    </Paper>

    {/* History Section */}
    <Grid container spacing={4} sx={{ mb: 4 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our History
        </Typography>
        <Typography paragraph>
          Established in 1968, Lodwar High School has emerged as a beacon of
          learning in Turkana County. Over decades, we have expanded our
          facilities, enriched our curriculum, and strengthened our commitment
          to academic and character excellence.
        </Typography>
        <Typography paragraph>
          Through discipline, creativity, and a relentless pursuit of knowledge,
          our graduates have gone on to serve communities, succeed in higher
          education, and contribute to national development.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          {historyImages.map((img, i) => (
            <Grid item xs={6} key={i}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={img}
                  alt="School history"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

    <Divider sx={{ mb: 4 }} />

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
    <Paper sx={{ p: 4, mb: 4, backgroundColor: "#f9f9f9" }} elevation={2}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Academic Achievements
      </Typography>
      <Typography paragraph>
        At Lodwar High School, academic excellence is a daily pursuit. In recent
        years, our students have achieved excellent results, with many
        qualifying for university and distinguished programs. Our dedicated
        educators and supportive learning environment make this possible.
      </Typography>
    </Paper>

    {/* Facilities & Life at School */}
    <Typography variant="h4" fontWeight="bold" gutterBottom>
      Life and Facilities at Lodwar
    </Typography>
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {facilitiesImages.map((img, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt="School facility"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A glimpse into vibrant school life — academics, sports,
                assemblies and community activities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

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
