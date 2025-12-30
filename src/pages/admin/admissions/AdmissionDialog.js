import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const classes = [
  { id: "1", name: "Grade 1" },
  { id: "2", name: "Grade 2" },
  { id: "3", name: "Grade 3" },
];

const AdmissionDialog = ({ open, onClose, student }) => {
  const isEdit = Boolean(student);

  const [form, setForm] = useState({
    name: "",
    admissionNum: "",
    classId: "",
    email: "",
    password: "",
    previousSchool: "",
    kcpeMarks: "",
    medicalCondition: "",
  });

  useEffect(() => {
    if (student) {
      setForm({
        name: student.name,
        admissionNum: student.admissionNum,
        classId: student.classId,
        email: student.email,
        previousSchool: student.previousSchool || "",
        kcpeMarks: student.kcpeMarks || "",
        medicalCondition: student.medicalCondition || "",
        password: "",
      });
    }
  }, [student]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(isEdit ? "Updating student:" : "Adding student:", form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{isEdit ? "Edit Student" : "New Admission"}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Admission Number"
            name="admissionNum"
            value={form.admissionNum}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
          />

          {!isEdit && (
            <TextField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              fullWidth
              required
            />
          )}

          <TextField
            label="Previous School"
            name="previousSchool"
            value={form.previousSchool}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="KCPE / KPSEA Marks"
            name="kcpeMarks"
            value={form.kcpeMarks}
            onChange={handleChange}
            fullWidth
            required
          />

          <TextField
            label="Medical Condition / Disability"
            name="medicalCondition"
            value={form.medicalCondition}
            onChange={handleChange}
            fullWidth
            helperText="If none, type 'None'"
          />

          <TextField
            select
            label="Class"
            name="classId"
            value={form.classId}
            onChange={handleChange}
            fullWidth
            required
          >
            {classes.map((cls) => (
              <MenuItem key={cls.id} value={cls.id}>
                {cls.name}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {isEdit ? "Update" : "Admit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdmissionDialog;
