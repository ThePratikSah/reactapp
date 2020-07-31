import React, { useState } from "react";

const HooksEx = () => {
  const [name, setname] = useState(() => "Pratik");
  const [visible, setvisible] = useState(() => false);
  const nameChangeHandler = (event) => setname(event.target.value);

  let input = null;

  if (visible) {
    input = (
      <>
        <label>{name}</label>
        <input type="text" onChange={nameChangeHandler} value={name} />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => {
          setvisible((visible) => !visible);
        }}
      >
        Toggle Visibility
      </button>
      {input}
    </>
  );
};

export default HooksEx;
