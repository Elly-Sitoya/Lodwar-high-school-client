import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";

const AddGalleryImage = () => {
  return (
    <Paper sx={{ p: 3, maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        Add Gallery Image
      </Typography>

      <TextField label="Image Title" fullWidth margin="normal" />

      <TextField
        select
        label="Category"
        fullWidth
        margin="normal"
        defaultValue=""
      >
        <MenuItem value="Academics">Academics</MenuItem>
        <MenuItem value="Sports">Sports</MenuItem>
        <MenuItem value="Events">Events</MenuItem>
      </TextField>

      <Button variant="outlined" component="label" fullWidth sx={{ my: 2 }}>
        Upload Image
        <input type="file" hidden />
      </Button>

      <Button variant="contained" color="primary" fullWidth>
        Save Image
      </Button>
    </Paper>
  );
};

export default AddGalleryImage;
