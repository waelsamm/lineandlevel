// File: src/LineAndLevel.jsx
import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

export default function LineAndLevel() {
  const [darkMode, setDarkMode] = useState(false);
  const colors = darkMode ? darkColors : baseColors;

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
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} colors={colors} />
      <HeroBanner />
      <About colors={colors} />
      <Services colors={colors} />
      <Contact colors={colors} />
      <Footer colors={colors} />

      <Button
        href="tel:3137900666"
        variant="contained"
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
        📞 Call Now
      </Button>
    </ThemeProvider>
  );
}
