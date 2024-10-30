import React, { useState, useEffect } from "react";
import "./NewsDetail.css";

const StudentskiPopust = () => {
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
      <h1>Studentski Popust</h1>
      <img
        src="https://img.ctykit.com/cdn/ca-downtown-sf/images/orangetheory-fitness.jpg"
        alt="Studentski popust"
      />
      <p>
        Svi studenti imaju pravo na poseban popust u našem fitness centru.
        Dođite sa studentskom iskaznicom i ostvarite značajnu uštedu na svim
        našim programima!
      </p>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default StudentskiPopust;
