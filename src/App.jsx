import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Consultants from "./pages/Consultants";
import RequestConsultation from "./pages/RequestConsultation";
import Diagnostics from "./pages/Diagnostics";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

import "./styles/global.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route
            path="/request-consultation"
            element={<RequestConsultation />}
          />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
