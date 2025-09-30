import React from "react";
import { Link } from "react-router-dom";
import {
  FaNode,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiJquery,
  SiPrisma,
  SiSequelize,
  SiMongoose,
  SiMongodb,
} from "react-icons/si";

function Home() {
  // Azure blue color (#0078D4)
  const azureBlue = "#0078D4";

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          Hi, I'm <span>Melek Elmay</span>
        </h1>
        <h2>A Full-Stack Developer</h2>
        <p>I build complete web applications from frontend to backend.</p>
        <Link to="/projects" className="btn">
          View My Work
        </Link>
      </section>

      {/* Introduction */}
      <section className="intro">
        <h3>About Me</h3>
        <p>
          I'm a Full-Stack JavaScript developer with expertise in both frontend
          and backend technologies. I specialize in building responsive,
          performant web applications with modern frameworks.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h3>My Technical Stack</h3>

        {/* Frontend Skills */}
        <div className="skills-group">
          <h4>Frontend Technologies</h4>
          <div className="skills-list">
            <div className="skill-item">
              <FaHtml5 color={azureBlue} title="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <FaJs color={azureBlue} title="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <FaReact color={azureBlue} title="React" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <SiTypescript color={azureBlue} title="TypeScript" />
              <span>TypeScript</span>
            </div>
            <div className="skill-item">
              <SiNextdotjs color={azureBlue} title="Next.js" />
              <span>Next.js</span>
            </div>
            <div className="skill-item">
              <SiTailwindcss color={azureBlue} title="Tailwind CSS" />
              <span>Tailwind CSS</span>
            </div>
            <div className="skill-item">
              <SiJquery color={azureBlue} title="jQuery" />
              <span>jQuery</span>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-group">
          <h4>Backend Technologies</h4>
          <div className="skills-list">
            <div className="skill-item">
              <FaNode color={azureBlue} title="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <SiExpress color={azureBlue} title="Express.js" />
              <span>Express.js</span>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="skills-group">
          <h4>Databases & ORMs</h4>
          <div className="skills-list">
            <div className="skill-item">
              <SiMysql color={azureBlue} title="MySQL" />
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <SiMongodb color={azureBlue} title="MongoDB" />
              <span>MongoDB</span>
            </div>
            <div className="skill-item">
              <SiPrisma color={azureBlue} title="Prisma" />
              <span>Prisma</span>
            </div>
            <div className="skill-item">
              <SiSequelize color={azureBlue} title="Sequelize" />
              <span>Sequelize</span>
            </div>
            <div className="skill-item">
              <SiMongoose color={azureBlue} title="Mongoose" />
              <span>Mongoose</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-group">
          <h4>Tools & Platforms</h4>
          <div className="skills-list">
            <div className="skill-item">
              <FaGitAlt color={azureBlue} title="Git" />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <FaGithub color={azureBlue} title="GitHub" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Let's build something amazing together!</h3>
        <Link to="/contact" className="btn">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
