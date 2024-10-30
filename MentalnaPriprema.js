import "./NewsDetail.css";
import React, { useState, useEffect } from "react"; // Dodati useState i useEffect
const MentalnaPriprema = () => {
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
      <h1>Mentalna priprema za trening</h1>
      <img
        src="https://img.freepik.com/premium-photo/finding-peace-gym-meditation-moment_946657-2716.jpg"
        alt="Mentalna priprema"
      />
      <p>
        Mentalna priprema može značajno uticati na vašu performansu. U ovom
        članku ćemo istražiti tehnike koje vam mogu pomoći...
      </p>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default MentalnaPriprema;
