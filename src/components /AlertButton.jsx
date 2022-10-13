import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsExclamationDiamond } from "react-icons/bs";

const AlertButton = (props) => {
  return (
    <Link to="/home">
      <button
        type="button"
        onClick={props.handleSubmit}
        className="text-xxl text-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:text-pink-700"
      >
        <BsExclamationDiamond />
      </button>
    </Link>
  );
};

export default AlertButton;
