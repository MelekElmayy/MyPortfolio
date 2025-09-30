import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiDollarSign,
  FiCreditCard,
  FiPieChart,
  FiCode
} from "react-icons/fi";

import '../assets/styling/Bankist.css';
import BankistGif from '../assets/PersonalProjects/Bankist.gif';

function Bankist() {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bankist | My Portfolio";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setShowBackButton(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contributions = [
    {
      icon: <FiDollarSign />,
      title: "Transaction Processing",
      description: "Implemented financial transaction logic using array methods (filter, map, reduce) for accurate balance calculations and transaction history."
    },
    {
      icon: <FiCreditCard />,
      title: "DOM Manipulation",
      description: "Created dynamic UI updates through vanilla JavaScript DOM manipulation, providing real-time feedback for user actions."
    },
    {
      icon: <FiPieChart />,
      title: "Data Visualization",
      description: "Developed custom data visualization for financial information using CSS animations and transitions."
    },
    {
      icon: <FiCode />,
      title: "Vanilla JavaScript",
      description: "Built the entire application without frameworks, demonstrating mastery of core JavaScript concepts and modern ES6+ features."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-detail-page"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="project-hero"
      >
        <div className="hero-content">
          <h1>Bankist App</h1>
          <p className="subtitle">
            Modern banking interface built with vanilla JavaScript
          </p>
          <div className="tags">
            <span className="tag">JavaScript</span>
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">DOM Manipulation</span>
          </div>
          <div className="project-links">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/MelekElmayy/Bankist"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn primary"
            >
              <FiGithub className="icon" />
              View Code
            </motion.a>
          </div>
        </div>
        <div className="hero-image">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="image-placeholder"
          >
            <img
              src={BankistGif}
              alt="Bankist App Demo"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Contributions Section */}
      <section className="contributions-section">
        <div className="container">
          <h2 className="section-title">My Key Contributions</h2>
          <div className="contributions-grid">
            {contributions.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="contribution-card"
              >
                <div className="highlight-icon">{contribution.icon}</div>
                <h3>{contribution.title}</h3>
                <p>{contribution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="challenges-section">
        <div className="container">
          <h2 className="section-title">Implementation Details</h2>
          <div className="challenges-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Project Goals</h3>
                <p>
                  The goal was to utilize my vanilla JavaScript knowledge to its fullest potential. 
                  I started this project before my academic training but completed it afterward, 
                  gaining a new appreciation for modern frontend frameworks by contrast.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>JavaScript Implementation</h3>
                <p>
                  This application was built entirely with vanilla JavaScript and CSS, demonstrating modern 
                  front-end capabilities without relying on frameworks.
                </p>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">DOM manipulation</span> for dynamic content updates
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Array methods</span> for transaction processing
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Date handling</span> for transaction timelines
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Form validation</span> and error handling
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>CSS Implementation</h3>
                <p>
                  The styling was implemented with modern CSS techniques to create an engaging user experience.
                </p>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">Custom animations</span> for UI feedback
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Flexbox</span> for responsive layout
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Smooth transitions</span> between states
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Modal windows</span> with overlay effects
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Learning Experience</h3>
                <p>
                  Working on this project was a fun experience that reinforced my understanding of JavaScript 
                  fundamentals like closures, higher-order functions, and other core concepts that form the 
                  foundation of modern web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button - Only shows when at bottom of page */}
      {showBackButton && (
        <motion.button
          className="back-btn"
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowLeft className="icon" />
          Back to Projects
        </motion.button>
      )}
    </motion.div>
  );
}

export default Bankist;