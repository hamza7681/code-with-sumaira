import React, { useState } from "react";

const ComponentB = () => {
  const [name, setName] = useState("Hamza");
  const [age, setAge] = useState(25);
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const changeData = () => {
    setName("Ali");
    setAge(22);
  };

  const showPassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const addValue = (e) => {
    e.preventDefault();
    console.log(inputValue);
    console.log(password);
  };

  return (
    <>
      <h1 className="text-[24px]">
        This is functional component and my name is {name}, my age is {age}
      </h1>
      <button className="bg-green-500 text-white p-4" onClick={changeData}>
        Button of functional
      </button>
      <form className="flex flex-col gap-2 px-[40px] pt-[30px]">
        <input
          type="text"
          placeholder="Enter your name"
          className="border-[2px] border-gray-500 w-full px-[10px] py-[7px]"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type={show ? "text" : "password"}
          placeholder="Enter your password"
          className="border-[2px] border-gray-500 w-full px-[10px] py-[7px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={showPassword}>Show</button>
        <button onClick={addValue}>Submit</button>
      </form>
    </>
  );
};

export default ComponentB;
