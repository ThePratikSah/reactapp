import React, { useState } from "react";

const HooksEx = () => {
  const [num, setnum] = useState(0);
  const incrementVal = () => setnum(num + 1);
  const decrementVal = () => setnum(num - 1);

  return (
    <>
      <button onClick={decrementVal}>-</button>
      <span>{num}</span>
      <button onClick={incrementVal}>+</button>
    </>
  );
};

export default HooksEx;
