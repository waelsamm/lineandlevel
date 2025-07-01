// File: src/components/GalleryModal.jsx

import React, { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwipeable } from "react-swipeable";

const GalleryModal = ({ open, onClose, images = [], title = "" }) => {
  const [index, setIndex] = useState(0);
  const imgRef = useRef();

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") onClose();
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      onKeyDown={handleKeyDown}
      scroll="body"
    >
      <DialogContent
        {...handlers}
        sx={{
          position: "relative",
          bgcolor: "black",
          outline: "none",
          p: 3
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            zIndex: 10
          }}
        >
          <CloseIcon />
        </IconButton>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <IconButton onClick={handlePrev} sx={{ color: "white" }}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}
          >
            <Box
              component="img"
              src={images[index]}
              alt={`${title} gallery image ${index + 1}`}
              ref={imgRef}
              sx={{
                maxHeight: "80vh",
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)"
                }
              }}
            />
          </Box>

          <IconButton onClick={handleNext} sx={{ color: "white" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>

        {/* Thumbnails */}
        <Stack direction="row" spacing={1} mt={3} justifyContent="center" flexWrap="wrap">
          {images.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setIndex(i)}
              sx={{
                height: 60,
                width: 80,
                objectFit: "cover",
                borderRadius: 1,
                cursor: "pointer",
                border: i === index ? "2px solid #FFC107" : "2px solid transparent",
                transition: "all 0.2s"
              }}
            />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;


