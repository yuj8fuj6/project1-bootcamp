import React, { useState, useEffect } from "react";
import { BackButton, Button, AlertButton } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Alert = () => {
  return (
    <div className="base-container">
      <header className="App-header">
        <p className="m-10 text-2xl text-dark-pink">
          Alert!
        </p>
        <AlertButton />
      </header>
    </div>
  );
};

export default Alert;
