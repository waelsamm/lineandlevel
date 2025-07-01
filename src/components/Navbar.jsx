// File: src/components/Navbar.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = ({ colors, darkMode, toggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavClick = (href) => {
    scrollToSection(href);
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        zIndex: 1301,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo + Title */}
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 40, width: 40, borderRadius: "50%", bgcolor: "#fff", p: 0.5 }}
          />
          <Typography
  variant="h6"
  sx={{
    fontFamily: "'Pacifico', sans-serif", // replace with desired font
    fontWeight: 800,
    letterSpacing: 2,
    color: colors.text,
    textTransform: "uppercase",
    fontSize: { xs: "1.1rem", sm: "1.3rem" },
  }}
>
  Line & Level
</Typography>

        </Box>

        {isMobile ? (
          <>
            <IconButton
              onClick={() => setDrawerOpen((prev) => !prev)}
              sx={{ color: colors.text }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List sx={{ width: 200, pt:8 }}>
                {navItems.map((item) => (
                  <ListItemButton key={item.label} onClick={() => handleNavClick(item.href)}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
                <ListItemButton onClick={toggleDarkMode}>
                  <ListItemText
                    primary={darkMode ? "Light Mode" : "Dark Mode"}
                    sx={{ textAlign: "left" }}
                  />
                </ListItemButton>
              </List>
            </Drawer>
          </>
        ) : (
          <Box display="flex" gap={4} alignItems="center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <Link
                  component="button"
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: colors.text,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      width: "100%",
                      height: "2px",
                      backgroundColor: colors.accent,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <IconButton onClick={toggleDarkMode} sx={{ color: colors.text }}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;






