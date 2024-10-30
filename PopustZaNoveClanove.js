import React, { useState, useEffect } from "react";
import "./NewsDetail.css"; // Koristi postojeći CSS

const PopustZaNoveClanove = () => {
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
    <div className="news-detail-container">
      <h1>Popust 20% za nove članove</h1>
      <img
        src="https://img.ctykit.com/cdn/ca-downtown-sf/images/bodyrok-pilates.jpg"
        alt="Popust za nove članove"
      />
      <p>
        Učlanite se u naš fitness centar i ostvarite 20% popusta na sve
        programe! Naša specijalna ponuda važi do kraja meseca. Pridružite nam se
        i uživajte u vrhunskim treninzima.
      </p>

      {/* Strelica za povratak na vrh */}
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default PopustZaNoveClanove;
