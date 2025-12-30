// import {
//   Dialog,
//   DialogTitle,
//   DialogActions,
//   Button,
//   Typography,
// } from "@mui/material";

// const DeleteTenderDialog = ({ open, onClose, tender }) => {
//   const handleDelete = () => {
//     console.log("Deleting Tender:", tender);
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Delete Tender</DialogTitle>

//       <Typography sx={{ px: 3, py: 1 }}>
//         Are you sure you want to delete <b>{tender?.title}</b>? This action
//         cannot be undone.
//       </Typography>

//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button color="error" variant="contained" onClick={handleDelete}>
//           Delete
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default DeleteTenderDialog;

import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const DeleteTenderDialog = ({ open, onClose, tender }) => {
  const handleDelete = () => {
    console.log("Deleting tender:", tender);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Tender</DialogTitle>

      <Typography sx={{ px: 3, py: 1 }}>
        Are you sure you want to delete <b>{tender?.title}</b>? This action
        cannot be undone.
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

export default DeleteTenderDialog;
