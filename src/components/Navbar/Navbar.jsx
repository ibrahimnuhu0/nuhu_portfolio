// File: src/components/Navbar/Navbar.jsx
import React from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = ({ currentTheme, toggleTheme }) => {
  return (
    <header className="navbar" id="navbar">
      <div className="container">
        <div className="logo">
          <a href="#hero">Nuhu.dev</a>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="toggle-wrapper">
          <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;  // ← Make sure this line is present
