import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../../../assets/projects.json";

function Projects() {
  return (
    <section className="projects-container">
      <div>
        <ProjectCard projects={projectsData} />
      </div>
    </section>
  );
}

export default Projects;
