import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full px-[32px] pt-[48px] pb-[48px] mt-[48px] bg-main_black">
      <div className="mx-auto ml-40 mr-40 space-y-[12px] flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-main_green">GREE</span>
          <span className="text-main_white">LOGIX</span>
        </div>
        <div className="hidden md:flex space-x-8 text-main_white font-medium">
          <a href="#" className="hover:text-main_green transition">
            Home
          </a>
          <a href="#" className="hover:text-main_green transition">
            Service providers
          </a>
          <a href="#" className="hover:text-main_green transition">
            About Us
          </a>
          <a href="#" className="hover:text-main_green transition">
            Contact Us
          </a>
        </div>
      </div>

      <div className="ml-40 mt-[48px] mb-[48px] mr-40 flex-1 border-t border-main_silver"></div>

      <div className="mx-auto ml-40 mr-40 space-y-[12px] flex items-center justify-between">
        <div className="text-main_silver text-sm">
          Greelogix &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className="hidden md:flex space-x-8 text-main_white font-medium">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-white text-[20px] hover:opacity-80 cursor-pointer" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-white text-[20px] hover:opacity-80 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-[20px] hover:opacity-80 cursor-pointer" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-[20px] hover:opacity-80 cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
