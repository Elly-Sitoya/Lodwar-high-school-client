import React from "react";
import { Container } from "@mui/material";
import { FaGraduationCap, FaMicroscope, FaHandsHelping } from "react-icons/fa";
import "./CoreFeatures.css";

const features = [
  {
    icon: <FaGraduationCap size={30} />,
    title: "Quality Education",
    desc: "Highly qualified teachers and a track record of KCSE excellence, shaping future leaders through academic rigor.",
    number: "01",
  },
  {
    icon: <FaMicroscope size={30} />,
    title: "Modern Facilities",
    desc: "Well-equipped science labs, a modern library, and ICT rooms designed to foster innovation and hands-on learning.",
    number: "02",
  },
  {
    icon: <FaHandsHelping size={30} />,
    title: "Discipline & Values",
    desc: "A strong moral foundation built on integrity, discipline, and comprehensive leadership training for every student.",
    number: "03",
  },
];

const CoreFeatures = () => {
  return (
    <section className="core-features">
      <Container maxWidth="lg">
        <div className="features-header">
          <span className="features-subtitle">Why Choose Us</span>
          <h2 className="features-title">Our Core Pillars</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-number">{feature.number}</div>
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreFeatures;
