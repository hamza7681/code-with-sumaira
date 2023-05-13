import React from "react";
import pic from "../assets/pic.jpg";
const Sum = () => {
  return (
    <div>
      <div className="p-[60px]">
        <img src={pic} />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-white font-bold  ">Meet the Exchange Hub</h1>
        <p className="text-white px-[90px] ">
          Camel clouds visual integration builder lets you build integrations in
          real time in a beautiful intuitive way
        </p>
      </div>
    </div>
  );
};

export default Sum;
