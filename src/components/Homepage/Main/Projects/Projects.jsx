import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../../../assets/projects.json";
import "./Projects.css";

function Projects() {
  return (
    <section>
      <div>
        <ProjectCard projects={projectsData} />
      </div>
    </section>
  );
}

export default Projects;
