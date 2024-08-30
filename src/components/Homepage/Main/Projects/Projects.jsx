import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../../../assets/projects.json";
import "./Projects.css";

function Projects() {
  return (
    <section>
      <h2 className="projects-heading-sr">Projects</h2>
      <ProjectCard projects={projectsData} />
    </section>
  );
}

export default Projects;
