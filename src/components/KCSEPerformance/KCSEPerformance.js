import React from "react";
import "./KCSEPerformance.css";

const KCSEPerformance = () => {
  const performanceData = [
    {
      year: "2021",
      meanGrade: "B-",
      points: "7.8",
      universityTransitions: "75%",
    },
    {
      year: "2022",
      meanGrade: "B",
      points: "8.4",
      universityTransitions: "82%",
    },
    {
      year: "2023",
      meanGrade: "B+",
      points: "9.2",
      universityTransitions: "89%",
    },
  ];

  return (
    <section className="kcse-performance-section">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 content-column mb-4 mb-lg-0">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">Academic Excellence</span>
                <h2>Our KCSE Performance Record</h2>
              </div>
              <div className="text-content">
                <p>
                  Lodwar High School has consistently remained a beacon of
                  academic excellence in Turkana County. Our steady climb in the
                  KCSE mean score is a testament to the hard work of our
                  students and the unwavering dedication of our teaching staff.
                </p>
                <p>
                  Beyond just grades, we take pride in the holistic development
                  of our boys, ensuring they are well-prepared for the rigors of
                  higher education and professional life.
                </p>
              </div>
              <div className="stats-list">
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="stat-item p-3 border rounded shadow-sm">
                      <h4 className="m-0 text-primary">89%</h4>
                      <p className="m-0 small">University Transition Rate</p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="stat-item p-3 border rounded shadow-sm">
                      <h4 className="m-0 text-success">9.2</h4>
                      <p className="m-0 small">Last KCSE Mean Points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 image-column">
            <div className="inner-column">
              <div className="performance-card-wrapper border rounded p-4 shadow">
                <h4 className="text-center mb-4">Performance Trends</h4>
                <div className="performance-table">
                  <table className="table table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th>Year</th>
                        <th>Mean Grade</th>
                        <th>Mean Points</th>
                        <th>Transition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceData.map((data, index) => (
                        <tr key={index}>
                          <td>{data.year}</td>
                          <td>
                            <span className="badge bg-primary">
                              {data.meanGrade}
                            </span>
                          </td>
                          <td>{data.points}</td>
                          <td>{data.universityTransitions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="sec-title">
              <span className="title">Our Future Goal</span>
              <h2>Leading in Innovation & Excellence</h2>
            </div>
            <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
              We aim to surpass previous records by fostering a culture of
              research, critical thinking, and technological integration into
              our daily learning processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KCSEPerformance;
