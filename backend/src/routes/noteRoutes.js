import express from "express";
import {
  createNote,
  getNotes,
} from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.use(protect, authorizeRoles("USER"));

router.post("/", createNote);
router.get("/", getNotes);

export default router;