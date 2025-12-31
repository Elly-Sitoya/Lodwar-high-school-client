import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Departments from "../components/Departments/Departments";
import KCSEPerformance from "../components/KCSEPerformance/KCSEPerformance";

const AcademicsPage = () => {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 6 }}>
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Academics
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 700 }}>
            Lodwar High School offers a balanced and rigorous academic programme
            designed to nurture excellence, discipline, and lifelong learning.
          </Typography>
        </Container>
      </Box>

      {/* SUBJECTS OFFERED */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          Subjects Offered
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[
            "Mathematics",
            "English",
            "Kiswahili",
            "Biology",
            "Chemistry",
            "Physics",
            "Geography",
            "History",
            "CRE",
            "Business Studies",
            "Agriculture",
            "Computer Studies",
          ].map((subject, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography fontWeight="bold">{subject}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* DEPARTMENTS */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold">
            Academic Departments
          </Typography>
          <Departments />
        </Container>
      </Box>

      {/* KCSE PERFORMANCE */}
      <KCSEPerformance />
    </Box>
  );
};

export default AcademicsPage;
