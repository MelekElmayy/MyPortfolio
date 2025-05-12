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
        <h1>
          About <span>Me</span>
        </h1>
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
            href="https://github.com/MelekElmayy" // replace with your actual GitHub profile link
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
              I'm <span className="keyword">Melek Elmay</span>, I started
              learning <span> </span>
              <span className="keyword">JavaScript</span>,{" "}
              <span className="keyword">HTML</span>, and <span> </span>
              <span className="keyword">CSS</span> on my own for one year, then
              joined <span> </span>
              <span className="keyword">RBK</span>, one of the most prestigious
              academies in <span> </span>
              <span className="keyword">Tunisia</span>. I gained a lot of skills
              during my <span> </span>
              <span className="keyword">1,300+ hours of training</span>. I was
              introduced to a lot of valuable concepts, gained a lot of
              knowledge, and this made many things easier for me now.
            </p>
            <p>
              What excites me most about{" "}
              <span className="keyword">development</span> is solving{" "}
              <span> </span>
              <span className="keyword">complex problems</span> and creating
              solutions that make a <span> </span>
              <span className="keyword">real impact</span>. I approach every
              project with <span> </span>
              <span className="keyword">attention to detail</span> and a
              commitment to writing <span> </span>
              <span className="keyword">clean</span>,{" "}
              <span className="keyword">efficient code</span>.
            </p>
          </div>
        </div>

        <div className="about-section">
          <div className="about-text">
            <h2>
              <FaGraduationCap className="section-icon" /> Education &
              Background
            </h2>
            <p>
              My background in <span className="keyword">RBK</span> has given me
              a strong foundation in
              <span className="keyword">Backend</span> and{" "}
              <span className="keyword">Frontend</span>. I'm constantly learning
              new technologies and frameworks to stay at the forefront of{" "}
              <span className="keyword">web development</span>.
            </p>
            <p>
              When I'm not coding, you can find me
              <span className="keyword">Playing VolleyBall</span>,
              <span className="keyword">Pool</span>,
              <span className="keyword">watching a movie</span> or
              <span className="keyword">going out with my friends</span>. These
              activities help me maintain a creative and balanced approach to my
              work.
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
                <strong>User-Centered:</strong> Designed with the end-user
                always in mind
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
              I'm passionate about more than just{" "}
              <span className="keyword">writing code</span>. I actively
              contribute in <span className="keyword">Reddit</span>,{" "}
              <span className="keyword">Medium</span> and{" "}
              <span className="keyword">LinkedIn</span>. <span> </span>
              <span className="keyword">Sharing knowledge</span> and{" "}
              <span> </span>
              <span className="keyword">
                collaborating with other developers
              </span>{" "}
              is something I truly value.
            </p>

            <p>
              Whether you're looking to build a new project, improve an existing
              one, or just connect with a fellow developer, I'd love to hear
              from you!
            </p>
            <a href="/contact" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
