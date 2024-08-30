import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; 2024 Zaira. All rights reserved •{" "}
        <Link to="/contact" aria-label="Contact page">
          Contact
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
