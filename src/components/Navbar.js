import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Menu,
  MenuItem,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Admissions", path: "/admissions" },
    { label: "Academics", path: "/academics" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
    { label: "Tenders", path: "/tenders" },
  ];

  const moreItems = [
    { label: "Fee Structure", path: "/fee-structure" },
    { label: "Chapel", path: "/chapel" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 4 }}>
      <Box className="nav-logo" sx={{ justifyContent: "center", mb: 4 }}>
        <Box className="school-icon-container">
          {/* <SchoolIcon /> */}
          <img src={logo} alt="Logo" />
        </Box>
        <Typography
          variant="h6"
          className="nav-logo-text"
          sx={{ color: "white" }}
        >
          Lodwar High
        </Typography>
      </Box>
      <List>
        {[...navItems, ...moreItems].map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              className="mobile-link"
              selected={location.pathname === item.path}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const isTransparentPage =
    location.pathname === "/" || location.pathname === "/gallery";

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        className={`navbar ${
          scrolled || !isTransparentPage ? "navbar-scrolled" : ""
        }`}
        sx={{
          backgroundColor:
            scrolled || !isTransparentPage
              ? "rgba(11, 60, 93, 0.95)"
              : "transparent",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component={Link}
              to="/"
              className="nav-logo"
              sx={{ flexGrow: 1 }}
            >
              <Box className="school-icon-container">
                {/* <SchoolIcon /> */}
                <img src={logo} alt="Logo" />
              </Box>
              <Typography
                variant="h5"
                noWrap
                className="nav-logo-text"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Lodwar High School
              </Typography>
              <Typography
                variant="h6"
                noWrap
                className="nav-logo-text"
                sx={{ display: { xs: "block", sm: "none" } }}
              >
                Lodwar High
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  className="nav-link"
                  component={Link}
                  to={item.path}
                  sx={{ color: "white" }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                className="nav-link"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: "white" }}
              >
                More
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#0b3c5d",
                    color: "white",
                    borderRadius: "12px",
                    marginTop: "10px",
                    minWidth: "180px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                {moreItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={handleClose}
                    component={Link}
                    to={item.path}
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "rgba(249, 168, 37, 0.1)",
                        color: "#f9a825",
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ className: "mobile-drawer" }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 280 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for non-hero pages could go here if needed, 
          but usually we handle padding in the page layout */}
    </Box>
  );
};

export default Navbar;
