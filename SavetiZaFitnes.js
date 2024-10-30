import React, { useState, useEffect } from "react";
import "./NewsDetail.css";

const SavetiZaFitnes = () => {
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
      <h1>Saveti za uspešan trening</h1>
      <img
        src="https://www.firstbeat.com/wp-content/uploads/2022/07/FB-Luke-W-1-1300x867.jpg"
        alt="Saveti za trening"
      />
      <p>
        Da biste ostvarili najbolje rezultate tokom treninga, važno je da se
        pridržavate određenih saveta...
      </p>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default SavetiZaFitnes;
