import React, { useState, useEffect } from "react";
import "./OnlineTreninzi.css";

const OnlineTreninzi = () => {
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
    <div className="online-treninzi-container">
      <h1>Online Treninzi</h1>
      <p>
        Pratite naše najbolje treninge online, direktno iz vašeg doma. Uživajte
        u profesionalnim treninzima bilo kad i bilo gde.
      </p>

      {/* Dodavanje YouTube videa - Naši treninzi */}
      <div className="video-section">
        <h2 className="video-title">Naši treninzi</h2>
        <div className="videos-wrapper">
          <div className="video-item">
            <h3>Online Trening 1</h3>
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/YvrKIQ_Tbsk"
              title="Trening video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="buy-button">Kupi online trening</button>
          </div>

          <div className="video-item">
            <h3>Online Trening 2</h3>
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/kAUVOHB3XYM"
              title="Trening video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="buy-button">Kupi online trening</button>
          </div>

          <div className="video-item">
            <h3>Online Trening 3</h3>
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/UNA_1DXsLmg?si=PoxyXCVm2CaL9Vtj"
              title="Trening video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="buy-button">Kupi online trening</button>
          </div>

          <div className="video-item">
            <h3>Online Trening 4</h3>
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/w0aCVOhVr7c?si=iXxcrQ0KDtCXs_wi"
              title="Trening video 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="buy-button">Kupi online trening</button>
          </div>
          <div className="video-item">
            <h3>Online Trening 5</h3>
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/enYITYwvPAQ?si=JnckMQ-vr1BGkmVg"
              title="Trening video 5"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="buy-button">Kupi online trening</button>
          </div>
          <div className="video-item">
            <h3>Online Trening 6</h3>
            <iframe
              className="video-iframe"
              src="https://www.youtube.com/embed/cbKkB3POqaY?si=nvd6IFUrhwKJqleA"
              title="Trening video 6"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="buy-button">Kupi online trening</button>
          </div>
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

export default OnlineTreninzi;
