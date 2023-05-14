import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="bg-white flex flex-row justify-start gap-4 items-center shadow-lg px-[30px] py-[20px]">
        <Link
          className={`font-bold text-[22px] ${
            location.pathname === "/" ? "bg-orange-500" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={location.pathname === "/about" ? "bg-orange-500" : ""}
          to="/about"
        >
          About
        </Link>
        <Link
          className={location.pathname === "/contact" ? "bg-orange-500" : ""}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
