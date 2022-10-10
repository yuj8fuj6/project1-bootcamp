import React, { useState, useEffect } from "react";
import appicon from "../data/appicon.png";
import { Button } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="base-container">
      <header className="App-header">
        <img src={appicon} className="App-logo" alt="app-icon" />
        <p className="m-10 text-2xl text-dark-pink">
          Welcome Back !
        </p>
      </header>
    </div>
  );
};

export default Login;
