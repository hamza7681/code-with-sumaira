import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[10px]">
      <h1>This is contact page</h1>
      <button
        className="bg-red-500 px-[10px] py-[15px]"
        onClick={() => {
          navigate("/", { state: { name: "Hamza" } });
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Contact;
