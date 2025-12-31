import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import {
  Church,
  Favorite,
  AutoAwesome,
  Groups,
  Lightbulb,
} from "@mui/icons-material";

const ChapelPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fdfdfd", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "50vh", md: "60vh" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(11, 60, 93, 0.75), rgba(11, 60, 93, 0.85)), url('https://images.unsplash.com/photo-1548625361-195fe6144df8?auto=format&fit=crop&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          px: 3,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 4,
              fontWeight: 700,
              color: "#f9a825",
              display: "block",
              mb: 1,
            }}
          >
            Spirituality & Character
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.8rem", md: "4.5rem" },
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            The School Chapel
          </Typography>
          <Box
            sx={{
              width: "80px",
              height: "4px",
              bgcolor: "#f9a825",
              mx: "auto",
              mb: 3,
              borderRadius: "2px",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              opacity: 0.9,
              fontStyle: "italic",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            "Nurturing the soul, building character, and walking in faith as one
            vibrant community."
          </Typography>
        </Container>
      </Box>

      {/* Side-by-Side Beauty Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: "transform 0.5s ease",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80"
                alt="Chapel Interior"
                sx={{ width: "100%", height: "auto", display: "block" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  right: 20,
                  bgcolor: "rgba(249, 168, 37, 0.9)",
                  color: "white",
                  px: 3,
                  py: 1,
                  borderRadius: "50px",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                }}
              >
                A Sanctuary of Peace
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: "#0b3c5d",
                  lineHeight: 1.2,
                }}
              >
                Heart of Our <br />
                <span style={{ color: "#f9a825" }}>Spiritual Life</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#475569",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                At Lodwar High School, the chapel serves as more than just a
                building; it is the spiritual compass of our institution. Here,
                students and faculty gather to find solace, seek guidance, and
                celebrate our shared values.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#475569",
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                Our services are designed to be inclusive, reflective, and
                transformative, ensuring that every student grows not just
                academically, but also in spirit and integrity.
              </Typography>

              <Box sx={{ pt: 2 }}>
                <Grid container spacing={2}>
                  {[
                    "Daily Morning Prayers",
                    "Sunday Worship Service",
                    "Spiritual Mentorship",
                    "Community Outreach",
                  ].map((item, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <AutoAwesome sx={{ color: "#f9a825", fontSize: 20 }} />
                        <Typography fontWeight={600} color="#0b3c5d">
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
      <Box sx={{ bgcolor: "#f1f5f9", py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 900, color: "#0b3c5d", mb: 2 }}
            >
              Foundations of Faith
            </Typography>
            <Box
              sx={{
                width: "60px",
                height: "4px",
                bgcolor: "#f9a825",
                mx: "auto",
                borderRadius: "2px",
              }}
            />
          </Box>
          <Grid container spacing={4}>
            {[
              {
                icon: <Favorite />,
                title: "Compassion",
                desc: "We teach our students to walk in the shoes of others and serve with a kind heart.",
              },
              {
                icon: <Church />,
                title: "Integrity",
                desc: "Upholding moral principles even when no one is watching, as a core of our faith.",
              },
              {
                icon: <Groups />,
                title: "Unity",
                desc: "Bringing together diverse backgrounds into one harmonious spiritual family.",
              },
            ].map((value, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "20px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      bgcolor: "rgba(11, 60, 93, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                      color: "#0b3c5d",
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {value.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ py: 12, textAlign: "center" }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 8 },
            borderRadius: "40px",
            background: "linear-gradient(135deg, #0b3c5d 0%, #082d46 100%)",
            color: "white",
            boxShadow: "0 20px 40px rgba(11, 60, 93, 0.2)",
          }}
        >
          <Typography variant="h4" fontWeight={900} sx={{ mb: 3 }}>
            A Place for Everyone
          </Typography>
          <Typography
            sx={{
              mb: 4,
              fontStyle: "italic",
              opacity: 0.9,
              fontSize: "1.1rem",
            }}
          >
            "For where two or three gather in my name, there am I with them."
          </Typography>
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)", mb: 4 }} />
          <Typography sx={{ opacity: 0.8 }}>
            Whether you are a student, staff member, or visitor, our doors are
            always open for quiet reflection and spiritual connection.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default ChapelPage;
