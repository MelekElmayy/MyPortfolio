import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiShoppingCart,
  FiPackage,
  FiDollarSign,
  FiCode,
  FiTool
} from "react-icons/fi";

import "../assets/styling/ReduxReact.css";
import reduxCart from "../assets/PersonalProjects/redux-cart.gif";

function CartRedux() {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Redux Cart | My Portfolio";
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
      icon: <FiShoppingCart />,
      title: "Redux State Management",
      description: "Implemented Redux for efficient state management, providing better control and scalability for complex shopping cart functionality."
    },
    {
      icon: <FiPackage />,
      title: "Redux Toolkit Integration",
      description: "Used RTK to simplify Redux setup and reduce boilerplate code while maintaining all Redux benefits and best practices."
    },
    {
      icon: <FiDollarSign />,
      title: "Cart Logic Implementation",
      description: "Developed complex cart functionality including quantity updates, item removal, and total calculations with proper state management."
    },
    {
      icon: <FiTool />,
      title: "Debugging & DevTools",
      description: "Gained experience with Redux DevTools for time-travel debugging and action inspection, making state changes transparent and traceable."
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
          <h1>Redux Cart</h1>
          <p className="subtitle">
            A Redux-Powered Shopping Cart Implementation
          </p>
          <div className="tags">
            <span className="tag">Redux</span>
            <span className="tag">React</span>
            <span className="tag">RTK</span>
            <span className="tag">JavaScript</span>
          </div>
          <div className="project-links">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/MelekElmayy/Redux-Cart"
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
              src={reduxCart}
              alt="Redux Cart Demo"
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
                  This project focused on mastering Redux state management by building a fully functional shopping cart. 
                  Key implementations included Redux Toolkit (RTK) for streamlined store configuration, action creators 
                  for cart operations, and reducers to handle complex state transitions.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Technical Implementation</h3>
                <p>
                  Through this project, I gained deep understanding of Redux middleware, the importance of immutable updates, 
                  and best practices for structuring Redux applications.
                </p>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">Redux Toolkit</span> for streamlined setup
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Action Creators</span> for cart operations
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Reducers</span> for state transitions
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Middleware</span> for enhanced functionality
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Learning Outcomes</h3>
                <p>
                  Managed states with Redux, which was a whole different experience but also very productive. 
                  For me, it's a skill essential for larger projects that require more control over state management.
                </p>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">State Management</span> with Redux
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Immutable Updates</span> best practices
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Application Structure</span> for scalability
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Debugging Experience</h3>
                <p>
                  Gained valuable experience with Redux DevTools for time-travel debugging and action inspection, 
                  making state changes transparent and traceable throughout the development process.
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

export default CartRedux;