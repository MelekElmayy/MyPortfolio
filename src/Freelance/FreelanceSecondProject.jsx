import React, { useEffect } from "react";
import "./FreelanceSecondProject.css";

function FreelanceSecondProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="freelance-second-project-page">
      <h1>Freelancing Project Two</h1>
      <div className="project-details">
        <p>
          {/* Replace this with your actual project details */}
          This page describes your second freelancing project. Add details about
          what you did, technologies used, challenges, and the impact.
        </p>
      </div>
    </div>
  );
}

export default FreelanceSecondProject;
