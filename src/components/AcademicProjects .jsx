import React, { useEffect } from "react";
import { FaMobileAlt, FaGamepad, FaUtensils, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../assets/styling/AcademicProjects.css";
// Restaurant Delivery images
import RestaurantGif from "../assets/RestaurantGIF.gif";

// Sponsofy App images
import sponsofyMain from "../assets/Sponsofy.png";
import signupImg from "../assets/Sponsofy/signup.png";
import loginImg from "../assets/Sponsofy/login.png";
import platformPick from "../assets/Sponsofy/PlatformPick.png";

// Gaming Platform GIFs
import ShapeMAtcherGIF from "../assets/Gamezone/ShapeMatcherGIF.gif";
import SnakeGif from "../assets/Gamezone/SnakeGameGif.gif";

import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

function AcademicProjects() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    arrows: false, // Removed arrows
    pauseOnHover: true,
    adaptiveHeight: true,
    customPaging: (i) => <div className="custom-dot-xx"></div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const sponsofyImages = [
    { src: sponsofyMain, alt: "Sponsofy Main Screen" },
    { src: signupImg, alt: "Sponsofy Signup Screen" },
    { src: loginImg, alt: "Sponsofy Login Screen" },
    { src: platformPick, alt: "Sponsofy Platform Selection" },
  ];

  const gamingPlatformGifs = [
    { src: SnakeGif, alt: "Snake Game Demo", title: "Classic Snake Game" },
    {
      src: ShapeMAtcherGIF,
      alt: "Shape Matcher Game Demo",
      title: "Custom Shape Matcher Game",
    },
  ];

  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      document.body.classList.toggle("scrolled-to-bottom", scrolledToBottom);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="academic-projects-container-xx">
      
      <div className="academic-projects-xx">
        <h1>My Academic Projects</h1>
        <p className="subtitle-xx">
          Projects developed during my academic journey
        </p>

        <div className="disclaimer-banner-xx">
          <p>
            These are academic projects that are still incomplete and need more
            polishing. However, I learned a tremendous amount through these
            projects and collaborative work. My academic institution has allowed
            me to share these projects in my portfolio.
          </p>
        </div>

        {/* Restaurant Delivery Project */}
        <section
          className="project-card-xx"
          onClick={() => handleProjectClick("restaurant-delivery")}
        >
          <div className="project-header-xx">
            <div className="project-title-container-xx">
              <FaUtensils className="project-icon-xx" />
              <h2>Restaurant Delivery Platform</h2>
            </div>
            <div className="project-duration-xx">
              <FaClock className="duration-icon-xx" />
              <span>7 days</span>
            </div>
          </div>
          <div className="project-content-xx">
            <div className="project-image-xx">
              <img src={RestaurantGif} alt="Restaurant Delivery Platform" />
            </div>
            <div className="project-details-xx">
              <h3>Description</h3>
              <p>
                A full-stack food delivery platform developed with React,
                Node.js, and MySQL for relational database. Features include
                real-time order tracking, menu management, and payment
                integration. I helped implement features related to payment
                processing and the integration of a secure signup/login system.
              </p>
              <h3>Technologies Used</h3>
              <div className="tech-grid-xx">
                <span>React.js</span>
                <span>Node.js/Express</span>
                <span>MySQL</span>
                <span>Stripe API</span>
                <span>Google Maps API</span>
              </div>
              <h3>Key Learnings</h3>
              <ul className="learnings-list-xx">
                <li>Authentication systems</li>
                <li>Payment gateway integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gaming Website Project */}
        <section
          className="project-card-xx"
          onClick={() => handleProjectClick("game-Zone")}
        >
          <div className="project-header-xx">
            <div className="project-title-container-xx">
              <FaGamepad className="project-icon-xx" />
              <h2>Gaming Community Platform</h2>
            </div>
            <div className="project-duration-xx">
              <FaClock className="duration-icon-xx" />
              <span>7 days</span>
            </div>
          </div>
          <div className="project-content-xx">
            <div className="project-image-xx">
              <Slider {...carouselSettings}>
                {gamingPlatformGifs.map((gif, index) => (
                  <div key={index} className="carousel-slide-xx">
                    <img src={gif.src} alt={gif.alt} />
                    <p className="image-caption-xx">{gif.title}</p>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="project-details-xx">
              <h3>Description</h3>
              <p>
                A gaming community website with user profiles, game reviews, and
                forums. As a member of the admin team, you can post your own
                games created with Phaser JS. My task was to create two classic
                games: Snake and Flappy Bird. With extra time, I developed a
                custom game from scratch with original ideas and logic.
              </p>
              <h3>Technologies Used</h3>
              <div className="tech-grid-xx">
                <span>MySQL</span>
                <span>Phaser JS</span>
                <span>Tailwind CSS</span>
                <span>React</span>
              </div>
              <h3>Key Learnings</h3>
              <ul className="learnings-list-xx">
                <li>Game development fundamentals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sponsofy App Project */}
        <section
          className="project-card-xx"
          onClick={() => handleProjectClick("Sponsofy")}
        >
          <div className="project-header-xx">
            <div className="project-title-container-xx">
              <FaMobileAlt className="project-icon-xx" />
              <h2>Sponsofy - React Native App</h2>
            </div>
            <div className="project-duration-xx">
              <FaClock className="duration-icon-xx" />
              <span>30 days</span>
            </div>
          </div>
          <div className="project-content-xx">
            <div className="phone-mockup-container-xx">
              <Slider {...carouselSettings}>
                {sponsofyImages.map((image, index) => (
                  <div key={index} className="carousel-slide-xx">
                    <div className="phone-mockup-xx">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="phone-screen-xx"
                      />
                    </div>
                    <p className="image-caption-xx">{image.alt}</p>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="project-details-xx">
              <h3>Description</h3>
              <p>
                A mobile application that connects content creators with
                companies, built with React Native. The app enables both parties
                to negotiate, sign real-time contracts, and define
                milestone-based agreements. Key features include real-time chat,
                live deal management, secure contract handling, and an intuitive
                interface.
              </p>
              <h3>Technologies Used</h3>
              <div className="tech-grid-xx">
                <span>React Native</span>
                <span>Expo</span>
                <span>Socket IO</span>
                <span>Redux</span>
                <span>Tailwind CSS</span>
                <span>MUI</span>
                <span>MySQL</span>
                <span>Sequelize</span>
                <span>Express.js</span>
                <span>Figma</span>
              </div>
              <h3>Key Learnings</h3>
              <ul className="learnings-list-xx">
                <li>Mobile UI/UX principles</li>
                <li>Offline-first development</li>
                <li>Meeting tight project deadlines under pressure</li>
                <li>
                  Refactoring legacy code for better performance and readability
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <button className="back-btn-bottom" onClick={() => navigate(-1)}>
        <FiArrowLeft className="icon" />
        Back to Projects
      </button>
    </div>
  );
}

export default AcademicProjects;
