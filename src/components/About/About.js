import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";
import "./About.css";
import Modal_1 from "../../assets/about_modal_1.jpg";
import Modal_2 from "../../assets/about_modal_2.jpg";
import Modal_3 from "../../assets/about_modal_3.jpg";
import Modal_4 from "../../assets/about_modal_4.jpg";

const historyData = [
  {
    year: "1968",
    title: "The Founding",
    content:
      "Established by Monsignor John Mahon, the school opened with 40 students and one classroom block that served as a dormitory, office, and kitchen.",
    image: Modal_1,
    fullDetails:
      "In 1968, Monsignor John Mahon (later Bishop of the Diocese of Lodwar) initiated the school to address the dire need for secondary education in Turkana. The first head teacher was Rev. Con Ryan from Ireland.",
  },
  {
    year: "1974-1987",
    title: "Infrastructure Expansion",
    content:
      "Under Rev. P. O'Sullivan, the school underwent rapid expansion funded by Norwegian Development Aid for labs and dorms.",
    image: Modal_2,
    fullDetails:
      "Between 1974 and 1987, Rev. P. O'Sullivan led a period of massive growth. The school benefited from Norwegian Development Aid, which funded the construction of modern dormitories, laboratories, and classrooms still in use today.",
  },
  {
    year: "1990s",
    title: "Academic Rise",
    content:
      "Transitioned to African leadership and achieved significant improvements in KCSE results, establishing itself as a regional giant.",
    image: Modal_3,
    fullDetails:
      "The 1990s saw the appointment of the first African principal, Mr. Mukasa, followed by Mr. Wachira. Strict administration during this time led to a consistent rise in KCSE performance, making Lodwar High a household name.",
  },
  {
    year: "Present",
    title: "National Excellence",
    content:
      "As a National Boys School, Lodwar High continues to lead with 98% university transition rates and a focus on holistic development.",
    image: Modal_4,
    fullDetails:
      "Led by Principal Patrick Lokwayen Esekon, the school currently enrolls over 850 students. In the 2024 KCSE, over 50% attained the direct university entry grade, solidifying its status as a top-performing National School.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState(null);

  const handleOpenModal = (history) => {
    setSelectedHistory(history);
    setOpenModal(true);
  };

  const currentItem = historyData[activeIndex];

  return (
    <section className="history-area" id="about-section">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            className="title-bg-small"
            sx={{ display: "inline-block", mb: 2 }}
          >
            About us
          </Typography>
          <Typography
            variant="h3"
            className="section-title"
            sx={{ fontWeight: 300 }}
          >
            Our{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              History
            </Box>
          </Typography>
        </Box>

        <Box id="history-slid" className="carousel slide">
          <Paper
            elevation={0}
            className="carousel-inner"
            sx={{ background: "transparent" }}
          >
            {/* Active Item View */}
            <Grid
              container
              sx={{ backgroundColor: "#fff", transition: "0.5s ease" }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  className="history-img"
                  sx={{ height: "100%", minHeight: 400 }}
                >
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="history-content" sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography
                    className="title-bg-small primary-bg"
                    sx={{ mb: 2 }}
                  >
                    {currentItem.year}
                  </Typography>
                  <Typography
                    variant="h4"
                    className="column-title"
                    sx={{ mb: 3 }}
                  >
                    {currentItem.title}{" "}
                    <Box component="span" color="primary.main">
                      LHS
                    </Box>
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    {currentItem.content}
                  </Typography>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleOpenModal(currentItem)}
                    sx={{ mt: 2, borderRadius: 0, px: 4 }}
                  >
                    View History Modal
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Indicators / Year Selection */}
          <Box
            component="ol"
            className="carousel-indicators"
            sx={{
              display: "flex",
              justifyContent: "center",
              listStyle: "none",
              mt: 5,
              position: "relative",
            }}
          >
            {historyData.map((item, index) => (
              <Box
                component="li"
                key={index}
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? "active" : ""}
                sx={{
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                {item.year}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* History Milestone Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 0 },
        }}
      >
        <DialogTitle
          sx={{ fontWeight: "bold", bgcolor: "#101010", color: "#fff" }}
        >
          History of {selectedHistory?.year}
        </DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <Box
            component="img"
            src={selectedHistory?.image}
            sx={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              mb: 3,
            }}
          />
          <Typography variant="h5" gutterBottom fontWeight="bold">
            {selectedHistory?.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {selectedHistory?.fullDetails}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setOpenModal(false)}
            variant="outlined"
            color="inherit"
          >
            Close
          </Button>
          <Button
            onClick={() => setOpenModal(false)}
            variant="contained"
            color="error"
          >
            Great!
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default About;
