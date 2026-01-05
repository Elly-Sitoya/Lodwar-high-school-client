import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logo.png";

const feeData = {
  "Form 1": {
    items: [
      {
        unit: "B.E.S (Boarding Equipment & Stores)",
        total: 46000,
        subsidy: 0,
        parent: 46000,
        term1: 22000,
        term2: 15450,
        term3: 8550,
      },
      {
        unit: "Tuition",
        total: 11100,
        subsidy: 4104,
        parent: 6996,
        term1: 3000,
        term2: 3100,
        term3: 896,
      },
      {
        unit: "Personal Emolument",
        total: 11785,
        subsidy: 5094,
        parent: 6691,
        term1: 2779,
        term2: 1400,
        term3: 2512,
      },
      {
        unit: "E.W.C (Electricity, Water & Conservacy)",
        total: 6150,
        subsidy: 1128,
        parent: 5022,
        term1: 2250,
        term2: 2150,
        term3: 622,
      },
      {
        unit: "Administration Cost",
        total: 2500,
        subsidy: 610,
        parent: 1890,
        term1: 850,
        term2: 840,
        term3: 200,
      },
      {
        unit: "Activity Fee",
        total: 7000,
        subsidy: 1500,
        parent: 5500,
        term1: 2350,
        term2: 2000,
        term3: 1150,
      },
      {
        unit: "L.T.T (Local Transport & Travel)",
        total: 4000,
        subsidy: 1128,
        parent: 2872,
        term1: 1300,
        term2: 1572,
        term3: 0,
      },
      {
        unit: "R.M.I (Repair Maintenance and Improvement)",
        total: 11000,
        subsidy: 3000,
        parent: 8000,
        term1: 3500,
        term2: 4500,
        term3: 0,
      },
      {
        unit: "Medical & Insurance",
        total: 3000,
        subsidy: 3000,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
      {
        unit: "SMASSE",
        total: 200,
        subsidy: 200,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
    ],
    subTotal: {
      subsidy: 22264,
      parent: 82971,
      term1: 37029,
      term2: 31012,
      term3: 14930,
    },
    others: [
      {
        unit: "Academic Improvement Program",
        parent: 9450,
        term1: 5000,
        term2: 4450,
        term3: 0,
      },
      {
        unit: "Development Fee",
        parent: 11000,
        term1: 6500,
        term2: 4500,
        term3: 0,
      },
    ],
    grandTotal: { parent: 103421, term1: 48529, term2: 39962, term3: 14930 },
  },
  "Form 2": {
    items: [
      {
        unit: "B.E.S (Boarding Equipment & Stores)",
        total: 46000,
        subsidy: 0,
        parent: 46000,
        term1: 22000,
        term2: 15450,
        term3: 8550,
      },
      {
        unit: "Tuition",
        total: 11100,
        subsidy: 4104,
        parent: 6996,
        term1: 3000,
        term2: 3100,
        term3: 896,
      },
      {
        unit: "Personal Emolument",
        total: 11785,
        subsidy: 5094,
        parent: 6691,
        term1: 2779,
        term2: 1400,
        term3: 2512,
      },
      {
        unit: "E.W.C (Electricity, Water & Conservacy)",
        total: 6150,
        subsidy: 1128,
        parent: 5022,
        term1: 2250,
        term2: 2150,
        term3: 622,
      },
      {
        unit: "Administration Cost",
        total: 2500,
        subsidy: 610,
        parent: 1890,
        term1: 850,
        term2: 840,
        term3: 200,
      },
      {
        unit: "Activity Fee",
        total: 7000,
        subsidy: 1500,
        parent: 5500,
        term1: 2350,
        term2: 2000,
        term3: 1150,
      },
      {
        unit: "L.T.T (Local Transport & Travel)",
        total: 4000,
        subsidy: 1128,
        parent: 2872,
        term1: 1300,
        term2: 1572,
        term3: 0,
      },
      {
        unit: "R.M.I (Repair Maintenance and Improvement)",
        total: 11000,
        subsidy: 3000,
        parent: 8000,
        term1: 3500,
        term2: 4500,
        term3: 0,
      },
      {
        unit: "Medical & Insurance",
        total: 3000,
        subsidy: 3000,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
      {
        unit: "SMASSE",
        total: 200,
        subsidy: 200,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
    ],
    subTotal: {
      subsidy: 22264,
      parent: 82971,
      term1: 37029,
      term2: 31012,
      term3: 14930,
    },
    others: [
      {
        unit: "Academic Improvement Program",
        parent: 9450,
        term1: 5000,
        term2: 4450,
        term3: 0,
      },
    ],
    grandTotal: { parent: 92421, term1: 42029, term2: 35462, term3: 14930 },
  },
  "Form 3": {
    items: [
      {
        unit: "B.E.S (Boarding Equipment & Stores)",
        total: 46000,
        subsidy: 0,
        parent: 46000,
        term1: 22000,
        term2: 15450,
        term3: 8550,
      },
      {
        unit: "Tuition",
        total: 11100,
        subsidy: 4104,
        parent: 6996,
        term1: 3000,
        term2: 3100,
        term3: 896,
      },
      {
        unit: "Personal Emolument",
        total: 11785,
        subsidy: 5094,
        parent: 6691,
        term1: 2779,
        term2: 1400,
        term3: 2512,
      },
      {
        unit: "E.W.C (Electricity, Water & Conservacy)",
        total: 6150,
        subsidy: 1128,
        parent: 5022,
        term1: 2250,
        term2: 2150,
        term3: 622,
      },
      {
        unit: "Administration Cost",
        total: 2500,
        subsidy: 610,
        parent: 1890,
        term1: 850,
        term2: 840,
        term3: 200,
      },
      {
        unit: "Activity Fee",
        total: 7000,
        subsidy: 1500,
        parent: 5500,
        term1: 2350,
        term2: 2000,
        term3: 1150,
      },
      {
        unit: "L.T.T (Local Transport & Travel)",
        total: 4000,
        subsidy: 1128,
        parent: 2872,
        term1: 1300,
        term2: 1572,
        term3: 0,
      },
      {
        unit: "R.M.I (Repair Maintenance and Improvement)",
        total: 11000,
        subsidy: 3000,
        parent: 8000,
        term1: 3500,
        term2: 4500,
        term3: 0,
      },
      {
        unit: "Medical & Insurance",
        total: 3000,
        subsidy: 3000,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
      {
        unit: "SMASSE",
        total: 200,
        subsidy: 200,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
    ],
    subTotal: {
      subsidy: 22264,
      parent: 82971,
      term1: 37029,
      term2: 31012,
      term3: 14930,
    },
    others: [
      {
        unit: "Academic Improvement Program",
        parent: 9450,
        term1: 5000,
        term2: 4450,
        term3: 0,
      },
    ],
    grandTotal: { parent: 92421, term1: 42029, term2: 35462, term3: 14930 },
  },
  "Form 4": {
    items: [
      {
        unit: "B.E.S (Boarding Equipment & Stores)",
        total: 46000,
        subsidy: 0,
        parent: 46000,
        term1: 22000,
        term2: 15450,
        term3: 8550,
      },
      {
        unit: "Tuition",
        total: 11100,
        subsidy: 4104,
        parent: 6996,
        term1: 3000,
        term2: 3100,
        term3: 896,
      },
      {
        unit: "Personal Emolument",
        total: 11785,
        subsidy: 5094,
        parent: 6691,
        term1: 2779,
        term2: 1400,
        term3: 2512,
      },
      {
        unit: "E.W.C (Electricity, Water & Conservacy)",
        total: 6150,
        subsidy: 1128,
        parent: 5022,
        term1: 2250,
        term2: 2150,
        term3: 622,
      },
      {
        unit: "Administration Cost",
        total: 2500,
        subsidy: 610,
        parent: 1890,
        term1: 850,
        term2: 840,
        term3: 200,
      },
      {
        unit: "Activity Fee",
        total: 7000,
        subsidy: 1500,
        parent: 5500,
        term1: 2350,
        term2: 2000,
        term3: 1150,
      },
      {
        unit: "L.T.T (Local Transport & Travel)",
        total: 4000,
        subsidy: 1128,
        parent: 2872,
        term1: 1300,
        term2: 1572,
        term3: 0,
      },
      {
        unit: "R.M.I (Repair Maintenance and Improvement)",
        total: 11000,
        subsidy: 3000,
        parent: 8000,
        term1: 3500,
        term2: 4500,
        term3: 0,
      },
      {
        unit: "Medical & Insurance",
        total: 3000,
        subsidy: 3000,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
      {
        unit: "SMASSE",
        total: 200,
        subsidy: 200,
        parent: 0,
        term1: 0,
        term2: 0,
        term3: 0,
      },
    ],
    subTotal: {
      subsidy: 22264,
      parent: 82971,
      term1: 37029,
      term2: 31012,
      term3: 14930,
    },
    others: [
      {
        unit: "Academic Improvement Program",
        parent: 9450,
        term1: 5000,
        term2: 4450,
        term3: 0,
      },
    ],
    grandTotal: { parent: 92421, term1: 42029, term2: 35462, term3: 14930 },
  },
};

const FeeStructure = () => {
  const [activeTab, setActiveTab] = useState(0);
  const forms = ["Form 1", "Form 2", "Form 3", "Form 4"];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const downloadPDF = () => {
    const doc = new jsPDF("l", "mm", "a4"); // Landscape for more columns
    const currentForm = forms[activeTab];
    const data = feeData[currentForm];

    // Header
    doc.addImage(logo, "PNG", 135, 10, 25, 25);
    doc.setFontSize(18);
    doc.text("LODWAR HIGH SCHOOL", 148, 45, { align: "center" });
    doc.setFontSize(10);
    doc.text("P.O. Box 123-30500, Lodwar", 148, 50, { align: "center" });
    doc.text("Email: info@lodwarhigh.ac.ke | Tel: +254 123 456 789", 148, 55, {
      align: "center",
    });

    doc.setFontSize(14);
    doc.text(
      `FEES STRUCTURE FOR YEAR 2025 - ${currentForm.toUpperCase()}`,
      148,
      65,
      { align: "center" }
    );

    // Table
    const tableRows = [];
    data.items.forEach((item) => {
      tableRows.push([
        item.unit,
        item.total,
        item.subsidy,
        item.parent,
        item.term1,
        item.term2,
        item.term3,
      ]);
    });
    tableRows.push([
      { content: "SUB TOTAL", styles: { fontStyle: "bold" } },
      "",
      data.subTotal.subsidy,
      data.subTotal.parent,
      data.subTotal.term1,
      data.subTotal.term2,
      data.subTotal.term3,
    ]);

    data.others.forEach((item) => {
      tableRows.push([
        item.unit,
        "",
        "",
        item.parent,
        item.term1,
        item.term2,
        item.term3,
      ]);
    });

    tableRows.push([
      { content: "GRAND TOTAL", styles: { fontStyle: "bold" } },
      "",
      "",
      { content: data.grandTotal.parent, styles: { fontStyle: "bold" } },
      { content: data.grandTotal.term1, styles: { fontStyle: "bold" } },
      { content: data.grandTotal.term2, styles: { fontStyle: "bold" } },
      { content: data.grandTotal.term3, styles: { fontStyle: "bold" } },
    ]);

    autoTable(doc, {
      startY: 75,
      head: [
        [
          "VOTEHEAD",
          "TOTAL",
          "GOVT SUBSIDY",
          "PARENT",
          "Term I",
          "Term II",
          "Term III",
        ],
      ],
      body: tableRows,
      theme: "grid",
      headStyles: {
        fillColor: [240, 240, 240],
        textColor: [0, 0, 0],
        fontStyle: "bold",
        halign: "center",
      },
      styles: { fontSize: 9, cellPadding: 2 },
      columnStyles: {
        0: { width: 80 },
        1: { halign: "right" },
        2: { halign: "right" },
        3: { halign: "right" },
        4: { halign: "right" },
        5: { halign: "right" },
        6: { halign: "right" },
      },
    });

    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(11);
    doc.setFont(undefined, "bold");
    doc.text("OTHERS", 15, finalY);
    doc.setFont(undefined, "normal");
    doc.setFontSize(9);
    doc.text(
      "The following items should be paid together with Term I fees:",
      15,
      finalY + 5
    );
    doc.text(
      "- New set of School Uniforms (Form 1): KES 11,200",
      20,
      finalY + 10
    );

    doc.setFontSize(11);
    doc.setFont(undefined, "bold");
    doc.text("NOTES", 15, finalY + 20);
    doc.setFont(undefined, "normal");
    doc.setFontSize(9);
    doc.text(
      "All payments should ideally be made via Banker's Cheque in favour of LODWAR HIGH SCHOOL.",
      15,
      finalY + 25
    );
    doc.text(
      "Alternatively, deposit to KCB BANK ACCOUNT No. 123456789 or MPESA Paybill No. 700000.",
      15,
      finalY + 30
    );
    doc.text(
      "Account number is the Student's admission number followed by student's name.",
      15,
      finalY + 35
    );

    doc.text("CHIEF PRINCIPAL", 250, finalY + 50, { align: "center" });
    doc.line(220, finalY + 45, 280, finalY + 45);

    doc.save(`Fee_Structure_2025_${currentForm.replace(" ", "_")}.pdf`);
  };

  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: "100vh", bgcolor: "#f5f7f9" }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 800, color: "#0b3c5d" }}
          >
            2025 Fee Structure
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
            Official breakdown of school fees, government subsidies, and term
            payments.
          </Typography>
          <Divider
            sx={{
              width: "80px",
              mx: "auto",
              borderBottomWidth: 4,
              borderColor: "#f9a825",
              borderRadius: 2,
            }}
          />
        </Box>

        <Paper
          elevation={3}
          sx={{ borderRadius: 4, overflow: "hidden", mb: 4 }}
        >
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "#fff" }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              sx={{
                "& .MuiTab-root": { fontWeight: 600, py: 2 },
                "& .Mui-selected": { color: "#0b3c5d" },
                "& .MuiTabs-indicator": { backgroundColor: "#f9a825" },
              }}
            >
              {forms.map((form, index) => (
                <Tab key={index} label={form} />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#fff" }}>
            <Box
              sx={{
                mb: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "#0b3c5d" }}
              >
                Fee Structure for {forms[activeTab]} - Year 2025
              </Typography>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={downloadPDF}
                sx={{
                  bgcolor: "#0b3c5d",
                  "&:hover": { bgcolor: "#0d4c75" },
                  borderRadius: "8px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Download Official PDF
              </Button>
            </Box>

            <TableContainer
              component={Paper}
              variant="outlined"
              sx={{ borderRadius: 2, overflowX: "auto" }}
            >
              <Table size="small">
                <TableHead sx={{ bgcolor: "#f8f9fa" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>VOTEHEAD</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      TOTAL
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      GOVT SUBSIDY
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      PARENT
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: 700,
                        bgcolor: "rgba(249, 168, 37, 0.05)",
                      }}
                    >
                      Term I
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: 700,
                        bgcolor: "rgba(249, 168, 37, 0.05)",
                      }}
                    >
                      Term II
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: 700,
                        bgcolor: "rgba(249, 168, 37, 0.05)",
                      }}
                    >
                      Term III
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feeData[forms[activeTab]].items.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ fontSize: "0.85rem" }}>
                        {row.unit}
                      </TableCell>
                      <TableCell align="right">
                        {row.total.toLocaleString()}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "green" }}>
                        {row.subsidy > 0 ? row.subsidy.toLocaleString() : "-"}
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600 }}>
                        {row.parent.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {row.term1.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {row.term2.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {row.term3.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow sx={{ bgcolor: "#eee" }}>
                    <TableCell sx={{ fontWeight: 700 }}>SUB TOTAL</TableCell>
                    <TableCell />
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      {feeData[
                        forms[activeTab]
                      ].subTotal.subsidy.toLocaleString()}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      {feeData[
                        forms[activeTab]
                      ].subTotal.parent.toLocaleString()}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      {feeData[
                        forms[activeTab]
                      ].subTotal.term1.toLocaleString()}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      {feeData[
                        forms[activeTab]
                      ].subTotal.term2.toLocaleString()}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>
                      {feeData[
                        forms[activeTab]
                      ].subTotal.term3.toLocaleString()}
                    </TableCell>
                  </TableRow>
                  {feeData[forms[activeTab]].others.map((row, index) => (
                    <TableRow key={`other-${index}`}>
                      <TableCell sx={{ fontSize: "0.85rem" }}>
                        {row.unit}
                      </TableCell>
                      <TableCell />
                      <TableCell />
                      <TableCell align="right" sx={{ fontWeight: 600 }}>
                        {row.parent.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {row.term1.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {row.term2.toLocaleString()}
                      </TableCell>
                      <TableCell align="right">
                        {row.term3.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow sx={{ bgcolor: "#0b3c5d" }}>
                    <TableCell sx={{ fontWeight: 800, color: "#fff" }}>
                      GRAND TOTAL
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="right"
                      sx={{ fontWeight: 800, color: "#fff" }}
                    >
                      {feeData[
                        forms[activeTab]
                      ].grandTotal.parent.toLocaleString()}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: 800, color: "#fff" }}
                    >
                      {feeData[
                        forms[activeTab]
                      ].grandTotal.term1.toLocaleString()}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: 800, color: "#fff" }}
                    >
                      {feeData[
                        forms[activeTab]
                      ].grandTotal.term2.toLocaleString()}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontWeight: 800, color: "#fff" }}
                    >
                      {feeData[
                        forms[activeTab]
                      ].grandTotal.term3.toLocaleString()}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                mt: 4,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
              }}
            >
              <Box
                sx={{
                  p: 3,
                  bgcolor: "rgba(11, 60, 93, 0.03)",
                  borderRadius: 2,
                  borderLeft: "4px solid #f9a825",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, mb: 1, color: "#0b3c5d" }}
                >
                  OTHERS
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  The following items should be paid together with Term 1 fees:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>
                  • New set of school uniforms (Form 1): KES 11,200
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 3,
                  bgcolor: "rgba(11, 60, 93, 0.03)",
                  borderRadius: 2,
                  borderLeft: "4px solid #0b3c5d",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, mb: 1, color: "#0b3c5d" }}
                >
                  NOTES
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
                  All payments should ideally be made via Banker's Cheque in
                  favour of LODWAR HIGH SCHOOL.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Alternatively, deposit to KCB BANK ACCOUNT No. 123456789 or
                  MPESA Paybill No. 700000. Account number is the Student's
                  admission number followed by student's name.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FeeStructure;
