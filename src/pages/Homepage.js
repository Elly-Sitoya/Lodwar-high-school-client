// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Grid, Box, Button } from '@mui/material';
// import styled from 'styled-components';
// import Students from "../assets/students.svg";
// import { LightPurpleButton } from '../components/buttonStyles';

// const Homepage = () => {
//     return (
//         <StyledContainer>
//             <Grid container spacing={0}>
//                 <Grid item xs={12} md={6}>
//                     <img src={Students} alt="students" style={{ width: '100%' }} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <StyledPaper elevation={3}>
//                         <StyledTitle>
//                             Welcome to
//                             <br />
//                             School Management
//                             <br />
//                             System
//                         </StyledTitle>
//                         <StyledText>
//                             Streamline school management, class organization, and add students and faculty.
//                             Seamlessly track attendance, assess performance, and provide feedback.
//                             Access records, view marks, and communicate effortlessly.
//                         </StyledText>
//                         <StyledBox>
//                             <StyledLink to="/choose">
//                                 <LightPurpleButton variant="contained" fullWidth>
//                                     Login
//                                 </LightPurpleButton>
//                             </StyledLink>
//                             <StyledLink to="/chooseasguest">
//                                 <Button variant="outlined" fullWidth
//                                     sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
//                                 >
//                                     Login as Guest
//                                 </Button>
//                             </StyledLink>
//                             <StyledText>
//                                 Don't have an account?{' '}
//                                 <Link to="/Adminregister" style={{color:"#550080"}}>
//                                     Sign up
//                                 </Link>
//                             </StyledText>
//                         </StyledBox>
//                     </StyledPaper>
//                 </Grid>
//             </Grid>
//         </StyledContainer>
//     );
// };

// export default Homepage;

// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const StyledPaper = styled.div`
//   padding: 24px;
//   height: 100vh;
// `;

// const StyledBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content:center;
//   gap: 16px;
//   padding: 24px;
// `;

// const StyledTitle = styled.h1`
//   font-size: 3rem;
//   color: #252525;
//   /* font-family: "Manrope"; */
//   font-weight: bold;
//   padding-top: 0;
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledText = styled.p`
//   /* color: #550080; */
//   margin-top: 30px;
//   margin-bottom: 30px;
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import Admissions from "../components/LandingPage/Admissions";
const Homepage = () => {
  return (
    <Box>
      {/* NAVBAR */}
      {/* <AppBar position="static" sx={{ backgroundColor: "#0b3c5d" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Lodwar High School
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/admissions">
            Admissions
          </Button>
          <Button color="inherit" component={Link} to="/academics">
            Academics
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar> */}

      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Welcome to Lodwar High School
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, maxWidth: 600 }}>
            A Center of Academic Excellence, Discipline, and Moral Integrity.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 4, backgroundColor: "#f9a825" }}
            component={Link}
            to="/onlineadmissionform"
          >
            Apply for Admission
          </Button>
        </Container>
      </Box>

      {/* ABOUT SECTION */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              About Our School
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Lodwar High School is a leading secondary institution committed to
              academic excellence, discipline, and holistic student development.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="school"
              style={{ width: "100%", borderRadius: 8 }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* FEATURES */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container>
          <Grid container spacing={4}>
            {[
              {
                title: "Quality Education",
                desc: "Highly qualified teachers and KCSE excellence.",
              },
              {
                title: "Modern Facilities",
                desc: "Well-equipped labs, library, and ICT rooms.",
              },
              {
                title: "Discipline & Values",
                desc: "Strong moral foundation and leadership training.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography sx={{ mt: 1 }}>{item.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Admissions />
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ backgroundColor: "#0b3c5d", color: "white", py: 4 }}>
        <Container>
          <Typography align="center">
            © {new Date().getFullYear()} Lodwar High School | Excellence is Our
            Pride
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;
