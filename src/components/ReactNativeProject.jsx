import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiFileText,
  FiTrendingUp,
  FiSmartphone,
  FiDatabase,
  FiUser,
  FiImage,
} from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

import "../assets/styling/Sponsofy.css";
import MulterGif from "../assets/PersonalProjects/Multer.gif";
import Criteria from "../assets/PersonalProjects/criteria-subcriteria.gif";
import ContractsDeals from "../assets/PersonalProjects/Contracts-Deal.gif";
import EditProfile from "../assets/PersonalProjects/EditPRofile.gif";
import SocialMediaStats from "../assets/PersonalProjects/SocialMediaStats.gif";
import TransationHistory from "../assets/PersonalProjects/TransactionHistory.gif";
import SignUp from "../assets/SignUP.gif";
import OnBoarding from "../assets/OnBoarding.gif";

function ReactNativeProject() {
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sponsofy | My Portfolio";
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
      icon: <FiUser />,
      title: "User Onboarding Implementation",
      description:
        "Designed and implemented the onboarding flow allowing users to choose between Company or Content Creator profiles with appropriate redirects to signup/login screens.",
    },
    {
      icon: <FaHandshake />,
      title: "Authentication System",
      description:
        "Built complete signup/login functionality for both Company and Content Creator profiles, including Multer integration for file uploads during registration.",
    },
    {
      icon: <FiFileText />,
      title: "Content Creator Profile Management",
      description:
        "Developed the complete profile system for content creators including editing capabilities, social media integration, and verification processes.",
    },
    {
      icon: <FiDatabase />,
      title: "Database Modeling & Relationships",
      description:
        "Designed and implemented the database schema with proper table relationships in collaboration with team members, ensuring data integrity and performance.",
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
          <h1>Sponsofy</h1>
          <p className="subtitle">
            Bridging content creators and brands through smart contracts and
            milestone-based collaborations
          </p>
          <div className="tags">
            <span className="tag">React Native</span>
            <span className="tag">Node.js</span>
            <span className="tag">MySQL</span>
            <span className="tag">Express.js</span>
            <span className="tag">Auth0</span>
            <span className="tag">Sequelize</span>
            <span className="tag">Axios</span>
          </div>
          <div className="project-links">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/final-project-teams/Sponsofy"
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
              src={OnBoarding}
              alt="Sponsofy App Demo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
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
          <h2 className="section-title">Features & Implementation</h2>
          <div className="challenges-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>User Onboarding</h3>
                <p>
                  The onboarding allows users to choose between creating a
                  Company Profile or a Content Creator Profile, with appropriate
                  redirects to specialized signup and login screens.
                </p>
                <img
                  src={OnBoarding}
                  alt="User Onboarding"
                  className="feature-gif"
                />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Sign Up / Login – Company & Content Creator</h3>
                <p>
                  Implemented complete authentication flow from frontend to
                  backend, including Multer functionality for file uploads
                  during signup.
                </p>
                <img
                  src={SignUp}
                  alt="Sign Up Process"
                  className="feature-gif"
                />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Criteria & SubCriteria Selection</h3>
                <p>
                  Implemented both frontend and backend for selecting criteria
                  and subcriteria, creating a structured system for matching
                  creators with appropriate brands.
                </p>
                <img
                  src={Criteria}
                  alt="Criteria Selection"
                  className="feature-gif"
                />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Contracts & Deals Management</h3>
                <p>
                  Developed a system for content creators to receive, review,
                  accept, or deny deals and contracts, with complete information
                  visibility before signing.
                </p>
                <img
                  src={ContractsDeals}
                  alt="Contracts and Deals"
                  className="feature-gif"
                />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Transaction History</h3>
                <p>
                  Created a comprehensive transaction tracking system allowing
                  content creators to monitor their income and maintain payment
                  records.
                </p>
                <img
                  src={TransationHistory}
                  alt="Transaction History"
                  className="feature-gif"
                />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Profile Editing</h3>
                <p>
                  Implemented profile editing functionality allowing content
                  creators to update their information, making it visible to
                  companies and reflecting their niche expertise.
                </p>
                <img
                  src={EditProfile}
                  alt="Profile Editing"
                  className="feature-gif"
                />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Social Media Analytics Integration</h3>
                <p>
                  Developed a system for content creators to add follower
                  counts, views, likes, and post analytics from various social
                  platforms, with verification processes for companies and
                  admins.
                </p>
                <img
                  src={SocialMediaStats}
                  alt="Social Media Analytics"
                  className="feature-gif"
                />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Image Upload with Multer</h3>
                <p>
                  Implemented Multer for efficient image upload and deletion
                  functionality, providing a seamless media management
                  experience for users.
                </p>
                <img
                  src={MulterGif}
                  alt="Image Upload with Multer"
                  className="feature-gif"
                />
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

export default ReactNativeProject;
