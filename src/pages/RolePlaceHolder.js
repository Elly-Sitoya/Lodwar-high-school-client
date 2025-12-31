import React from "react";
import { Box, Typography, Button, Container, CssBaseline } from "@mui/material";
import {
  Engineering,
  Construction,
  ArrowBack,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../redux/userRelated/userSlice";

const RolePlaceHolder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentRole, currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(authLogout());
    navigate("/");
  };

  return (
    <StyledPage>
      <CssBaseline />
      <Container maxWidth="md">
        <GlassCard>
          <IconWrapper>
            <Construction size="large" className="gear-icon" />
            <Engineering size="large" className="helmet-icon" />
          </IconWrapper>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              mb: 2,
              background: "linear-gradient(45deg, #4db5ff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
            }}
          >
            Dashboard Under Construction
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 4,
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            Welcome,{" "}
            <span style={{ color: "#4db5ff", fontWeight: 600 }}>
              {currentRole}
            </span>
            . We are currently crafting a premium experience for your portal.
          </Typography>

          <Divider />

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              mb: 5,
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            Our team is working hard to bring you a state-of-the-art management
            system. Please check back soon for the full feature set.
          </Typography>

          <ButtonStack>
            <StyledButton
              variant="contained"
              startIcon={<ArrowBack />}
              onClick={() => navigate("/")}
            >
              Return Home
            </StyledButton>
            <LogoutButton
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Log Out
            </LogoutButton>
          </ButtonStack>
        </GlassCard>
      </Container>
    </StyledPage>
  );
};

export default RolePlaceHolder;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledPage = styled.div`
  background: radial-gradient(circle at top left, #2c2c6c, #1f1f38, #0f0f1a);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: rgba(77, 181, 255, 0.1);
    filter: blur(120px);
    border-radius: 50%;
  }
`;

const GlassCard = styled(Box)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
`;

const IconWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  color: #4db5ff;

  .gear-icon {
    font-size: 80px;
    animation: ${spin} 8s linear infinite;
    opacity: 0.2;
  }

  .helmet-icon {
    font-size: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${float} 3s ease-in-out infinite;
    filter: drop-shadow(0 0 15px rgba(77, 181, 255, 0.5));
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: #4db5ff;
  border-radius: 2px;
  margin-bottom: 24px;
`;

const ButtonStack = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #4db5ff, #3a90d8) !important;
  color: #1f1f38 !important;
  font-weight: 700 !important;
  text-transform: none !important;
  padding: 12px 30px !important;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(77, 181, 255, 0.4) !important;
  }
`;

const LogoutButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  text-transform: none !important;
  padding: 12px 30px !important;
  border-radius: 12px !important;

  &:hover {
    background: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(255, 255, 255, 0.4) !important;
  }
`;
