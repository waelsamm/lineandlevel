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
  Divider
} from "@mui/material";
import { motion } from "framer-motion";

const colors = {
  primary: "#233746",
  accent: "#F4B400",
  background: "#FAF9F6",
  text: "#1C1C1C"
};

export default function LineAndLevel() {
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

  return (
    <Box sx={{ bgcolor: colors.background, minHeight: "100vh", color: colors.text, fontFamily: "'Segoe UI', sans-serif" }}>
      <AppBar position="sticky" sx={{ bgcolor: colors.primary }}>
        <Toolbar>
          <img src={logo} alt="Line & Level" style={{ height: 40, marginRight: 12 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Line & Level Construction
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${remodelingImg}) center/cover no-repeat`,
          color: "white"
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Building Trust, One Project at a Time
          </Typography>
          <Typography variant="h6">20+ Years of Craftsmanship in Dearborn and Beyond</Typography>
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
            Based in Dearborn, Line & Level Construction brings experience, skill, and pride to every job — big or small. Our clients count on us for honest pricing, skilled labor, and high-quality results, whether it's a family home remodel or a large commercial project.
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
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}
              >
                <Box sx={{ height: 200, overflow: "hidden" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Box>
                <Box sx={{ p: 2, textAlign: "center" }}>
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
          <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: "auto", bgcolor: "#ffffff" }}>
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

      <Box sx={{ bgcolor: colors.primary, color: "white", py: 3, textAlign: "center", mt: 5 }}>
        &copy; 2025 Line & Level Construction. All rights reserved.
      </Box>
    </Box>
  );
}
