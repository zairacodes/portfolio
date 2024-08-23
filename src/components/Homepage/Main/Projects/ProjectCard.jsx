import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ projects }) {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`projectcard-container ${
            expandedId === project.id ? "expanded" : ""
          }`}
          onClick={() => setExpandedId(project.id)}
        >
          <img
            className="projectcard-image"
            src={project.image}
            alt={`${project.title} – Preview`}
          />
          <div className="content">
            <h3 className="projectcard-title">{project.title}</h3>
            <p className="projectcard-description">{project.description}</p>
            <p className="projectcard-link">
              <Link to={`projects/${project.id}`}>Read More</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
