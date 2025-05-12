import React from "react";
import FlappyBirdGIF from "../assets/Gamezone/FlappyBirdGIF.gif";
import ShapeMatcherGIF from "../assets/Gamezone/ShapeMatcherGIF.gif";
import SnakeGameGif from "../assets/Gamezone/SnakeGameGif.gif";
import { FaGamepad, FaStar, FaCode, FaGithub } from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";


function GameZone() {
     const navigate = useNavigate();

  return (
    <div className="game-zone-container">
      
      {/* Introduction Section */}
      <div className="games-intro">
        
        <h1>
          My Game Development Journey <FaGamepad />
        </h1>
        
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
        <p className="intro-text">
          Welcome to my game development showcase! Here you'll find projects
          I've built to explore different game mechanics, improve my programming
          skills, and most importantly - have fun creating interactive
          experiences. From classic clones to original concepts, each game
          represents a unique learning adventure.
        </p>
        <div className="github-button-container">
          <a 
            href="https://github.com/rbk-game-zone/game-zone" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-button"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
        <div className="skills-showcase">
          <div className="skill-tag">
            <FaCode /> JavaScript
          </div>
          <div className="skill-tag">
            <FaCode /> Phaser JS
          </div>
          <div className="skill-tag">
            <FaCode /> Game Physics
          </div>
        </div>
      </div>

      {/* Games Showcase */}
      <div className="games-grid">
        {/* Flappy Bird Clone */}
        <div className="game-card">
          <div className="game-gif-container">
            <img src={FlappyBirdGIF} alt="Flappy Bird Clone" />
          </div>
          <div className="game-info">
            <h3>Flappy Bird Clone</h3>
            <p>
              The usual Flappy Bird game, implemented using Phaser JS. It was a
              great exercise in understanding game loops, physics, and sprite
              animations.
            </p>
            <div className="game-features">
              <span>Collision Detection</span>
              <span>Procedural Pipes</span>
              <span>Score System</span>
            </div>
          </div>
        </div>

        {/* Shape Matcher - Special Highlight */}
        <div className="game-card featured-game">
          <div className="developer-badge">My Original Game</div>
          <div className="game-gif-container">
            <img src={ShapeMatcherGIF} alt="Shape Matcher Game" />
          </div>
          <div className="game-info">
            <h3>
              Shape Matcher <FaStar className="featured-icon" />
            </h3>
            <p>
              An original pattern recognition game where the player matches the
              falling shapes with a horizontally controlled object, using the
              left and right arrow keys.
            </p>
            <div className="game-features">
              <span>Original Concept</span>
              <span>Dynamic Difficulty</span>
            </div>
          </div>
        </div>

        {/* Snake Game */}
        <div className="game-card">
          <div className="game-gif-container">
            <img src={SnakeGameGif} alt="Snake Game" />
          </div>
          <div className="game-info">
            <h3>Snake Game</h3>
            <p>
              The classic Snake game — I don't need to explain how it works, but
              it was fun to implement and get it running.
            </p>
            <div className="game-features">
              <span>Grid Movement</span>
              <span>Growth Mechanics</span>
              <span>Control</span>
              <span>Addictive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameZone;