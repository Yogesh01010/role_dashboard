import { User } from "../models/User.js";
import { hashPassword } from "../utils/hash.js";

export const createAdmin = async (req, res) => {
  const { name, email, phone, password } = req.body;

  const hashed = await hashPassword(password);

  const admin = await User.create({
    name,
    email,
    phone,
    password: hashed,
    role: "ADMIN",
  });

  res.json(admin);
};