export const validateData = (name, email, age, course) => {
  if (!name || !email || !age || !course) {
    return {
      isValid: false,
      message: "All Student Details are Required.",
    };
  }

  if (
    typeof name !== "string" ||
    typeof course !== "string" ||
    typeof email !== "string"
  ) {
    return {
      isValid: false,
      message: "Data must be in Strings.",
    };
  }
  if (!name.trim() || !course.trim() || !email.trim()) {
    return {
      isValid: false,
      message: "Data cannot be Empty.",
    };
  }

  // Check email from regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return {
      isValid: false,
      message: "Please Enter a Valid Email Address.",
    };
  }

  if (Number(age) <= 0) {
    return {
      isValid: false,
      message: "Age cannot be Negative.",
    };
  }

  return {
    isValid: true,
    message: "Student Details are Valid.",
  };
};
