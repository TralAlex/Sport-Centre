import React, { useState, useEffect } from "react";
import "./Karijera.css"; // Uvezi CSS za stilizaciju

const Karijera = () => {
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
    <div className="karijera-container">
      <header className="karijera-header">
        <h1 className="karijera-title">Karijera u našem timu</h1>
        <p className="karijera-intro">
          Pridružite se našem timu i postanite deo naše uspešne priče.
          Pogledajte otvorene pozicije i prijavite se već danas!
        </p>
      </header>

      <section className="karijera-openings">
        <h2 className="karijera-subtitle">Otvorene pozicije</h2>
        <ul className="karijera-list">
          <li className="karijera-item">
            <h3>Fitnes instruktor</h3>
            <p>
              Tražimo strastvene fitnes instruktore za rad sa našim članovima.
            </p>
          </li>
          <li className="karijera-item">
            <h3>Menadžer teretane</h3>
            <p>Osoba sa iskustvom u vođenju teretane i upravljanju timom.</p>
          </li>
          <li className="karijera-item">
            <h3>Nutricionista</h3>
            <p>Nutricionista za rad sa našim članovima na ishrani.</p>
          </li>
        </ul>
      </section>

      <section className="karijera-benefits">
        <h2 className="karijera-subtitle">Zašto raditi kod nas?</h2>
        <ul className="karijera-benefits-list">
          <li>Fleksibilno radno vreme</li>
          <li>Mogućnost profesionalnog usavršavanja</li>
          <li>Prijateljsko okruženje</li>
          <li>Popusti na članstvo</li>
        </ul>
      </section>

      <section className="karijera-apply">
        <h2 className="karijera-subtitle">Kako se prijaviti?</h2>
        <p>
          Pošaljite vaš CV na{" "}
          <a href="mailto:prijava@fitnesscentar.com">
            prijava@fitnesscentar.com
          </a>
        </p>
      </section>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default Karijera;
