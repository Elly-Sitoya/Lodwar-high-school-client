import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Alert,
} from "@mui/material";

const TendersPage = () => {
  const openTenders = [
    {
      id: 1,
      title: "Supply of Foodstuffs",
      ref: "LHS/PROC/01/2025",
      closingDate: "15th March 2025",
      status: "Open",
    },
    {
      id: 2,
      title: "Provision of Transport Services",
      ref: "LHS/PROC/02/2025",
      closingDate: "20th March 2025",
      status: "Open",
    },
  ];

  return (
    <Box>
      {/* Page Header */}
      <Box
        sx={{
          backgroundColor: "#0B3C5D",
          color: "#fff",
          p: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Tenders & Procurement
        </Typography>
        <Typography mt={1}>Lodwar High School – Procurement Notices</Typography>
      </Box>

      {/* Content */}
      <Box p={4}>
        {/* Procurement Notice */}
        <Alert severity="info" sx={{ mb: 3 }}>
          Lodwar High School invites sealed tenders from eligible and qualified
          suppliers for the supply of goods, provision of services, and works as
          listed below in accordance with the Public Procurement and Asset
          Disposal Act (PPADA).
        </Alert>

        {/* Open Tenders */}
        <Typography variant="h5" mb={2}>
          Open Tenders
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell>
                  <b>Ref No</b>
                </TableCell>
                <TableCell>
                  <b>Tender Description</b>
                </TableCell>
                <TableCell>
                  <b>Closing Date</b>
                </TableCell>
                <TableCell>
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {openTenders.map((tender) => (
                <TableRow key={tender.id}>
                  <TableCell>{tender.ref}</TableCell>
                  <TableCell>{tender.title}</TableCell>
                  <TableCell>{tender.closingDate}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Archived Tenders */}
        <Typography variant="h5" mt={5} mb={2}>
          Archived / Closed Tenders
        </Typography>

        <Paper sx={{ p: 2 }}>
          <Typography color="text.secondary">
            No archived tenders at the moment.
          </Typography>
        </Paper>

        {/* Contact Info */}
        <Paper sx={{ p: 3, mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Procurement Office
          </Typography>
          <Typography>
            Lodwar High School
            <br />
            P.O. Box XXXX – Lodwar
            <br />
            Email: procurement@lodwarhighschool.ac.ke
          </Typography>
        </Paper>

        {/* Disclaimer */}
        <Typography
          variant="body2"
          color="text.secondary"
          mt={4}
          textAlign="center"
        >
          Lodwar High School reserves the right to accept or reject any tender
          without assigning any reason thereof.
        </Typography>
      </Box>
    </Box>
  );
};

export default TendersPage;
