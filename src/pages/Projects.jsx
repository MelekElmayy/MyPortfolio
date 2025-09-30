import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaUserTie, FaBriefcase } from "react-icons/fa";
import "../assets/styling/Projects.css";

function Projects() {
  // Azure blue color
  const azureBlue = "#0078D4";

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="subtitle">Explore my work in different categories</p>

      <div className="projects-choices">
        {/* Academic Projects Option */}
        <Link to="/projects/academic" className="project-choice academic">
          <div className="choice-content">
            <div className="project-icon-label">
              <FaGraduationCap className="choice-icon" color={azureBlue} />
              <span className="icon-label" style={{ color: azureBlue }}>
                Academic
              </span>
            </div>
            <h2>Academic Learning Projects</h2>
            <p>Coursework, research projects, and educational experiments</p>
          </div>
        </Link>

        {/* Personal Projects Option */}
        <Link to="/projects/personal" className="project-choice personal">
          <div className="choice-content">
            <div className="project-icon-label">
              <FaUserTie className="choice-icon" color={azureBlue} />
              <span className="icon-label" style={{ color: azureBlue }}>
                Personal
              </span>
            </div>
            <h2>Personal Projects</h2>
            <p>
              Independent work, passion projects, and self-directed learning
            </p>
          </div>
        </Link>

      
      </div>
    </div>
  );
}

export default Projects;
