import React, { useState } from "react";

import {
  Brain,
  TrendingUp,
  AlertTriangle,
  MapPin,
  Activity,
  Target,
  RefreshCw
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";


/* =========================================
   PREDICTION DATA
========================================= */

const predictionData = [
  {
    day: "Today",
    actual: 455,
    predicted: 480
  },
  {
    day: "Day 2",
    actual: 470,
    predicted: 510
  },
  {
    day: "Day 3",
    actual: 455,
    predicted: 535
  },
  {
    day: "Day 4",
    actual: 425,
    predicted: 560
  },
  {
    day: "Day 5",
    actual: 445,
    predicted: 590
  },
  {
    day: "Day 6",
    actual: 420,
    predicted: 575
  },
  {
    day: "Day 7",
    actual: 425,
    predicted: 610
  }
];


/* =========================================
   DISEASE OPTIONS
========================================= */

const diseaseOptions = [
  "Dengue",
  "Influenza",
  "COVID-19",
  "Malaria",
  "Typhoid"
];


/* =========================================
   PREDICTION PAGE
========================================= */

function OutbreakPrediction() {

  const [selectedDisease, setSelectedDisease] =
    useState("Dengue");

  const [selectedLocation, setSelectedLocation] =
    useState("Chennai");

  const [predictionGenerated, setPredictionGenerated] =
    useState(false);


  /* =====================================
     GENERATE PREDICTION
  ===================================== */

  const generatePrediction = () => {

    setPredictionGenerated(false);

    setTimeout(() => {
      setPredictionGenerated(true);
    }, 700);

  };


  return (

    <div className="other-page">


      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className="page-intro">

        <div>

          <h2>
            AI Outbreak Prediction
          </h2>

          <p>
            Predict possible disease activity using
            historical and current data
          </p>

        </div>


        <div className="monitor-status">

          <span></span>

          AI Model Ready

        </div>

      </div>


      {/* =====================================
          AI MODEL CARD
      ===================================== */}

      <div
        style={{
          background:
            "linear-gradient(135deg, #eef5ff, #f6efff)",
          border:
            "1px solid #dce6f5",
          borderRadius: "14px",
          padding: "25px",
          marginBottom: "20px"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}
        >

          <div
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "14px",
              background: "#ffffff",
              color: "#8247eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >

            <Brain size={30} />

          </div>


          <div>

            <h2
              style={{
                margin: "0 0 5px"
              }}
            >
              AI Prediction Engine
            </h2>

            <p
              style={{
                margin: 0,
                color: "#7c879b",
                fontSize: "12px"
              }}
            >
              Machine-learning based outbreak
              risk prediction system
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          INPUT SECTION
      ===================================== */}

      <div
        className="about-section"
      >

        <div className="section-heading">

          <div>

            <h2>
              Generate Prediction
            </h2>

            <p>
              Select disease and location to generate
              an outbreak prediction
            </p>

          </div>

          <Target size={21} />

        </div>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr auto",
            gap: "15px",
            alignItems: "end"
          }}
        >


          {/* DISEASE */}

          <div>

            <label
              style={{
                display: "block",
                marginBottom: "7px",
                fontSize: "12px",
                fontWeight: "600"
              }}
            >
              Select Disease
            </label>


            <select
              value={selectedDisease}
              onChange={(e) =>
                setSelectedDisease(e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                border:
                  "1px solid #dfe5ee",
                borderRadius: "8px",
                background: "#ffffff",
                fontSize: "12px",
                outline: "none"
              }}
            >

              {diseaseOptions.map(
                (disease) => (

                  <option
                    key={disease}
                    value={disease}
                  >
                    {disease}
                  </option>

                )
              )}

            </select>

          </div>


          {/* LOCATION */}

          <div>

            <label
              style={{
                display: "block",
                marginBottom: "7px",
                fontSize: "12px",
                fontWeight: "600"
              }}
            >
              Select Location
            </label>


            <select
              value={selectedLocation}
              onChange={(e) =>
                setSelectedLocation(e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                border:
                  "1px solid #dfe5ee",
                borderRadius: "8px",
                background: "#ffffff",
                fontSize: "12px",
                outline: "none"
              }}
            >

              <option>
                Chennai
              </option>

              <option>
                Madurai
              </option>

              <option>
                Coimbatore
              </option>

              <option>
                Trichy
              </option>

              <option>
                Salem
              </option>

            </select>

          </div>


          {/* BUTTON */}

          <button
            onClick={generatePrediction}
            style={{
              height: "42px",
              padding: "0 20px",
              border: "none",
              borderRadius: "8px",
              background: "#347cf0",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "600",
              fontSize: "12px"
            }}
          >

            <RefreshCw size={16} />

            Predict

          </button>

        </div>


        {/* RESULT MESSAGE */}

        {predictionGenerated && (

          <div
            style={{
              marginTop: "18px",
              padding: "13px",
              background: "#e9f8ef",
              border:
                "1px solid #c9ecd8",
              borderRadius: "8px",
              color: "#218a50",
              fontSize: "12px"
            }}
          >

            ✓ Prediction generated for{" "}
            <strong>
              {selectedDisease}
            </strong>{" "}
            in{" "}
            <strong>
              {selectedLocation}
            </strong>

          </div>

        )}

      </div>


      {/* =====================================
          PREDICTION SUMMARY
      ===================================== */}

      <div className="stats-grid">


        <div className="stat-card">

          <div>

            <p>
              Predicted Cases
            </p>

            <h2>
              610
            </h2>

            <small>
              Expected within 7 days
            </small>

          </div>

          <div className="stat-icon purple">

            <Brain size={25} />

          </div>

        </div>


        <div className="stat-card">

          <div>

            <p>
              Risk Level
            </p>

            <h2>
              HIGH
            </h2>

            <small>
              Based on prediction model
            </small>

          </div>

          <div className="stat-icon red">

            <AlertTriangle size={25} />

          </div>

        </div>


        <div className="stat-card">

          <div>

            <p>
              Prediction Confidence
            </p>

            <h2>
              93%
            </h2>

            <small>
              Model confidence score
            </small>

          </div>

          <div className="stat-icon blue">

            <Target size={25} />

          </div>

        </div>


        <div className="stat-card">

          <div>

            <p>
              Location
            </p>

            <h2
              style={{
                fontSize: "21px"
              }}
            >
              {selectedLocation}
            </h2>

            <small>
              Monitored location
            </small>

          </div>

          <div className="stat-icon orange">

            <MapPin size={25} />

          </div>

        </div>

      </div>


      {/* =====================================
          PREDICTION CHART
      ===================================== */}

      <div className="about-section">

        <div className="section-heading">

          <div>

            <h2>
              7-Day Outbreak Prediction
            </h2>

            <p>
              Actual cases compared with AI predicted cases
            </p>

          </div>

          <TrendingUp size={21} />

        </div>


        <div
          style={{
            width: "100%",
            height: "340px"
          }}
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={predictionData}
            >

              <defs>

                <linearGradient
                  id="predictionGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#8247eb"
                    stopOpacity={0.25}
                  />

                  <stop
                    offset="95%"
                    stopColor="#8247eb"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>


              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="day"
              />

              <YAxis />

              <Tooltip />


              <Area
                type="monotone"
                dataKey="predicted"
                stroke="#8247eb"
                fill="url(#predictionGradient)"
                strokeWidth={3}
                name="AI Prediction"
              />


              <Line
                type="monotone"
                dataKey="actual"
                stroke="#347cf0"
                strokeWidth={3}
                dot
                name="Actual Cases"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* =====================================
          PREDICTION TABLE
      ===================================== */}

      <div className="about-section">

        <div className="section-heading">

          <div>

            <h2>
              Prediction Details
            </h2>

            <p>
              AI-generated outbreak forecast
            </p>

          </div>

          <Activity size={21} />

        </div>


        <table>

          <thead>

            <tr>

              <th>
                Day
              </th>

              <th>
                Predicted Cases
              </th>

              <th>
                Risk Level
              </th>

              <th>
                Confidence
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>


          <tbody>

            {predictionData.map(
              (item, index) => (

                <tr key={item.day}>

                  <td>
                    {item.day}
                  </td>

                  <td>
                    {item.predicted}
                  </td>

                  <td>

                    <span
                      className={
                        item.predicted >= 570
                          ? "risk-high"
                          : item.predicted >= 500
                          ? "risk-medium"
                          : "risk-low"
                      }
                    >

                      {item.predicted >= 570
                        ? "HIGH"
                        : item.predicted >= 500
                        ? "MODERATE"
                        : "LOW"}

                    </span>

                  </td>

                  <td>
                    {90 + index % 4}%
                  </td>

                  <td>

                    {index === 0 ? (

                      <span
                        style={{
                          color: "#347cf0",
                          fontSize: "11px"
                        }}
                      >
                        Current
                      </span>

                    ) : (

                      <span
                        style={{
                          color: "#24a65c",
                          fontSize: "11px"
                        }}
                      >
                        Forecast
                      </span>

                    )}

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>


      {/* =====================================
          MODEL EXPLANATION
      ===================================== */}

      <div
        className="data-info-box"
      >

        <Brain size={22} />

        <div>

          <strong>
            How the AI Prediction Works
          </strong>

          <p>
            The prediction module analyzes historical
            disease cases, current case activity,
            location information and observed trends.
            The system identifies patterns in the
            available data and generates a simulated
            seven-day outbreak forecast.
          </p>

        </div>

      </div>


      {/* =====================================
          IMPORTANT NOTICE
      ===================================== */}

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          borderRadius: "9px",
          background: "#fff8e8",
          border: "1px solid #f3dfaa",
          color: "#80691c",
          fontSize: "11px"
        }}
      >

        <strong>
          ⚠️ Prototype Notice:
        </strong>{" "}

        The prediction values displayed in this
        frontend prototype are simulated demonstration
        data. They are intended for academic project
        demonstration and are not medical diagnoses.

      </div>


    </div>
  );
}


export default OutbreakPrediction;