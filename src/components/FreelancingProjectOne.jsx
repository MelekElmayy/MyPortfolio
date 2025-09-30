import React, { useEffect } from "react";
import "../assets/styling/FreelancingProjectOne.css";

function FreelancingProjectOne() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="freelancing-project-one-page">
      <h1>Freelancing Project One</h1>
      <div className="project-details">
        <p>
          {/* Replace this with your actual project details */}
          This page describes your first freelancing project. Add details about
          what you did, technologies used, challenges, and the impact.
        </p>
      </div>
    </div>
  );
}

export default FreelancingProjectOne;
