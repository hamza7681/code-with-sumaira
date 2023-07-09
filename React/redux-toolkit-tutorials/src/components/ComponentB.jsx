import React from "react";
import { addCount, removeCount } from "../Redux/Slices/CounterSlice";
import { useDispatch } from "react-redux";

const ComponentB = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addCount({ count: 5 }))}>
        Increment
      </button>
      <button onClick={() => dispatch(removeCount({ count: 10 }))}>
        Decrement
      </button>
    </>
  );
};

export default ComponentB;
