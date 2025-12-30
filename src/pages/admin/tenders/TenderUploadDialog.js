import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

const TenderUploadDialog = ({ open, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    refNo: "",
    closingDate: "",
    file: null,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setForm({ ...form, file: e.target.files[0] });

  const handleSubmit = () => {
    console.log("Tender Data:", form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Upload New Tender</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Tender Title"
            name="title"
            fullWidth
            required
            onChange={handleChange}
          />

          <TextField
            label="Reference Number"
            name="refNo"
            fullWidth
            required
            onChange={handleChange}
          />

          <TextField
            type="date"
            label="Closing Date"
            name="closingDate"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
            onChange={handleChange}
          />

          <Button variant="outlined" component="label">
            Upload Tender PDF
            <input
              type="file"
              hidden
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </Button>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TenderUploadDialog;
