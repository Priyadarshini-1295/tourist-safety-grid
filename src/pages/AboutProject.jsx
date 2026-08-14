import React from "react";

import {
  Brain,
  Target,
  Database,
  Map,
  Bell,
  Activity,
  Shield,
  CheckCircle,
  BarChart3,
  Users,
  Cpu,
  Cloud
} from "lucide-react";

function AboutProject() {
  return (
    <div className="about-project-page">

      {/* ================================
          HERO SECTION
      ================================= */}

      <div className="about-hero">

        <div className="about-hero-icon">
          <Brain size={42} />
        </div>

        <div>

          <h1>
            HealthWatch AI
          </h1>

          <h3>
            AI Prediction Community — The Future of Outbreak Prediction
          </h3>

          <p>
            HealthWatch AI is an intelligent outbreak prediction and
            monitoring platform designed to analyze disease-related data,
            identify outbreak risks, and provide early warnings to help
            communities and authorities take preventive action.
          </p>

        </div>

      </div>


      {/* ================================
          PROJECT OVERVIEW
      ================================= */}

      <div className="about-two-column">

        <div className="about-info-card">

          <div className="about-info-icon">
            <Activity size={24} />
          </div>

          <h2>
            Project Overview
          </h2>

          <p>
            The system combines disease monitoring, data analysis,
            artificial intelligence, risk mapping, and alert generation
            into a single platform. It helps users understand current
            disease activity and identify areas that may require attention.
          </p>

        </div>


        <div className="about-info-card">

          <div className="about-info-icon">
            <Target size={24} />
          </div>

          <h2>
            Main Goal
          </h2>

          <p>
            The main goal is to provide an early-warning system that can
            analyze historical and current disease information and predict
            possible future outbreak trends before they become critical.
          </p>

        </div>

      </div>


      {/* ================================
          OBJECTIVES
      ================================= */}

      <div className="about-section">

        <div className="section-heading">

          <div>

            <h2>
              Project Objectives
            </h2>

            <p>
              Key objectives of the HealthWatch AI system
            </p>

          </div>

          <Target size={21} />

        </div>


        <div className="objective-grid">

          <Objective
            icon={<Brain size={21} />}
            title="Predict Outbreaks"
            text="Use AI and machine learning concepts to predict possible future disease outbreaks."
          />

          <Objective
            icon={<Activity size={21} />}
            title="Monitor Diseases"
            text="Track disease cases and identify changes in disease activity."
          />

          <Objective
            icon={<Map size={21} />}
            title="Identify Risk Areas"
            text="Analyze locations and classify areas according to their outbreak risk."
          />

          <Objective
            icon={<Bell size={21} />}
            title="Generate Alerts"
            text="Provide early warnings when unusual disease activity is detected."
          />

        </div>

      </div>


      {/* ================================
          SYSTEM WORKFLOW
      ================================= */}

      <div className="about-section">

        <div className="section-heading">

          <div>

            <h2>
              System Workflow
            </h2>

            <p>
              How HealthWatch AI processes outbreak information
            </p>

          </div>

          <BarChart3 size={21} />

        </div>


        <div className="about-workflow">


          <WorkflowStep
            number="01"
            title="Data Collection"
            text="Collect disease, location and environmental information."
          />

          <div className="workflow-arrow">
            →
          </div>


          <WorkflowStep
            number="02"
            title="Data Processing"
            text="Clean and organize collected information for analysis."
          />

          <div className="workflow-arrow">
            →
          </div>


          <WorkflowStep
            number="03"
            title="AI Analysis"
            text="Analyze patterns and identify possible outbreak trends."
          />

          <div className="workflow-arrow">
            →
          </div>


          <WorkflowStep
            number="04"
            title="Risk Prediction"
            text="Estimate outbreak risk for different locations."
          />

          <div className="workflow-arrow">
            →
          </div>


          <WorkflowStep
            number="05"
            title="Alert Generation"
            text="Display warnings and insights for decision support."
          />

        </div>

      </div>


      {/* ================================
          TECHNOLOGIES
      ================================= */}

      <div className="about-section">

        <div className="section-heading">

          <div>

            <h2>
              Technologies Used
            </h2>

            <p>
              Technologies and concepts used in the project
            </p>

          </div>

          <Cpu size={21} />

        </div>


        <div className="technology-grid">


          <Technology
            icon={<Brain size={20} />}
            title="Artificial Intelligence"
            text="Outbreak prediction and pattern analysis"
          />


          <Technology
            icon={<BarChart3 size={20} />}
            title="Data Analytics"
            text="Disease trend and statistical analysis"
          />


          <Technology
            icon={<Database size={20} />}
            title="Data Management"
            text="Disease and location data storage"
          />


          <Technology
            icon={<Map size={20} />}
            title="Risk Mapping"
            text="Location-based outbreak visualization"
          />


          <Technology
            icon={<Cloud size={20} />}
            title="Cloud Concepts"
            text="Scalable data processing and monitoring"
          />


          <Technology
            icon={<Activity size={20} />}
            title="React Dashboard"
            text="Interactive frontend application"
          />

        </div>

      </div>


      {/* ================================
          KEY FEATURES
      ================================= */}

      <div className="about-section">

        <div className="section-heading">

          <div>

            <h2>
              Key Features
            </h2>

            <p>
              Important features included in the application
            </p>

          </div>

          <Shield size={21} />

        </div>


        <div className="feature-list">

          <Feature
            text="Real-time disease monitoring dashboard"
          />

          <Feature
            text="AI-based outbreak prediction"
          />

          <Feature
            text="Disease-wise case analysis"
          />

          <Feature
            text="Location-based risk classification"
          />

          <Feature
            text="Outbreak warning and alert system"
          />

          <Feature
            text="Disease trend visualization"
          />

          <Feature
            text="Prediction performance analytics"
          />

          <Feature
            text="Multiple disease data sources"
          />

          <Feature
            text="Community-focused early warning"
          />

          <Feature
            text="Decision-support information"
          />

        </div>

      </div>


      {/* ================================
          USERS
      ================================= */}

      <div className="about-two-column">


        <div className="about-info-card">

          <div className="about-info-icon">
            <Users size={24} />
          </div>

          <h2>
            Intended Users
          </h2>

          <p>
            The platform can support public health authorities,
            healthcare organizations, researchers, local administrators,
            and communities by providing outbreak-related insights
            and early warning information.
          </p>

        </div>


        <div className="about-info-card">

          <div className="about-info-icon">
            <Shield size={24} />
          </div>

          <h2>
            Decision Support
          </h2>

          <p>
            HealthWatch AI is designed as a decision-support system.
            Its predictions are intended to assist users in identifying
            potential risks and should not be treated as medical diagnoses.
          </p>

        </div>

      </div>


      {/* ================================
          PROJECT STATUS
      ================================= */}

      <div className="project-status-card">

        <div>

          <span>
            FINAL YEAR PROJECT
          </span>

          <h2>
            HealthWatch AI — Outbreak Prediction Platform
          </h2>

        </div>


        <div className="status-complete">

          <CheckCircle size={16} />

          Prototype Ready

        </div>

      </div>


    </div>
  );
}


/* =========================================
   OBJECTIVE COMPONENT
========================================= */

function Objective({
  icon,
  title,
  text
}) {

  return (

    <div className="objective-card">

      <div className="objective-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


/* =========================================
   WORKFLOW COMPONENT
========================================= */

function WorkflowStep({
  number,
  title,
  text
}) {

  return (

    <div className="workflow-step">

      <div className="workflow-number">
        {number}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


/* =========================================
   TECHNOLOGY COMPONENT
========================================= */

function Technology({
  icon,
  title,
  text
}) {

  return (

    <div className="technology-card">

      <div className="technology-icon">
        {icon}
      </div>

      <div>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}


/* =========================================
   FEATURE COMPONENT
========================================= */

function Feature({ text }) {

  return (

    <div className="feature-item">

      <CheckCircle size={18} />

      <span>
        {text}
      </span>

    </div>
  );
}


export default AboutProject;