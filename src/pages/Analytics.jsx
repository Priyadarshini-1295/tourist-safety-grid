import React from "react";

import {
  BarChart3,
  TrendingUp,
  Brain,
  Target,
  Activity,
  CheckCircle
} from "lucide-react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


/* =========================================
   DATA
========================================= */

const diseaseData = [
  {
    disease: "Dengue",
    cases: 182
  },
  {
    disease: "Influenza",
    cases: 124
  },
  {
    disease: "COVID-19",
    cases: 76
  },
  {
    disease: "Malaria",
    cases: 48
  },
  {
    disease: "Typhoid",
    cases: 31
  }
];


const weeklyData = [
  {
    week: "Week 1",
    cases: 320,
    predicted: 340
  },
  {
    week: "Week 2",
    cases: 410,
    predicted: 430
  },
  {
    week: "Week 3",
    cases: 380,
    predicted: 400
  },
  {
    week: "Week 4",
    cases: 455,
    predicted: 490
  },
  {
    week: "Week 5",
    cases: 520,
    predicted: 560
  },
  {
    week: "Week 6",
    cases: 480,
    predicted: 530
  }
];


const accuracyData = [
  {
    month: "Jan",
    accuracy: 82
  },
  {
    month: "Feb",
    accuracy: 85
  },
  {
    month: "Mar",
    accuracy: 87
  },
  {
    month: "Apr",
    accuracy: 89
  },
  {
    month: "May",
    accuracy: 91
  },
  {
    month: "Jun",
    accuracy: 93
  }
];


/* =========================================
   ANALYTICS PAGE
========================================= */

function Analytics() {

  return (

    <div className="analytics-page">


      {/* PAGE HEADER */}

      <div className="page-intro">

        <div>

          <h2>
            Analytics & Insights
          </h2>

          <p>
            Analyze disease trends and AI prediction performance
          </p>

        </div>


        <div className="monitor-status">

          <span></span>

          Analytics Updated

        </div>

      </div>


      {/* =====================================
          SUMMARY CARDS
      ===================================== */}

      <div className="monitor-grid">


        <div className="monitor-card">

          <div className="monitor-icon blue">

            <Activity size={23} />

          </div>

          <div>

            <p>
              Total Cases
            </p>

            <h2>
              461
            </h2>

            <small>
              Current monitoring period
            </small>

          </div>

        </div>


        <div className="monitor-card">

          <div className="monitor-icon purple">

            <Brain size={23} />

          </div>

          <div>

            <p>
              AI Predictions
            </p>

            <h2>
              2,512
            </h2>

            <small>
              Next 7 days forecast
            </small>

          </div>

        </div>


        <div className="monitor-card">

          <div className="monitor-icon green">

            <Target size={23} />

          </div>

          <div>

            <p>
              Model Accuracy
            </p>

            <h2>
              93%
            </h2>

            <small>
              Current prediction accuracy
            </small>

          </div>

        </div>


        <div className="monitor-card">

          <div className="monitor-icon orange">

            <TrendingUp size={23} />

          </div>

          <div>

            <p>
              Trend Change
            </p>

            <h2>
              +12%
            </h2>

            <small>
              Compared with previous period
            </small>

          </div>

        </div>

      </div>


      {/* =====================================
          CHART GRID
      ===================================== */}

      <div className="analytics-chart-grid">


        {/* DISEASE CHART */}

        <div className="analytics-chart-card">

          <div className="section-heading">

            <div>

              <h2>
                Disease-wise Cases
              </h2>

              <p>
                Current cases by disease
              </p>

            </div>

            <BarChart3 size={21} />

          </div>


          <div className="analytics-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={diseaseData}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="disease"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="cases"
                  fill="#347cf0"
                  radius={[5, 5, 0, 0]}
                  name="Cases"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* WEEKLY TREND */}

        <div className="analytics-chart-card">

          <div className="section-heading">

            <div>

              <h2>
                Weekly Case Trend
              </h2>

              <p>
                Actual cases vs predicted cases
              </p>

            </div>

            <TrendingUp size={21} />

          </div>


          <div className="analytics-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart
                data={weeklyData}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="week"
                />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="cases"
                  stroke="#347cf0"
                  strokeWidth={3}
                  name="Actual Cases"
                />

                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#8247eb"
                  strokeWidth={3}
                  strokeDasharray="7 6"
                  name="Predicted Cases"
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* =====================================
          MODEL PERFORMANCE
      ===================================== */}

      <div className="analytics-full-card">

        <div className="section-heading">

          <div>

            <h2>
              AI Model Performance
            </h2>

            <p>
              Prediction accuracy over the last six months
            </p>

          </div>

          <Brain size={21} />

        </div>


        <div className="large-analytics-chart">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={accuracyData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="month"
              />

              <YAxis
                domain={[70, 100]}
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#24a65c"
                strokeWidth={3}
                name="Accuracy %"
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* =====================================
          MODEL INFORMATION
      ===================================== */}

      <div className="model-info-grid">


        <div className="model-info-card">

          <div className="model-info-icon">

            <Brain size={22} />

          </div>

          <div>

            <h3>
              Prediction Model
            </h3>

            <p>
              The system uses machine learning
              techniques to identify patterns in
              historical disease data and predict
              possible outbreak trends.
            </p>

          </div>

        </div>


        <div className="model-info-card">

          <div className="model-info-icon">

            <Target size={22} />

          </div>

          <div>

            <h3>
              Prediction Accuracy
            </h3>

            <p>
              The model currently demonstrates
              a simulated accuracy of 93% using
              the project's demonstration dataset.
            </p>

          </div>

        </div>


        <div className="model-info-card">

          <div className="model-info-icon">

            <CheckCircle size={22} />

          </div>

          <div>

            <h3>
              Decision Support
            </h3>

            <p>
              Predictions are intended to help
              authorities identify high-risk areas
              and prepare early intervention strategies.
            </p>

          </div>

        </div>

      </div>


    </div>

  );
}


export default Analytics;