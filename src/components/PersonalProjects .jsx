import React from 'react';
import { useNavigate } from 'react-router-dom';
import chatIO from '../assets/PersonalProjects/chat.io.gif';
import Bankist from '../assets/PersonalProjects/Bankist.gif';
import CompfyStore from '../assets/PersonalProjects/Compfy-store.gif';
import reduxCart from '../assets/PersonalProjects/redux-cart.gif';

import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";




function PersonalProjects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'chat-io',
      title: 'Real Time/Appwrite',
      description: 'A Real Time chatting Application.',
      gif: chatIO,
    },
    {
      id: 'bankist',
      title: 'Only Javascript',
      description: 'A pure JavaScript banking interface with smooth animations and DOM manipulation.',
      gif: Bankist,
    },
    {
      id: 'compfy-store',
      title: 'React/Redux',
      description: 'An e-commerce React application with Redux for state management and product filtering.',
      gif: CompfyStore,
    },
    {
      id: 'redux-cart',
      title: 'Redux Shopping Cart',
      description: 'A simple shopping cart implementation demonstrating Redux state management fundamentals.',
      gif: reduxCart,
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="personal-projects-container">

      
       <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="back-btn"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: '#f5f5f5',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          zIndex: 100
        }}
      >
        <FiArrowLeft className="icon" />
        Back to Projects
      </motion.button>
      <h1 className="projects-title">My Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="gif-container">
              <img src={project.gif} alt={project.title} className="project-gif" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalProjects;