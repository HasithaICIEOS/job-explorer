import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// export const register = async (req, res) => {
//   try {
//     const { email, password, ...rest } = req.body;
//     const hashed = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashed, ...rest });
//     await newUser.save();
//     res.status(201).json({ message: "User registered" });
//   } catch {
//     res.status(500).json({ message: "Registration failed" });
//   }
// };

export const register = async (req, res) => {
  console.log("Register route hit"); // ✅ Add this

  try {
    const { email, password, ...rest } = req.body;
    console.log("Request body:", req.body); // ✅ Add this

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashed, ...rest });
    await newUser.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    console.error("Registration error:", err); // ✅ Add this
    res.status(500).json({ message: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch {
    res.status(500).json({ message: "Login failed" });
  }
};
