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

const AdmissionsPage = () => {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 6 }}>
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Admissions
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 700 }}>
            Join Lodwar High School and become part of a proud tradition of
            academic excellence, discipline, and leadership.
          </Typography>
        </Container>
      </Box>

      {/* REQUIREMENTS */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          Admission Requirements
        </Typography>
        <ul style={{ marginTop: "16px", lineHeight: "2" }}>
          <li>KCPE Result Slip or Certificate</li>
          <li>Copy of Birth Certificate</li>
          <li>Primary School Leaving Certificate</li>
          <li>Two Passport Size Photographs</li>
          <li>Transfer Letter (if applicable)</li>
        </ul>
      </Container>

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
