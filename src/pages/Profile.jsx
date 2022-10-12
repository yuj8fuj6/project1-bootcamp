import React, { useState, useEffect } from "react";
import { BackButton, Button } from "../components ";
import { Form } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="base-container">
      <BackButton />
        <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
          Profile
        </p>
        <Form />
        <Link to="/home">
          <Button value="Update" />
        </Link>
    </div>
  );
};

export default Profile;
