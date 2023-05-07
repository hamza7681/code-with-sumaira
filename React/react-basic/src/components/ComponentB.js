import React, { useState } from "react";

const ComponentB = () => {
  const [name, setName] = useState("Hamza");
  const [age, setAge] = useState(25);
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [show, setShow] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [cPasswordErr, setCPasswordErr] = useState("");

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
    const validation = formValidation();
    if (validation) {
      console.log(inputValue);
      console.log(password);
      setEmailErr("");
      setPasswordErr("");
      setCPasswordErr("");
    }
  };

  const formValidation = () => {
    let valid = true;
    if (inputValue === "") {
      setEmailErr("Email is empty");
      valid = false;
    } else if (password === "") {
      setPasswordErr("Password is empty");
      valid = false;
    } else if (password.length < 6) {
      setPasswordErr("Password is at least 6 characters long");
      valid = false;
    } else if (password !== cPassword) {
      setCPasswordErr("password is not matched");
      valid = false;
    }
    return valid;
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
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="border-[2px] border-gray-500 w-full px-[10px] py-[7px]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <p className="text-red-500">{emailErr}</p>
        </div>
        <div>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            className="border-[2px] border-gray-500 w-full px-[10px] py-[7px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500">{passwordErr}</p>
        </div>
        <div>
          <input
            type={show ? "text" : "password"}
            placeholder="Confirm your password"
            className="border-[2px] border-gray-500 w-full px-[10px] py-[7px]"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <p className="text-red-500">{cPasswordErr}</p>
        </div>
        <button onClick={showPassword}>Show</button>
        <button onClick={addValue}>Submit</button>
      </form>
    </>
  );
};

export default ComponentB;
