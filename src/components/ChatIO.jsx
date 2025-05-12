import React from "react";
import chatIOGif from "../assets/PersonalProjects/chat.io.gif";
import "../assets/styling/chatIO.css";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";


function ChatIO() {


       const navigate = useNavigate();
  
  return (
    <div className="chat-io-container">

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
      <div className="project-top-section">
        <div className="project-intro">
          <h1>Goals</h1>
          <p className="subtitle">
            Real-time chat application with React and Appwrite
          </p>

          <div className="tech-stack">
            <span className="tech-pill react">React</span>
            <span className="tech-pill appwrite">Appwrite</span>
            <span className="tech-pill css">CSS</span>
            <span className="tech-pill react">Real Time</span>
          </div>

          <div className="brief-description">
            <p>
              As I was building projects with my friends the task of
              implementing a Real Time chatting system was always assigned to
              someone else. I did very much wanted to exploit this tech and know
              About it , so I took upon myself to learn this new skill, and it
              was a very enjoyable experience, as I had the oppurtunity to learn
              about Appwrite As well.
            </p>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/MelekElmayy/chat_tut"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

        <div className="project-demo">
          <img src={chatIOGif} alt="Chat.IO Demo" className="demo-gif" />
        </div>
      </div>

      <div className="project-details">
        <section className="project-section">
          <h2>Key Features</h2>
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
        </section>

        <section className="project-section">
          <h2>How I did it... </h2>
          <div className="technical-details">
            <p>
              Saw a couple of videos using{" "}
              <span className="keyword">Appwrite</span> as a{" "}
              <span className="keyword">database</span> to store information. I
              was really impressed, so I took it upon myself to try something
              like that.
            </p>

            <p>
              Establishing a{" "}
              <span className="keyword">real-time connection</span> using a
              method like <span> </span>
              <span className="keyword">client.subscribe()</span>, and setting
              up a channel with <span> </span>
              <span className="keyword">
                databases.$DATABASE_ID.collections.$COLLECTION_ID_MESSAGES.documents
              </span><span> </span>
              was surprisingly easy to implement.
            </p>

            <p>
              I`m familiar with <span className="keyword">React.js</span>, so
              using it was not much of a{" "}
              <span className="keyword">challenge</span> for me.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ChatIO;