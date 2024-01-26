import React from "react";

const Input = ({ type, label }) => {
  return (
    <label>
      <p>{label}</p>
      <input type={type} />
    </label>
  );
};

export default Input;
