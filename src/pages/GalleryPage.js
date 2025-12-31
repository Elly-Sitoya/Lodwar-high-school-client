import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Stack,
  Pagination,
  Modal,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Make sure to have @mui/icons-material installed, otherwise use text 'X'
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap"; // Optional icon for hover
import galleryHero from "../assets/gallery_hero.jpg";
import gallery_1 from "../assets/gallery_1.jpg";
import gallery_2 from "../assets/gallery_2.jpg";
import gallery_3 from "../assets/gallery_3.jpg";
import gallery_4 from "../assets/gallery_4.jpg";
import gallery_5 from "../assets/gallery_5.jpg";
import gallery_6 from "../assets/gallery_6.jpg";
import gallery_7 from "../assets/gallery_7.jpg";
import gallery_8 from "../assets/gallery_8.jpg";
import gallery_9 from "../assets/gallery_9.jpg";
import gallery_10 from "../assets/gallery_10.jpg";
import gallery_11 from "../assets/gallery_11.jpg";
import gallery_12 from "../assets/gallery_12.jpg";

// If icons are missing, we can fallback to text or SVGs, but standard MUI setup usually has them.
// I will assume they might not have icons installed if it's a barebones setup,
// so will use a text 'X' for close if the import fails in their environment,
// but standard practice implies @mui/icons-material is present with @mui/material.
// To be safe against "Module not found", I will implement a safe fallback logic or just standard text for the Close button if I can't guarantee the package.
// However, looking at previous files (AccountMenu.js), they might have it.
// Let's stick to standard MUI components without icons for absolute safety, or use simple standard elements.
// Actually, I'll use a standard Button for close to be safe.

const galleryImages = [
  {
    id: 1,
    title: "School Assembly",
    category: "Events",
    image: gallery_1,
  },
  {
    id: 2,
    title: "Science Laboratory",
    category: "Academics",
    image: gallery_2,
  },
  {
    id: 3,
    title: "Sports Day",
    category: "Sports",
    image: gallery_3,
  },
  {
    id: 4,
    title: "Library",
    category: "Facilities",
    image: gallery_4,
  },
  {
    id: 5,
    title: "Computer Lab",
    category: "Facilities",
    image: gallery_5,
  },
  {
    id: 6,
    title: "Classroom Session",
    category: "Academics",
    image: gallery_6,
  },
  {
    id: 7,
    title: "Prize Giving Day",
    category: "Events",
    image: gallery_7,
  },
  {
    id: 8,
    title: "Football Match",
    category: "Sports",
    image: gallery_8,
  },
  {
    id: 9,
    title: "Chemistry Practicals",
    category: "Academics",
    image: gallery_9,
  },
  {
    id: 10,
    title: "Main Gate",
    category: "Facilities",
    image: gallery_10,
  },
  {
    id: 11,
    title: "Music Festival",
    category: "Events",
    image: gallery_11,
  },
  {
    id: 12,
    title: "Basketball Court",
    category: "Sports",
    image: gallery_12,
  },
];

const categories = ["All", "Academics", "Facilities", "Sports", "Events"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const itemsPerPage = 6;

  // Reset to page 1 when filter changes
  useEffect(() => {
    setPage(1);
  }, [filter]);

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

  const displayedImages = filteredImages.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    const heroSection = document.getElementById("gallery-start");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        position: "relative",
      }}
    >
      {/* GLOBAL BACKGROUND IMAGE */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${galleryHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly lighter overlay for vibrancy
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
          <Typography
            variant="h2"
            fontWeight="800"
            sx={{
              color: "white",
              mb: 2,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            School Gallery
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#f5f5f5", // Brighter text
              fontWeight: "400",
              maxWidth: "800px",
              mx: "auto",
              fontStyle: "italic",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            "Capturing the vibrant spirit of Lodwar High School"
          </Typography>
        </Box>
      </Box>

      {/* CONTENT SECTION */}
      <Box
        id="gallery-start"
        sx={{ py: 6, px: { xs: 2, md: 6 }, position: "relative", zIndex: 1 }}
      >
        {/* CATEGORY FILTERS */}
        <Box sx={{ mb: 6, display: "flex", justifyContent: "center" }}>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
            justifyContent="center"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  fontWeight: filter === cat ? "600" : "500",
                  backgroundColor: filter === cat ? "#0d47a1" : "white",
                  color: filter === cat ? "white" : "#555",
                  boxShadow:
                    filter === cat
                      ? "0 4px 12px rgba(13, 71, 161, 0.4)"
                      : "0 2px 8px rgba(0,0,0,0.05)",
                  border: "1px solid",
                  borderColor: filter === cat ? "#0d47a1" : "rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: filter === cat ? "#0a3b8c" : "#f0f4f8",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {cat}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* GALLERY GRID */}
        <Grid container spacing={4}>
          {displayedImages.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                onClick={() => handleImageClick(item)}
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                    "& .image-overlay": {
                      opacity: 1,
                    },
                    "& .gallery-img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Box
                  sx={{ position: "relative", overflow: "hidden", height: 300 }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    className="gallery-img"
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  {/* Hover Overlay Effect */}
                  <Box
                    className="image-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(13, 71, 161, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Typography
                      variant="button"
                      sx={{
                        color: "white",
                        border: "1px solid white",
                        px: 3,
                        py: 1,
                        borderRadius: "20px",
                      }}
                    >
                      View Image
                    </Typography>
                  </Box>
                </Box>
                <Box p={3} sx={{ backgroundColor: "white" }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0d47a1",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {item.category}
                  </Typography>
                  <Typography variant="h6" fontWeight="700" color="#333">
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#0d47a1",
                  "&.Mui-selected": {
                    backgroundColor: "#0d47a1",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#0a3b8c",
                    },
                  },
                },
              }}
            />
          </Box>
        )}
      </Box>

      {/* LIGHTBOX MODAL */}
      <Modal
        open={!!selectedImage}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      >
        <Fade in={!!selectedImage}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "auto",
              maxWidth: "90vw",
              maxHeight: "90vh",
              outline: "none",
              p: 1,
            }}
            onClick={handleCloseModal}
          >
            {selectedImage && (
              <>
                <Box
                  component="img"
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "85vh",
                    display: "block",
                    borderRadius: "4px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  }}
                />
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{ fontWeight: "bold" }}
                  >
                    {selectedImage.title}
                  </Typography>
                </Box>
              </>
            )}
            <Button
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: -40,
                right: 0,
                color: "white",
                minWidth: "auto",
              }}
            >
              Close [X]
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default GalleryPage;
