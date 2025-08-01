import React, { useState, useEffect } from "react";
import labLeft from "../assets/images/photo_2025-07-28_09-21-02.jpg";
import labRight from "../assets/images/photo_2025-07-28_09-21-02.jpg";
import "../styles/scss/Home.scss";

const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showOverlayText, setShowOverlayText] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showPageContent, setShowPageContent] = useState(false);

  useEffect(() => {
    // Добавляем класс home-page к body и блокируем скролл
    document.body.classList.add("home-page");
    document.body.style.overflow = "hidden";

    // Начинаем анимацию через 2 секунды
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 2000);

    // Убираем заголовок через 2.05 секунд (еще быстрее исчезновение)
    const titleTimer = setTimeout(() => {
      setShowTitle(false);
    }, 2050);

    // Показываем текст поверх картинок и блюрим их через 3.8 секунды (быстрее)
    const overlayTimer = setTimeout(() => {
      setShowOverlayText(true);
    }, 3800);

    // Завершаем анимацию и разблокируем скролл через 6 секунд
    const completeTimer = setTimeout(() => {
      setAnimationComplete(true);
      document.body.style.overflow = "auto";
      setShowPageContent(true);
      // Делаем полноэкранную анимацию невидимой
      const fullscreenEl = document.querySelector('.fullscreen-animation');
      if (fullscreenEl) {
        fullscreenEl.style.opacity = '0';
        fullscreenEl.style.visibility = 'hidden';
        fullscreenEl.style.pointerEvents = 'none';
      }
    }, 6000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(titleTimer);
      clearTimeout(overlayTimer);
      clearTimeout(completeTimer);
      // Убираем класс и разблокируем скролл при размонтировании компонента
      document.body.classList.remove("home-page");
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="home">
      {/* Полноэкранная анимация */}
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
            className={`images-container ${showOverlayText ? "blur-images" : ""}`}
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
      <div className={`page-content ${showPageContent ? 'visible' : ''}`}>
        <div className="container">
          <section className="services-preview">
            <h2>Наші послуги</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Консультування</h3>
                <p>
                  Професійна підтримка та консультації від досвідчених
                  експертів
                </p>
              </div>
              <div className="service-card">
                <h3>Діагностика</h3>
                <p>Сучасні методи діагностики та аналізу</p>
              </div>
              <div className="service-card">
                <h3>Управління якістю</h3>
                <p>Комплексні рішення для забезпечення якості</p>
              </div>
            </div>
          </section>
          
          <section className="about-us">
            <h2>Про нас</h2>
            <p>
              Наша компанія спеціалізується на наданні послуг у сфері
              біотехнологій та управління якістю. Ми прагнемо до інновацій та
              високих стандартів у всіх наших проектах.
            </p>
          </section>

          <section className="why-choose-us">
            <h2>Чому обирають нас</h2>
            <div className="advantages-grid">
              <div className="advantage-item">
                <h3>🔬 Професійність</h3>
                <p>Команда досвідчених фахівців з багаторічним досвідом</p>
              </div>
              <div className="advantage-item">
                <h3>⚡ Швидкість</h3>
                <p>Оперативне виконання завдань та швидка подача результатів</p>
              </div>
              <div className="advantage-item">
                <h3>🎯 Точність</h3>
                <p>Високі стандарти якості та достовірність результатів</p>
              </div>
              <div className="advantage-item">
                <h3>🤝 Підтримка</h3>
                <p>Повний супровід проектів від початку до завершення</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
