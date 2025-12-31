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
} from "@mui/material";

const galleryImages = [
  {
    id: 1,
    title: "School Assembly",
    category: "Events",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  {
    id: 2,
    title: "Science Laboratory",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  },
  {
    id: 3,
    title: "Sports Day",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
  },
  {
    id: 4,
    title: "Library",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 5,
    title: "Computer Lab",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1584697964154-8b25d6a2a3cf",
  },
  {
    id: 6,
    title: "Classroom Session",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: 7,
    title: "Prize Giving Day",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    id: 8,
    title: "Football Match",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377",
  },
  {
    id: 9,
    title: "Chemistry Practicals",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1532187878486-d6590d140b53",
  },
  {
    id: 10,
    title: "Main Gate",
    category: "Facilities",
    image: "https://images.unsplash.com/photo-1577894703322-524d76d13016",
  },
  {
    id: 11,
    title: "Music Festival",
    category: "Events",
    image: "https://images.unsplash.com/photo-1514525253344-f81f3f7461d5",
  },
  {
    id: 12,
    title: "Basketball Court",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43",
  },
];

const categories = ["All", "Academics", "Facilities", "Sports", "Events"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
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
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundColor: "#0d47a1",
          color: "white",
          py: 8,
          textAlign: "center",
          backgroundImage:
            "linear-gradient(rgba(13, 71, 161, 0.8), rgba(13, 71, 161, 0.8)), url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
          School Gallery
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Capturing the vibrant spirit of Lodwar High School
        </Typography>
      </Box>

      {/* CATEGORY FILTERS */}
      <Box sx={{ py: 4, display: "flex", justifyContent: "center" }}>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "contained" : "outlined"}
              onClick={() => setFilter(cat)}
              sx={{
                borderRadius: "20px",
                px: 3,
                py: 1,
                mb: 1,
                fontWeight: "bold",
                backgroundColor: filter === cat ? "#f9a825" : "transparent",
                color: filter === cat ? "white" : "#0d47a1",
                borderColor: "#0d47a1",
                "&:hover": {
                  backgroundColor:
                    filter === cat ? "#f57f17" : "rgba(13, 71, 161, 0.04)",
                  borderColor: "#0d47a1",
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* GALLERY GRID */}
      <Box p={4} sx={{ minHeight: "400px" }}>
        <Grid container spacing={3}>
          {displayedImages.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="260"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <Box p={2} sx={{ backgroundColor: "white" }}>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    sx={{ mb: 1, fontWeight: "bold" }}
                  >
                    {item.category}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GalleryPage;
