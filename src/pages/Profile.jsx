import React, { useState, useEffect } from "react";
import { BackButton, Form, Button } from "../components ";
import { Link, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="base-container">
      <BackButton />
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        Profile
      </p>
      <Form />
      <Link>
        <button className="text-xl p-3 m-4 w-60 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-xl">
          Record
        </button>
      </Link>
      <Link to="/home">
        <Button value="Update" />
      </Link>
    </div>
  );
};

export default Profile;
