import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Hi! I'm Ibrahim Nuhu, a passionate Front-End Developer specializing in
          building modern, fast, and responsive web applications using React
          and JavaScript. I enjoy creating clean, user-friendly interfaces and
          bringing designs to life.
        </p>
        <h3 className="skills-title">My Skills</h3>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Responsive Web Design</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
