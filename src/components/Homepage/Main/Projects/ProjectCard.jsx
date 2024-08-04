import React from "react";

function ProjectCard({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="projectcard-container">
          <img
            className="projectcard-image"
            src={project.image}
            alt={`${project.title} – Preview`}
          />
          <h3 className="projectcard-title">{project.title}</h3>
          <p className="projectcard-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
