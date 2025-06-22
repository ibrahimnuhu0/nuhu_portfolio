import React from "react";
import "./Hero.css";
import profile from "/assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span>Ibrahim Nuhu</span></h1>
          <h2>Software Developer</h2>
          <p>I build modern, fast, and responsive web apps using React & JavaScript.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="assets/Resume.pdf" className="btn outline" download>Download Resume</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Ibrahim Nuhu" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
