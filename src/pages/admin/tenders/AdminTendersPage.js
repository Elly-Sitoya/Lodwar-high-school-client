import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import TenderUploadDialog from "./TenderUploadDialog";
import TenderTable from "./TenderTable";

const AdminTendersPage = () => {
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <Box>
      {/* Page Header */}
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
          startIcon={<AddIcon />}
          onClick={() => setOpenUpload(true)}
        >
          New Tender
        </Button>
      </Box>

      {/* Tenders Table */}
      <TenderTable />

      {/* Upload Dialog */}
      <TenderUploadDialog
        open={openUpload}
        onClose={() => setOpenUpload(false)}
      />
    </Box>
  );
};

export default AdminTendersPage;
