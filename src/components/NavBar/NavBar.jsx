import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link">
        <span className="nav-link-title">🍿H</span>
        <span className="nav-link-title">e</span>
        <span className="nav-link-title">n</span>
        <span className="nav-link-title">r</span>
        <span className="nav-link-title">y</span>
        <span className="nav-link-title">F</span>
        <span className="nav-link-title">l</span>
        <span className="nav-link-title">i</span>
        <span className="nav-link-title">x🍿</span>
      </Link>
      <Link to="/favorites" className="nav-link nav-link-fav">
        <i class="fa-solid fa-heart-circle-check"></i>
      </Link>
      <a href="#" className="nav-link nav-link-linkedin">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="#" className="nav-link nav-link-github">
        <i class="fa-brands fa-github"></i>
      </a>
    </nav>
  );
}
