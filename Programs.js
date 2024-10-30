import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Programs.css"; // Uvozimo stilove

const Programs = () => {
  const programs = [
    {
      name: "Combat Sport grupni trening",
      description: "Intenzivne vežbe u stilu combat sport tehnike",
      imageUrl:
        "https://images.unsplash.com/photo-1599599814859-d7664b479dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGd5bXxlbnwwfHx8fDE2NjY2NTMzMDA&ixlib=rb-1.2.1&q=80&w=400",
      link: "/programs/combat-sport-group-training",
    },
    {
      name: "Yoga trening fleksibilnosti",
      description:
        "Poboljšajte vašu fleksibilnost i stanje uma kroz opuštajuće i aktivirajuće vežbe Yoge",
      imageUrl:
        "https://images.unsplash.com/photo-1541953254482-53e392e1f6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGd5bXxlbnwwfHx8fDE2NjY2NTMzMDA&ixlib=rb-1.2.1&q=80&w=400",
      link: "/programs/yoga-and-flexibility-training",
    },
    {
      name: "Trening snage i kondicije",
      description:
        "Poboljšajte svoju snagu i kondiciju uz naše specijalizovane programe treninga.",
      imageUrl:
        "https://images.unsplash.com/photo-1562078123-724b20b5b3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGd5bXxlbnwwfHx8fDE2NjY2NTMzMDA&ixlib=rb-1.2.1&q=80&w=400",
      link: "/programs/strength-and-conditioning",
    },
  ];
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
    <div className="programs-page">
      <h1>NASI PROGRAMI</h1>
      <div className="programs-list">
        {programs.map((program, index) => (
          <div className="program-item" key={index}>
            <img src={program.imageUrl} alt={program.name} />
            <h2>{program.name}</h2>
            <p>{program.description}</p>
            <Link to={program.link}>POGLEDAJ VISE</Link>
          </div>
        ))}
      </div>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </div>
  );
};

export default Programs;
