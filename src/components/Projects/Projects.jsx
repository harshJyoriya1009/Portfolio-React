import React from "react";
import "./Projects.css";
import project from "../../assets/project";

const Projects = () => {
  return (
    <>
      <div id="projects" className="project">
        <div className="project-title">
          <h1>Projects</h1>
        </div>
        <div className="project-container">
          {project.map((project, index) => {
            return <img key={index} src={project.p_img} alt="" />;
          })}
        </div>
        <div className="project-showmore">
          <p>More</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
