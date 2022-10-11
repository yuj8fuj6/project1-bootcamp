import React, { useState, useEffect } from "react";
import { Button } from "../components ";
import { Form } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className="base-container">
      <p className="font-light w-screen mt-10 text-3xl text-dark-pink text-left pl-10">
        Welcome
      </p>
      <p className="font-light w-screen text-xl text-dark-pink text-left pl-10">
        Let us know more about you!
      </p>
      <Form />
      <Link to="/home">
        <Button value="Confirm" />
      </Link>
    </div>
  );
};

export default Registration;
