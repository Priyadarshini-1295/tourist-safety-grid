import React from "react";
import {
  Activity,
  Brain,
  AlertTriangle,
  MapPin,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  Clock
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


const trendData = [
  { day: "Mon", cases: 280 },
  { day: "Tue", cases: 320 },
  { day: "Wed", cases: 350 },
  { day: "Thu", cases: 390 },
  { day: "Fri", cases: 420 },
  { day: "Sat", cases: 455 },
  { day: "Sun", cases: 480 }
];


const recentAlerts = [
  {
    disease: "Dengue",
    location: "Chennai",
    level: "HIGH",
    time: "10 min ago"
  },
  {
    disease: "Influenza",
    location: "Madurai",
    level: "MODERATE",
    time: "35 min ago"
  },
  {
    disease: "Malaria",
    location: "Coimbatore",
    level: "LOW",
    time: "1 hour ago"
  }
];


function Dashboard() {

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="page-intro">

        <div>
          <h2>HealthWatch Dashboard</h2>

          <p>
            AI-powered community outbreak monitoring
            and prediction
          </p>
        </div>

        <div className="monitor-status">
          <span></span>
          System Monitoring Active
        </div>

      </div>


      {/* STAT CARDS */}

      <div className="stats-grid">

        <div className="stat-card">

          <div>
            <p>Total Cases</p>
            <h2>461</h2>
            <small>
              <TrendingUp size={12} />
              12% increase
            </small>
          </div>

          <div className="stat-icon blue">
            <Activity size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>AI Predictions</p>
            <h2>2,512</h2>
            <small>
              Next 7 days
            </small>
          </div>

          <div className="stat-icon purple">
            <Brain size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>High Risk Areas</p>
            <h2>2</h2>
            <small>
              Requires attention
            </small>
          </div>

          <div className="stat-icon red">
            <AlertTriangle size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>Model Accuracy</p>
            <h2>93%</h2>
            <small>
              Current performance
            </small>
          </div>

          <div className="stat-icon green">
            <ShieldCheck size={24} />
          </div>

        </div>

      </div>


      {/* MAIN GRID */}

      <div className="dashboard-main-grid">


        {/* CASE TREND */}

        <div className="dashboard-chart-card">

          <div className="section-heading">

            <div>
              <h2>Community Case Trend</h2>

              <p>
                Disease activity during the current week
              </p>
            </div>

            <ArrowUpRight size={20} />

          </div>


          <div className="dashboard-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart data={trendData}>

                <defs>

                  <linearGradient
                    id="caseGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#347cf0"
                      stopOpacity={0.25}
                    />

                    <stop
                      offset="95%"
                      stopColor="#347cf0"
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
                  dataKey="cases"
                  stroke="#347cf0"
                  strokeWidth={3}
                  fill="url(#caseGradient)"
                  name="Cases"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* QUICK RISK */}

        <div className="dashboard-risk-card">

          <div className="section-heading">

            <div>
              <h2>Risk Overview</h2>

              <p>
                Current monitored regions
              </p>
            </div>

            <MapPin size={20} />

          </div>


          <div className="risk-overview-item">

            <div>
              <strong>Chennai</strong>
              <span>182 cases</span>
            </div>

            <b className="risk-high">
              HIGH
            </b>

          </div>


          <div className="risk-overview-item">

            <div>
              <strong>Madurai</strong>
              <span>124 cases</span>
            </div>

            <b className="risk-medium">
              MODERATE
            </b>

          </div>


          <div className="risk-overview-item">

            <div>
              <strong>Coimbatore</strong>
              <span>76 cases</span>
            </div>

            <b className="risk-low">
              LOW
            </b>

          </div>


          <div className="risk-overview-item">

            <div>
              <strong>Trichy</strong>
              <span>58 cases</span>
            </div>

            <b className="risk-medium">
              MODERATE
            </b>

          </div>

        </div>

      </div>


      {/* BOTTOM SECTION */}

      <div className="dashboard-bottom-grid">


        {/* RECENT ALERTS */}

        <div className="dashboard-table-card">

          <div className="section-heading">

            <div>
              <h2>Recent Alerts</h2>

              <p>
                Latest outbreak notifications
              </p>
            </div>

            <AlertTriangle size={20} />

          </div>


          <table>

            <thead>

              <tr>
                <th>Disease</th>
                <th>Location</th>
                <th>Risk</th>
                <th>Time</th>
              </tr>

            </thead>


            <tbody>

              {recentAlerts.map(
                (alert, index) => (

                  <tr key={index}>

                    <td>
                      <strong>
                        {alert.disease}
                      </strong>
                    </td>

                    <td>
                      <MapPin size={13} />
                      {alert.location}
                    </td>

                    <td>

                      <span
                        className={
                          alert.level === "HIGH"
                            ? "risk-high"
                            : alert.level === "MODERATE"
                            ? "risk-medium"
                            : "risk-low"
                        }
                      >
                        {alert.level}
                      </span>

                    </td>

                    <td>
                      <Clock size={13} />
                      {alert.time}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>


        {/* AI SUMMARY */}

        <div className="ai-summary-card">

          <div className="ai-summary-icon">
            <Brain size={28} />
          </div>


          <h2>
            AI Insight
          </h2>


          <p>
            The current data indicates an increasing
            disease trend in several monitored regions.
            Dengue currently represents the highest
            observed risk.
          </p>


          <div className="ai-summary-stat">

            <span>
              Predicted next 7 days
            </span>

            <strong>
              2,512 cases
            </strong>

          </div>


          <div className="ai-summary-stat">

            <span>
              Prediction confidence
            </span>

            <strong>
              93%
            </strong>

          </div>


          <div className="ai-summary-stat">

            <span>
              High-risk locations
            </span>

            <strong>
              2
            </strong>

          </div>

        </div>

      </div>


      {/* DISCLAIMER */}

      <div className="data-info-box">

        <ShieldCheck size={22} />

        <div>

          <strong>
            HealthWatch AI Monitoring
          </strong>

          <p>
            This dashboard is an academic prototype
            designed to demonstrate AI-assisted outbreak
            monitoring and prediction. Displayed values
            are demonstration data and should not be
            interpreted as medical advice.
          </p>

        </div>

      </div>

    </div>
  );
}


export default Dashboard;