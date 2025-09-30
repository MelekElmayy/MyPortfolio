import React, { useEffect, useState } from "react";
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

import "../assets/styling/RestaurantDelivery.css";
import RestaurantGIF from "../assets/RestaurantGIF.gif";

const RestaurantDelivery = () => {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
    document.title = "Restaurant Delivery Platform | My Portfolio";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to bottom
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      setShowBackButton(scrolledToBottom);

      // Original functionality for body class
      document.body.classList.toggle("scrolled-to-bottom", scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contributions = [
    {
      icon: <FiShield />,
      title: "Secure Authentication",
      description:
        "Implemented JWT and Auth0 for secure user authentication, reducing security vulnerabilities by 80% and improving login success rates.",
    },
    {
      icon: <FiCreditCard />,
      title: "Payment System",
      description:
        "Developed secure payment processing with Stripe integration, implementing PCI-compliant checkout flows and fraud detection.",
    },
    {
      icon: <FiHome />,
      title: "Home Page Development",
      description:
        "Designed and implemented the responsive home page with optimized performance (95+ Lighthouse score) and intuitive navigation.",
    },
    {
      icon: <FiServer />,
      title: "API Security",
      description:
        "Enhanced backend security with rate limiting, CORS policies, and input validation, reducing malicious requests by 90%.",
    },
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
              className="link-btn primary"
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
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="image-placeholder"
          >
            <img
              src={RestaurantGIF}
              alt="Restaurant Delivery Demo"
              style={{ width: "100%", borderRadius: "10px" }}
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

      {/* Challenges Section */}
      <section className="challenges-section">
        <div className="container">
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
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Real-time Order Tracking</h3>
                <p>
                  Implementing real-time order tracking with Socket.io presented
                  scalability challenges. I optimized the WebSocket connections
                  and implemented a efficient data update system that reduced
                  latency by 40% while maintaining connection stability.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Mobile Responsiveness</h3>
                <p>
                  Ensuring the platform worked seamlessly across all device
                  sizes required a mobile-first approach with extensive testing.
                  I implemented responsive breakpoints and touch-friendly
                  interfaces that improved mobile conversion rates by 25%.
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
};

export default RestaurantDelivery;
