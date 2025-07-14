import React from "react";

const JobCard = ({
  title,
  location,
  date,
  time,
  category,
  skills,
  image,
  timePosted,
}) => {
  return (
    <div className="bg-white rounded-[12px] p-4 flex justify-between items-start shadow-sm">
      {/* Left Image */}
      <div className="w-[150px] h-[150px] overflow-hidden rounded-[8px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[8px]"
          loading="lazy"
        />
      </div>

      {/* Middle Content */}
      <div className="flex-1 px-6">
        <div className="font-inter">
          <h3 className="font-semibold text-[20px]">{title}</h3>
          <p className="text-font_gray font-normal text-[12px]">{location}</p>
        </div>

        <div className="flex gap-32 mt-4 text-font_gray text-[14px] font-inter">
          <div>
            <p>Date</p>
            <p>{date}</p>
          </div>
          <div>
            <p>Time</p>
            <p>{time}</p>
          </div>
        </div>

        <div className="flex gap-16 mt-4 text-font_gray text-[14px] font-inter">
          <div>
            <p className="pb-5">Category</p>
            <span className="px-4 py-1 rounded-full border text-sm">
              {category}
            </span>
          </div>
          <div>
            <p className="pb-5">Skill</p>
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-1 rounded-full border text-sm mr-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-end justify-between min-w-[130px] h-full">
        <span className="text-main_green text-sm whitespace-nowrap">
          {timePosted}
        </span>
        <button className="bg-main_yellow hover:opacity-90 text-black px-6 py-2 rounded-[8px] font-semibold mt-30">
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
