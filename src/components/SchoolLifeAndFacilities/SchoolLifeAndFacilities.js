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

const facilities = [
  {
    icon: <FaFlask />,
    title: "Science Laboratories",
    description:
      "Equipped with modern apparatus for Physics, Chemistry, and Biology to foster hands-on scientific discovery and innovation.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
  },
  {
    icon: <FaBook />,
    title: "Modern Library",
    description:
      "A sanctuary for knowledge featuring a vast collection of academic books, journals, and a dedicated e-learning center.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80",
  },
  {
    icon: <FaRunning />,
    title: "Sports & Athletics",
    description:
      "Diverse facilities including a football pitch, basketball courts, and athletics track to nurture physical health and teamwork.",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&q=80",
  },
  {
    icon: <FaLaptop />,
    title: "Computer Lab",
    description:
      "High-speed internet and modern workstations providing students with essential digital literacy and programming skills.",
    image:
      "https://images.unsplash.com/photo-1584697964154-8b25d6a2a3cf?auto=format&fit=crop&q=80",
  },
  {
    icon: <FaUtensils />,
    title: "Dining & Nutrition",
    description:
      "A spacious dining hall serving balanced, nutritious meals prepared under strict hygienic standards.",
    image:
      "https://images.unsplash.com/photo-1557682250-cc3f3d9ad81e?auto=format&fit=crop&q=80",
  },
  {
    icon: <FaBed />,
    title: "Secure Boarding",
    description:
      "Comfortable and safe hostels designed to provide a home-away-from-home environment for our boarding students.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
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
