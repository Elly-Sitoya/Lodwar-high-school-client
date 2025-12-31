import React from "react";
import "./SchoolLifeAndFacilities.css";
import {
  FaFlask,
  FaBook,
  FaRunning,
  FaUtensils,
  FaLaptop,
  FaBed,
} from "react-icons/fa";
import facility_1 from "../../assets/facility_1.jpg";
import facility_2 from "../../assets/facility_2.jpg";
import facility_3 from "../../assets/facility_3.jpg";
import facility_4 from "../../assets/facility_4.jpg";
import facility_5 from "../../assets/facility_5.jpg";
import facility_6 from "../../assets/facility_6.jpg";

const facilities = [
  {
    icon: <FaFlask />,
    title: "Science Laboratories",
    description:
      "Equipped with modern apparatus for Physics, Chemistry, and Biology to foster hands-on scientific discovery and innovation.",
    image: facility_1,
  },
  {
    icon: <FaBook />,
    title: "Modern Library",
    description:
      "A sanctuary for knowledge featuring a vast collection of academic books, journals, and a dedicated e-learning center.",
    image: facility_2,
  },
  {
    icon: <FaRunning />,
    title: "Sports & Athletics",
    description:
      "Diverse facilities including a football pitch, basketball courts, and athletics track to nurture physical health and teamwork.",
    image: facility_3,
  },
  {
    icon: <FaLaptop />,
    title: "Computer Lab",
    description:
      "High-speed internet and modern workstations providing students with essential digital literacy and programming skills.",
    image: facility_4,
  },
  {
    icon: <FaUtensils />,
    title: "Dining & Nutrition",
    description:
      "A spacious dining hall serving balanced, nutritious meals prepared under strict hygienic standards.",
    image: facility_5,
  },
  {
    icon: <FaBed />,
    title: "Secure Boarding",
    description:
      "Comfortable and safe hostels designed to provide a home-away-from-home environment for our boarding students.",
    image: facility_6,
  },
];

const SchoolLifeAndFacilities = () => {
  return (
    <section className="facilities-section-wrapper">
      <div className="section-header">
        <h2 className="section-title">Life & Facilities at Lodwar</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Discover a vibrant environment where academic rigour meets holistic
          development in state-of-the-art facilities.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-icon">{item.icon}</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolLifeAndFacilities;
