import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiMessageSquare,
  FiUsers,
  FiClock,
  FiSmartphone,
  FiShield
} from "react-icons/fi";

import "../assets/styling/chatIO.css";
import chatIOGif from "../assets/PersonalProjects/chat.io.gif";

function ChatIO() {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ChatIO | My Portfolio";
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
      icon: <FiMessageSquare />,
      title: "Real-time Messaging",
      description: "Implemented real-time chat functionality using Appwrite's subscription system, enabling instant message delivery across multiple chat rooms."
    },
    {
      icon: <FiUsers />,
      title: "User Authentication",
      description: "Developed secure user authentication system with Appwrite, ensuring proper user management and session handling."
    },
    {
      icon: <FiClock />,
      title: "Online Presence",
      description: "Created user presence indicators to show who's currently online, enhancing the real-time chat experience."
    },
    {
      icon: <FiShield />,
      title: "Appwrite Integration",
      description: "Successfully integrated Appwrite backend services for database, authentication, and real-time functionality."
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
          <h1>ChatIO</h1>
          <p className="subtitle">
            Real-time chat application with React and Appwrite
          </p>
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">Appwrite</span>
            <span className="tag">CSS</span>
            <span className="tag">Real Time</span>
          </div>
          <div className="project-links">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/MelekElmayy/chat_tut"
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
              src={chatIOGif}
              alt="ChatIO Demo"
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
                <h3>Learning Appwrite</h3>
                <p>
                  I discovered Appwrite through tutorial videos and was impressed by its capabilities 
                  as a backend solution. I decided to explore it further by building a real project.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Real-time Implementation</h3>
                <p>
                  Establishing real-time connections using <code>client.subscribe()</code> and setting up 
                  channels with Appwrite's database collections was surprisingly straightforward to implement.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>React.js Expertise</h3>
                <p>
                  Having prior experience with React.js made the frontend development process smooth and efficient, 
                  allowing me to focus on implementing the real-time functionality.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Key Features</h3>
                <div className="features-grid">
                  <div className="feature-card">
                    <span className="feature-highlight">User authentication</span> 
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Multiple chat rooms</span>
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Online user presence</span>
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Responsive design</span> 
                  </div>
                  <div className="feature-card">
                    <span className="feature-highlight">Message timestamps</span> 
                  </div>
                </div>
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

export default ChatIO;