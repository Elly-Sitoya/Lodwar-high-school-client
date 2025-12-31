import React from "react";
import { Container, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaUserTie,
  FaBuilding,
  FaBullseye,
} from "react-icons/fa";
import aboutImg from "../../assets/about_1.jpg"; // Using existing assets
import "./AboutSummary.css";

const AboutSummary = () => {
  return (
    <section className="about-summary">
      <Container maxWidth="lg">
        <div className="about-summary-grid">
          <div className="about-summary-media">
            <div className="image-container">
              <div className="experience-years">Est. 1968</div>
              <img
                src={aboutImg}
                alt="Lodwar High School Campus"
                className="main-image"
              />
              <div className="floating-card">
                <h3>98%</h3>
                <p>University Transition Rate in 2024</p>
              </div>
            </div>
          </div>

          <div className="about-summary-content">
            <span className="about-subtitle">Empowering Future Leaders</span>
            <h2 className="about-title">
              Providing Quality Education Since 1968
            </h2>
            <p className="about-description">
              Lodwar High School is a premier National Boys School dedicated to
              academic excellence, character building, and holistic development.
              Located in the heart of Turkana, we have consistently shaped the
              minds of young men who go on to become influential leaders across
              the globe.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaGraduationCap size={24} />
                </div>
                <div className="stat-info">
                  <h4>National Rank</h4>
                  <p>Top Performing School</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaUserTie size={24} />
                </div>
                <div className="stat-info">
                  <h4>850+ Students</h4>
                  <p>Diverse & Vibrant Community</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBuilding size={24} />
                </div>
                <div className="stat-info">
                  <h4>Modern Labs</h4>
                  <p>Advanced Learning Facilities</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBullseye size={24} />
                </div>
                <div className="stat-info">
                  <h4>Excellence</h4>
                  <p>Academic & Moral Integrity</p>
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              component={Link}
              to="/about"
              sx={{
                backgroundColor: "#e80000",
                "&:hover": { backgroundColor: "#c50000" },
                padding: "12px 30px",
                borderRadius: "8px",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Learn More About Our History
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSummary;
