import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../utils/routes";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">BioSafe</Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {NAVIGATION_ITEMS.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="header__nav-link">
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