import express from "express";
import {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.array("images"), createJob);
router.get("/", getJobs);
router.put("/:id", protect, upload.array("images"), updateJob);
router.delete("/:id", protect, deleteJob);

export default router;
