import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo-Biosafe.png";
import "../styles/components/Header.scss";

// Основная навигация
const NAVIGATION_ITEMS = [
  { path: "/", name: "Головна" },
  { path: "/consulting", name: "Консалтинг" },
  { path: "/diagnostics", name: "Діагностика" },
  { path: "/help", name: "Допомога" },
  { path: "/contact", name: "Контакти" },
];

const Header = ({ isHomePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(!isHomePage);
  const location = useLocation();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Показываем хедер на главной странице
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isHomePage) {
      if (isMobile) {
        setShowHeader(false);
        const timer = setTimeout(() => {
          setShowHeader(true);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setShowHeader(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      setShowHeader(true);
    }
  }, [isHomePage]);

  // Закрытие мобильного меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  // Проверяем, находимся ли мы на странице консалтинга или её подстраницах
  const isConsultingPage = location.pathname.startsWith("/consulting");

  // Создаем расширенную навигацию для страницы консалтинга
  const getNavigationItems = () => {
    if (isConsultingPage) {
      // Находим индекс элемента "Консалтинг"
      const consultingIndex = NAVIGATION_ITEMS.findIndex(
        (item) => item.path === "/consulting"
      );

      // Создаем новый массив с вставкой подстраниц после консалтинга
      const newItems = [...NAVIGATION_ITEMS];
      newItems.splice(
        consultingIndex + 1,
        0,
        { path: "/consulting/consultants", name: "Консультанти" },
        {
          path: "/consulting/request-consultation",
          name: "Замовити консультацію",
        }
      );

      return newItems;
    }
    return NAVIGATION_ITEMS;
  };

  const navigationItems = getNavigationItems();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className={`header ${
        isHomePage ? (showHeader ? "header--show" : "header--hidden") : ""
      }`}
    >
      <div className="header__container container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <img src={logo} alt="BioSafe Logo" className="header__logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navigationItems.map((item, index) => (
              <li key={index} className="header__nav-item">
                <Link
                  to={item.path}
                  className={`header__nav-link ${
                    isActive(item.path) ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`header__mobile-toggle ${
            isMobileMenuOpen ? "header__mobile-toggle--open" : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="header__mobile-toggle-line"></span>
          <span className="header__mobile-toggle-line"></span>
          <span className="header__mobile-toggle-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav
          ref={mobileMenuRef}
          className={`header__mobile-nav ${
            isMobileMenuOpen ? "header__mobile-nav--open" : ""
          }`}
        >
          <ul className="header__mobile-nav-list">
            {navigationItems.map((item, index) => (
              <li key={index} className="header__mobile-nav-item">
                <Link
                  to={item.path}
                  className="header__mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
