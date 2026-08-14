import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ShieldCheck,
  MapPin,
  TrendingUp,
  HeartPulse,
  Search
} from "lucide-react";

const diseases = {
  Dengue: {
    cases: 182,
    risk: "HIGH",
    trend: "+18%",
    location: "Chennai",
    symptoms: [
      "High fever",
      "Severe headache",
      "Muscle and joint pain",
      "Skin rash",
      "Nausea"
    ],
    prevention: [
      "Avoid stagnant water",
      "Use mosquito repellents",
      "Wear protective clothing",
      "Keep surroundings clean",
      "Use mosquito nets"
    ]
  },

  Influenza: {
    cases: 124,
    risk: "MODERATE",
    trend: "+9%",
    location: "Madurai",
    symptoms: [
      "Fever",
      "Cough",
      "Sore throat",
      "Body aches",
      "Fatigue"
    ],
    prevention: [
      "Wash hands regularly",
      "Avoid close contact with sick people",
      "Cover coughs and sneezes",
      "Maintain good hygiene",
      "Stay home when sick"
    ]
  },

  Malaria: {
    cases: 76,
    risk: "LOW",
    trend: "-4%",
    location: "Coimbatore",
    symptoms: [
      "Fever",
      "Chills",
      "Sweating",
      "Headache",
      "Tiredness"
    ],
    prevention: [
      "Prevent mosquito bites",
      "Use mosquito nets",
      "Remove stagnant water",
      "Use insect repellents",
      "Keep surroundings clean"
    ]
  },

  "COVID-19": {
    cases: 64,
    risk: "LOW",
    trend: "-7%",
    location: "Trichy",
    symptoms: [
      "Fever",
      "Cough",
      "Tiredness",
      "Sore throat",
      "Loss of taste or smell"
    ],
    prevention: [
      "Maintain good hand hygiene",
      "Improve indoor ventilation",
      "Avoid close contact when unwell",
      "Cover coughs and sneezes",
      "Follow local health guidance"
    ]
  }
};

