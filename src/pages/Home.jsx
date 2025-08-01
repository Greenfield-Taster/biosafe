import React, { useState, useEffect } from "react";
import labLeft from "../assets/images/home-photo.jpg";
import labRight from "../assets/images/home-photo.jpg";
import "../styles/scss/Home.scss";

const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showOverlayText, setShowOverlayText] = useState(false);
  const [showPageContent, setShowPageContent] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    // Добавляем класс home-page к body
    document.body.classList.add("home-page");
    
    // Простая блокировка скролла
    document.body.style.overflow = "hidden";

    // Начинаем анимацию через 2 секунды
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);

    // Убираем заголовок через 2.05 секунд
    const titleTimer = setTimeout(() => {
      setShowTitle(false);
    }, 2050);

    // Показываем текст поверх картинок через 3.8 секунды
    const overlayTimer = setTimeout(() => {
      setShowOverlayText(true);
    }, 3800);

    // Показываем контент через 4 секунды
    const completeTimer = setTimeout(() => {
      setShowPageContent(true);
    }, 4000);

    // Разрешаем скролл через 4.5 секунды
    const scrollTimer = setTimeout(() => {
      setScrollEnabled(true);
      document.body.style.overflow = "auto";
    }, 4500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(titleTimer);
      clearTimeout(overlayTimer);
      clearTimeout(completeTimer);
      clearTimeout(scrollTimer);
      document.body.classList.remove("home-page");
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="home">
      {/* Первая секция - анимация */}
      <div className="fullscreen-animation">
        {/* Заголовок BIOSAFE */}
        <div className={`biosafe-title ${!showTitle ? "fade-out" : ""}`}>
          <h1>BIOSAFE</h1>
        </div>

        <div
          className={`lab-animation-container ${
            animationStarted ? "animate" : ""
          }`}
        >
          {/* Контейнер для картинок (будет блюриться) */}
          <div
            className={`images-container ${
              showOverlayText ? "blur-images" : ""
            }`}
          >
            {/* Левая часть диагонального разреза */}
            <div className="lab-half lab-left">
              <img src={labLeft} alt="Laboratory Left Part" />
            </div>

            {/* Правая часть диагонального разреза */}
            <div className="lab-half lab-right">
              <img src={labRight} alt="Laboratory Right Part" />
            </div>
          </div>

          {/* Текст поверх картинок (НЕ блюрится) */}
          <div className={`overlay-text ${showOverlayText ? "show" : ""}`}>
            <p>
              Компанія має досвід у різних напрямах діяльності. Ми допомагаємо
              знаходити оптимальні рішення для розвитку бізнесу в сфері
              діагностики та управління якістю.
            </p>
          </div>
        </div>
      </div>

      {/* Контент после анимации */}
      <div className={`page-content ${showPageContent ? "visible" : ""}`}>
        <div className="services-container">
          {/* Блок Консалтинг - темный фон, светлый текст, справа */}
          <div className="service-block consulting-block">
            <div className="service-content">
              <h2>КОНСАЛТІНГ</h2>
              <p>
                Надаємо послуги з консалтингу, бізнес-аналізу, впровадження
                систем управління якістю, супроводу акредитації за
                міжнародними та галузевими стандартами (зокрема ISO 15189).
              </p>
            </div>
          </div>

          {/* Блок Дослідження - светлый фон, темный текст, слева */}
          <div className="service-block research-block">
            <div className="service-content">
              <h2>ДОСЛІДЖЕННЯ ТА ДІАГНОСТИКА</h2>
              <p>
                Виконуємо ветеринарні лабораторні дослідження відповідно до
                вимог міжнародних стандартів.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
