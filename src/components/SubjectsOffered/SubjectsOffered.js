import React from "react";
import "./SubjectsOffered.css";
import {
  FaFlask,
  FaLanguage,
  FaGlobeAfrica,
  FaDesktop,
  FaCalculator,
  FaBook,
} from "react-icons/fa";
import academics from "../../assets/academics.jpg";

const subjectCategories = [
  {
    title: "Sciences",
    icon: <FaFlask />,
    subjects: ["Biology", "Chemistry", "Physics"],
  },
  {
    title: "Languages",
    icon: <FaLanguage />,
    subjects: ["English", "Kiswahili"],
  },
  {
    title: "Mathematics",
    icon: <FaCalculator />,
    subjects: ["Mathematics"],
  },
  {
    title: "Humanities",
    icon: <FaGlobeAfrica />,
    subjects: ["Geography", "History", "CRE"],
  },
  {
    title: "Technicals",
    icon: <FaDesktop />,
    subjects: ["Computer Studies", "Agriculture", "Business Studies"],
  },
];

const SubjectsOffered = () => {
  return (
    <section className="subjects-offered-wrapper">
      <div className="subjects-container">
        <div className="subjects-grid">
          <div className="subjects-image-column">
            <div className="image-holder">
              <img src={academics} alt="lodwar high school learning" />
              <div className="experience-tag">
                <h3>50+ Years</h3>
                <p>Academic Excellence</p>
              </div>
            </div>
          </div>

          <div className="subjects-content-column">
            <div className="sec-title">
              <span className="title">Our Curriculum</span>
              <h2>Comprehensive Subjects Offered</h2>
              <div className="title-underline"></div>
            </div>

            <p className="intro-text">
              We offer a broad and balanced curriculum that follows the 8-4-4
              and CBC systems, ensuring our students are well-prepared for
              diverse career paths.
            </p>

            <div className="categories-grid">
              {subjectCategories.map((cat, index) => (
                <div className="category-card" key={index}>
                  <div className="category-header">
                    <span className="category-icon">{cat.icon}</span>
                    <h3 className="category-title">{cat.title}</h3>
                  </div>
                  <ul className="subject-list">
                    {cat.subjects.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsOffered;
