// File: src/LineAndLevel.jsx

import React, { useState } from "react";
import logo from "./assets/logo.png";
import plumbingImg from "./assets/plumbing.jpg";
import hvacImg from "./assets/hvac.jpg";
import remodelingImg from "./assets/remodeling.jpg";
import commercialImg from "./assets/commercial.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
  TextField,
  Paper,
  Link,
  Stack,
  Grid,
  Divider,
  IconButton,
  createTheme,
  ThemeProvider,
  useScrollTrigger,
  CssBaseline
} from "@mui/material";
import { motion } from "framer-motion";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import '@fontsource-variable/raleway';

const baseColors = {
  primary: "#233746",
  accent: "#F4B400",
  background: "#FAF9F6",
  text: "#1C1C1C"
};

const darkColors = {
  primary: "#1f2a36",
  accent: "#FFC107",
  background: "#121212",
  paper: "#1e1e1e",
  text: "#EDEDED"
};

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "rgba(35, 55, 70, 0.95)" : "transparent",
      backdropFilter: "blur(10px)",
      transition: "background-color 0.3s ease, backdrop-filter 0.3s ease"
    }
  });
}

export default function LineAndLevel() {
  const [darkMode, setDarkMode] = useState(false);
  const colors = darkMode ? darkColors : baseColors;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/myzjpbgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", phone: "", services: "" });
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  const services = [
    {
      title: "Plumbing",
      description: "Top-notch plumbing installations, repairs, and upgrades — done right the first time.",
      image: plumbingImg
    },
    {
      title: "Heating & Cooling",
      description: "Reliable HVAC solutions to keep your property comfortable through every season.",
      image: hvacImg
    },
    {
      title: "Remodeling",
      description: "Transform kitchens, bathrooms, basements, and more with modern, efficient designs.",
      image: remodelingImg
    },
    {
      title: "Commercial & Residential",
      description: "Whether it’s a family home or a large facility — we handle projects of every scale.",
      image: commercialImg
    }
  ];

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: colors.background,
        paper: darkMode ? darkColors.paper : "#ffffff"
      },
      primary: {
        main: colors.primary
      },
      text: {
        primary: colors.text
      }
    },
    typography: {
      fontFamily: "Raleway Variable, sans-serif",
      h3: {
        textTransform: "uppercase",
        letterSpacing: 2,
        fontWeight: 800
      },
      h4: {
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.5
      },
      button: {
        textTransform: "uppercase",
        fontWeight: 600
      },
      body1: {
        fontFamily: "Raleway Variable, sans-serif"
      },
      body2: {
        fontFamily: "Raleway Variable, sans-serif"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position="fixed" color="transparent" sx={{ transition: "all 0.3s ease", boxShadow: "none" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ transition: "all 0.3s ease", '&:hover': { transform: "translateY(-2px)", textShadow: "0 2px 4px rgba(0,0,0,0.3)" } }}>
              <Box component="img" src={logo} alt="Line & Level Logo" sx={{ height: 50, width: 50, borderRadius: "50%", bgcolor: "#fff", p: 0.5 }} />
              <Typography variant="h6" fontWeight={700} letterSpacing={1} sx={{ color: colors.text }}>
                Line & Level Construction
              </Typography>
            </Stack>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Box sx={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${remodelingImg}) center/cover no-repeat`, color: "white", mt: 8 }}>
        <Box>
          <Typography variant="h3" gutterBottom>
            Building Trust, One Project at a Time
          </Typography>
          <Typography variant="h6">20+ Years of Craftsmanship in Metro Detroit and Beyond</Typography>
        </Box>
      </Box>

      <Box sx={{ bgcolor: colors.accent, py: 1 }}>
        <Container>
          <Stack direction="row" spacing={4} justifyContent="center">
            <Link href="#about" underline="hover" sx={{ color: colors.primary }}>About</Link>
            <Link href="#services" underline="hover" sx={{ color: colors.primary }}>Services</Link>
            <Link href="#contact" underline="hover" sx={{ color: colors.primary }}>Contact</Link>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Box id="about" sx={{ mb: 8 }}>
          <Typography variant="h4" textAlign="center" sx={{ fontWeight: "bold", mb: 2, color: colors.primary }}>
            About Us
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 2 }}>
            20 Years of Reliable, Trustworthy Construction Service
          </Typography>
          <Typography variant="body1" align="center">
            Based in Metro Detroit, Line & Level Construction brings experience, skill, and pride to every job — big or small. Our clients count on us for honest pricing, skilled labor, and high-quality results, whether it's a family home remodel or a large commercial project.
          </Typography>
        </Box>

        <Divider sx={{ my: 6, borderColor: colors.primary }}>
          <Typography variant="h6" sx={{ color: colors.primary }}>Our Services</Typography>
        </Divider>

        <Grid container spacing={4} id="services">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: theme.palette.background.paper,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minHeight: 400
                }}
              >
                <Box sx={{ height: 200, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ flex: 1, p: 2, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6, borderColor: colors.primary }}>
          <Typography variant="h6" sx={{ color: colors.primary }}>Get in Touch</Typography>
        </Divider>

        <Box id="contact">
          <Typography variant="h4" gutterBottom sx={{ color: colors.primary, textAlign: "center" }}>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 2 }}>
            Business Owner: <strong>Sam Charara</strong> | Phone: <strong>313-790-0666</strong>
          </Typography>
          <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto", bgcolor: theme.palette.background.paper }}>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
              <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} margin="normal" required />
              <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} margin="normal" required />
              <TextField fullWidth label="Services Needed" name="services" multiline rows={4} value={formData.services} onChange={handleChange} margin="normal" required />
              <Box textAlign="center" mt={2}>
                <Button variant="contained" sx={{ bgcolor: colors.primary }} type="submit">
                  Send Message
                </Button>
              </Box>
              {status === "SUCCESS" && (
                <Typography color="success.main" textAlign="center" mt={2}>
                  ✅ Thank you! Your message has been sent.
                </Typography>
              )}
              {status === "ERROR" && (
                <Typography color="error.main" textAlign="center" mt={2}>
                  ❌ Oops! Something went wrong. Please try again.
                </Typography>
              )}
            </motion.form>
          </Paper>
        </Box>
      </Container>

      <Button
        href="tel:3137900666"
        variant="contained"
        startIcon={<span role="img" aria-label="phone">📞</span>}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          bgcolor: colors.accent,
          color: colors.primary,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          '&:hover': {
            transform: "scale(1.1)",
            bgcolor: "#e0a800"
          },
          zIndex: 1300
        }}
      >
        Call Now
      </Button>

      <Box sx={{ bgcolor: colors.primary, color: "white", py: 3, textAlign: "center", mt: 5 }}>
        &copy; 2025 Line & Level Construction. All rights reserved.
      </Box>
    </ThemeProvider>
  );
}