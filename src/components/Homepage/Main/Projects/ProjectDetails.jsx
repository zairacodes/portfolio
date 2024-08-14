import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.details}</p>
      <img src={`/images/project${id}.png`} alt={project.title} />
    </div>
  );
}

export default ProjectDetails;
