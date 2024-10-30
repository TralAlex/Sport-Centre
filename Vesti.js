import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Vesti.css"; // Import the CSS file for custom styles

const Vesti = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="vesti-container">
      <h1 className="vesti-title">Najnovije Vesti</h1>
      <p className="vesti-intro">
        Dobrodošli na stranicu sa vestima o našem fitness centru i aktivnostima!
      </p>

      <div className="vesti-grid">
        <div className="vesti-item">
          <Link to="/popust-za-nove-clanove">
            <img
              src="https://img.ctykit.com/cdn/ca-downtown-sf/images/bodyrok-pilates.jpg"
              alt="Popust za nove članove"
              className="vesti-img"
            />
            <h2 className="vesti-item-title">Popust 20% za nove članove</h2>
          </Link>
          <p className="vesti-item-description">
            Saznajte više o našem posebnom popustu za nove članove.
          </p>
        </div>

        <div className="vesti-item">
          <Link to="/zimski-trening">
            <img
              src="https://img.ctykit.com/cdn/ca-downtown-sf/images/flagship-fidi.jpg"
              alt="Zimski trening"
              className="vesti-img"
            />
            <h2 className="vesti-item-title">Zimski trening</h2>
          </Link>
          <p className="vesti-item-description">
            Pridružite nam se na specijalnim zimskim treninzima!
          </p>
        </div>

        <div className="vesti-item">
          <Link to="/studentski-popust">
            <img
              src="https://img.ctykit.com/cdn/ca-downtown-sf/images/orangetheory-fitness.jpg"
              alt="Studentski popust"
              className="vesti-img"
            />
            <h2 className="vesti-item-title">Studentski popust</h2>
          </Link>
          <p className="vesti-item-description">
            Poseban popust za studente u našem fitness centru.
          </p>
        </div>
      </div>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default Vesti;
