import React, { useState } from "react";


const Register = () => {
  const [inputValue,setInputValue]=useState("")
  const [companyName,setCompanyName]= useState("")
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [email,setEmail] =useState("");
  const [companyErr,setCompanyErr]= useState("")
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [cPasswordErr, setCPasswordErr] = useState("");
  const addValue = (e) => {
    e.preventDefault();
    const validation = formValidation();
    if (validation) {
      alert("Form has submitted .")
      setCompanyErr("");
      setEmailErr("");
      setPasswordErr("");
      setCPasswordErr("");
    }
  };
  const formValidation = () => {
    let valid = true;
    if (email === "") {
      setEmailErr("Email is empty");
      valid = false;
    } 
    else if(companyName === ""){
      setCompanyErr("Company Name is empty");
      valid = false;
    }
    else if (password === "") {
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
    <div className="md:px-[120px] px-[20px] py-[30px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[22px] font-bold">Create account</h1>
        <p className="text-gray-400">
          Get access to exclusive features by creating an account{" "}
        </p>
      </div>
      <div className="flex flex-row w-full py-[50px] ">
      <div  className="flex flex-col gap-5 w-1/2">
        <label >Name</label>
        <label>Company Name</label>
        <label>Email</label>
        <label>Password</label>
        <label>Repeat Password</label>
      </div>
      <div className="w-1/2 flex  flex-col gap-5">
        <div className="w-full">
        <input className="rounded-[4px] w-full " type="text" placeholder="Gilbert Graham"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <p className="text-red-500">{emailErr}</p>
        </div>
        <div>
        <input  className="rounded-[4px]" type="text" placeholder="Your Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}/>
        </div>
        <div>
        <input className="rounded-[4px]" type="email" placeholder="hello@semiflat" 
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}/>
        </div>
        <div>
        <input className="rounded-[4px]" type="password" placeholder="Enter Your Password" 
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}/>
        </div>
        <div>
        <input className="rounded-[4px]" type="password" placeholder="Repeat Your Password"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}/>
        </div>
      </div>
      </div>
      <div>
      <div>
        <div className="flex flex-row" >
        <input type="checkbox" placeholder="" /> 
        <div className=""><p>I have read and accept the   <b>Terms and Conditions</b></p></div>
        </div>
      </div>
      <div>
        <div className="flex flex-row" >
        <input type="checkbox" placeholder="" /> 
        <div >
          <p>Subscribe to newsettler to stay up to date</p></div>
        </div>
      </div>
      </div>
      <div  className="flex justify-end py-[20px]">
        <button type="submit" className="bg-violet-500 py-[15px] px-[10px] font-bold text-white  
        "  onClick={addValue}>
          Create my account
        </button>
      </div>
      <div>
        <p>
          Already have an account? <b>Sign In</b>
        </p>
      </div>
    </div>
  );
};

export default Register;
