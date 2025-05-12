import React from "react";
import "../assets/styling/Sponsofy.css";
import {
  FaHandshake,
  FaFileContract,
  FaChartLine,
  FaMobile,
  FaServer,
} from "react-icons/fa";

import MulterGif from "../assets/PersonalProjects/Multer.gif";
import Criteria from "../assets/PersonalProjects/criteria-subcriteria.gif";
import ContractsDeals from "../assets/PersonalProjects/Contracts-Deal.gif";
import EditProfile from "../assets/PersonalProjects/EditPRofile.gif";
import SocialMediaStats from "../assets/PersonalProjects/SocialMediaStats.gif";
import TransationHistory from "../assets/PersonalProjects/TransactionHistory.gif";

import SignUp from "../assets/SignUP.gif";
import OnBoarding from "../assets/OnBoarding.gif";


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";


function ReactNativeProject() {

   const navigate = useNavigate();
  return (
    <main className="comfy-store-xx">

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
      <section className="project-overview-xx">
        <article className="project-description-xx">
          <h1 className="project-title-xx">Sponsofy</h1>

          <p className="project-summary-xx">
            Bridging the gap between content creators and brands through
            <span className="highlight-xx"> smart contracts</span> and
            <span className="highlight-xx">
              {" "}
              milestone-based collaborations
            </span>
            .
            <br />
            <br />
            <p>
              In this project, I handled all{" "}
              <span className="highlight-xx">backend</span> tasks related to the <span> </span>
              <span className="highlight-xx">content creator</span>, including{" "}
              <span className="highlight-xx">modeling</span> the <span> </span>
              <span className="highlight-xx">database tables</span>, setting up{" "}
              <span className="highlight-xx">relationships</span> in
              collaboration with my teammates, and building the <span> </span>
              <span className="highlight-xx">controllers</span> and{" "}
              <span className="highlight-xx">routes</span> on the
              <span className="highlight-xx">server side</span>. On the{" "}
              <span className="highlight-xx">frontend</span>, I followed the <span> </span>
              <span className="highlight-xx">Figma</span> design we created at
              the start of the project and implemented the
              <span className="highlight-xx">screens</span> using{" "}
              <span className="highlight-xx">React Native</span>.
            </p>
          </p>

          <div className="tech-tags-xx">
            <span className="tech-tag-xx">React Native</span>
            <span className="tech-tag-xx">Node.js</span>
            <span className="tech-tag-xx">MySql</span>
            <span className="tech-tag-xx">Express Js</span>
            <span className="tech-tag-xx">Auth0</span>
            <span className="tech-tag-xx">Sequelize</span>
            <span className="tech-tag-xx">Axios</span>
          </div>

          <div className="project-links-xx">
            <a
              href="https://github.com/final-project-teams/Sponsofy"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button-xx"
            >
              View on GitHub
            </a>
          </div>
        </article>
      </section>

      <section className="learnings-grid-xx">
        <section className="features-container-xx">
          <article className="feature-card-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaHandshake className="feature-icon-xx" /> User Onboarding
              </h3>
              <p className="feature-description-xx">
                The onboarding will allow the user to choose which profile they
                want to create: a Company Profile or a Content Creator Profile.
                They will then be redirected to the appropriate signup and login
                screens.
              </p>
            </div>
            <img
              src={OnBoarding}
              alt="Creator-Company Matching"
              className="feature-gif-xx"
            />
          </article>

          <article className="feature-card-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaHandshake className="feature-icon-xx" /> Sign Up / Login –
                Company & Content Creator
              </h3>
              <p className="feature-description-xx">
                Implemented everything necessary for signup and login, from
                front to back, and added Multer functionality during signup.
              </p>
            </div>
            <img
              src={SignUp}
              alt="Creator-Company Matching"
              className="feature-gif-xx"
            />
          </article>

          <article className="feature-card-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaHandshake className="feature-icon-xx" /> Selecting The
                Criteria & SubCriteria
              </h3>
              <p className="feature-description-xx">
                The task was to implement both the front end and the backend
                related to selecting the criteria and the subcriteria, from
                creating
              </p>
            </div>
            <img
              src={Criteria}
              alt="Creator-Company Matching"
              className="feature-gif-xx"
            />
          </article>

          <article className="feature-card-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaFileContract className="feature-icon-xx" /> Contracts & Deals
              </h3>
              <p className="feature-description-xx">
                I made sure that the content Creator receive the deals and the
                contracts, so He can Accept or deny deal, and see information
                about the contracts, so he can move to signing it
              </p>
            </div>
            <img
              src={ContractsDeals}
              alt="Smart Contracts"
              className="feature-gif-xx"
            />
          </article>

          <article className="feature-card-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaChartLine className="feature-icon-xx" /> Transaction History
              </h3>
              <p className="feature-description-xx">
                Every Transaction need to be visible to the content Creator so
                He can track his income, also to keep record of the payment
                made.
              </p>
            </div>
            <img
              src={TransationHistory}
              alt="Milestone Tracking"
              className="feature-gif-xx"
            />
          </article>

          <article className="feature-card-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaMobile className="feature-icon-xx" /> Edit Profile
              </h3>
              <p className="feature-description-xx">
                The Content Creator must be able to edit His Profile Infos so It
                can be visible to companies, who complete the milstones. Also
                The Profile Infos can tell about the niche of the content
                Creator
              </p>
            </div>
            <img
              src={EditProfile}
              alt="Cross-Platform Mobile App"
              className="feature-gif-xx"
            />
          </article>

          <article className="feature-card-xx feature-card-wide-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaServer className="feature-icon-xx" /> Views & Likes
              </h3>
              <p className="feature-description-xx">
                The content Creator Can Add information about his account`s
                numbe of followers, views and likes. Also He can Images from his
                instagram ,Youtube , Facebook or Tiktok and add the number of
                likes and views on each POst. These infos will be checked by the
                Admin, also By the company itself That Offers a deal.
              </p>
            </div>
            <img
              src={SocialMediaStats}
              alt="Robust Backend"
              className="feature-gif-xx"
            />
          </article>

          <article className="feature-card-xx feature-card-wide-xx">
            <div className="feature-content-xx">
              <h3 className="feature-title-xx">
                <FaServer className="feature-icon-xx" /> Uploadding Images &
                Multer
              </h3>
              <p className="feature-description-xx">
                Using Multer to Upload and delete my Images was really a special
                Experience for me. It was a new concept and experience for me
                and also A bit Challenging , for a first Timer.
              </p>
            </div>
            <img
              src={MulterGif}
              alt="Robust Backend"
              className="feature-gif-xx"
            />
          </article>
        </section>

        <article className="learning-card-xx learning-card-wide-xx">
          <h3 className="learning-title-xx">My Key Contributions</h3>
          <div className="contributions-content-xx">
            <div className="contribution-item-xx">
              <h4>Implemented the onboarding of the app</h4>
              <p>
                Designed and implemented the Solidity-based contract system that
                automatically releases payments upon milestone completion.
              </p>
            </div>
            <div className="contribution-item-xx">
              <h4>
                Both the login and signup of the company and the content Creator
              </h4>
              <p>
                Developed the AI recommendation engine that pairs creators with
                brands based on multiple compatibility factors.
              </p>
            </div>
            <div className="contribution-item-xx">
              <h4>The Profile of the content Creators</h4>
              <p>
                Created all React Native components with smooth animations and
                intuitive navigation flows.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ReactNativeProject;
