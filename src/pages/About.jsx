import React from "react";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaLightbulb,
  FaTools,
  FaGithub,
} from "react-icons/fa";
import { FaLinkedin, FaMedium, FaReddit } from "react-icons/fa";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Me</h1>
        <p className="subtitle">
          Full-Stack Developer | Problem Solver | Tech Enthusiast
        </p>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/melek-elmay-321159278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://medium.com/@melek.elmay123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium className="social-icon" />
          </a>
          <a
            href="https://www.reddit.com/user/Electrical_Toe244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReddit className="social-icon" />
          </a>
          <a
            href="https://github.com/MelekElmayy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>
              <FaLaptopCode className="section-icon" /> My Journey
            </h2>
            <p>
              I'm Melek Elmay, a passionate developer who started learning JavaScript, HTML, and CSS on my own before joining RBK, one of the most prestigious academies in Tunisia. Through 1,300+ hours of intensive training, I developed strong technical skills and problem-solving abilities.
            </p>
            <p>
              What excites me most about development is solving complex problems and creating solutions that make a real impact. I approach every project with attention to detail and a commitment to writing clean, efficient code.
            </p>
          </div>
        </div>

        <div className="about-section">
          <div className="about-text">
            <h2>
              <FaGraduationCap className="section-icon" /> Education & Background
            </h2>
            <p>
              My training at RBK provided me with a comprehensive foundation in both backend and frontend development. I'm committed to continuous learning and staying current with the latest technologies in web development.
            </p>
            <p>
              Outside of coding, I enjoy playing volleyball, pool, watching movies, and spending time with friends. These activities help me maintain creativity and balance in my life.
            </p>
          </div>
        </div>

        <div className="about-section">
          <div className="about-text">
            <h2>
              <FaLightbulb className="section-icon" /> My Approach
            </h2>
            <p>I believe in building applications that are:</p>
            <ul className="approach-list">
              <li>
                <strong>User-Centered:</strong> Designed with the end-user always in mind
              </li>
              <li>
                <strong>Performant:</strong> Optimized for speed and efficiency
              </li>
              <li>
                <strong>Scalable:</strong> Built to grow with your needs
              </li>
              <li>
                <strong>Maintainable:</strong> Clean code that's easy to update
              </li>
            </ul>
          </div>
        </div>

        <div className="about-section">
          <div className="about-text">
            <h2>
              <FaTools className="section-icon" /> Beyond Coding
            </h2>
            <p>
              I'm passionate about sharing knowledge and actively contribute on Reddit, Medium, and LinkedIn. Collaborating with other developers and helping the community grow is something I truly value.
            </p>
            <p>
              Whether you're looking to build a new project, improve an existing one, or just connect with a fellow developer, I'd love to hear from you!
            </p>
            <a href="https://www.linkedin.com/in/melek-elmay-321159278/" className="btn">
              Get In Touch
            </a>
          </div> 
        </div>
      </section>
    </div>
  );
}

export default About;