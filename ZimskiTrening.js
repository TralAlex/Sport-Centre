import React, { useState, useEffect } from "react";
import "./NewsDetail.css";

const ZimskiTrening = () => {
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
      <h1>Zimski Trening</h1>
      <img
        src="https://img.ctykit.com/cdn/ca-downtown-sf/images/flagship-fidi.jpg"
        alt="Zimski trening"
      />
      <p>
        Ove zime organizujemo specijalne treninge prilagođene hladnijem vremenu.
        Pridružite nam se u našem zimskom programu i ostanite fit tokom zime.
      </p>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default ZimskiTrening;
