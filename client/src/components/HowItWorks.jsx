import React from "react";
import howItWorksImg from "../assets/images/how-it-works.jpg"; // Update if needed

const steps = [
  {
    number: "1",
    title: "Sign In or Create Account",
    description: "Create your profile and list your skills.",
  },
  {
    number: "2",
    title: "Find Jobs",
    description: "Browse jobs that match your expertise and location.",
  },
  {
    number: "3",
    title: "Complete Job",
    description: "Deliver excellent service and earn positive reviews.",
  },
  {
    number: "4",
    title: "Get Paid Securely",
    description: "Receive secure payments directly into your account.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-[32px] mt-[200px] mb-[100px] relative ">
      <div className="mx-auto ml-40 mr-40 flex justify-between items-center relative">
        {/* Right: Background Image with lower z-index */}
        <div className="w-[65%] ml-auto relative rounded-[24px] overflow-hidden">
          {/* Image */}
          <img
            src={howItWorksImg}
            alt="Process"
            className="rounded-[24px] object-cover w-full "
          />

          {/* Black Transparent Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 rounded-[24px]"></div>
        </div>

        {/* Left: Step Cards with higher z-index */}
        <div className="absolute left-0 top-55 -translate-y-1/2 z-10 w-[50%] pl-[32px] space-y-[16px]">
          <h2 className="text-[42px] font-bold text-main_yellow mb-15 font-nunito_sans">
            How It Works ?
          </h2>

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-light_gray px-10 py-4 rounded-[20px] shadow-md"
            >
              {/* Number and Title Row */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[24px] h-[24px] bg-main_yellow rounded-full flex items-center justify-center text-white font-bold text-[14px]">
                  {step.number}
                </div>
                <h3 className="font-medium font-inter text-[20px]">
                  {step.title}
                </h3>
              </div>

              {/* Description aligned under number */}
              <div className="mt-[8px]">
                <p className="text-[14px] font-inter font-normal text-font_gray">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
