import express from "express";
import {
  createUser,
  getUsers,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(protect, authorizeRoles("ADMIN"));

router.post("/", createUser);
router.get("/", getUsers);

export default router;