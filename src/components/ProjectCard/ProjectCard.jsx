import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, techStack, image, liveLink, codeLink }) => {
  return (
    <div className="project-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
          <ul>
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
            <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
