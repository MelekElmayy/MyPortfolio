import React from 'react';
import '../assets/styling/Learning.css';

function Learning() {
  const learningItems = [
    {
      name: "WordPress",
      description: "Currently ",
      learned: [
        "Custom theme development",
       
      ],
      learning: [
        "Headless WordPress setups",

      ],
      githubLink: "https://github.com/yourusername/wordpress-projects",
      projectLink: "#wordpress"
    },
    {
      name: "Flutter",
      description: "Building .",
      learned: [
        "Dart programming language",
      
      ],
      learning: [
        "Riverpod state management",
      
      ],
      githubLink: "https://github.com/yourusername/flutter-projects",
      projectLink: "#flutter"
    },
    {
      name: "Next.js",
      description: "Developing ",
      learned: [
        "Next.js pages and routing",
       
      ],
      learning: [
        "Next.js 14 app router",
      
      ],
      githubLink: "https://github.com/yourusername/nextjs-projects",
      projectLink: "#nextjs"
    }
  ];

  return (
    <div className="learning-section-Learning">
      <h3 className="section-title-Learning">My Current Learning Journey</h3>
      <div className="technologies-container-Learning">
        {learningItems.map((item, index) => (
          <div className="tech-item-Learning" key={index}>
            <div className="tech-header-Learning">
              <h4 className="tech-name-Learning">{item.name}</h4>
              <p className="tech-description-Learning">{item.description}</p>
            </div>
            
            <div className="tech-progress-Learning">
              <div className="progress-section-Learning">
                <h5 className="progress-title-Learning">What I've Learned</h5>
                <ul className="progress-list-Learning">
                  {item.learned.map((skill, i) => (
                    <li key={i} className="skill-item-Learning">
                      <span className="checkmark-Learning">✓</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="progress-section-Learning">
                <h5 className="progress-title-Learning">Currently Learning</h5>
                <ul className="progress-list-Learning">
                  {item.learning.map((skill, i) => (
                    <li key={i} className="skill-item-Learning">
                      <span className="bullet-Learning">•</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
         
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;
