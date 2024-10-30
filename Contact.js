import React, { useState, useEffect } from "react";
import "./Page.css"; // Ensure this file contains the relevant styles

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/poruka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ime: formData.name,
          email: formData.email,
          poruka: formData.message,
        }),
      });

      if (response.ok) {
        alert("Poruka uspešno poslata!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Došlo je do greške. Pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Greška prilikom slanja poruke:", error);
      alert("Greška u komunikaciji sa serverom.");
    }
  };

  return (
    <div className="page">
      <h1>Kontaktirajte nas</h1>
      <p>Pitajte nas za bilo kakve informacije.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ime:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Poruka:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-info">
        <h2>Kontaktirajte nas:</h2>
        <p>
          <strong>Telefon:</strong> 063 88 04 971
        </p>
        <p>
          <strong>Email:</strong> gym@gmail.com
        </p>
        <p>
          <strong>Lokacija:</strong> Voždovac, Beograd
        </p>
      </div>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default Contact;
