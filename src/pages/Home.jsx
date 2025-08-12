import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import labLeft from "../assets/images/home-photo.jpg";
import labRight from "../assets/images/home-photo.jpg";
import scrollManager from "../utils/scrollManager";
import "../styles/scss/Home.scss";

const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showOverlayText, setShowOverlayText] = useState(false);
  const [showPageContent, setShowPageContent] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    // Сразу прокручиваем в начало страницы при загрузке
    scrollManager.scrollToTop(false);

    // Добавляем класс home-page к body
    document.body.classList.add("home-page");

    // Блокируем прокрутку на время анимации
    scrollManager.blockScroll();

    // Дополнительная защита от прокрутки
    const preventScroll = (e) => {
      if (!animationComplete) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const preventKeyScroll = (e) => {
      if (
        !animationComplete &&
        [32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)
      ) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll, false);

    // ЧЕТКИЙ РАСЧЕТ ВРЕМЕНИ ДЛЯ КАЖДОГО ЭЛЕМЕНТА:

    // 1. Начало анимации фото через 600ms - раньше!
    const startPhotoAnimation = setTimeout(() => {
      setAnimationStarted(true);
    }, 600);

    // 2. Скрытие заголовка BIOSAFE через 650ms
    const hideTitle = setTimeout(() => {
      setShowTitle(false);
    }, 650);

    // 3. Разблокировка скролла через 1250ms (еще раньше!)
    const unlockScroll = setTimeout(() => {
      setAnimationComplete(true);
      scrollManager.unblockScroll();
    }, 1250);

    // 4. Появление текста через 1300ms - ЕЩЕ БЫСТРЕЕ! (на половине анимации фото)
    const showText = setTimeout(() => {
      setShowOverlayText(true);
    }, 1230);

    // 5. Появление контента страницы через 1300ms
    const showContent = setTimeout(() => {
      setShowPageContent(true);
    }, 1230);

    // Очистка при размонтировании
    return () => {
      clearTimeout(startPhotoAnimation);
      clearTimeout(hideTitle);
      clearTimeout(unlockScroll);
      clearTimeout(showText);
      clearTimeout(showContent);

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);

      document.body.classList.remove("home-page");
      scrollManager.unblockScroll();
    };
  }, [animationComplete]);

  return (
    <div className="home no-overflow" ref={homeRef}>
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

          {/* Текст поверх картинок в верхней части */}
          <div className={`overlay-text ${showOverlayText ? "show" : ""}`}>
            <div className="intro-text">
              <p>
                Компанія має досвід у різних напрямах діяльності. Ми допомагаємо
                знаходити оптимальні рішення для розвитку бізнесу в сфері
                діагностики та управління якістю.
              </p>
            </div>

            {/* Блоки услуг */}
            <div className="services-links">
              <Link to="/consulting" className="service-link consulting-link">
                <div className="service-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <polyline points="2,17 12,22 22,17" />
                    <polyline points="2,12 12,17 22,12" />
                  </svg>
                </div>
                <h3>КОНСАЛТІНГ</h3>
                <p>
                  Послуги з консалтингу, бізнес-аналізу та впровадження систем
                  управління якістю
                </p>
              </Link>

              <Link to="/diagnostics" className="service-link diagnostics-link">
                <div className="service-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 11a3 3 0 0 1 6 0" />
                    <path d="M17.5 12.5a9 9 0 1 1-11 0" />
                    <path d="M12 3v2" />
                    <path d="M12 19v2" />
                    <path d="M5 12H3" />
                    <path d="M21 12h-2" />
                  </svg>
                </div>
                <h3>ДОСЛІДЖЕННЯ ТА ДІАГНОСТИКА</h3>
                <p>
                  Ветеринарні лабораторні дослідження відповідно до міжнародних
                  стандартів
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Контент после анимации */}
      <div className={`page-content ${showPageContent ? "visible" : ""}`}>
        {/* Лозунг компанії - повноширинный блок */}
        <div className="company-motto">
          <div className="motto-content">
            <h2>Ми працюємо для тих, хто цінує</h2>
            <div className="values-list">
              <span className="value-item">ефективність</span>
              <span className="value-item">точність</span>
              <span className="value-item">професійний розвиток</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
