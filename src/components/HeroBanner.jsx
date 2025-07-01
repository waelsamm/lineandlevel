// File: src/components/HeroBanner.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import remodelingImg from "../assets/home.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${remodelingImg}) center/cover no-repeat`,
        color: "white",
        mt: 1,
      }}
    >
      <Box>
        <Typography variant="h3" gutterBottom>
          Building Trust, One Project at a Time
        </Typography>
        <Typography variant="h6">
          20+ Years of Craftsmanship in Metro Detroit and Beyond
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroBanner;
