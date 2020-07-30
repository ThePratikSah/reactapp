import React, { useState } from "react";

const HooksEx = () => {
  const [name, setname] = useState(() => "Pratik");
  const nameChangeHandler = (event) => setname(event.target.value);

  return (
    <>
      <label>{name}</label>
      <input type="text" onChange={nameChangeHandler} value={name} />
    </>
  );
};

export default HooksEx;
