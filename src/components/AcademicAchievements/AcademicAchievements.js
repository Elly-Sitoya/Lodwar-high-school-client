import React from "react";
import "./AcademicAchievements.css";
import { FaGraduationCap, FaAward, FaUsers, FaCrown } from "react-icons/fa";

const stats = [
  {
    icon: <FaGraduationCap />,
    value: "98%",
    label: "University Transition",
    description:
      "Consistent record of qualifying students for higher education.",
  },
  {
    icon: <FaAward />,
    value: "8.4",
    label: "Mean Score (2024)",
    description: "A testament to our rigorous academic standards.",
  },
  {
    icon: <FaUsers />,
    value: "100+",
    label: "Professional Alumni",
    description: "Graduates excelling in Medicine, Engineering, and Law.",
  },
  {
    icon: <FaCrown />,
    value: "#1",
    label: "Regional Giant",
    description: "Leading institution in Turkana County for over 50 years.",
  },
];

const pillars = [
  {
    title: "Holistic Excellence",
    text: "We focus on both intellectual growth and character development to prepare students for global challenges.",
  },
  {
    title: "Inquiry-Based Learning",
    text: "Encouraging curiosity and critical thinking through modern laboratory sessions and research.",
  },
  {
    title: "Dedicated Mentorship",
    text: "Our teachers are more than instructors; they are mentors who guide every student toward their potential.",
  },
];

const AcademicAchievements = () => {
  return (
    <section className="academic-achievements-wrapper">
      <div className="section-content">
        <h2 className="section-title">Academic Excellence</h2>
        <div className="title-underline"></div>
        <p className="intro-text">
          Lodwar High School is synonymous with academic rigour. Our legacy is
          built on a foundation of discipline, hard work, and a relentless
          pursuit of knowledge.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="pillars-container">
          <h3 className="pillars-heading">Our Academic Pillars</h3>
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div className="pillar-item" key={index}>
                <div className="pillar-bullet"></div>
                <div className="pillar-info">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-text">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicAchievements;
