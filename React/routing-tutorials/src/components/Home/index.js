// import React, { useEffect, useState } from "react";
import React from "react";
// import { useLocation } from "react-router-dom";

const Home = () => {
  // const location = useLocation();
  // const { state } = location;

  // const [name, setName] = useState("Hamza");
  // const [restart, setRestart] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setName("Ali");
  //     console.log("This is depend on dependency array");
  //     setRestart(false);
  //   }, 3000);
  // }, [restart]);

  // const refetch = () => {
  //   setRestart(true);
  // };

  return (
    <>
      <h1 className="text-[24px]">This is home</h1>
      {/* <button onClick={refetch}>CLick me</button> */}
    </>
  );
};

export default Home;
