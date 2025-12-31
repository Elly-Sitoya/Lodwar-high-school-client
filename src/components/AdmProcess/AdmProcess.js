import React from "react";
import "./AdmProcess.css";

const AdmProcess = () => {
  const steps = [
    {
      title: "Inquiry & Application",
      description:
        "Obtain the official admission form from our school office or download it directly from the online portal.",
      icon: "1",
    },
    {
      title: "Document Submission",
      description:
        "Submit the completed form along with KCPE results, birth certificate, and leaving certificate for verification.",
      icon: "2",
    },
    {
      title: "Interview & Selection",
      description:
        "Prospective students may be invited for a brief interview to assess their readiness and placement.",
      icon: "3",
    },
    {
      title: "Admission & Enrollment",
      description:
        "Upon acceptance, receive your official admission letter and complete the enrollment by paying the required fees.",
      icon: "4",
    },
  ];

  return (
    <section className="adm-process-wrapper">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="subtitle">Admission Journey</span>
          <h2 className="title">Our Seamless Admission Process</h2>
          <div className="title-bar mx-auto"></div>
        </div>

        <div className="process-steps">
          <div className="row">
            {steps.map((step, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="step-card h-100">
                  <div className="step-number-wrapper">
                    <span className="step-number">{step.icon}</span>
                    {index < steps.length - 1 && (
                      <div className="step-line d-none d-lg-block"></div>
                    )}
                  </div>
                  <div className="step-content text-center">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="process-footer text-center mt-4">
          <p className="footer-text">
            Need help? Contact our Admissions Office at{" "}
            <a href="mailto:admissions@lodwarhigh.sc.ke">
              admissions@lodwarhigh.sc.ke
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmProcess;
