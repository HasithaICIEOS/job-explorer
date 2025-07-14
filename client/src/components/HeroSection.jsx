import React from "react";

const HeroSection = ({ image, heading, description, color, buttonBg }) => {
  return (
    <div className="relative w-full h-[650px] mt-[48px] rounded-[24px] overflow-hidden shadow">
      {/* Background Image */}
      <img
        src={image}
        alt="Hero"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/60 via-black/40 to-black/20 px-[70px]">
        <div className="max-w-[480px] space-y-[40px]">
          <p className={`text-[42px] font-bold leading-tight ${color}`}>
            {heading}
          </p>
          <h1 className="text-main_white text-[17px] whitespace-pre-line leading-[24px] font-light">
            {description}
          </h1>
          {/* <button
            className={`bg-${color} hover:bg-main_white font-medium text-[16px] px-[60px] py-[12px] rounded-[8px] transition`}
          > */}
          <button
            className={`${buttonBg} hover:bg-main_white font-medium text-[16px] px-[60px] py-[12px] rounded-[8px] transition`}
          >
            Find a Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
