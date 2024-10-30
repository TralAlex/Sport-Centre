import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About Us
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
        <NavLink to="/blogs" activeStyle>
          Blog
        </NavLink>
        <NavLink to="/career" activeStyle>
          Career
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
        <NavLink to="/vesti" activeStyle>
          Vesti
        </NavLink>
        <NavLink to="/blog" activeStyle>
          Blog
        </NavLink>
        <NavLink to="/karijera" activeStyle>
          Karijera
        </NavLink>
        <NavLink to="/online-treninzi" activeStyle>
          {" "}
          {/* Dodata stavka */}
          Online treninzi
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
