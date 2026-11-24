import { successHandler, errorHandler } from "../utils/responseHandler.js";
import { validateData } from "../utils/validateData.js";
import db from "../config/db.js";

export const getStudents = async (req, res) => {
  try {
    const [students] = await db.query("SELECT * FROM students");
    if (students.length === 0) {
      return successHandler(
        res,
        200,
        "No Student Record is Present in Database.",
        [],
      );
    }

    return successHandler(res, 200, "Students Fetched Successfully.", students);
  } catch (error) {
    console.error("Error in Fetching Students:", error);
    return errorHandler(res, 500, "Internal Server Error.");
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, email, age, course } = req.body;

    const validation = validateData(name, email, age, course);
    if (!validation.isValid) {
      return errorHandler(res, 400, validation.message);
    }

    const [result] = await db.query(
      `INSERT INTO students (name, email, age, course)
       VALUES (?, ?, ?, ?)`,
      [name.trim(), email.trim(), Number(age), course.trim()],
    );

    return successHandler(res, 201, "Student Created Successfully.", {
      id: result.insertId,
      name,
      email,
      age,
      course,
    });
  } catch (error) {
    console.error("Error in Creating Student:", error);

    if (error.code === "ER_DUP_ENTRY")
      return errorHandler(res, 409, "Email Already Exists.");

    return errorHandler(res, 500, "Internal Server Error.");
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || Number(id) <= 0) {
      return errorHandler(res, 400, "Student ID is Invalid.");
    }

    const { name, email, age, course } = req.body;

    const validation = validateData(name, email, age, course);
    if (!validation.isValid) {
      return errorHandler(res, 400, validation.message);
    }

    const [student] = await db.query("SELECT * FROM students WHERE id = ?", [
      id,
    ]);
    if (student.length === 0) {
      return errorHandler(
        res,
        404,
        "No Student Present in Database Record with this ID.",
      );
    }

    const [result] = await db.query(
      `UPDATE students
       SET name = ?, email = ?, age = ?, course = ?
       WHERE id = ?`,
      [name.trim(), email.trim(), Number(age), course.trim(), id],
    );

    return successHandler(res, 200, "Student Details Updated Successfully.", {
      id,
      name,
      email,
      age,
      course,
    });
  } catch (error) {
    console.error("Error in Updating Student:", error);

    if (error.code === "ER_DUP_ENTRY")
      return errorHandler(res, 409, "Email Already Exists.");

    return errorHandler(res, 500, "Internal Server Error.");
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || Number(id) <= 0) {
      return errorHandler(res, 400, "Student ID is Invalid.");
    }

    const [result] = await db.query("DELETE FROM students WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return errorHandler(
        res,
        404,
        "No Student Present in Database Record with this ID.",
      );
    }

    return successHandler(
      res,
      200,
      `Student Record with ID ${id} has been Deleted Successfully.`,
      [],
    );
  } catch (error) {
    console.error("Error in Deleting Student:", error);

    return errorHandler(res, 500, "Internal Server Error.");
  }
};

export const searchStudents = async (req, res) => {
  try {
    const course = req.query.course;
    if (!course || !course.trim()) {
      return errorHandler(res, 400, "Course Query Parameter is not Present.");
    }

    const [students] = await db.query(
      "SELECT * FROM students WHERE course = ?",
      [course.trim()],
    );
    if (students.length === 0) {
      return successHandler(
        res,
        200,
        "No Student Record Found for this Course.",
        [],
      );
    }

    return successHandler(
      res,
      200,
      "Students Record Searched Successfully.",
      students,
    );
  } catch (error) {
    console.error("Error in Searching Students:", error);

    return errorHandler(res, 500, "Internal Server Error.");
  }
};
