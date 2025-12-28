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
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold">
            Application Process
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              "Obtain admission form from the school or online portal",
              "Submit required documents",
              "Attend interview or selection if required",
              "Receive admission letter upon acceptance",
            ].map((step, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Typography fontWeight="bold">Step {index + 1}</Typography>
                    <Typography sx={{ mt: 1 }}>{step}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
