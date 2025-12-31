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
import AcademicsHero from "../components/AcademicsHero/AcademicsHero";
import SubjectsOffered from "../components/SubjectsOffered/SubjectsOffered";

const AcademicsPage = () => {
  return (
    <Box>
      <AcademicsHero />

      {/* SUBJECTS OFFERED SECTION */}
      <SubjectsOffered />

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
