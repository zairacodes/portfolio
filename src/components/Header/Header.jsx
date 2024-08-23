import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header" aria-label="Header section">
      <Link to="/" aria-label="Go to homepage">
        <div className="header-text">Zaira</div>
      </Link>
    </header>
  );
}

export default Header;
