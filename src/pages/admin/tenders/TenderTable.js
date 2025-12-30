import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
} from "@mui/material";

const TenderTable = () => {
  const tenders = [
    {
      id: 1,
      title: "Supply of Foodstuffs",
      refNo: "LHS/PROC/01/2025",
      closingDate: "15 Mar 2025",
      status: "Open",
    },
    {
      id: 2,
      title: "Transport Services",
      refNo: "LHS/PROC/02/2025",
      closingDate: "10 Feb 2025",
      status: "Closed",
    },
  ];

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Ref No</b>
            </TableCell>
            <TableCell>
              <b>Title</b>
            </TableCell>
            <TableCell>
              <b>Closing Date</b>
            </TableCell>
            <TableCell>
              <b>Status</b>
            </TableCell>
            <TableCell>
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tenders.map((tender) => (
            <TableRow key={tender.id}>
              <TableCell>{tender.refNo}</TableCell>
              <TableCell>{tender.title}</TableCell>
              <TableCell>{tender.closingDate}</TableCell>
              <TableCell>
                <Chip
                  label={tender.status}
                  color={tender.status === "Open" ? "success" : "default"}
                />
              </TableCell>
              <TableCell>
                <Button size="small">Download</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TenderTable;
