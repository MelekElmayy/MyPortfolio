import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiLayout,
  FiDatabase,
  FiCpu,
  FiCode,
  FiServer
} from "react-icons/fi";

import "../assets/styling/ComfyStore.css";
import CompfyGIF from "../assets/PersonalProjects/Compfy-store.gif";

function ComfyStore() {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfyStore | My Portfolio";
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
      icon: <FiLayers />,
      title: "Redux State Management",
      description: "Implemented Redux Toolkit for efficient state management, providing better control and scalability for larger projects."
    },
    {
      icon: <FiLayout />,
      title: "Responsive Design",
      description: "Used Tailwind CSS and DaisyUI to create a modern, responsive design that works seamlessly across all device sizes."
    },
    {
      icon: <FiDatabase />,
      title: "React Query Integration",
      description: "Leveraged React Query for efficient data fetching and caching, eliminating page loading delays and improving user experience."
    },
    {
      icon: <FiServer />,
      title: "Strapi Backend Integration",
      description: "Integrated Strapi headless CMS for content management, utilizing its ready-to-use API endpoints and structured JSON responses."
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
          <h1>ComfyStore</h1>
          <p className="subtitle">
            Modern e-commerce application built with React and modern web technologies
          </p>
          <div className="tags">
            <span className="tag">Redux</span>
            <span className="tag">React Router</span>
            <span className="tag">RTK</span>
            <span className="tag">Axios</span>
            <span className="tag">React Query</span>
            <span className="tag">DaisyUI</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Strapi</span>
          </div>
          <div className="project-links">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/MelekElmayy/Compfy-Store"
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
              src={CompfyGIF}
              alt="ComfyStore Demo"
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
                  When I started learning more about React JS, my goal was to build
                  cleaner, faster, and more scalable apps. I wanted to master modern
                  tools and techniques that would enhance my development workflow.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Technology Stack</h3>
                <p>
                  I picked up tools like Redux Toolkit (RTK) for state management and
                  React Router 6.4+ to handle navigation better. I used Axios and
                  React Query to make data fetching easier and more efficient.
                </p>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">Redux Toolkit</span> for state management
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">React Router 6.4+</span> for navigation
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Axios</span> for API requests
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">React Query</span> for data caching
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Styling Approach</h3>
                <p>
                  For styling, I wanted something fast and responsive, so I went with
                  Tailwind CSS and DaisyUI. This combination helped me generate a modern
                  design and opened my mind to other technologies.
                </p>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">Tailwind CSS</span> for utility-first styling
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">DaisyUI</span> for component library
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Responsive Design</span> for all devices
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Backend Integration</h3>
                <p>
                  I tried Strapi to learn how to work with a headless CMS and used a
                  modular file structure to keep things organized as projects grew.
                </p>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">Strapi CMS</span> for content management
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Modular Architecture</span> for scalability
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">API Integration</span> with structured JSON
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Development Experience</h3>
                <p>
                  This project took me exactly 3 weeks to finish, investing about 6 hours daily.
                  I struggled a bit with authentication in Strapi, taking a day and a half to
                  solve the bugs. The rest was a rich experience where I learned a lot about
                  Tailwind CSS and all the React technologies mentioned above.
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

export default ComfyStore;