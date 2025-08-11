import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo-Biosafe.png";
import "../styles/components/Footer.scss";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      setShowFooter(false);
      const timer = setTimeout(() => {
        setShowFooter(true);
      }, 6000);
      return () => clearTimeout(timer);
    } else {
      setShowFooter(true);
    }
  }, [isHomePage]);
  if (!showFooter) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-column">
          <div className="footer__logo">
            <img src={logo} alt="Biosafe" />
          </div>
        </div>

        <div className="footer__contact-column">
          <div className="footer__contact">
            <div className="footer__contact-item">
              <span>📞</span>
              <span>+380 67 184 4044</span>
            </div>
            <div className="footer__contact-item">
              <span>✉️</span>
              <span>office@biosafe.ltd</span>
            </div>
          </div>
        </div>

        <div className="footer__links-column">
          <div className="footer__links">
            <ul>
              <li>
                <Link to="/help">Центр допомоги</Link>
              </li>
              <li>
                <Link to="/contact">Зв'язатися з нами</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <div className="footer__licenses">
            <p>Ліцензія № 411 від 14.06.2024 | № 23 від 14.01.2025</p>
            <p>
              Сертифікат ДСТУ EN ISO 9001:2018 від 20.06.2024р. №UA.MS/528-24
            </p>
          </div>
          <div className="footer__copyright">
            <p>© 2025 Biosafe. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
