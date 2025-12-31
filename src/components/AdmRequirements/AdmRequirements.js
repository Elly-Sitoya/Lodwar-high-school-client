import React from "react";
import "./AdmRequirements.css";
import {
  FaFileAlt,
  FaIdCard,
  FaCamera,
  FaUserGraduate,
  FaExchangeAlt,
  FaCheckCircle,
} from "react-icons/fa";
import AdmissionsHero2 from "../../assets/admissions_hero_2.jpg";

const requirements = [
  {
    icon: <FaFileAlt />,
    text: "Original KCPE Result Slip or Certificate",
  },
  {
    icon: <FaIdCard />,
    text: "Certified copy of Birth Certificate",
  },
  {
    icon: <FaUserGraduate />,
    text: "Primary School Leaving Certificate",
  },
  {
    icon: <FaCamera />,
    text: "Two recent passport size photographs",
  },
  {
    icon: <FaExchangeAlt />,
    text: "Transfer Letter (for continuing students)",
  },
  {
    icon: <FaCheckCircle />,
    text: "Completed Admission Form (available at school)",
  },
];

const AdmRequirements = () => {
  return (
    <section className="adm-requirements-wrapper">
      <div className="requirements-container">
        <div className="requirements-grid">
          <div className="requirements-info">
            <h2 className="requirements-title">Admission Requirements</h2>
            <div className="title-underline"></div>
            <p className="requirements-intro">
              To ensure a smooth admission process, please ensure you have the
              following documents ready when visiting the school or submitting
              your application online.
            </p>

            <ul className="requirements-list">
              {requirements.map((req, index) => (
                <li key={index} className="requirement-item">
                  <span className="req-icon">{req.icon}</span>
                  <span className="req-text">{req.text}</span>
                </li>
              ))}
            </ul>

            <div className="requirements-note">
              <strong>Note:</strong> All documents must be original and clearly
              legible. Certified copies are required for permanent records.
            </div>
          </div>

          <div className="requirements-visual">
            <div className="image-stack">
              <img
                src={AdmissionsHero2}
                alt="School Environment"
                className="main-img"
              />
              <div className="img-overlay">
                <div className="overlay-content">
                  <span className="overlay-number">100%</span>
                  <span className="overlay-label">Accredited Institution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmRequirements;
