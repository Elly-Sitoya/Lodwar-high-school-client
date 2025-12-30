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

const TenderTable = ({
  tenders,
  onEdit,
  onDelete,
  onToggleStatus,
  onPreview,
}) => {
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
            <TableRow
              key={tender.id}
              sx={{ opacity: tender.status === "Closed" ? 0.6 : 1 }}
            >
              <TableCell>{tender.refNo}</TableCell>
              <TableCell>{tender.title}</TableCell>
              <TableCell>{tender.closingDate}</TableCell>

              <TableCell>
                <Chip
                  label={tender.status}
                  color={tender.status === "Open" ? "success" : "default"}
                  onClick={() => onToggleStatus(tender)}
                  sx={{ cursor: "pointer" }}
                />
              </TableCell>

              <TableCell>
                <Stack direction="row" spacing={1}>
                  <Button
                    size="small"
                    color="info"
                    onClick={() => onPreview(tender)}
                  >
                    View
                  </Button>
                  <Button size="small" onClick={() => onEdit(tender)}>
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
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TenderTable;
