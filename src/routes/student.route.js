import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudents,
  searchStudents,
  updateStudent,
} from "../controllers/student.controller.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

router.get("/search", searchStudents);

export default router;
