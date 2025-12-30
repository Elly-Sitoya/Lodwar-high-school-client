import React from "react";
import "./Departments.css";

const Departments = () => {
  return (
    <div className="departments-section">
      <div className="departments-wrapper">
        <div className="departments-col-35">
          <div className="departments-cards-container">
            <div className="dept-card left-t">
              <h2>Sciences Department</h2>
              <p>
                Biology, Chemistry, and Physics with modern laboratories
                fostering scientific inquiry and innovation.
              </p>
            </div>
            <div className="dept-card left-b">
              <h2>Languages Department</h2>
              <p>
                English and Kiswahili for effective communication, expression,
                and functional literacy.
              </p>
            </div>
          </div>
        </div>

        <div className="departments-col-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 408.598 513.23"
            style={{ maxWidth: "300px" }}
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_30"
                  width="108"
                  height="108"
                  transform="translate(73 523)"
                  fill="#8247e5"
                />
              </clipPath>
            </defs>
            <g id="how-it-works-bg" transform="translate(-750 -2540)">
              <g
                id="logo-icon"
                transform="translate(833 2017)"
                clipPath="url(#clip-path)"
              >
                <g transform="translate(83.336 523)">
                  <path
                    d="M1079.107,592.009V649.6l20.242,20.242V611.585Z"
                    transform="translate(-1079.107 -592.009)"
                    fill="#8247e5"
                  />
                  <path
                    d="M1099.349,592.009V649.6l-20.242,20.242V611.585Z"
                    transform="translate(-1012.072 -592.009)"
                    fill="#8247e5"
                  />
                  <path
                    d="M1079.107,592.009v87.758l20.242,20.242V611.585Z"
                    transform="translate(-1045.59 -592.009)"
                    fill="#8247e5"
                  />
                </g>
              </g>
              <g className="all-path">
                <g className="no1">
                  <path
                    d="M925.135,2566.549v209.384H754.115"
                    transform="translate(0 35)"
                    fill="none"
                    stroke="#8247e5"
                    strokeWidth="2"
                  />
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    transform="translate(750 2806)"
                    fill="#8247e5"
                  />
                </g>
                <g className="no2">
                  <path
                    d="M766.98,2566.549v209.384H926.6"
                    transform="translate(227.885 32.966)"
                    fill="none"
                    stroke="#8247e5"
                    strokeWidth="2"
                  />
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    transform="translate(1149.598 2803.966)"
                    fill="#8247e5"
                  />
                </g>
                <g className="no3">
                  <path
                    d="M963.781,2600.978v394.874H924.015"
                    transform="translate(-14 52.878)"
                    fill="none"
                    stroke="#8247e5"
                    strokeWidth="2"
                  />
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    transform="translate(905.515 3044.23)"
                    fill="#8247e5"
                  />
                </g>
                <g className="no4">
                  <path
                    d="M924.015,2600.978v394.874h38.771"
                    transform="translate(48.61 52.878)"
                    fill="none"
                    stroke="#8247e5"
                    strokeWidth="2"
                  />
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    transform="translate(1006.895 3044.23)"
                    fill="#8247e5"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="departments-col-35">
          <div className="departments-cards-container">
            <div className="dept-card right-t">
              <h2>Humanities Department</h2>
              <p>
                History, Geography, and CRE for social awareness, values, and
                understanding of our heritage.
              </p>
            </div>
            <div className="dept-card right-b">
              <h2>Technical Department</h2>
              <p>
                Computer Studies and practical skills in Agriculture and
                Business to prepare students for the modern world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
