import React, { useState, useEffect } from "react";
import { BackButton, FormMedicine } from "../components ";
import { Link, NavLink, Router, useNavigate } from "react-router-dom";

const handleSubmit = () => {}; 

const Medicine = () => {
  return (
    <div className="base-container-secondary">
      <BackButton />
      <p className="font-light w-screen mt-2 text-3xl text-dark-pink text-left pl-10">
        Mood
      </p>
      <FormMedicine
      />
      <Link>
        <button
          onClick={handleSubmit}
          className="text-xl p-3 m-4 w-60 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-xl"
        >
          Record
        </button>
      </Link>
    </div>
  );
};

export default Medicine;
