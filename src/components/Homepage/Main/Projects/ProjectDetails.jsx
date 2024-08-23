import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./Projects.css";

function ProjectDetails({ projects }) {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <p className="not-found" role="alert">
        Oops! Project not found...
      </p>
    );
  }

  return (
    <div className="projectdetails-container">
      <h1 className="projectdetails-title">{project.title}</h1>
      <p className="projectdetails-description">{project.description}</p>
      <div className="projectdetails-details">
        <ReactMarkdown children={project.details} />
      </div>
      <img
        className="projectdetails-image"
        src={`/images/project${id}.png`}
        alt={project.title}
      />
      <div className="projectdetails-banner">
        <ReactMarkdown children={project.banner} />
      </div>
    </div>
  );
}

export default ProjectDetails;
