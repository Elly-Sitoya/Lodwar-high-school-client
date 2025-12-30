// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button,
//   Stack,
// } from "@mui/material";
// import { useEffect, useState } from "react";

// const TenderDialog = ({ open, onClose, tender }) => {
//   const isEdit = Boolean(tender);

//   const [form, setForm] = useState({
//     title: "",
//     refNo: "",
//     closingDate: "",
//     file: null,
//   });

//   useEffect(() => {
//     if (tender) {
//       setForm({
//         title: tender.title,
//         refNo: tender.refNo,
//         closingDate: tender.closingDate,
//         file: null,
//       });
//     }
//   }, [tender]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = () => {
//     console.log(isEdit ? "Updating Tender" : "Creating Tender", form);
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
//       <DialogTitle>{isEdit ? "Edit Tender" : "Upload New Tender"}</DialogTitle>

//       <DialogContent>
//         <Stack spacing={2} mt={1}>
//           <TextField
//             label="Tender Title"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             fullWidth
//             required
//           />

//           <TextField
//             label="Reference Number"
//             name="refNo"
//             value={form.refNo}
//             onChange={handleChange}
//             fullWidth
//             required
//           />

//           <TextField
//             type="date"
//             label="Closing Date"
//             name="closingDate"
//             value={form.closingDate}
//             InputLabelProps={{ shrink: true }}
//             fullWidth
//             required
//           />

//           {!isEdit && (
//             <Button variant="outlined" component="label">
//               Upload Tender PDF
//               <input type="file" hidden accept="application/pdf" />
//             </Button>
//           )}
//         </Stack>
//       </DialogContent>

//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button variant="contained" onClick={handleSubmit}>
//           {isEdit ? "Update" : "Upload"}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default TenderDialog;

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

const TenderDialog = ({ open, onClose, tender }) => {
  const isEdit = Boolean(tender);

  const [form, setForm] = useState({
    title: "",
    refNo: "",
    closingDate: "",
  });

  useEffect(() => {
    if (tender) {
      setForm({
        title: tender.title,
        refNo: tender.refNo,
        closingDate: tender.closingDate,
      });
    }
  }, [tender]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(isEdit ? "Updating tender:" : "Creating tender:", form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{isEdit ? "Edit Tender" : "Upload New Tender"}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Tender Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Reference Number"
            name="refNo"
            value={form.refNo}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            type="date"
            label="Closing Date"
            name="closingDate"
            value={form.closingDate}
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
          />

          {!isEdit && (
            <Button variant="outlined" component="label">
              Upload Tender PDF
              <input type="file" hidden accept="application/pdf" />
            </Button>
          )}
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {isEdit ? "Update" : "Upload"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TenderDialog;
