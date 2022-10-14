import React, { useState, useEffect } from "react";
import { Clock, NavBar } from "../components ";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="base-container-secondary">
      <div className="flex justify-start mt-10 w-screen pl-10">
        <Clock />
      </div>
      <p className="font-light w-screen mt-2 text-xl text-dark-pink text-left pl-10">
        Welcome
      </p>
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        Name
      </p>
      <NavBar />
      <p className="font-light w-screen mt-5 text-xl text-dark-pink text-left pl-10">
        Calendar
      </p>
      <div className="h-60 w-11/12 bg-white rounded-xl drop-shadow-xl"></div>
      <p className="font-light w-screen mt-2 text-xl text-dark-pink text-left pl-10">
        Graph
      </p>
      <div className="h-60 w-11/12 bg-white rounded-xl drop-shadow-xl"></div>
    </div>
  );
};

export default Home;
