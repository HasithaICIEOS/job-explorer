import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  const jobData = { ...req.body, postedBy: req.user.id };
  if (req.files?.length) jobData.images = req.files.map((f) => f.filename);
  const job = new Job(jobData);
  await job.save();
  res.status(201).json(job);
};

export const getJobs = async (req, res) => {
  const jobs = await Job.find().populate(
    "postedBy",
    "firstName lastName email"
  );
  res.json(jobs);
};

export const updateJob = async (req, res) => {
  const jobData = { ...req.body };
  if (req.files?.length) jobData.images = req.files.map((f) => f.filename);
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, jobData, {
    new: true,
  });
  res.json(updatedJob);
};

export const deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
};
