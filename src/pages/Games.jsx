import React, { useRef, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import game1Video from "../assets/game1.mp4";
import game2Video from "../assets/game3.mp4";
import premiumGameImage from "../assets/premium-game-blurred.jpg";

const stripePromise = loadStripe("pk_test_your_stripe_publishable_key_here");

function Games() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const tryPlay = (videoRef) => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            videoRef.current.muted = true;
            videoRef.current.play();
          });
        }
      }
    };

    tryPlay(videoRef1);
    tryPlay(videoRef2);

    const unlocked = localStorage.getItem("premiumUnlocked");
    if (unlocked) setIsUnlocked(true);
  }, []);

  const handleUnlock = async () => {
    // Implementation remains the same
  };

  return (
    <div className="games-page">
      
      <div className="dev-passion-section">
        <h1>My Game Development Journey</h1>
        <div className="passion-content">
          <p>
            It all started one day in a library—I sketched an idea on a piece of
            paper. I never imagined it would make it to the Play Store so
            quickly. One night, I felt a strong urge to bring it to life—and I
            did.
          </p>
          <ul className="tech-stack">
            <li>Unity Game Engine</li>
            <li>C# Programming</li>
            <li>2D Modeling & Animation</li>
            <li>Game Physics</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
      </div>
      <h2 className="projects-title"> Projects</h2>
      <div className="games-row">
        {/* Game 1 */}
        <div className="game-container">
          <div className="game-content">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <video ref={videoRef1} autoPlay muted loop playsInline>
                  <source src={game1Video} type="video/mp4" />
                </video>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
            <div className="game-description">
              <h3>Tranquilooo</h3>
              <p>
This was a simple game I created. It's easy to play — the blue objects must be matched with the blue character, and the red ones with the red character.              </p>
            </div>
          </div>
        </div>

        {/* Game 2 */}
        <div className="game-container">
          <div className="game-content">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <video ref={videoRef2} autoPlay muted loop playsInline>
                  <source src={game2Video} type="video/mp4" />
                </video>
              </div>
              <div className="phone-home-indicator"></div>
            </div>
            <div className="game-description">
              <h3>Switch Switch</h3>
              <p>
                  This is the game I really enjoyed coding. It was my first game, so it has its own charm. I was proud to see it published on the Play Store — it truly motivated me to create more games.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Premium Game - Below the row */}
      <div className={`premium-game-container ${isUnlocked ? "unlocked" : ""}`}>
        <h3>Premium Game</h3>
        <div className="premium-game-content">
          <div className="phone-frame premium">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              {isUnlocked ? (
                <div className="coming-soon">
                  <p>🎮 Coming Soon! 🎮</p>
                  <p>This game is currently in development.</p>
                </div>
              ) : (
                <>
                  <img
                    src={premiumGameImage}
                    alt="Premium Game"
                    className="blurred-image"
                  />
                  <div className="premium-overlay">
                    <h4>Support My Work</h4>
                    <p>Unlock this premium content with a $2 contribution</p>
                    <div className="payment-options">
                      {/* Payment options radio buttons */}
                    </div>
                    <button onClick={handleUnlock} className="unlock-btn">
                      Unlock Premium
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="phone-home-indicator"></div>
          </div>
          <div className="premium-description">
            <p>
               This Is a unique Game, very addictive and it has so much room for growth. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
