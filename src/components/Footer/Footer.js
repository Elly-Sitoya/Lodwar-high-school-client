import React, { useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    // Add animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    const elements = document.querySelectorAll(".footer-link");
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "all 0.5s ease";
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="custom-footer pt-4">
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">About Us</h5>
            <p className="footer-text small">
              Lodwar High School is a premier institution dedicated to academic
              excellence, discipline, and character building. We nurture future
              leaders through quality education.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="footer-link">
                  <span className="link-text bi bi-arrow-right-short link-icon">
                    Home
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="footer-link">
                  <span className="link-text bi bi-arrow-right-short link-icon">
                    About
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="footer-link">
                  <span className="link-text bi bi-arrow-right-short link-icon">
                    Contact
                  </span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/academics" className="footer-link">
                  <span className="link-text bi bi-arrow-right-short link-icon">
                    Academics
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Contact</h5>
            <ul className="list-unstyled footer-text small">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                P.O. Box 12, Lodwar, Kenya
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>
                +254 700 000 000
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                info@lodwarhigh.ac.ke
              </li>
            </ul>
          </div>

          {/* Newsletter with Animation */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading mb-3">Newsletter</h5>
            <form className="newsletter-form">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Enter email"
                />
                <button className="btn btn-primary btn-sm" type="button">
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </form>
            <div className="scroll-top text-end">
              <button className="btn-scroll-top" onClick={scrollToTop}>
                <i className="bi bi-arrow-up-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright text-center py-3 mt-4 border-top">
          <small className="footer-text">
            © {new Date().getFullYear()} Lodwar High School. All rights
            reserved. <p className="mt-2">Privacy | Terms</p>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
