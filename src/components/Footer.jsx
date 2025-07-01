// File: src/components/Footer.jsx

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = ({ colors }) => {
  return (
    <Box sx={{ bgcolor: colors.primary, color: "white", py: 3, textAlign: "center", mt: 5 }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Line & Level Construction. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
