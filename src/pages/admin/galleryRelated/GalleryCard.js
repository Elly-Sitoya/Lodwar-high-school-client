import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const GalleryCard = ({ image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={image.url}
        alt={image.title}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography fontWeight="bold">{image.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {image.category}
          </Typography>
        </div>

        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
