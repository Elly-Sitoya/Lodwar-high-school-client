import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const ShowGalleryImages = () => {
  const navigate = useNavigate();

  // TEMP mock data
  const galleryImages = [
    {
      id: 1,
      title: "Sports Day",
      category: "Sports",
      url: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    },
    {
      id: 2,
      title: "Science Lab",
      category: "Academics",
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
  ];

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">Gallery Management</Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/Admin/gallery/add")}
        >
          Add Image
        </Button>
      </Box>

      <Grid container spacing={3}>
        {galleryImages.map((img) => (
          <Grid item xs={12} sm={6} md={4} key={img.id}>
            <GalleryCard image={img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShowGalleryImages;
