import React from "react";
import "../assets/styling/ComfyStore.css";
import CompfyGIF from "../assets/PersonalProjects/Compfy-store.gif";


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";


function ComfyStore() {

       const navigate = useNavigate();

  return (
    <main className="comfy-store">

        <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="back-btn"
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: '#f5f5f5',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              <FiArrowLeft className="icon" />
              Back to Projects
            </motion.button>
      {/* Top section with description and GIF */}
      <section className="project-overview">
        {/* Project description */}
        <article className="project-description">
          <h1 className="project-title">Goals</h1>

          <p className="project-summary">
            When I started learning more about{" "}
            <span className="highlight">React JS</span>, my goal was to build
            cleaner, faster, and more scalable apps. I picked up tools like{" "}
            <span className="highlight">Redux Toolkit (RTK)</span> for state
            management and <span> </span>
            <span className="highlight">React Router 6.4+</span> to handle
            navigation better. I used <span className="highlight">Axios</span>{" "}
            and <span className="highlight">React Query</span> to make data
            fetching easier and more efficient. For styling, I wanted something
            fast and responsive, so I went with{" "}
            <span className="highlight">Tailwind CSS</span> and <span> </span>
            <span className="highlight">DaisyUI</span>. I also tried{" "}
            <span className="highlight">Strapi</span> to learn how to work with
            a headless CMS, and used a modular file structure to keep things
            organized as projects grew.
          </p>

          <div className="tech-tags">
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">React Router 6.4+</span>
            <span className="tech-tag">RTK</span>
            <span className="tech-tag">Axios</span>
            <span className="tech-tag">React Query</span>
            <span className="tech-tag">DaisyUI</span>
            <span className="tech-tag">Tailwind</span>
            <span className="tech-tag">Strapi</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/MelekElmayy/Compfy-Store"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              View on GitHub
            </a>
          </div>
        </article>

        {/* GIF container */}
        <figure className="project-demo">
          <img
            src={CompfyGIF}
            alt="ComfyStore demonstration"
            className="demo-gif"
          />
        </figure>
      </section>

      {/* Learned items section */}
      <section className="learnings-grid">
        <article className="learning-card">
          <h3 className="learning-title">Redux State Management</h3>
          <p className="learning-description">
            Managed states with <span className="highlight">Redux</span>, it was
            a whole different experience, but also very productive, for me it's
            a skill for larger projects, and more control.
          </p>
        </article>

        <article className="learning-card">
          <h3 className="learning-title">Responsive Design</h3>
          <p className="learning-description">
            Used <span className="highlight">Tailwind CSS</span>,{" "}
            <span className="highlight">Daisy UI</span>. This combo helped me
            generate a cool design, and opened my mind towards other techs, as I
            did some research while designing my website.
          </p>
        </article>

        <article className="learning-card">
          <h3 className="learning-title">React Query</h3>
          <p className="learning-description">
            With <span className="highlight">React Query</span>, I was surprised
            about the power of stocking the data in my cache, the action of
            refetching the data, and waiting for the page to load completely
            stopped.
          </p>
        </article>

        <article className="learning-card">
          <h3 className="learning-title">Axios</h3>
          <p className="learning-description">
            I worked with <span className="highlight">Axios</span> to fetch data
            from the <span className="highlight">Strapi</span> Database, it was
            easy as I had already experience with axios in previous projects.
          </p>
        </article>

        <article className="learning-card learning-card-wide">
          <h3 className="learning-title">Strapi</h3>
          <p className="learning-description">
            Working with <span className="highlight">Strapi</span> was
            straightforward because it provides ready-to-use API endpoints and
            returns well-structured JSON responses for seamless data fetching.
          </p>
        </article>

        <article className="learning-card learning-card-wide">
          <h3 className="learning-title">React</h3>
          <p className="learning-description">
            As for <span className="highlight">React</span> Itself, I gained and
            added a lot of great skills, made me happy about how much control
            and Productivity I can Add when Working on future Projects.
          </p>
        </article>

        <h3 className="learning-title-xx">How I did It...</h3>
        <article className="learning-card learning-card-wide">
          <p className="learning-description">
            This Project Took me exactly 3 weeks to finish, each day I invested
            about 6 hours of My time to open the Tutorial on udemy and
            implementing the new technologies. I struggled a bit with the
            authentication with strapi, took me a day and a half to solve the
            bugs. The rest was a rich experience, a very rich experience As I
            learned a lot of Tailwind Css skills, also everything around React,
            all the techs I mentioned in the Above section and I really enjoyed
            the tutorial because it was all written by my me and as I followed I
            gained a lot of knowledge.
          </p>
        </article>
      </section>
    </main>
  );
}

export default ComfyStore;
