import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import JobCard from "../components/JobCard";
import axios from "axios";
import image from "../assets/images/Jobs/AC-Installation.jpeg";

const TaskerPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-light_gray min-h-screen">
      <Navbar />

      <section className="px-[32px] mt-[32px] max-w-[1200px] mx-auto space-y-8">
        <h2 className="text-[32px] font-bold text-gray-800">Explore Jobs</h2>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <select className="px-8 py-2 rounded-[8px] bg-white border text-sm">
            <option>City</option>
          </select>
          <select className="px-8 py-2 rounded-[8px] bg-white border text-sm">
            <option>SubCity</option>
          </select>
          <select className="px-8 py-2 rounded-[8px] bg-white border text-sm">
            <option>Category</option>
          </select>
          <select className="px-8 py-2 rounded-[8px] bg-white border text-sm">
            <option>Skills</option>
          </select>

          <button className="px-8 py-2 bg-main_yellow rounded-[8px] text-black hover:opacity-90 transition">
            <div className="flex items-center">
              <FaSearch />
              <span className="ml-2">Search</span>
            </div>
          </button>
        </div>

        {/* Render Jobs */}
        <div className="space-y-6 mt-6">
          {jobs.map((job) => (
            <JobCard
              key={job._id}
              title={job.title}
              location={job.address}
              date={new Date(job.date).toLocaleDateString()}
              time={job.time}
              category={job.category}
              skills={job.skills}
              image={image}
              timePosted="Just Now"
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TaskerPage;
