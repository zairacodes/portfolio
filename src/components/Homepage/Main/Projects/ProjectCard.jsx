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
          aria-expanded={expandedId === project.id}
        >
          <img
            className="projectcard-image"
            src={project.image}
            alt={`${project.title} – Preview`}
          />
          <Link to={`projects/${project.id}`}>
            <div className="content">
              <h3 className="projectcard-title">{project.title}</h3>
              <p className="projectcard-description">{project.description}</p>
              <p className="projectcard-readmore">Read More</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
