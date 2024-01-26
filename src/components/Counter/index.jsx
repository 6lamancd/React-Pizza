import { useState } from "react";

const Counter = ({ handleValue }) => {
  const [name, setName] = useState("");
  const handleName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleName} placeholder="Type your name" />
      <button onClick={() => handleValue(name)}>Click me</button>
    </div>
  );
};

export default Counter;
