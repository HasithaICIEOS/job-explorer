import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const servingAreaSchema = new mongoose.Schema({
  city: String,
  subCity: String,
});

const payoutDetailsSchema = new mongoose.Schema({
  type: { type: String, enum: ["Mobile Money", "Bank"] },
  accountNumber: String,
  bankName: String,
});

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    address: String,
    profileImage: String,
    email: { type: String, unique: true },
    phone: String,
    idNumber: String,
    idImages: [String],
    password: String,
    category: String,
    skills: [skillSchema],
    servingAreas: [servingAreaSchema],
    payoutDetails: payoutDetailsSchema,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
