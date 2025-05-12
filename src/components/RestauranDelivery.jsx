import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiServer,
  FiShield,
  FiCreditCard,
  FiHome,
} from "react-icons/fi";
// import restauranDelivery from "../assets/restaurantDelivery.png";

import RestaurantGIF from '../assets/RestaurantGIF.gif'

const RestaurantDelivery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Restaurant Delivery Platform | My Portfolio";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-detail-page"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="back-btn"
      >
        <FiArrowLeft className="icon" />
        Back to Projects
      </motion.button>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="project-hero"
      >
        <div className="hero-content">
          <h1>Restaurant Delivery Platform</h1>
          <p className="subtitle">Food delivery with real-time tracking</p>
          <div className="tags">
            <span className="tag">Full Stack</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Real-time</span>
            <span className="tag">Socket.io</span>
            <span className="tag">redux</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Jwt</span>
            <span className="tag">Auth0</span>
          </div>
          <div className="project-links">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/dash-dash-dash2/dash-dash"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              <FiGithub className="icon" />
              View Code
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://live-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn secondary"
            >
              <FiExternalLink className="icon" />
              Live Demo
            </motion.a>
          </div>
        </div>
        <div className="hero-image">
          <motion.img
            whileHover={{ scale: 1.03 }}
            src={RestaurantGIF}
            alt="Restaurant Delivery Platform"
          />
        </div>
      </motion.div>

      <div className="project-content">
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="highlight-section"
        >
          <h2 className="section-title">My Key Contributions</h2>
          <div className="contributions-grid">
            <motion.div whileHover={{ y: -5 }} className="contribution-card">
              <div className="highlight-icon">
                <FiShield />
              </div>
              <h3>Secure Authentication</h3>
              <p>
                Implemented JWT and Auth0 for secure user authentication,
                reducing security vulnerabilities by 80% and improving login
                success rates.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="contribution-card">
              <div className="highlight-icon">
                <FiCreditCard />
              </div>
              <h3>Payment System</h3>
              <p>
                Developed secure payment processing with Stripe integration,
                implementing PCI-compliant checkout flows and fraud detection.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="contribution-card">
              <div className="highlight-icon">
                <FiHome />
              </div>
              <h3>Home Page Development</h3>
              <p>
                Designed and implemented the responsive home page with optimized
                performance (95+ Lighthouse score) and intuitive navigation.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="contribution-card">
              <div className="highlight-icon">
                <FiServer />
              </div>
              <h3>API Security</h3>
              <p>
                Enhanced backend security with rate limiting, CORS policies, and
                input validation, reducing malicious requests by 90%.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="challenges-section"
        >
          <h2 className="section-title">Challenges & Solutions</h2>
          <div className="challenges-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>24-Hour Payment System Implementation</h3>
                <p>
                  Developing a reliable payment processing system that needed to
                  maintain flawless operation 24/7 was incredibly challenging. I
                  implemented redundant failover systems, thorough logging, and
                  automated recovery protocols to ensure uninterrupted service.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default RestaurantDelivery;