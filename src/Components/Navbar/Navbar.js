import React from "react";
import logo from "../../Assets/fulllogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row w-screen py-4 px-8 bg-blue-800 justify-between items-center">
      <div className="w-[10vw]">
        <img src={logo} className="object-contain"></img>
      </div>
      <div className="flex flex-row justify-between gap-x-5 text-white">
        <a href="/">
          <div className="hover:text-[#b5b5ffbe] cursor-pointer">Home</div>
        </a>
        <a href="/employees">
          <div className="hover:text-[#b5b5ffbe] cursor-pointer">Employees</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
