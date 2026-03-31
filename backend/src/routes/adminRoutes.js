import express from "express";
import {
  createAdmin,
  getAdmins,
  deleteAdmin,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(protect, authorizeRoles("SUPER_ADMIN"));

router.post("/", createAdmin);
router.get("/", getAdmins);
router.delete("/:id", deleteAdmin);

export default router;