import React from 'react';
import BankistGif from '../assets/PersonalProjects/Bankist.gif';
import '../assets/styling/Bankist.css'; // Assume you'll create this CSS file
import { FaGithub } from 'react-icons/fa'; // Importing GitHub icon from react-icons

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

function Bankist() {
         const navigate = useNavigate();
  
  return (
    <div className="bankist-container">

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
      <div className="bankist-content">
        <div className="bankist-text">
          <h1>Bankist App</h1>
          <div className="goals-section">
            <h2>Goals</h2>
            <p>the goal was to use most of what I have learned with javascript, the vanilla javascript.
              I worked on this project right before joining my academic training but didnt finish it. 
              after learning about react, I realised the power of the techs that come to make a revolution 
              in the frontend word. it was a fun experience, reminded me of my lectures about closures , and higher order functions and so
              on. 
            </p>
            <a 
              href="https://github.com/MelekElmayy/Bankist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

          <div className="implementation-section">
            <h2>Implementation Highlights</h2>
            <p>
              This application was built entirely with vanilla JavaScript and CSS, demonstrating modern 
              front-end capabilities without relying on frameworks.
            </p>
            
            <h3>JavaScript Features:</h3>
            <ul>
              <li>DOM manipulation for dynamic content updates</li>
              <li>Array methods for transaction processing (filter, map, reduce)</li>
              <li>Date handling for transaction timelines</li>
              <li>Form validation and error handling</li>
            </ul>

            <h3>CSS Techniques:</h3>
            <ul>
              <li>Custom animations for UI feedback</li>
              <li>Flexbox for responsive layout</li>
              <li>Smooth transitions between application states</li>
              <li>Modal windows with overlay effects</li>
              <li>Custom styling for data visualization</li>
            </ul>
          </div>
        </div>

        <div className="bankist-visual">
          <img 
            src={BankistGif} 
            alt="Bankist App Demonstration" 
            className="bankist-gif"
          />
          <p className="gif-caption">Demonstration of Bankist app functionality</p>
        </div>
      </div>
    </div>
  );
}

export default Bankist;