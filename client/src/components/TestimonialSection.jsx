import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaQuoteLeft,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/pagination";

import Profile from "../assets/images/profile-image.jpg"; // Default profile image

const testimonials = [
  {
    name: "Sarah Bennett",
    role: "Handyman Specialist",
    section: "Plumbing & Repairs",
    message:
      "This platform has been a game-changer for me. The secure payment system ensures I get paid on time, and the real-time notifications help me stay on top of new opportunities. Highly recommend it to all professionals!",
  },
  {
    name: "Jason Clark",
    role: "Electrician",
    section: "Electrical Services",
    message:
      "Finding clients has never been easier. I love the flexibility and fast communication. GREE LOGIX is now my go-to platform for freelance work.",
  },
  {
    name: "Anjali Perera",
    role: "Cleaning Specialist",
    section: "Home Cleaning",
    message:
      "GREE LOGIX connects me with verified clients and guarantees secure payments. I feel safe and valued on this platform.",
  },
];

const TestimonialSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 1, // 30% of element visible triggers the inView true
  });

  return (
    <section className="w-full px-[32px] mt-[100px] mb-[60px]">
      <div className="max-w-[1000px] mx-auto space-y-[60px]">
        {/* Heading */}
        <div className="text-center space-y-2">
          <p className="uppercase font-inter text-[14px] tracking-widest text-gray-500">
            Testimonial
          </p>
          <h2 className="text-5xl font-nunito_sans font-bold text-gray-800">
            Exceptional Service Stories
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          className="rounded-xl mb-3"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-light_gray rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm  ">
                {/* Image & Info */}
                <div className=" flex flex-col items-center text-center md:text-left min-w-[200px]">
                  <img
                    // src={Profile}
                    src={`https://i.pravatar.cc/150?u=${item.name}`}
                    alt={item.name}
                    className="w-[160px] h-[160px] rounded-full object-cover mx-auto md:mx-0"
                  />
                  <p className="font-bold mt-4 text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.role}</p>
                  <p className="text-sm text-gray-600">({item.section})</p>
                </div>

                <div className="flex-1 space-y-4 text-left ">
                  <div className="text-light_yellow  font-serif leading-none">
                    <FaQuoteLeft className="inline-block text-2xl mr-2 w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Secure Payments, Zero Hassle
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.message}
                  </p>
                  <div className="flex justify-center md:justify-start space-x-3 mt-3 text-[16px]">
                    <FaTwitter className="text-[#000] bg-white rounded-full p-1 w-6 h-6 hover:bg-light_yellow cursor-pointer border" />
                    <FaFacebookF className="text-[#000] bg-white rounded-full p-1 w-6 h-6 hover:bg-light_yellow cursor-pointer border" />
                    <FaInstagram className="text-[#000] bg-white rounded-full p-1 w-6 h-6 hover:bg-light_yellow cursor-pointer border" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center space-x-2" />

        {/* Stats Section */}
        <div
          ref={ref}
          className="grid grid-cols-3 divide-x-3 divide-main_yellow text-center py-6"
        >
          <div>
            <p className="text-7xl font-nunito_sans font-bold">
              {inView ? <CountUp end={700} duration={5} separator="," /> : "0"}+
            </p>
            <p className="text-3xl font-normal font-inter text-slate_gray">
              Completed Jobs
            </p>
          </div>
          <div>
            <p className="text-7xl font-nunito_sans font-bold">
              {inView ? <CountUp end={15} duration={5} separator="," /> : "0"}K+
            </p>
            <p className="text-3xl font-normal font-inter text-slate_gray">
              Clients
            </p>
          </div>
          <div>
            <p className="text-7xl font-nunito_sans font-bold">
              {inView ? <CountUp end={98} duration={5} /> : "0"}%
            </p>
            <p className="text-3xl font-normal font-inter text-slate_gray">
              Success Rate
            </p>
          </div>
        </div>

        {/* Optional: Pagination styling if needed */}
        <style>{`
          .swiper-pagination-bullet {
            background: #ccc;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #ffc107;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialSection;
