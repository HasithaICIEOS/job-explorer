import express from "express";
import { getProfile, updateProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.get("/me", protect, getProfile);
router.put(
  "/me",
  protect,
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "idImages", maxCount: 3 },
  ]),
  updateProfile
);

export default router;
