import React from "react";
import "./AcademicsHero.css";
import Student from "../../assets/students.jpg";

const AcademicsHero = () => {
  return (
    <section className="academics-hero-wrapper about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">Academic Excellence</span>
                <h2>Championing Holistic Education for Future Leaders</h2>
              </div>
              <div className="text">
                At Lodwar High School, we believe that academic prowess is the
                foundation of a successful future. Our rigorous curriculum is
                designed to challenge students to think critically, innovate,
                and strive for excellence in every subject area.
              </div>
              <div className="text">
                Under the guidance of our dedicated faculty, students are
                empowered with the tools they need to shatter limitations and
                achieve their highest potential, both within the classroom and
                in extracurricular pursuits.
              </div>
              <div className="btn-box">
                <a href="#departments" className="theme-btn btn-style-one">
                  Explore Departments
                </a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <div className="author-desc">
                <h2>Excellence & Discipline</h2>
                <span>Our Core Pillars</span>
              </div>
              <figure className="image-1">
                <a href="#" className="lightbox-image" data-fancybox="images">
                  <img
                    title="Lodwar High School Excellence"
                    src={Student}
                    alt="Students studying"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="sec-title">
              <span className="title">Our Vision</span>
              <h2>Leading the Way in Regional Academic Growth</h2>
            </div>
            <div className="text">
              We are committed to being the premier national school in the
              region, providing a learning environment that fosters creativity,
              character, and competence. Our goal is to produce graduates who
              are not only academically superior but also socially responsible
              citizens.
            </div>
            <div className="text">
              Through continuous improvement in our facilities and teaching
              methodologies, we ensure that every boy at Lodwar High School
              receives a world-class education tailored to the needs of the 21st
              century.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsHero;
