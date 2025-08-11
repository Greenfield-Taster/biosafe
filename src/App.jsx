import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Diagnostics from "./pages/Diagnostics";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

import "./styles/global.scss";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      <Header isHomePage={isHomePage} />
      <main className={`main-content ${isHomePage ? 'home-page' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting/*" element={<Consulting />} />
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
