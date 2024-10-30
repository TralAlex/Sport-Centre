import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); // State to show/hide the login form
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/registracija");
  };

  const handleLoginClick = () => {
    setShowLoginForm(true); // Show the login form
  };

  const handleCloseModal = () => {
    setShowLoginForm(false); // Hide the login form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    alert("Login successful!");
    setShowLoginForm(false); // Hide the form after successful login
  };
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
    <div className="home">
      <div className="overlay"></div>
      <h1>NEMAS IZGOVOR. TRENIRAJ!</h1>
      <p>VASE FIRNES PUTOVANJE POCINJE OVDE</p>
      <button className="register-button" onClick={handleRegisterClick}>
        REGISTRUJ SE
      </button>
      <button className="login-button" onClick={handleLoginClick}>
        Log In
      </button>

      {showLoginForm && (
        <div className="login-modal">
          <div className="modal-content">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Ime" required />
              <input type="email" placeholder="Email" required />
              <button type="submit">Uloguj se</button>
            </form>
            <button className="close-button" onClick={handleCloseModal}>
              Zatvori
            </button>
          </div>
        </div>
      )}
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default Home;
