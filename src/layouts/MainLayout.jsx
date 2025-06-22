// File: src/layouts/MainLayout.jsx

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import Footer from "../components/Footer/Footer";
import "../assets/styles/base.css";
import "../assets/styles/globals.css";

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState("light");

 
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (systemDark ? "dark" : "light");
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-wrapper">
      <header className="layout-header">
        <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
      </header>

      <main>{children}</main>

      <Footer /> 
    </div>
  );
};

export default MainLayout;
