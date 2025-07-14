import React from "react";
import heroImage from "../assets/images/hero-image.png";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/Howitworks";

const Home = () => {
  return (
    <>
      <div className="bg-light_gray min-h-screen border border-light_gray">
        <section className=" w-full px-[32px] mt-[32px]">
          {/* Central Column for Entire Page */}
          <div className=" mx-auto ml-40 mr-40 space-y-[32px]">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[650px] mt-[48px] rounded-[24px] overflow-hidden shadow">
              {/* Background Image */}
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-full object-cover object-center"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/60 via-black/40 to-black/20 px-[70px]">
                <div className=" max-w-[480px] space-y-[40px]">
                  <p className="text-[42px] font-bold text-main_yellow leading-tight">
                    Unlock Your Potential as a Skilled Professional
                  </p>
                  <h1 className="text-main_white text-[17px] leading-[24px] font-light">
                    Join a community of experts and connect with clients <br />
                    looking for your unique skills. Secure payments,
                    <br /> flexible work hours, and a user-friendly dashboard
                    <br /> make it easier than ever to grow your career.
                  </h1>
                  <button className="bg-main_yellow hover:bg-main_white font-medium text-[16px] px-[60px] py-[12px] rounded-[8px] transition">
                    Find a Job
                  </button>
                </div>
              </div>
            </div>

            {/* ⬇️ Future sections can also be added here and will stay inside the same column */}
          </div>
        </section>
        <section className="w-full px-[32px] mt-[200px] mb-30">
          <div className=" mx-auto ml-40 mr-40 space-y-[32px] flex justify-between">
            <div className=" max-w-[500px] space-y-[40px] mt-auto mb-auto">
              <p className="text-[42px] font-bold leading-tight tracking-[1%] font-nunito_sans">
                Discover Reliable Services, Anytime, Anywhere
              </p>
              <h1 className="text-[16px] leading-[24px] font-inter font-normal">
                Find trusted professionals, explore a wide range of services,
                and enjoy safe, secure payments—all with verified ratings and
                reviews to help you choose the best.
              </h1>
              <button className="bg-main_yellow hover:bg-main_white  font-medium text-[16px] px-[60px] py-[12px] rounded-[8px] transition">
                Find a Job
              </button>
            </div>
            {/* Feature Cards Section */}
            <div className="grid grid-cols-2 gap-[60px]">
              <FeatureCard
                title={"Secure Payments"}
                description={
                  "Receive payments directly into your account, effortlessly and securely."
                }
              />
              <FeatureCard
                title={"Larger Client Network"}
                description={
                  "Get connected to hundreds of clients actively seeking skilled professionals."
                }
              />
              <FeatureCard
                title={"Flexible Working Hours"}
                description={
                  "Work on your own schedule and choose Jobs that suit you."
                }
              />
              <FeatureCard
                title={"Real-time Notifications"}
                description={
                  "Never miss an opportunity with instant updates on new Jobs and messages."
                }
              />
            </div>
          </div>
        </section>
      </div>
      <HowItWorks />
    </>
  );
};

export default Home;
