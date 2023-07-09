import React from "react";
import { useSelector } from "react-redux";

const ComponentA = () => {
  const { count } = useSelector((s) => s.CounterSlice);

  return <h1>This is ComponentA counter with initial State {count}</h1>;
};

export default ComponentA;
