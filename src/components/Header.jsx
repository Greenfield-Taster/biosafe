import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../utils/routes";
import logo from "../assets/Logo-Biosafe.png";
import "../styles/components/Header.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <img src={logo} alt="BioSafe Logo" className="header__logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {NAVIGATION_ITEMS.map((item, index) => (
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
          className="header__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="header__mobile-toggle-line"></span>
          <span className="header__mobile-toggle-line"></span>
          <span className="header__mobile-toggle-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`header__mobile-nav ${
            isMobileMenuOpen ? "header__mobile-nav--open" : ""
          }`}
        >
          <ul className="header__mobile-nav-list">
            {NAVIGATION_ITEMS.map((item, index) => (
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
