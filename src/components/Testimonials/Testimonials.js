import React from "react";
import { Box, Container, Typography, Grid, Avatar, Paper } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Parent from "../../assets/avatar_1.jpg";
import Student from "../../assets/avatar_2.jpg";

const testimonialsData = [
  {
    name: "John Lokichoggio",
    role: "Parent, Grade 12",
    quote:
      "Lodwar High School transformed my son into a disciplined and focused young man. The academic standards and moral guidance are exceptional in this region.",
    avatar: Parent,
    dark: false,
  },
  {
    name: "Emmanuel Ekiru",
    role: "Alumni, Class of 2023",
    quote:
      "Being a student here has been the best experience. The teachers are supportive, and the facilities like the ICT labs have helped me prepare for my future in engineering.",
    avatar: Student,
    dark: true,
  },
];

const Testimonials = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 3,
            fontWeight: "bold",
            color: "text.secondary",
            display: "block",
            mb: 1,
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          What Our <span style={{ color: "#0b3c5d" }}>Community</span> Says
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {testimonialsData.map((t, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 5,
                borderRadius: 4,
                bgcolor: t.dark ? "#0b3c5d" : "#f8f9fa",
                color: t.dark ? "#fff" : "inherit",
                position: "relative",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <FormatQuoteIcon
                  sx={{
                    fontSize: 40,
                    color: t.dark
                      ? "rgba(255,255,255,0.3)"
                      : "rgba(11, 60, 93, 0.2)",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  "{t.quote}"
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                <Avatar
                  src={t.avatar}
                  sx={{
                    width: 60,
                    height: 60,
                    border: "2px solid",
                    borderColor: t.dark
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(11, 60, 93, 0.1)",
                  }}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: t.dark ? "#fff" : "#0b3c5d", lineHeight: 1.2 }}
                  >
                    {t.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: t.dark
                        ? "rgba(255,255,255,0.7)"
                        : "text.secondary",
                    }}
                  >
                    {t.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
