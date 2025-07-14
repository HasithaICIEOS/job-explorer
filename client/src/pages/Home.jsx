import React from "react";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import HowItWorks from "../components/Howitworks";
import HeroSection from "../components/HeroSection";
import QAAccordion from "../components/QAAccordion";

import heroImage from "../assets/images/hero-image.png";
import readyToWorkImage from "../assets/images/ready-to-work.gif";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";

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
            <HeroSection
              image={heroImage}
              heading={"Unlock Your Potential as a Skilled Professional"}
              description={
                "Join a community of experts and connect with clients\n looking for your unique skills. Secure payments,‍‍\nflexible work hours, and a user-friendly dashboard\n make it easier than ever to grow your career."
              }
              color={"text-main_yellow"}
              buttonBg={"bg-main_yellow"}
            />
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
      <TestimonialSection />

      <div className="bg-light_gray min-h-screen border border-light_gray">
        <section className=" w-full px-[32px] mt-[88px]">
          <div className=" mx-auto mb-10 ml-40 mr-40 space-y-[32px]">
            <HeroSection
              image={readyToWorkImage}
              heading={"Are You Ready To Work With Us Now?"}
              description={
                "Join a community of experts and connect with clients\n looking for your unique skills. Secure payments,\n flexible work hours, and a user-friendly dashboard\n make it easier than ever to grow your career."
              }
              color={"text-light_yellow"}
              buttonBg={"bg-light_yellow"}
            />
          </div>
        </section>
        <section className=" w-full px-[32px] mt-[48px] mb-20">
          <div className=" mx-auto ml-40 mr-40 space-y-[12px]">
            <QAAccordion
              question="What is GREE LOGIX and why is it the best website builder?"
              answer="GREE LOGIX is a modern web platform that allows users to easily build responsive, high-performing websites without coding. It offers secure hosting, drag-and-drop tools, and excellent support."
            />
            <QAAccordion
              question="What is GREE LOGIX and why is it the best website builder?"
              answer="GREE LOGIX is a modern web platform that allows users to easily build responsive, high-performing websites without coding. It offers secure hosting, drag-and-drop tools, and excellent support."
            />
            <QAAccordion
              question="What is GREE LOGIX and why is it the best website builder?"
              answer="GREE LOGIX is a modern web platform that allows users to easily build responsive, high-performing websites without coding. It offers secure hosting, drag-and-drop tools, and excellent support."
            />
            <QAAccordion
              question="What is GREE LOGIX and why is it the best website builder?"
              answer="GREE LOGIX is a modern web platform that allows users to easily build responsive, high-performing websites without coding. It offers secure hosting, drag-and-drop tools, and excellent support."
            />
            <QAAccordion
              question="What is GREE LOGIX and why is it the best website builder?"
              answer="GREE LOGIX is a modern web platform that allows users to easily build responsive, high-performing websites without coding. It offers secure hosting, drag-and-drop tools, and excellent support."
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
