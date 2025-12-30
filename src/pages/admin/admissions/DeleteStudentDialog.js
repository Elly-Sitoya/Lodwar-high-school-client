import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const DeleteStudentDialog = ({ open, onClose, student }) => {
  const handleDelete = () => {
    console.log("Deleting student:", student);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Student</DialogTitle>

      <Typography sx={{ px: 3, py: 1 }}>
        Are you sure you want to delete <b>{student?.name}</b>?
      </Typography>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" variant="contained" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteStudentDialog;
