import React from "react";
import logo from "../images/image2.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Header.css";

const Header = () => {
  /*  const handleLogout = () => {
    alert("Logout Not initiated.");
  }; */

  const navigate = useNavigate();
  const handleLandingPage = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };
  const handleAboutClick = () => {
    navigate("/About");
  };

  return (
    <header className="mainHeader">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="navbar">
        <ul className="headerUl">
          <li className="headlist" onClick={handleLandingPage}>
            Home
          </li>
          <li className="headlist" onClick={handleLoginClick}>
            Login
          </li>
          <li className="headlist" onClick={handleAboutClick}>
            About
          </li>
        </ul>
      </nav>
      {/*  <div className="profile">
        <h3 className="username">
          <span>🪪</span> Welcome, Admin!
        </h3>
        <button className="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div> */}
    </header>
  );
};

export default Header;
