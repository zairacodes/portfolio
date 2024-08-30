import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header" aria-label="Header section">
      <Link to="/" aria-label="Go to homepage">
        <img className="logo" src="/z_logo.png" alt="Zaira's logo"></img>
      </Link>
    </header>
  );
}

export default Header;
