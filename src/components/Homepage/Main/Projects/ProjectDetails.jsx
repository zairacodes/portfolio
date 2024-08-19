import React from "react";
import { useParams } from "react-router-dom";
import "./Projects.css";

function ProjectDetails({ projects }) {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="projectdetails-container">
      <h1 className="projectdetails-title">{project.title}</h1>
      <p className="projectdetails-description">{project.description}</p>
      <p className="projectdetails-details">{project.details}</p>
      <img
        className="projectdetails-image"
        src={`/images/project${id}.png`}
        alt={project.title}
      />
    </div>
  );
}

export default ProjectDetails;
