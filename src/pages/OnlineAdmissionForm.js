import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OnlineAdmissionForm = () => {
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 6 }}>
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Online Admission Application
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 800 }}>
            Please fill in the form below accurately. All fields marked * are
            mandatory.
          </Typography>
        </Container>
      </Box>

      {/* FORM */}
      <Container sx={{ py: 6 }}>
        <Box component="form" sx={{ maxWidth: 800, mx: "auto" }}>
          <Typography variant="h5" fontWeight="bold">
            Student Information
          </Typography>
          <input style={inputStyle} placeholder="Full Name *" />
          <input style={inputStyle} placeholder="KCPE Index Number *" />
          <input style={inputStyle} placeholder="KCPE Marks *" />
          <input style={inputStyle} placeholder="Date of Birth *" type="date" />

          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Parent / Guardian Information
          </Typography>
          <input
            style={inputStyle}
            placeholder="Parent / Guardian Full Name *"
          />
          <input style={inputStyle} placeholder="Phone Number *" />
          <input style={inputStyle} placeholder="Email Address" />
          <input style={inputStyle} placeholder="Physical Address *" />

          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Additional Information
          </Typography>
          <textarea
            rows={4}
            style={inputStyle}
            placeholder="Any medical condition or special needs"
          ></textarea>

          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#f9a825", flex: 1 }}
            >
              Submit Application
            </Button>
            <Button
              variant="outlined"
              href="/admission_form.pdf"
              download
              sx={{
                borderColor: "#0b3c5d",
                color: "#0b3c5d",
                flex: 1,
                "&:hover": {
                  borderColor: "#0d4c75",
                  backgroundColor: "rgba(11, 60, 93, 0.05)",
                },
              }}
            >
              Download Physical Form
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OnlineAdmissionForm;
