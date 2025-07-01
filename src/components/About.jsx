// File: src/components/About.jsx

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = ({ colors }) => {
  return (
    <Container
      id="about"
      sx={{
        py: 8,
        pb: 2,
        scrollMarginTop: "100px" // Fixes blur overlap when scrolling from navbar
      }}
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Line */}
      <Box
        sx={{
          width: 80,
          height: 4,
          backgroundColor: colors.accent,
          mx: "auto",
          borderRadius: 2,
          mb: 3
        }}
      />

      {/* Main Content */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: "bold", mb: 2, color: colors.primary }}
        >
          About Us
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          20 Years of Reliable, Trustworthy Construction Service
        </Typography>
        <Typography variant="body1" align="center">
          Based in Metro Detroit, Line & Level Construction brings experience,
          skill, and pride to every job — big or small. Our clients count on us
          for honest pricing, skilled labor, and high-quality results, whether
          it's a family home remodel or a large commercial project.
        </Typography>
      </Box>

      {/* Value Tags */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2
        }}
      >
        {["Licensed & Insured", "Transparent Pricing", "Locally Owned"].map(
          (tag, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                py: 1,
                backgroundColor: colors.primary,
                color: "white",
                borderRadius: 20,
                fontSize: "0.9rem",
                fontWeight: 500
              }}
            >
              {tag}
            </Box>
          )
        )}
      </Box>
    </Container>
  );
};

export default About;

