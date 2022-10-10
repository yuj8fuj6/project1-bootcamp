import React, { useState } from "react";

const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsClicked(true)}
      className="text-xl p-3 m-4 w-60 bg-dark-pink drop-shadow-lg hover:drop-shadow-xl hover:bg-pink-700 rounded-xl"
    >
      {props.value}
    </button>
  );
};

export default Button;
