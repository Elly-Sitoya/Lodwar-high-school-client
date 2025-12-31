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
          backgroundImage:
            "linear-gradient(rgba(11, 60, 93, 0.8), rgba(11, 60, 93, 0.8)), url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80')",
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
          Apply Now
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Applications are open. Click below to begin your admission process.
        </Typography>
        <Button variant="contained" sx={{ mt: 3, backgroundColor: "#f9a825" }}>
          Apply Online
        </Button>
      </Container>
    </Box>
  );
};
export default AdmissionsPage;
