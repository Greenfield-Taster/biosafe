import React from "react";
import { Link } from "react-router-dom";
import AnimatedCircles from "../components/UI/AnimatedCircles";
import logoDetelsys from "/assets/logo-detelsys.png";
import "../styles/scss/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <AnimatedCircles />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Ветеринарні лабораторні дослідження та діагностика в м. Запоріжжя
            </h1>

            <div className="service-buttons">
              <Link to="/consulting" className="service-button">
                Консалтинг
              </Link>
              <Link to="/diagnostics" className="service-button">
                Діагностика та дослідження
              </Link>
            </div>

            <p className="quality-text">Якість, якій довіряють!</p>
          </div>
        </div>

        <div className="partners-section">
          <h2 className="partners-title">Наші партнери</h2>
          <div className="partners-row">
            <div className="partner-logo">
              <img
                src={logoDetelsys}
                alt="logoDetelsys"
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img
                src={logoDetelsys}
                alt="logoDetelsys"
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img
                src={logoDetelsys}
                alt="logoDetelsys"
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img
                src={logoDetelsys}
                alt="logoDetelsys"
                className="partner-image"
              />
            </div>
            <div className="partner-logo">
              <img
                src={logoDetelsys}
                alt="logoDetelsys"
                className="partner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
