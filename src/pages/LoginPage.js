import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Grid,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  IconButton,
  InputAdornment,
  CircularProgress,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Visibility,
  VisibilityOff,
  AccountCircle,
  School,
} from "@mui/icons-material";
import styled from "styled-components";
import { loginUser } from "../redux/userRelated/userHandle";
import Popup from "../components/Popup";

const defaultTheme = createTheme();

const LoginPage = ({ role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, currentUser, response, currentRole } = useSelector(
    (state) => state.user
  );

  const [toggle, setToggle] = useState(false);
  const [guestLoader, setGuestLoader] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [rollNumberError, setRollNumberError] = useState(false);
  const [studentNameError, setStudentNameError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (role === "Student") {
      const rollNum = event.target.rollNumber.value;
      const studentName = event.target.studentName.value;
      const password = event.target.password.value;

      if (!rollNum || !studentName || !password) {
        if (!rollNum) setRollNumberError(true);
        if (!studentName) setStudentNameError(true);
        if (!password) setPasswordError(true);
        return;
      }
      const fields = { rollNum, studentName, password };
      setLoader(true);
      dispatch(loginUser(fields, role));
    } else {
      const email = event.target.email.value;
      const password = event.target.password.value;

      if (!email || !password) {
        if (!email) setEmailError(true);
        if (!password) setPasswordError(true);
        return;
      }

      const fields = { email, password };
      setLoader(true);
      dispatch(loginUser(fields, role));
    }
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
    if (name === "rollNumber") setRollNumberError(false);
    if (name === "studentName") setStudentNameError(false);
  };

  const guestModeHandler = () => {
    const password = "zxc";

    if (role === "Admin") {
      const email = "yogendra@12";
      const fields = { email, password };
      setGuestLoader(true);
      dispatch(loginUser(fields, role));
    } else if (role === "Student") {
      const rollNum = "1";
      const studentName = "Dipesh Awasthi";
      const fields = { rollNum, studentName, password };
      setGuestLoader(true);
      dispatch(loginUser(fields, role));
    } else if (role === "Teacher") {
      const email = "tony@12";
      const fields = { email, password };
      setGuestLoader(true);
      dispatch(loginUser(fields, role));
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
    } else if (status === "failed") {
      setMessage(response);
      setShowPopup(true);
      setLoader(false);
    } else if (status === "error") {
      setMessage("Network Error");
      setShowPopup(true);
      setLoader(false);
      setGuestLoader(false);
    }
  }, [status, currentRole, navigate, response, currentUser]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledPage>
        <CssBaseline />
        <Container maxWidth="sm">
          <GlassBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LogoWrapper>
                {role === "Student" ? (
                  <School fontSize="large" />
                ) : (
                  <AccountCircle fontSize="large" />
                )}
              </LogoWrapper>
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #4db5ff, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {role} Login
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 4 }}
              >
                Welcome back! Please enter your details
              </Typography>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ width: "100%" }}
              >
                {role === "Student" ? (
                  <>
                    <CustomTextField
                      margin="normal"
                      required
                      fullWidth
                      id="rollNumber"
                      label="Roll Number"
                      name="rollNumber"
                      type="number"
                      autoFocus
                      error={rollNumberError}
                      helperText={rollNumberError && "Roll Number is required"}
                      onChange={handleInputChange}
                    />
                    <CustomTextField
                      margin="normal"
                      required
                      fullWidth
                      id="studentName"
                      label="Student Name"
                      name="studentName"
                      autoComplete="name"
                      error={studentNameError}
                      helperText={studentNameError && "Name is required"}
                      onChange={handleInputChange}
                    />
                  </>
                ) : (
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={emailError}
                    helperText={emailError && "Email is required"}
                    onChange={handleInputChange}
                  />
                )}
                <CustomTextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={toggle ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  error={passwordError}
                  helperText={passwordError && "Password is required"}
                  onChange={handleInputChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setToggle(!toggle)}
                          sx={{ color: "rgba(255, 255, 255, 0.5)" }}
                        >
                          {toggle ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                    mb: 2,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        sx={{
                          color: "rgba(255, 255, 255, 0.3)",
                          "&.Mui-checked": { color: "#4db5ff" },
                        }}
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Remember me
                      </Typography>
                    }
                  />
                  <StyledLink to="#">Forgot password?</StyledLink>
                </Box>
                <LoginButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loader}
                >
                  {loader ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Login"
                  )}
                </LoginButton>
                <GuestButton
                  fullWidth
                  onClick={guestModeHandler}
                  variant="outlined"
                  disabled={guestLoader}
                >
                  {guestLoader ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Login as Guest"
                  )}
                </GuestButton>

                {role === "Admin" && (
                  <Box
                    sx={{
                      mt: 3,
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Don't have an account?{" "}
                    <StyledLink
                      to="/Adminregister"
                      style={{ marginLeft: "8px", fontWeight: 600 }}
                    >
                      Sign up
                    </StyledLink>
                  </Box>
                )}
              </Box>
            </Box>
          </GlassBox>
        </Container>
      </StyledPage>
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </ThemeProvider>
  );
};

export default LoginPage;

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
    top: 20%;
    left: 10%;
    width: 300px;
    height: 300px;
    background: rgba(77, 181, 255, 0.05);
    filter: blur(80px);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 10%;
    right: 15%;
    width: 400px;
    height: 400px;
    background: rgba(127, 86, 218, 0.05);
    filter: blur(100px);
    border-radius: 50%;
  }
`;

const GlassBox = styled(Box)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 50px 40px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 40px 20px;
    margin: 20px;
  }
`;

const LogoWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: rgba(77, 181, 255, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #4db5ff;
  border: 1px solid rgba(77, 181, 255, 0.2);
`;

const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    color: white;

    & fieldset {
      border-color: rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
    }

    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.3);
    }

    &.Mui-focused fieldset {
      border-color: #4db5ff;
      border-width: 1px;
    }
  }

  & .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.5);
    &.Mui-focused {
      color: #4db5ff;
    }
  }

  & .MuiFormHelperText-root {
    color: #f44336;
  }
`;

const LoginButton = styled(Button)`
  background: linear-gradient(45deg, #4db5ff, #3a90d8) !important;
  color: #1f1f38 !important;
  font-weight: 700 !important;
  text-transform: none !important;
  font-size: 1.1rem !important;
  padding: 12px !important;
  border-radius: 12px !important;
  margin-top: 24px !important;
  box-shadow: 0 4px 15px rgba(77, 181, 255, 0.3) !important;
  transition: all 0.3s ease !important;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(77, 181, 255, 0.4) !important;
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1) !important;
    color: rgba(255, 255, 255, 0.3) !important;
  }
`;

const GuestButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  text-transform: none !important;
  font-size: 1rem !important;
  padding: 10px !important;
  border-radius: 12px !important;
  margin-top: 16px !important;
  transition: all 0.3s ease !important;

  &:hover {
    background: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(255, 255, 255, 0.4) !important;
  }
`;

const StyledLink = styled(Link)`
  color: #4db5ff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(77, 181, 255, 0.5);
  }
`;
