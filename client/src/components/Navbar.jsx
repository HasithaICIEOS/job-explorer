import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-main_white shadow-md py-4 px-6  mt-8 mb-8 rounded-3xl md:px-12 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        <span className="text-main_green">GREE</span>
        <span className="text-main_black">LOGIX</span>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex space-x-8 text-main_black font-medium">
        <a href="#" className="hover:text-main_green transition">
          About Us
        </a>
        <a href="#" className="hover:text-main_green transition">
          Contact Us
        </a>
        <a href="#" className="hover:text-main_green transition">
          Post a Job
        </a>
      </div>

      {/* Right: Buttons */}
      <div className="space-x-4">
        <button className="px-6 py-3 rounded-xl hover:bg-main_yellow transition cursor-pointer">
          Sign In / Sign Up
        </button>
        <button className="border-2 border-light_yellow  px-6 py-3 rounded-xl hover:bg-main_yellow transition cursor-pointer">
          Become a Client
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
