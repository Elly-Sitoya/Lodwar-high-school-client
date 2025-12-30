// import { Box, Typography, Button } from "@mui/material";
// import { useState } from "react";
// import TenderDialog from "./TenderDialog";
// import TenderTable from "./TenderTable";
// import DeleteTenderDialog from "./DeleteTenderDialog";

// const AdminTendersPage = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedTender, setSelectedTender] = useState(null);

//   return (
//     <Box>
//       <Box display="flex" justifyContent="space-between" mb={3}>
//         <Typography variant="h4" fontWeight="bold">
//           Tenders Management
//         </Typography>
//         <Button variant="contained" onClick={() => setOpenDialog(true)}>
//           New Tender
//         </Button>
//       </Box>

//       <TenderTable
//         onEdit={(t) => {
//           setSelectedTender(t);
//           setOpenDialog(true);
//         }}
//         onDelete={(t) => {
//           setSelectedTender(t);
//           setOpenDelete(true);
//         }}
//       />

//       <TenderDialog
//         open={openDialog}
//         tender={selectedTender}
//         onClose={() => {
//           setOpenDialog(false);
//           setSelectedTender(null);
//         }}
//       />

//       <DeleteTenderDialog
//         open={openDelete}
//         tender={selectedTender}
//         onClose={() => {
//           setOpenDelete(false);
//           setSelectedTender(null);
//         }}
//       />
//     </Box>
//   );
// };

// export default AdminTendersPage;

import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import TenderTable from "./TenderTable";
import TenderDialog from "./TenderDialog";
import DeleteTenderDialog from "./DeleteTenderDialog";

const AdminTendersPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedTender, setSelectedTender] = useState(null);

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Tenders Management
        </Typography>

        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          New Tender
        </Button>
      </Box>

      {/* Table */}
      <TenderTable
        onEdit={(tender) => {
          setSelectedTender(tender);
          setOpenDialog(true);
        }}
        onDelete={(tender) => {
          setSelectedTender(tender);
          setOpenDelete(true);
        }}
      />

      {/* Add / Edit Dialog */}
      <TenderDialog
        open={openDialog}
        tender={selectedTender}
        onClose={() => {
          setOpenDialog(false);
          setSelectedTender(null);
        }}
      />

      {/* Delete Dialog */}
      <DeleteTenderDialog
        open={openDelete}
        tender={selectedTender}
        onClose={() => {
          setOpenDelete(false);
          setSelectedTender(null);
        }}
      />
    </Box>
  );
};

export default AdminTendersPage;
