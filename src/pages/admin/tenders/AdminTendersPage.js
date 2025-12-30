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

  // Mock Data with Status
  const [tenders, setTenders] = useState([
    {
      id: 1,
      title: "Supply of Foodstuffs",
      refNo: "LHS/PROC/01/2025",
      closingDate: "2025-03-15",
      status: "Open",
    },
    {
      id: 2,
      title: "Transport Services",
      refNo: "LHS/PROC/02/2024",
      closingDate: "2024-12-10",
      status: "Closed",
    },
  ]);

  const handleCreateOrUpdate = (tenderData) => {
    // In a real app, this would be an API call
    if (selectedTender) {
      // Update
      setTenders((prev) =>
        prev.map((t) =>
          t.id === selectedTender.id ? { ...t, ...tenderData } : t
        )
      );
    } else {
      // Create
      setTenders((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...tenderData,
          status: "Open", // Default status for new items
        },
      ]);
    }
    setOpenDialog(false);
    setSelectedTender(null);
  };

  const handleDelete = () => {
    setTenders((prev) => prev.filter((t) => t.id !== selectedTender.id));
    setOpenDelete(false);
    setSelectedTender(null);
  };

  const handleToggleStatus = (tender) => {
    const newStatus = tender.status === "Open" ? "Closed" : "Open";
    setTenders((prev) =>
      prev.map((t) => (t.id === tender.id ? { ...t, status: newStatus } : t))
    );
  };

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

        <Button
          variant="contained"
          onClick={() => {
            setSelectedTender(null);
            setOpenDialog(true);
          }}
        >
          New Tender
        </Button>
      </Box>

      {/* Table */}
      <TenderTable
        tenders={tenders}
        onEdit={(tender) => {
          setSelectedTender(tender);
          setOpenDialog(true);
        }}
        onDelete={(tender) => {
          setSelectedTender(tender);
          setOpenDelete(true);
        }}
        onToggleStatus={handleToggleStatus}
      />

      {/* Add / Edit Dialog */}
      <TenderDialog
        open={openDialog}
        tender={selectedTender}
        onClose={() => {
          setOpenDialog(false);
          setSelectedTender(null);
        }}
        onSubmit={handleCreateOrUpdate}
      />

      {/* Delete Dialog */}
      <DeleteTenderDialog
        open={openDelete}
        tender={selectedTender}
        onClose={() => {
          setOpenDelete(false);
          setSelectedTender(null);
        }}
        onConfirm={handleDelete}
      />
    </Box>
  );
};

export default AdminTendersPage;
