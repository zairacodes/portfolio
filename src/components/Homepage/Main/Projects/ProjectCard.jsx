import React from "react";
import projects from "../../../../assets/projects.json";

function ProjectCard() {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={`${project.title} – Preview`} />
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
