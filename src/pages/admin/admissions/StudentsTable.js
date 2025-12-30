import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
} from "@mui/material";

const StudentsTable = ({ onEdit, onDelete }) => {
  const students = [
    { id: 1, name: "Elly Sitoya", admissionNum: "101", className: "Grade 1" },
    { id: 2, name: "Jane Doe", admissionNum: "102", className: "Grade 2" },
  ];

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Admission No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.admissionNum}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.className}</TableCell>
              <TableCell>
                <Stack direction="row" spacing={1}>
                  <Button size="small" onClick={() => onEdit(student)}>
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => onDelete(student)}
                  >
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default StudentsTable;
