import React, { useState, useEffect } from "react";
import "./NewsDetail.css";

const NutricijaZaFitnes = () => {
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
      <h1>Nutricija za fitnes</h1>
      <img
        src="https://www.naturalhealers.com/wp-content/uploads/2021/07/sports-nutritionist-with-client-1200x628-1.jpg"
        alt="Nutricija za fitnes"
      />
      <p>
        Pravilna ishrana je ključna za postizanje vaših fitness ciljeva. U ovom
        članku ćemo govoriti o osnovama nutritivnih potreba...
      </p>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default NutricijaZaFitnes;
