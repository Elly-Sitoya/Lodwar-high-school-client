import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import StudentsTable from "./StudentsTable";
import AdmissionDialog from "./AdmissionDialog";
import DeleteStudentDialog from "./DeleteStudentDialog";

const AdminAdmissionsPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Student Admissions
        </Typography>

        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          Admit New Student
        </Button>
      </Box>

      {/* Table */}
      <StudentsTable
        onEdit={(student) => {
          setSelectedStudent(student);
          setOpenDialog(true);
        }}
        onDelete={(student) => {
          setSelectedStudent(student);
          setOpenDelete(true);
        }}
      />

      {/* Add / Edit Dialog */}
      <AdmissionDialog
        open={openDialog}
        student={selectedStudent}
        onClose={() => {
          setOpenDialog(false);
          setSelectedStudent(null);
        }}
      />

      {/* Delete Dialog */}
      <DeleteStudentDialog
        open={openDelete}
        student={selectedStudent}
        onClose={() => {
          setOpenDelete(false);
          setSelectedStudent(null);
        }}
      />
    </Box>
  );
};

export default AdminAdmissionsPage;
