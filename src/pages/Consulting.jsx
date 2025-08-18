import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Consultants from "./Consultants";
import RequestConsultation from "./RequestConsultation";
import "../styles/scss/Consulting.scss";

const Consulting = () => {
  return (
    <div className="consulting">
      <Routes>
        <Route path="/" element={<ConsultingMain />} />
        <Route path="consultants" element={<Consultants />} />
        <Route path="request-consultation" element={<RequestConsultation />} />
      </Routes>
    </div>
  );
};

const ConsultingMain = () => {
  return (
    <div className="consulting__container">
      {/* Hero Section */}
      <section className="consulting__hero">
        <div className="consulting__hero-content">
          <h1 className="consulting__title">Консалтинг медичних лабораторій</h1>
          <div className="consulting__title-accent"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="consulting__content">
        {/* First Text Block - Main Description */}
        <div className="consulting__text-card consulting__text-card--primary">
          <div className="consulting__text-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
              <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
              <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" />
            </svg>
          </div>
          <div className="consulting__text-content">
            <h2>Експертний консалтинг</h2>
            <p>
              Консалтинг медичних лабораторій, з особливим фокусом на
              <strong> бактеріологічну діагностику</strong>,{" "}
              <strong>біологічну безпеку</strong>, відповідно до вимог
              міжнародного стандарту <strong>ISO 15189:2022</strong>.
            </p>
          </div>
          <div className="consulting__geometric-element consulting__geometric-element--circle"></div>
        </div>

        {/* Second Text Block - Process */}
        <div className="consulting__text-card consulting__text-card--secondary">
          <div className="consulting__geometric-element consulting__geometric-element--triangle"></div>
          <div className="consulting__text-content">
            <h2>Повний цикл підтримки</h2>
            <p>
              Ми супроводжуємо лабораторії на всіх етапах - від проєктування та
              запуску до успішного проходження акредитації. Підтримка у
              створенні та впровадженні системи управління якістю: пакету
              документації (політики, процедури, СОП), валідації/верифікації
              методів, управління даними та інформацією, керування ризиками та
              можливостями, проведення внутрішніх аудитів. Навчання персоналу.
            </p>
          </div>
          <div className="consulting__text-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        </div>

        {/* Third Text Block - Ongoing Support */}
        <div className="consulting__text-card consulting__text-card--tertiary">
          <div className="consulting__text-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div className="consulting__text-content">
            <h2>Постійна підтримка</h2>
            <p>
              Окрім підготовки до акредитації, ми пропонуємо постійну підтримку
              та супровід функціонування системи якості, допомагаючи
              лабораторіям залишатися відповідними стандартам у щоденній роботі.
            </p>
          </div>
          <div className="consulting__geometric-element consulting__geometric-element--hexagon"></div>
        </div>

        {/* Final Text Block - Mission - Special Slogan Section */}
        <div className="consulting__mission-section">
          <div className="consulting__text-card consulting__text-card--final">
            <div className="consulting__text-content consulting__text-content--centered">
              <h2>Наша місія</h2>
              <p>
                Разом з Вами ми вибудуємо ефективну, сучасну та надійну систему
                управляння лабораторії, що відповідатиме найвищим міжнародним
                стандартам якості.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="consulting__services">
          <div className="consulting__service-card">
            <div className="consulting__service-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3>Проєктування та запуск</h3>
            <p>Комплексний підхід від початку до акредитації</p>
          </div>

          <div className="consulting__service-card">
            <div className="consulting__service-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </div>
            <h3>Система документації</h3>
            <p>Політики, процедури, СОП відповідно до ISO 15189</p>
          </div>

          <div className="consulting__service-card">
            <div className="consulting__service-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4M9 11V9a2 2 0 1 1 4 0v2M9 11h4" />
              </svg>
            </div>
            <h3>Біологічна безпека</h3>
            <p>Керування ризиками та забезпечення безпеки</p>
          </div>
        </div>

        <div className="consulting__cta">
          <div className="consulting__cta-content">
            <h2 className="consulting__cta-title">
              Готові розпочати співпрацю?
            </h2>
            <p className="consulting__cta-description">
              Оберіть зручний для вас спосіб отримання консультації
            </p>

            <div className="consulting__cta-buttons">
              <Link
                to="consultants"
                className="consulting__btn consulting__btn--primary"
              >
                <svg
                  className="consulting__btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Консультанти
              </Link>

              <Link
                to="request-consultation"
                className="consulting__btn consulting__btn--secondary"
              >
                <svg
                  className="consulting__btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Замовити консультацію
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
