import React from "react";
import { Link } from "react-router-dom";
import "../assets/styling/Freelancing.css";

function FreelancingProjects() {
  return (
    <div className="freelancing-page">
      <h1>Freelancing Projects</h1>
      <div className="freelancing-story">
        <strong>My Freelancing Journey:</strong> <br />
        I started freelancing in early 2022, driven by a passion for building
        real-world solutions and collaborating with clients worldwide. My
        journey began on platforms like Upwork and Fiverr, where I quickly
        learned the importance of communication, reliability, and delivering
        quality work. Over time, I’ve worked with clients from the US, Europe,
        and the Middle East, helping them turn their ideas into successful
        digital products.
        <br />
        <br />
        Today, I continue to freelance remotely, focusing on web and mobile
        development projects for startups, small businesses, and entrepreneurs.
      </div>
      <div className="freelancing-projects-list">
        <Link
          to="/freelancing/project-one"
          className="freelancing-project-card"
        >
          <h2>Project One</h2>
          <p>
            Brief description of your first freelancing project. What you did,
            technologies used, and the impact.
          </p>
        </Link>
        <Link
          to="/freelancing/project-two"
          className="freelancing-project-card"
        >
          <h2>Project Two</h2>
          <p>
            Brief description of your second freelancing project. What you did,
            technologies used, and the impact.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default FreelancingProjects;
