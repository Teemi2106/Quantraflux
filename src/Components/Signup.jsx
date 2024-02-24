import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../CSS/signup.css";

const Signup = () => {
  return (
    <div className="formDiv">
      <form className="logForm">
        <div className="inputbox">
          <input required="required" id="username" type="text" />
          <span>Username</span>

          <i></i>
        </div>
        <div className="inputbox">
          <input required="required" id="password" type="password" />
          <span>Password</span>
          <i></i>
        </div>
        <span>
          <FaEye className="FaEye" id="FaEye" />
        </span>

        <button className="logButton" type="submit">
          Login
        </button>
        <Link className="Link" to="">
          Aready have an account? Click here to go to login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
