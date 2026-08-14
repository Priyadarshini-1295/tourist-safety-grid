import React, { useState } from "react";

import {
  LayoutDashboard,
  Activity,
  Brain,
  Map,
  Bell,
  Database,
  BarChart3,
  Info,
  HeartPulse,
  Menu,
  X,
  ShieldCheck
} from "lucide-react";

import Dashboard from "./pages/Dashboard";
import DiseaseMonitoring from "./pages/DiseaseMonitoring";
import OutbreakPrediction from "./pages/OutbreakPrediction";
import RiskMap from "./pages/RiskMap";
import Alerts from "./pages/Alerts";
import DataSources from "./pages/DataSources";
import Analytics from "./pages/Analytics";
import AboutProject from "./pages/AboutProject";
import DiseaseDetails from "./pages/DiseaseDetails";

import "./App.css";


function App() {

  const [activePage, setActivePage] =
    useState("Dashboard");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);


  const menuItems = [

    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />
    },

    {
      name: "Disease Monitoring",
      icon: <Activity size={18} />
    },

    {
      name: "Disease Details",
      icon: <HeartPulse size={18} />
    },

    {
      name: "Outbreak Prediction",
      icon: <Brain size={18} />
    },

    {
      name: "Risk Map",
      icon: <Map size={18} />
    },

    {
      name: "Analytics",
      icon: <BarChart3 size={18} />
    },

    {
      name: "Alerts",
      icon: <Bell size={18} />
    },

    {
      name: "Data Sources",
      icon: <Database size={18} />
    },

    {
      name: "About Project",
      icon: <Info size={18} />
    }

  ];


  const handlePageChange = (page) => {

    setActivePage(page);

    setSidebarOpen(false);

  };


  const renderPage = () => {

    switch (activePage) {

      case "Dashboard":
        return <Dashboard />;


      case "Disease Monitoring":
        return <DiseaseMonitoring />;


      case "Disease Details":
        return <DiseaseDetails />;


      case "Outbreak Prediction":
        return <OutbreakPrediction />;


      case "Risk Map":
        return <RiskMap />;


      case "Analytics":
        return <Analytics />;


      case "Alerts":
        return <Alerts />;


      case "Data Sources":
        return <DataSources />;


      case "About Project":
        return <AboutProject />;


      default:
        return <Dashboard />;

    }

  };


  return (

    <div className="app-container">


      {/* ================================
          MOBILE MENU BUTTON
      ================================= */}

      <button
        className="mobile-menu-button"
        onClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
      >

        {sidebarOpen ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}

      </button>


      {/* ================================
          SIDEBAR
      ================================= */}

      <aside
        className={`sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >


        {/* LOGO */}

        <div className="sidebar-logo">

          <div className="logo-icon">

            <HeartPulse size={25} />

          </div>


          <div>

            <h2>
              HealthWatch
            </h2>

            <span>
              AI OUTBREAK SYSTEM
            </span>

          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="sidebar-nav">

          <p className="nav-title">
            MAIN MENU
          </p>


          {menuItems.map((item) => (

            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handlePageChange(item.name)
              }
            >

              <span className="nav-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </button>

          ))}

        </nav>


        {/* SIDEBAR FOOTER */}

        <div className="sidebar-footer">

          <ShieldCheck size={18} />

          <div>

            <strong>
              System Protected
            </strong>

            <span>
              Monitoring active
            </span>

          </div>

        </div>

      </aside>


      {/* ================================
          OVERLAY FOR MOBILE
      ================================= */}

      {sidebarOpen && (

        <div
          className="sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        ></div>

      )}


      {/* ================================
          MAIN CONTENT
      ================================= */}

      <main className="main-content">


        {/* TOP HEADER */}

        <header className="top-header">

          <div>

            <p className="breadcrumb">
              HealthWatch AI
            </p>

            <h1>
              {activePage}
            </h1>

          </div>


          <div className="header-right">

            <div className="header-status">

              <span></span>

              AI System Online

            </div>


            <div className="profile-circle">
              U
            </div>

          </div>

        </header>


        {/* PAGE */}

        <div className="page-content">

          {renderPage()}

        </div>


        {/* FOOTER */}

        <footer className="app-footer">

          <span>
            © 2026 HealthWatch AI
          </span>

          <span>
            AI Prediction Community
          </span>

        </footer>

      </main>

    </div>

  );

}


export default App;