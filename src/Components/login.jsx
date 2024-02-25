import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import "../CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Casper" && password === "Caspersmiles") {
      alert("Login Successful");
      navigate("/Content");
    } else {
      alert("Invalid Username or password");
    }
  };

  const handlePasswordType = () => {
    const password = document.getElementById("password");
    if (password.type === "text") {
      password.type = "password";
    } else {
      password.type = "text";
    }
  };

  return (
    <div className="formDiv">
      <form className="logForm" onSubmit={handleLogin}>
        <div className="inputbox">
          <input
            required="required"
            id="username"
            type="text"
            autoComplete="false"
          />
          <span>Username</span>

          <i></i>
        </div>
        <div className="inputbox">
          <input
            required="required"
            id="password"
            type="password"
            autoComplete="false"
          />
          <span>Password</span>
          <i></i>
        </div>
        <span>
          <FaEye className="FaEye" id="FaEye" onClick={handlePasswordType} />
        </span>

        <button className="logButton" type="submit">
          Login
        </button>
        <Link className="Link" to="/Signup">
          Don't have an account? Click here to Sign up
        </Link>
      </form>
    </div>
  );
};

export default Login;
