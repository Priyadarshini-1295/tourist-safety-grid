import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Register from "./pages/Register";
import TouristID from "./pages/TouristID";
import SOS from "./pages/SOS";
import SafetyTips from "./pages/SafetyTips";
import EmergencyContacts from "./pages/EmergencyContacts";
import Attractions from "./pages/Attractions";
import Dashboard from "./pages/Dashboard";


function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/tourist-id"
          element={<TouristID />}
        />

        <Route
          path="/sos"
          element={<SOS />}
        />

        <Route
          path="/safety"
          element={<SafetyTips />}
        />

        <Route
          path="/emergency-contacts"
          element={<EmergencyContacts />}
        />

        <Route
          path="/attractions"
          element={<Attractions />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;