import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-1.5 m-2.5 bg-gray-200 rounded-md">{name}</button>
    </div>
  );
};

export default Button;
