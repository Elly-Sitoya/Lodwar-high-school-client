import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import AdmProcess from "../components/AdmProcess/AdmProcess";
import AdmRequirements from "../components/AdmRequirements/AdmRequirements";
import AdmissionsHero from "../assets/admissions_hero.jpg";
import AdmissionsHero2 from "../assets/admissions_hero_2.jpg";
import { Link } from "react-router-dom";

const AdmissionsPage = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundColor: "#0b3c5d",
          color: "white",
          py: 8,
          textAlign: "center",
          backgroundImage: `linear-gradient(rgba(11, 60, 93, 0.8), rgba(11, 60, 93, 0.8)), url(${AdmissionsHero2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          Admissions at Lodwar High
        </Typography>
        <Typography
          variant="h6"
          sx={{ opacity: 0.9, maxWidth: 800, mx: "auto" }}
        >
          Shaping leaders of tomorrow through discipline and hard work. Join our
          vibrant community of scholars.
        </Typography>
      </Box>

      {/* REQUIREMENTS SECTION */}
      <AdmRequirements />

      {/* APPLICATION PROCESS */}
      <AdmProcess />

      {/* APPLY CTA */}
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Ready to Join?
        </Typography>
        <Typography sx={{ mt: 2, mb: 4, maxWidth: 600, mx: "auto" }}>
          You can apply online for a faster process, or download the physical
          admission form to fill out and submit at the school.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to="/onlineadmissionform"
            sx={{
              backgroundColor: "#f9a825",
              "&:hover": { backgroundColor: "#e69a21" },
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Apply Online
          </Button>
          <Button
            variant="outlined"
            href="/admission_form.pdf"
            download
            sx={{
              borderColor: "#0b3c5d",
              color: "#0b3c5d",
              "&:hover": {
                borderColor: "#0d4c75",
                backgroundColor: "rgba(11, 60, 93, 0.05)",
              },
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Download Admission Form
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default AdmissionsPage;
