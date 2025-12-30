// import {
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Chip,
//   Stack,
// } from "@mui/material";

// const TenderTable = ({ onEdit, onDelete }) => {
//   const tenders = [
//     {
//       id: 1,
//       title: "Supply of Foodstuffs",
//       refNo: "LHS/PROC/01/2025",
//       closingDate: "2025-03-15",
//       status: "Open",
//     },
//   ];

//   return (
//     <Paper>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <b>Ref No</b>
//             </TableCell>
//             <TableCell>
//               <b>Title</b>
//             </TableCell>
//             <TableCell>
//               <b>Closing Date</b>
//             </TableCell>
//             <TableCell>
//               <b>Status</b>
//             </TableCell>
//             <TableCell>
//               <b>Actions</b>
//             </TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {tenders.map((tender) => (
//             <TableRow key={tender.id}>
//               <TableCell>{tender.refNo}</TableCell>
//               <TableCell>{tender.title}</TableCell>
//               <TableCell>{tender.closingDate}</TableCell>
//               <TableCell>
//                 <Chip
//                   label={tender.status}
//                   color={tender.status === "Open" ? "success" : "default"}
//                 />
//               </TableCell>
//               <TableCell>
//                 <Stack direction="row" spacing={1}>
//                   <Button size="small" onClick={() => onEdit(tender)}>
//                     Edit
//                   </Button>
//                   <Button
//                     size="small"
//                     color="error"
//                     onClick={() => onDelete(tender)}
//                   >
//                     Delete
//                   </Button>
//                 </Stack>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };

// export default TenderTable;

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
  Stack,
} from "@mui/material";

const getTenderStatus = (closingDate) => {
  const today = new Date();
  const closing = new Date(closingDate);
  return today <= closing ? "Open" : "Closed";
};

const TenderTable = ({ onEdit, onDelete }) => {
  const tenders = [
    {
      id: 1,
      title: "Supply of Foodstuffs",
      refNo: "LHS/PROC/01/2025",
      closingDate: "2025-03-15",
    },
    {
      id: 2,
      title: "Transport Services",
      refNo: "LHS/PROC/02/2024",
      closingDate: "2024-12-10",
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
          {tenders.map((tender) => {
            const status = getTenderStatus(tender.closingDate);

            return (
              <TableRow
                key={tender.id}
                sx={{ opacity: status === "Closed" ? 0.6 : 1 }}
              >
                <TableCell>{tender.refNo}</TableCell>
                <TableCell>{tender.title}</TableCell>
                <TableCell>{tender.closingDate}</TableCell>

                <TableCell>
                  <Chip
                    label={status}
                    color={status === "Open" ? "success" : "default"}
                  />
                </TableCell>

                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      size="small"
                      disabled={status === "Closed"}
                      onClick={() => onEdit(tender)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => onDelete(tender)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TenderTable;
