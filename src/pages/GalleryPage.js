import { Box, Typography, Grid, Card, CardMedia } from "@mui/material";

const galleryImages = [
  {
    id: 1,
    title: "School Assembly",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  {
    id: 2,
    title: "Science Laboratory",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  },
  {
    id: 3,
    title: "Sports Day",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
  },
  {
    id: 4,
    title: "Library",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 5,
    title: "Computer Lab",
    image: "https://images.unsplash.com/photo-1584697964154-8b25d6a2a3cf",
  },
  {
    id: 6,
    title: "Classroom Session",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
];

const GalleryPage = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundColor: "#0d47a1",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          School Gallery
        </Typography>
        <Typography variant="h6" mt={1}>
          A glimpse of life at Lodwar High School
        </Typography>
      </Box>

      {/* GALLERY GRID */}
      <Box p={4}>
        <Grid container spacing={3}>
          {galleryImages.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={item.image}
                  alt={item.title}
                />
                <Box p={2}>
                  <Typography fontWeight="bold">{item.title}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default GalleryPage;
