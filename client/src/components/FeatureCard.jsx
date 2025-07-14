import React from "react";
import circleImage from "../assets/icons/Circle_Layer.svg";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-main_white p-10 max-w-[300px] h-[250px] space-y-[10px] rounded-[8px] shadow-md">
      <img
        src={circleImage}
        alt="Circle Image"
        className="w-[37px] h-[37px] object-cover object-center"
      />
      <p className="text-[22px] font-bold  leading-tight">{title}</p>
      <h1 className="text-[14px] leading-[24px] font-light">{description}</h1>
    </div>
  );
};
export default FeatureCard;
