import React from "react";
import logo from "../images/image2.png";

const Header = () => {
  const handleLogout = () => {
    alert("Logout Not initiated.");
  };

  return (
    <header className="mainHeader">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav className="navbar">
        `
        <ul>
          <li className="headlist">Home</li>
          <li className="headlist">Login</li>
          <li className="headlist">About</li>
        </ul>
      </nav>
      {/*  <div className="profile">
        <h3 className="username">
          <span>🪪</span> Welcome, User!
        </h3>
        <button className="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div> */}
    </header>
  );
};

export default Header;
