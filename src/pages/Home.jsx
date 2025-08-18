import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import labLeft from "../assets/images/home-photo.jpg";
import labRight from "../assets/images/home-photo.jpg";
import scrollManager from "../utils/scrollManager";
import "../styles/scss/Home.scss";

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [showOverlayText, setShowOverlayText] = useState(false);
  const [showPageContent, setShowPageContent] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // Сразу прокручиваем в начало страницы при загрузке
    scrollManager.scrollToTop(false);

    // Добавляем класс home-page к body
    document.body.classList.add("home-page");

    if (isMobile) {
      // МОБИЛЬНАЯ АНИМАЦИЯ
      scrollManager.blockScroll();

      // 1. Показываем заголовок BIOSAFE сразу
      setShowTitle(true);

      // 2. Через 1.5 сек начинаем анимацию фото
      const startPhotoAnimation = setTimeout(() => {
        setAnimationStarted(true);
      }, 1200);

      // 3. Через 2 сек скрываем заголовок НАВСЕГДА
      const hideTitle = setTimeout(() => {
        setShowTitle(false);
      }, 1200);

      // 4. Через 3 сек показываем текст поверх фото
      const showText = setTimeout(() => {
        setShowOverlayText(true);
      }, 1500);

      // 5. Через 4 сек показываем контент и разрешаем скролл
      const showContent = setTimeout(() => {
        setShowPageContent(true);
        setAnimationComplete(true);
        scrollManager.unblockScroll();
      }, 1600);

      return () => {
        clearTimeout(startPhotoAnimation);
        clearTimeout(hideTitle);
        clearTimeout(showText);
        clearTimeout(showContent);
        document.body.classList.remove("home-page");
        scrollManager.unblockScroll();
      };
    } else {
      // ДЕСКТОПНАЯ АНИМАЦИЯ
      scrollManager.blockScroll();

      // Показываем заголовок сразу на десктопе
      setShowTitle(true);

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

      // Тайминги для десктопа
      const startPhotoAnimation = setTimeout(() => {
        setAnimationStarted(true);
      }, 600);

      const hideTitle = setTimeout(() => {
        setShowTitle(false);
      }, 1300);

      const unlockScroll = setTimeout(() => {
        setAnimationComplete(true);
        scrollManager.unblockScroll();
        // ВАЖНО: Удаляем обработчики событий после разблокировки
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        window.removeEventListener("keydown", preventKeyScroll);
      }, 1250);

      const showText = setTimeout(() => {
        setShowOverlayText(true);
      }, 1230);

      const showContent = setTimeout(() => {
        setShowPageContent(true);
      }, 1230);

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
    }
  }, []); // Убираем зависимости чтобы useEffect выполнился только один раз

  // Определяем мобильное устройство для рендера
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="home no-overflow" ref={homeRef}>
      {/* Первая секция - анимация */}
      <div className="fullscreen-animation">
        {showTitle && (
          <div className="biosafe-title">
            <h1>BIOSAFE</h1>
          </div>
        )}

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
            {isMobile ? (
              // Мобильная версия - одно фото
              <div className="mobile-photo">
                <img src={labLeft} alt="Laboratory" />
              </div>
            ) : (
              // Десктопная версия - диагональные половинки
              <>
                <div className="lab-half lab-left">
                  <img src={labLeft} alt="Laboratory Left Part" />
                </div>
                <div className="lab-half lab-right">
                  <img src={labRight} alt="Laboratory Right Part" />
                </div>
              </>
            )}
          </div>

          {/* Текст поверх картинок */}
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
        {/* Лозунг компанії */}
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
