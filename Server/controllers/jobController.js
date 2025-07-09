const Job = require("../models/Job");

const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

module.exports = { getJobs };
