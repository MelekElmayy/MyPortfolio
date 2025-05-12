import React from "react";
import "../assets/styling/ComfyStore.css";
import reduxCart from "../assets/PersonalProjects/redux-cart.gif";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

function CartRedux() {

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
          <header className="project-header">
            <h2 className="project-subtitle">A Redux-Powered Shopping Cart Implementation</h2>
          </header>
          
          <div className="tech-tags">
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">RTK</span>
            <span className="tech-tag">JavaScript</span>
          </div>
          
          <p className="project-summary">
            This project focused on mastering <span className="highlight">Redux</span> state management by building a fully functional shopping cart. Key implementations included <span className="highlight">Redux Toolkit (RTK)</span> for streamlined store configuration, <span className="highlight">action creators</span> for cart operations, and <span className="highlight">reducers</span> to handle complex state transitions.
            <br /><br />
            Through this project, I gained deep understanding of Redux middleware, the importance of immutable updates, and best practices for structuring Redux applications.
          </p>

          <div className="project-links">
            <a
              href="https://github.com/MelekElmayy/Redux-Cart"
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
          <img src={reduxCart} alt="Redux Cart demonstration" className="demo-gif" />
        </figure>
      </section>

      {/* Learned items section */}
      <section className="learnings-grid">
        <article className="learning-card">
          <h3 className="learning-title">Redux State Management</h3>
          <p className="learning-description">
            Managed states with <span className="highlight">Redux</span>, it was a whole different experience, but
            also very productive, for me it's a skill for larger projects, and
            more control.
          </p>
        </article>

        <article className="learning-card">
          <h3 className="learning-title">Redux Toolkit</h3>
          <p className="learning-description">
            Used <span className="highlight">RTK</span> to simplify Redux setup and reduce boilerplate code while maintaining all Redux benefits.
          </p>
        </article>

        <article className="learning-card">
          <h3 className="learning-title">Cart Logic</h3>
          <p className="learning-description">
            Developed complex cart functionality including <span className="highlight">quantity updates</span>, <span className="highlight">item removal</span>, and <span className="highlight">total calculation</span>.
          </p>
        </article>

       

        <article className="learning-card learning-card-wide">
          <h3 className="learning-title">Debugging</h3>
          <p className="learning-description">
            Gained experience with <span className="highlight">Redux DevTools</span> for time-travel debugging and action inspection, making state changes transparent and traceable.
          </p>
        </article>

      </section>
    </main>
  );
}

export default CartRedux;