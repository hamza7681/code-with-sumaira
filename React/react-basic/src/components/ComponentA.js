import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = ({ name, address, click }) => {
  return (
    <>
      <h1>My name is {name}</h1>
      <h1>My address is {address}</h1>
      <button onClick={click}>Click</button>
      <ComponentB newName={name} />
    </>
  );
};

export default ComponentA;
