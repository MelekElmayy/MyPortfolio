import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';

function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p className="subtitle">Explore my work in different categories</p>

      <div className="projects-choices">
        {/* Academic Projects Option */}
        <Link to="/projects/academic" className="project-choice academic">
          <div className="choice-content">
            <FaGraduationCap className="choice-icon" />
            <h2>Academic Learning Projects</h2>
            <p>Coursework, research projects, and educational experiments</p>
          </div>
        </Link>

        {/* Personal Projects Option */}
        <Link to="/projects/personal" className="project-choice personal">
          <div className="choice-content">
            <FaUserTie className="choice-icon" />
            <h2>Personal Projects</h2>
            <p>Independent work, passion projects, and self-directed learning</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;