import React, { useState } from "react";
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Clock,
  ShieldAlert,
  X
} from "lucide-react";

function Alerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      level: "HIGH",
      title: "Dengue Outbreak Risk Detected",
      location: "Chennai",
      message:
        "AI analysis indicates a significant increase in dengue activity.",
      time: "10 minutes ago",
      status: "Active"
    },
    {
      id: 2,
      level: "MODERATE",
      title: "Influenza Cases Increasing",
      location: "Madurai",
      message:
        "Reported influenza cases are showing an upward trend.",
      time: "35 minutes ago",
      status: "Active"
    },
    {
      id: 3,
      level: "LOW",
      title: "Malaria Activity Stable",
      location: "Coimbatore",
      message:
        "Malaria activity remains within the expected range.",
      time: "1 hour ago",
      status: "Monitoring"
    }
  ]);

  const removeAlert = (id) => {
    setAlerts(
      alerts.filter((alert) => alert.id !== id)
    );
  };

  const getAlertClass = (level) => {
    if (level === "HIGH") return "alert-high";
    if (level === "MODERATE") return "alert-moderate";
    return "alert-low";
  };

  return (
    <div className="other-page">

      {/* PAGE HEADER */}

      <div className="page-intro">

        <div>
          <h2>Outbreak Alerts</h2>

          <p>
            Monitor important disease outbreak warnings
            and risk notifications
          </p>
        </div>

        <div className="monitor-status">
          <span></span>
          Monitoring Active
        </div>

      </div>


      {/* SUMMARY */}

      <div className="stats-grid">

        <div className="stat-card">

          <div>
            <p>Active Alerts</p>
            <h2>{alerts.length}</h2>
            <small>Current notifications</small>
          </div>

          <div className="stat-icon red">
            <Bell size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>High Risk</p>
            <h2>
              {
                alerts.filter(
                  (alert) => alert.level === "HIGH"
                ).length
              }
            </h2>
            <small>Immediate attention required</small>
          </div>

          <div className="stat-icon orange">
            <AlertTriangle size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>Monitoring</p>
            <h2>
              {
                alerts.filter(
                  (alert) => alert.status === "Monitoring"
                ).length
              }
            </h2>
            <small>Under observation</small>
          </div>

          <div className="stat-icon blue">
            <ShieldAlert size={24} />
          </div>

        </div>


        <div className="stat-card">

          <div>
            <p>System Status</p>
            <h2
              style={{
                fontSize: "20px"
              }}
            >
              ACTIVE
            </h2>
            <small>AI monitoring enabled</small>
          </div>

          <div className="stat-icon green">
            <CheckCircle size={24} />
          </div>

        </div>

      </div>


      {/* ALERT LIST */}

      <div className="about-section">

        <div className="section-heading">

          <div>
            <h2>Recent Alerts</h2>

            <p>
              Latest outbreak-related notifications
            </p>
          </div>

          <Bell size={21} />

        </div>


        {alerts.length === 0 ? (

          <div
            style={{
              textAlign: "center",
              padding: "45px 20px",
              color: "#7c879b"
            }}
          >

            <CheckCircle
              size={40}
              style={{
                marginBottom: "10px"
              }}
            />

            <h3>
              No Active Alerts
            </h3>

            <p>
              The system currently has no active
              outbreak warnings.
            </p>

          </div>

        ) : (

          alerts.map((alert) => (

            <div
              key={alert.id}
              className={`alert-card ${getAlertClass(
                alert.level
              )}`}
            >

              {/* ALERT ICON */}

              <div className="alert-icon">

                {alert.level === "HIGH" ? (
                  <AlertTriangle size={22} />
                ) : alert.level === "MODERATE" ? (
                  <ShieldAlert size={22} />
                ) : (
                  <CheckCircle size={22} />
                )}

              </div>


              {/* ALERT CONTENT */}

              <div className="alert-content">

                <div className="alert-title-row">

                  <h3>
                    {alert.title}
                  </h3>

                  <span className="alert-level">
                    {alert.level}
                  </span>

                </div>


                <p>
                  {alert.message}
                </p>


                <div className="alert-details">

                  <span>
                    <MapPin size={14} />
                    {alert.location}
                  </span>

                  <span>
                    <Clock size={14} />
                    {alert.time}
                  </span>

                  <span>
                    Status: {alert.status}
                  </span>

                </div>

              </div>


              {/* REMOVE */}

              <button
                onClick={() =>
                  removeAlert(alert.id)
                }
                title="Dismiss alert"
                className="alert-close"
              >
                <X size={17} />
              </button>

            </div>

          ))

        )}

      </div>


      {/* ALERT EXPLANATION */}

      <div className="data-info-box">

        <Bell size={22} />

        <div>

          <strong>
            How the Alert System Works
          </strong>

          <p>
            The system continuously analyzes disease
            trends and prediction results. When the
            predicted risk crosses a defined threshold,
            an alert can be generated for the selected
            location and disease.
          </p>

        </div>

      </div>


      {/* NOTICE */}

      <div
        style={{
          marginTop: "18px",
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

        The alerts shown in this frontend prototype
        use demonstration data. In the completed
        system, alerts can be generated from the
        actual prediction model and database.

      </div>

    </div>
  );
}

export default Alerts;