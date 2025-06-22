import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../assets/data/projects.json";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
