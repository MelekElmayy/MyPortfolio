import React from 'react';
import { Link } from 'react-router-dom';
import { FaNode, FaGitAlt, FaHtml5, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiExpress, SiTypescript, SiNextdotjs, SiMysql, SiTailwindcss, SiJquery, SiPrisma, SiSequelize, SiMongoose, SiMongodb } from 'react-icons/si';

function Home() {
  // Azure blue color (#0078D4)
  const azureBlue = '#0078D4';
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm <span>Melek Elmay</span></h1>
        <h2>A Full-Stack Developer</h2>
        <p>I build complete web applications from frontend to backend.</p>
        <Link to="/projects" className="btn">View My Work</Link>
      </section>

      {/* Introduction */}
      <section className="intro">
        <h3>About Me</h3>
        <p>
          I'm a Full-Stack JavaScript developer with expertise in both frontend and backend technologies.
          I specialize in building responsive, performant web applications with modern frameworks.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h3>My Technical Stack</h3>
        
        {/* Frontend Skills */}
        <div className="skills-group">
          <h4>Frontend Technologies</h4>
          <div className="skills-list">
            <FaHtml5 color={azureBlue} title="HTML5" />
            <FaJs color={azureBlue} title="JavaScript" />
            <FaReact color={azureBlue} title="React" />
            <SiTypescript color={azureBlue} title="TypeScript" />
            <SiNextdotjs color={azureBlue} title="Next.js" />
            <SiTailwindcss color={azureBlue} title="Tailwind CSS" />
            <SiJquery color={azureBlue} title="jQuery" />
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-group">
          <h4>Backend Technologies</h4>
          <div className="skills-list">
            <FaNode color={azureBlue} title="Node.js" />
            <SiExpress color={azureBlue} title="Express.js" />
          </div>
        </div>

        {/* Databases */}
        <div className="skills-group">
          <h4>Databases & ORMs</h4>
          <div className="skills-list">
            <SiMysql color={azureBlue} title="MySQL" />
            <SiMongodb color={azureBlue} title="MongoDB" />
            <SiPrisma color={azureBlue} title="Prisma" />
            <SiSequelize color={azureBlue} title="Sequelize" />
            <SiMongoose color={azureBlue} title="Mongoose" />
          </div>
        </div>

        {/* Tools */}
        <div className="skills-group">
          <h4>Tools & Platforms</h4>
          <div className="skills-list">
            <FaGitAlt color={azureBlue} title="Git" />
            <FaGithub color={azureBlue} title="GitHub" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Let's build something amazing together!</h3>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </section>
    </div>
  );
}

export default Home;