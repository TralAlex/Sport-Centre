import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  const [showArrow, setShowArrow] = useState(false);

  const handleBuyClick = (packageName, price, duration) => {
    navigate("/korpa", { state: { package: packageName, price, duration } });
  };

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
    <div className="about">
      <h1>O nama</h1>
      <p className="quote">
        "Fitnes nije u tome da budete bolji od nekog. Radi se o tome da si bolji
        nego što si bio."
      </p>
      <img
        src="https://www.mensjournal.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM2NzQyNzY3NTAyODUz/7-pieces-of-luxury-gym-equipment-you-should-start-saving-for-now.jpg"
        alt="Gallery Image 1"
      />

      <div className="section">
        <h2 className="section-title">Programi</h2>
        <div className="programs">
          <div className="program">
            <h2>Osnovni plan</h2>
            <p>Pristup opremi teretane</p>
            <p>Grupni fitness treninzi</p>
            <p className="price">$30/mes</p>
            <p>Trajanje: 10 dana</p>
            <button
              className="button"
              onClick={() => handleBuyClick("Osnovni plan", 30, 10)}
            >
              Kupi Plan
            </button>
          </div>
          <div className="program">
            <h2>Standardni Plan</h2>
            <p>Pristup opremi teretane</p>
            <p>Grupni fitness treninzi</p>
            <p>Personalne sesije</p>
            <p className="price">$50/mes</p>
            <p>Trajanje: 20 dana</p>
            <button
              className="button"
              onClick={() => handleBuyClick("Standardni Plan", 50, 20)}
            >
              Kupi paket
            </button>
          </div>
          <div className="program">
            <h2>Premium Plan</h2>
            <p>Pristup opremi teretane</p>
            <p>Grupni fitness treninzi</p>
            <p>Personalne sesije</p>
            <p>Nutritionistički saveti</p>
            <p className="price">$80/mes</p>
            <p>Trajanje: 30 dana</p>
            <button
              className="button"
              onClick={() => handleBuyClick("Premium Plan", 80, 30)}
            >
              Kupi paket
            </button>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Lokacija teretane</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22658.496126213235!2d20.456631419757887!3d44.77444393105426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7057dd03a431%3A0xc0dcb298f9f906b1!2sAthletic&#39;s%20Gym%20-%20Vo%C5%BEdovac!5e0!3m2!1ssr!2srs!4v1727441415327!5m2!1ssr!2srs"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default About;
