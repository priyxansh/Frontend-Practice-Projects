import React, { useState } from "react";
import "../styles/NavBar.css";
import NavLogo from "../components/NavLogo";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <nav className="navbar">
      <NavLogo />
      <ul className={`nav-list ${expanded? "expanded":""}`}>
        <li className="nav-item mobile">
          <a href="/" className="nav-link">Sumbit a request</a>
        </li>
        <li className="nav-item mobile">
          <a href="/" className="nav-link">Log In</a>
        </li>
        <div className="button-container">
          <button className="request neutral">Submit a request</button>
          <button className="login primary">Log In</button>
        </div>
      </ul>
      <button
        className="nav-toggler"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <HamburgerMenu />
      </button>
    </nav>
  );
};

export default NavBar;
