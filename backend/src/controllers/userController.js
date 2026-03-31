import { User } from "../models/User.js";
import { hashPassword } from "../utils/hash.js";

export const createUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  const hashed = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashed,
    role: "USER",
    createdBy: req.user.id,
  });

  res.json(user);
};