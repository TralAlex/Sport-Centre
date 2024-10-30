import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css"; // Import the CSS file for custom styles

const Blog = () => {
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
    <div className="blog-container">
      <h1 className="blog-title">Naš Blog</h1>
      <p className="blog-intro">
        Dobrodošli na stranicu našeg bloga, gde delimo savete i informacije o
        fitnessu!
      </p>

      <div className="blog-grid">
        <div className="blog-item">
          <Link to="/blog/saveti-za-fitnes">
            <img
              src="https://www.firstbeat.com/wp-content/uploads/2022/07/FB-Luke-W-1-1300x867.jpg"
              alt="Saveti za uspešan trening"
              className="blog-img"
            />
            <h2 className="blog-item-title">Saveti za uspešan trening</h2>
          </Link>
          <p className="blog-item-description">
            Saznajte kako da poboljšate svoj trening i ostvarite bolje
            rezultate.
          </p>
        </div>

        <div className="blog-item">
          <Link to="/blog/nutricija-za-fitnes">
            <img
              src="https://www.husson.edu/online/blog/2024/02/iStock-1567549846.jpg"
              alt="Nutricija za fitnes"
              className="blog-img"
            />
            <h2 className="blog-item-title">Nutricija za fitnes</h2>
          </Link>
          <p className="blog-item-description">
            Upoznajte se s osnovama nutricije i kako ona utiče na vašu fizičku
            aktivnost.
          </p>
        </div>

        <div className="blog-item">
          <Link to="/blog/mentalna-priprema">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtHVBo9rmJVqz_tZIYw5wCgPdAiIgblyHPg&s"
              alt="Mentalna priprema za trening"
              className="blog-img"
            />
            <h2 className="blog-item-title">Mentalna priprema za trening</h2>
          </Link>
          <p className="blog-item-description">
            Saznajte kako mentalna priprema može uticati na vašu performansu.
          </p>
        </div>
      </div>

      {/* Dodavanje YouTube videa - Naši treninzi */}
      <div className="video-section">
        <h2 className="video-title">Naši treninzi</h2>
        <div className="videos-wrapper">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/YvrKIQ_Tbsk"
            title="Trening video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/kAUVOHB3XYM"
            title="Trening video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export default Blog;
