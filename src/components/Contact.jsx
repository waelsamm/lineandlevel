// File: src/components/Contact.jsx

import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const Contact = ({ colors }) => {
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

  return (
    <Box
      id="contact"
      sx={{
        py: 2,
        px: 2,
        scrollMarginTop: "100px" // fixes blur from navbar anchor
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: colors.primary, textAlign: "center" }}>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
        Business Owner: <strong>Sam Charara</strong> | Phone: <strong>313-790-0666</strong>
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 },
          maxWidth: 600,
          mx: "auto",
          bgcolor: colors.background,
          borderRadius: 3
        }}
      >
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <TextField
            fullWidth
            autoComplete="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            autoComplete="email"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            autoComplete="tel"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Services Needed"
            name="services"
            multiline
            rows={4}
            value={formData.services}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: colors.primary,
                "&:hover": {
                  bgcolor: colors.accent,
                  color: "#fff"
                },
                px: 4,
                py: 1.5
              }}
            >
              Send Message
            </Button>
          </Box>

          {status === "SUCCESS" && (
            <Typography color="success.main" textAlign="center" mt={3}>
              ✅ Thank you! Your message has been sent.
            </Typography>
          )}
          {status === "ERROR" && (
            <Typography color="error.main" textAlign="center" mt={3}>
              ❌ Oops! Something went wrong. Please try again.
            </Typography>
          )}
        </motion.form>
      </Paper>
    </Box>
  );
};

export default Contact;
