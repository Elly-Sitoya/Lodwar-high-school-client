import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { AccountCircle, School, Group } from "@mui/icons-material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userRelated/userHandle";
import Popup from "../components/Popup";

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = "zxc";

  const { status, currentUser, currentRole } = useSelector(
    (state) => state.user
  );

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "yogendra@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate("/Adminlogin");
      }
    } else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1";
        const studentName = "Dipesh Awasthi";
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate("/Studentlogin");
      }
    } else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate("/Teacherlogin");
      }
    }
  };

  useEffect(() => {
    if (status === "success" || currentUser !== null) {
      if (currentRole === "Admin") {
        navigate("/Admin/dashboard");
      } else if (currentRole === "Student") {
        navigate("/Student/dashboard");
      } else if (currentRole === "Teacher") {
        navigate("/Teacher/dashboard");
      }
    } else if (status === "error") {
      setLoader(false);
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container>
        <HeaderSection>
          <h1>Select Your Role</h1>
          <p>
            Welcome to LodwaHigh Portal. Please choose your access level to
            continue.
          </p>
        </HeaderSection>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <GlassCard onClick={() => navigateHandler("Admin")}>
              <IconWrapper className="admin-icon">
                <AccountCircle fontSize="inherit" />
              </IconWrapper>
              <StyledTypography>Admin</StyledTypography>
              <p>
                Login as an administrator to access the dashboard to manage app
                data.
              </p>
              <ActionButton>Continue As Admin</ActionButton>
            </GlassCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <GlassCard onClick={() => navigateHandler("Student")}>
              <IconWrapper className="student-icon">
                <School fontSize="inherit" />
              </IconWrapper>
              <StyledTypography>Student</StyledTypography>
              <p>
                Login as a student to explore course materials and assignments.
              </p>
              <ActionButton>Continue As Student</ActionButton>
            </GlassCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <GlassCard onClick={() => navigateHandler("Teacher")}>
              <IconWrapper className="teacher-icon">
                <Group fontSize="inherit" />
              </IconWrapper>
              <StyledTypography>Teacher</StyledTypography>
              <p>
                Login as a teacher to create courses, assignments, and track
                student progress.
              </p>
              <ActionButton>Continue As Teacher</ActionButton>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        <Box ml={2}>Please Wait...</Box>
      </Backdrop>
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: radial-gradient(circle at top left, #2c2c6c, #1f1f38, #0f0f1a);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  color: white;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: rgba(77, 181, 255, 0.1);
    filter: blur(100px);
    border-radius: 50%;
    z-index: 0;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  z-index: 1;
  position: relative;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #4db5ff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.2rem;
    }
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(77, 181, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

    .admin-icon {
      color: #f44336;
      filter: drop-shadow(0 0 10px rgba(244, 67, 54, 0.6));
    }
    .student-icon {
      color: #4db5ff;
      filter: drop-shadow(0 0 10px rgba(77, 181, 255, 0.6));
    }
    .teacher-icon {
      color: #4caf50;
      filter: drop-shadow(0 0 10px rgba(76, 175, 80, 0.6));
    }
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
`;

const StyledTypography = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ActionButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  ${GlassCard}:hover & {
    background: #4db5ff;
    color: #1f1f38;
    border-color: #4db5ff;
    font-weight: 600;
  }
`;
