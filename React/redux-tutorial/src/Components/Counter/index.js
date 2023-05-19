import React from "react";
import { useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <button className="btn" onClick={decrement}>
        -
      </button>
      <button className="btn" onClick={increment}>
        +
      </button>
    </>
  );
};

export default Counter;
