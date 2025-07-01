// File: src/components/Services.jsx

import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { motion } from "framer-motion";
import GalleryModal from "./GalleryModal";

import plumbingImg from "../assets/plumbing.jpg";
import hvacImg from "../assets/hvac.jpg";
import remodelingImg from "../assets/remodel2.jpg";
import commercialImg from "../assets/commercial.png";

const services = [
  {
    title: "Plumbing",
    description:
      "Top-notch plumbing installations, repairs, and upgrades — done right the first time.",
    image: plumbingImg,
    gallery: [plumbingImg],
  },
  {
    title: "Heating & Cooling",
    description:
      "Reliable HVAC solutions to keep your property comfortable through every season.",
    image: hvacImg,
    gallery: [hvacImg],
  },
  {
    title: "Remodeling",
    description:
      "Transform kitchens, bathrooms, basements, and more with modern, efficient designs.",
    image: remodelingImg,
    gallery: [remodelingImg],
  },
  {
    title: "Commercial & Residential",
    description:
      "Whether it’s a family home or a large facility — we handle projects of every scale.",
    image: commercialImg,
    gallery: [commercialImg],
  },
];

const Services = ({ colors }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenGallery = (service) => {
    setSelectedService(service);
    setOpenGallery(true);
  };

  return (
    <Box
      id="services"
      sx={{ pt: 4, pb: 8, scrollMarginTop: "100px" }}
    >
      <Divider sx={{ my: 6, borderColor: colors.primary }}>
        <Typography variant="h6" sx={{ color: colors.primary }}>
          Our Services
        </Typography>
      </Divider>

      <Box display="flex" justifyContent="center">
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={4}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleOpenGallery(service)}
              style={{
                borderRadius: 20,
                backgroundColor: "#fdfdfd",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                sx={{
                  height: 180,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    opacity: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                    }}
                  >
                    View Gallery
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  px: 2.5,
                  py: 3,
                  textAlign: "center",
                  minHeight: 180,
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {service.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "inline-block",
                    color: colors.accent,
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  Tap to explore ➤
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Masonry>
      </Box>

      {selectedService && (
        <GalleryModal
          open={openGallery}
          onClose={() => setOpenGallery(false)}
          images={selectedService.gallery}
          title={selectedService.title}
        />
      )}
    </Box>
  );
};

export default Services;



