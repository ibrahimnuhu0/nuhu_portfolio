import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm Ibrahim Nuhu, a dedicated Software Developer with a strong focus on building modern, scalable, and user-friendly web applications. 
          My expertise spans across front-end technologies like React and JavaScript, as well as back-end tools including Node.js and Express.
        </p>
        <p className="about-text">
          I enjoy turning complex problems into intuitive digital experiences, and I’m constantly learning new technologies to sharpen my craft. 
          Whether collaborating in a team or working independently, I bring a proactive mindset and a deep passion for technology.
        </p>
        <p className="about-text">
          I'm currently open to internship and entry-level roles in software development, and I’m excited to contribute to impactful projects.
        </p>
      </div>
    </section>
  );
};

export default About;
