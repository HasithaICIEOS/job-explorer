import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id} className="border p-3 mb-2 rounded shadow">
              <h2 className="text-xl">{job.title}</h2>
              <p>
                {job.company} - {job.location}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
