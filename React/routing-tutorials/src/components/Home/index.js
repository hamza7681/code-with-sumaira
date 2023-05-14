import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { state } = location;

  return <div>My name is {state.name}</div>;
};

export default Home;
