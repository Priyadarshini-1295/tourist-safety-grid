import React, { useState } from "react";
import {
  Activity,
  Search,
  TrendingUp,
  Users,
  HeartPulse
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "../App.css";

const diseases = [
  {
    name: "Dengue",
    cases: 182,
    active: 74,
    recovered: 102,
    risk: "HIGH"
  },
  {
    name: "Influenza",
    cases: 124,
    active: 43,
    recovered: 76,
    risk: "MODERATE"
  },
  {
    name: "COVID-19",
    cases: 76,
    active: 21,
    recovered: 52,
    risk: "LOW"
  },
  {
    name: "Malaria",
    cases: 48,
    active: 13,
    recovered: 33,
    risk: "MODERATE"
  }
];

const chartData = [
  { day: "1", cases: 210 },
  { day: "5", cases: 235 },
  { day: "10", cases: 260 },
  { day: "15", cases: 290 },
  { day: "20", cases: 315 },
  { day: "25", cases: 345 },
  { day: "30", cases: 380 }
];

function DiseaseMonitoring() {

  const [search, setSearch] = useState("");

  const filteredDiseases = diseases.filter((disease) =>
    disease.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="disease-page">

      {/* HEADER */}

      <div className="page-intro">

        <div>
          <h2>Disease Monitoring</h2>

          <p>
            Monitor current disease activity and reported cases
            across monitored locations.
          </p>
        </div>

        <div className="monitor-status">
          <span></span>
          Live Monitoring
        </div>

      </div>


      {/* FILTERS */}

      <div className="filter-card">

        <div className="search-box">

          <Search size={19} />

          <input
            type="text"
            placeholder="Search disease..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <select>
          <option>All Locations</option>
          <option>Chennai</option>
          <option>Madurai</option>
          <option>Coimbatore</option>
          <option>Trichy</option>
        </select>

        <select>
          <option>All Risk Levels</option>
          <option>HIGH</option>
          <option>MODERATE</option>
          <option>LOW</option>
        </select>

      </div>


      {/* SUMMARY CARDS */}

      <div className="monitor-grid">

        <div className="monitor-card">

          <div className="monitor-icon blue">
            <Activity />
          </div>

          <div>
            <p>Total Cases</p>
            <h2>430</h2>
            <small>Reported cases</small>
          </div>

        </div>


        <div className="monitor-card">

          <div className="monitor-icon orange">
            <HeartPulse />
          </div>

          <div>
            <p>Active Cases</p>
            <h2>151</h2>
            <small>Currently active</small>
          </div>

        </div>


        <div className="monitor-card">

          <div className="monitor-icon green">
            <Users />
          </div>

          <div>
            <p>Recovered</p>
            <h2>279</h2>
            <small>Recovered patients</small>
          </div>

        </div>

      </div>


      {/* CHART */}

      <div className="monitor-chart-card">

        <div className="section-heading">

          <div>
            <h2>Overall Disease Activity</h2>
            <p>Reported cases during the last 30 days</p>
          </div>

          <TrendingUp size={23} />

        </div>

        <div className="monitor-chart">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart data={chartData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5ebf3"
              />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="cases"
                stroke="#347cf0"
                strokeWidth={3}
                dot
                name="Cases"
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* DISEASE TABLE */}

      <div className="disease-table-card">

        <div className="section-heading">

          <div>
            <h2>Disease Overview</h2>
            <p>Current status of monitored diseases</p>
          </div>

        </div>


        <div className="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Disease</th>
                <th>Total Cases</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Risk Level</th>
              </tr>

            </thead>

            <tbody>

              {filteredDiseases.map((disease) => (

                <tr key={disease.name}>

                  <td>
                    <strong>{disease.name}</strong>
                  </td>

                  <td>{disease.cases}</td>

                  <td>{disease.active}</td>

                  <td>{disease.recovered}</td>

                  <td>

                    <span
                      className={
                        disease.risk === "HIGH"
                          ? "risk-high"
                          : disease.risk === "MODERATE"
                          ? "risk-medium"
                          : "risk-low"
                      }
                    >
                      {disease.risk}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default DiseaseMonitoring;