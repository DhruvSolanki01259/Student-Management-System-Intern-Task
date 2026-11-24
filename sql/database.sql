-- Create Database
CREATE DATABASE Student_Management_System;

USE Student_Management_System;

-- Create Table inside the database
CREATE TABLE
  students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    course VARCHAR(100) NOT NULL
  );

-- Insert 5 students data into the students table
INSERT INTO
  students (name, email, age, course)
VALUES
  ('Rahul', 'rahul@gmail.com', 22, 'NodeJS'),
  ('Priya', 'priya@gmail.com', 21, 'ReactJS'),
  ('Amit', 'amit@gmail.com', 23, 'NodeJS'),
  ('Neha', 'neha@gmail.com', 22, 'Python'),
  ('Karan', 'karan@gmail.com', 24, 'Java');