function DiseaseDetails() {
  const [selectedDisease, setSelectedDisease] =
    useState("Dengue");

  const disease = diseases[selectedDisease];

  return (
    <div className="other-page">

      {/* HEADER */}

      <div className="page-intro">

        <div>
          <h2>Disease Details</h2>

          <p>
            Explore disease information, risk levels,
            symptoms and prevention guidance
          </p>
        </div>

        <div className="monitor-status">
          <span></span>
          Disease Monitoring Active
        </div>

      </div>


      {/* DISEASE SELECTOR */}

      <div className="about-section">

        <div className="section-heading">

          <div>
            <h2>Select Disease</h2>

            <p>
              Choose a disease to view its information
            </p>
          </div>

          <Search size={21} />

        </div>


        <select
          value={selectedDisease}
          onChange={(e) =>
            setSelectedDisease(e.target.value)
          }
          style={{
            width: "100%",
            padding: "13px",
            border: "1px solid #dfe5ee",
            borderRadius: "9px",
            background: "#fff",
            outline: "none",
            fontSize: "13px"
          }}
        >

          {Object.keys(diseases).map((diseaseName) => (
            <option
              key={diseaseName}
              value={diseaseName}
            >
              {diseaseName}
            </option>
          ))}

        </select>

      </div>


      {/* DISEASE HEADER */}

      <div
        style={{
          background:
            "linear-gradient(135deg, #eef5ff, #f7f0ff)",
          border: "1px solid #dce6f5",
          borderRadius: "14px",
          padding: "25px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "18px"
        }}
      >

        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "15px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#347cf0"
          }}
        >
          <HeartPulse size={32} />
        </div>

        <div>

          <h1
            style={{
              margin: "0 0 5px"
            }}
          >
            {selectedDisease}
          </h1>

          <p
            style={{
              margin: 0,
              color: "#7c879b"
            }}
          >
            Current disease monitoring information
          </p>

        </div>

      </div>


      {/* STATISTICS */}

      <div className="stats-grid">

        <div className="stat-card">

          <div>
            <p>Reported Cases</p>

            <h2>
              {disease.cases}
            </h2>

            <small>
              Current monitored cases
            </small>
          </div>

          <div className="stat-icon blue">
            <Activity size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>Risk Level</p>

            <h2>
              {disease.risk}
            </h2>

            <small>
              Current assessment
            </small>
          </div>

          <div className="stat-icon red">
            <AlertTriangle size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>7-Day Trend</p>

            <h2>
              {disease.trend}
            </h2>

            <small>
              Compared with previous period
            </small>
          </div>

          <div className="stat-icon purple">
            <TrendingUp size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>Monitored Location</p>

            <h2
              style={{
                fontSize: "20px"
              }}
            >
              {disease.location}
            </h2>

            <small>
              Primary monitored region
            </small>
          </div>

          <div className="stat-icon orange">
            <MapPin size={24} />
          </div>

        </div>

      </div>


      {/* TWO COLUMN INFORMATION */}

      <div className="about-two-column">


        {/* SYMPTOMS */}

        <div className="about-info-card">

          <div className="about-info-icon">
            <Activity size={24} />
          </div>

          <h2>
            Common Symptoms
          </h2>

          <p>
            Common symptoms associated with{" "}
            {selectedDisease} include:
          </p>


          <div
            style={{
              marginTop: "15px"
            }}
          >

            {disease.symptoms.map(
              (symptom, index) => (

                <div
                  key={index}
                  style={{
                    padding: "9px 0",
                    borderBottom:
                      "1px solid #edf0f5",
                    fontSize: "12px"
                  }}
                >
                  • {symptom}
                </div>

              )
            )}

          </div>

        </div>


        {/* PREVENTION */}

        <div className="about-info-card">

          <div className="about-info-icon">
            <ShieldCheck size={24} />
          </div>

          <h2>
            Prevention Measures
          </h2>

          <p>
            General preventive measures include:
          </p>


          <div
            style={{
              marginTop: "15px"
            }}
          >

            {disease.prevention.map(
              (item, index) => (

                <div
                  key={index}
                  style={{
                    padding: "9px 0",
                    borderBottom:
                      "1px solid #edf0f5",
                    fontSize: "12px"
                  }}
                >
                  ✓ {item}
                </div>

              )
            )}

          </div>

        </div>

      </div>


      {/* RISK INFORMATION */}

      <div className="about-section">

        <div className="section-heading">

          <div>
            <h2>
              Risk Assessment
            </h2>

            <p>
              Current assessment for{" "}
              {selectedDisease}
            </p>
          </div>

          <AlertTriangle size={21} />

        </div>


        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            background:
              disease.risk === "HIGH"
                ? "#fff0f0"
                : disease.risk === "MODERATE"
                ? "#fff8e8"
                : "#edf9f2",
            border:
              disease.risk === "HIGH"
                ? "1px solid #f2cccc"
                : disease.risk === "MODERATE"
                ? "1px solid #f1dda7"
                : "1px solid #ccebd8"
          }}
        >

          <strong>
            {disease.risk} RISK
          </strong>

          <p
            style={{
              fontSize: "12px",
              color: "#697386",
              marginBottom: 0
            }}
          >
            The current monitoring data indicates a{" "}
            {disease.risk.toLowerCase()} risk level
            for {selectedDisease} in{" "}
            {disease.location}. Continue monitoring
            disease trends and follow appropriate
            public-health guidance.
          </p>

        </div>

      </div>


      {/* DISCLAIMER */}

      <div className="data-info-box">

        <ShieldCheck size={22} />

        <div>

          <strong>
            Important Information
          </strong>

          <p>
            This page is an academic demonstration.
            Symptoms and prevention information should
            not be used as a substitute for professional
            medical advice or diagnosis.
          </p>

        </div>

      </div>

    </div>
  );
}

export default DiseaseDetails;