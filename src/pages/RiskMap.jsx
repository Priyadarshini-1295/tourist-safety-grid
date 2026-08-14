import React from "react";
import {
  Map,
  TriangleAlert,
  Shield,
  Activity
} from "lucide-react";

function RiskMap() {
  const locations = [
    {
      area: "Chennai",
      risk: "HIGH",
      cases: 182,
      color: "#ffdddd"
    },
    {
      area: "Madurai",
      risk: "MODERATE",
      cases: 124,
      color: "#fff4d6"
    },
    {
      area: "Coimbatore",
      risk: "LOW",
      cases: 76,
      color: "#e6f8ed"
    },
    {
      area: "Trichy",
      risk: "MODERATE",
      cases: 58,
      color: "#fff4d6"
    }
  ];

  return (
    <div className="other-page">

      <div className="other-card">

        <div className="other-icon">
          <Map size={40} />
        </div>

        <h2>Outbreak Risk Map</h2>

        <p>
          Location-based disease risk monitoring
          and outbreak prediction.
        </p>

      </div>

      <br />

      <div className="stats-grid">

        <div className="stat-card">
          <div>
            <p>High Risk Areas</p>
            <h2>2</h2>
          </div>

          <div className="stat-icon red">
            <TriangleAlert size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <p>Moderate Risk Areas</p>
            <h2>3</h2>
          </div>

          <div className="stat-icon orange">
            <Shield size={24} />
          </div>
        </div>

        <div className="stat-card">
          <div>
            <p>Low Risk Areas</p>
            <h2>5</h2>
          </div>

          <div className="stat-icon blue">
            <Activity size={24} />
          </div>
        </div>

      </div>

      <div className="about-section">

        <div className="section-heading">
          <div>
            <h2>Risk Classification</h2>
            <p>
              Current monitored regions
            </p>
          </div>
        </div>

        {locations.map((item, index) => (
          <div
            key={index}
            style={{
              background: item.color,
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "10px"
            }}
          >
            <h3>{item.area}</h3>

            <p>
              Cases: {item.cases}
            </p>

            <strong>
              Risk Level: {item.risk}
            </strong>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RiskMap;