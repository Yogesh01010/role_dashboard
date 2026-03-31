import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "./src/models/User.js";

await mongoose.connect("mongodb://127.0.0.1:27017/role_dashboard");

const hashed = await bcrypt.hash("123456", 10);

await User.create({
  name: "Super Admin",
  email: "super@admin.com",
  password: hashed,
  role: "SUPER_ADMIN"
});

console.log("Seeded!");
process.exit();