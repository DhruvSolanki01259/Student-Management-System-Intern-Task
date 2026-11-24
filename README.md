# Student Management System – REST API

A backend REST API built using **Node.js, Express.js, and MySQL** to manage student records through CRUD (Create, Read, Update, Delete) operations and course-based search functionality.

This project demonstrates REST API development, SQL database integration, input validation, error handling, and modular backend architecture.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technologies Used](#2-technologies-used)
3. [Project Structure](#3-project-structure)
4. [Prerequisites](#4-prerequisites)
5. [Database Initialization](#5-database-initialization)
6. [Environment Configuration](#6-environment-configuration)
7. [Installation and Setup](#7-installation-and-setup)
8. [Running the Application](#8-running-the-application)
9. [API Documentation](#9-api-documentation)
   - [Base URL](#base-url)
   - [Default Route](#91-default-route)
   - [Student Routes](#92-student-routes)
   - [Invalid Route](#93-invalid-route)
10. [Response Structure](#10-response-structure)
11. [Input Validation and Error Handling](#11-input-validation-and-error-handling)
12. [Postman Testing](#12-postman-testing)
13. [Environment Variables Reference](#13-environment-variables-reference)

---

# 1. Project Overview

The Student Management System is a RESTful backend application developed using Node.js and Express.js, with MySQL as its relational database.

The application allows users to:

- Create new student records.
- Retrieve all student records.
- Update existing student information.
- Delete student records using their unique ID.
- Search for students based on their course name.

The application follows a modular architecture, separating routes, controllers, database configuration, and utility functions to maintain clean and manageable code.

**Important:** All student-related operations, including course-based searching, are organized under a single `/students` route. The search functionality is implemented as a sub-route of the student router.

# 2. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend framework for creating REST APIs |
| MySQL | Relational database management system |
| MySQL2 | MySQL database connectivity |
| Nodemon | Automatically restarts the server during development |
| dotenv | Loads environment variables from the `.env` file |
| Postman | API testing and verification |
| MySQL Workbench | Database management and SQL script execution |

# 3. Project Structure

The project follows a modular folder structure to keep different application responsibilities separate.

```text
Student-Management-System-Intern-Task/
│
├── sql/
│   └── database.sql
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── student.controller.js
│   │
│   ├── routes/
│   │   └── student.route.js
│   │
│   ├── utils/
│   │   ├── responseHandler.js
│   │   └── validateData.js
│   │
│   └── index.js
│
├── postman collection/
│   └── Student-Management-System-Intern-Task.postman_collection
│
├── postman screenshots/
│   ├── create-students.jpg
│   ├── fetch-students.jpg
│   ├── update-students.jpg
│   ├── delete-students.jpg
│   └── search-students-with-course.jpg
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Folder and File Explanation

**`sql/`**

Contains the `database.sql` file, which is responsible for the initial database setup.

It includes:
- Database creation.
- Student table creation.
- Insertion of five sample student records.

**`src/config/`**

Contains the database configuration.

- `db.js`: Establishes a MySQL connection pool using `mysql2/promise` and environment variables.

**`src/controllers/`**

Contains the application logic for handling student-related operations.

- `student.controller.js`: Implements student creation, retrieval, updating, deletion, and course-based searching.

**`src/routes/`**

Contains the API route definitions.

- `student.route.js`: Defines all student-related routes and connects them to their respective controller functions.

**`src/utils/`**

Contains reusable utility functions.

- `responseHandler.js`: Provides reusable success and error response handlers to maintain a consistent JSON response structure.
- `validateData.js`: Validates student information before database operations.

**`src/index.js`**

The main entry point of the application.

It:
- Initializes the Express application.
- Enables JSON request body parsing.
- Registers the student routes.
- Defines the default route (`/`).
- Handles invalid routes.
- Starts the server on the configured port.

**`postman collection/`**

Contains the exported Postman collection for testing the application's API endpoints.

**`postman screenshots/`**

Contains screenshots demonstrating the API requests and their corresponding responses.

**`.env.example`**

Contains the sample environment variable configuration required to run the application.

**`.gitignore`**

Specifies files and directories that should not be tracked by Git, including environment files and `node_modules`.

# 4. Prerequisites

Before running the application, make sure the following software is installed:

1. **Node.js and npm** – To execute the backend application and install dependencies.
2. **MySQL Server** – To store and manage student records.
3. **MySQL Workbench** – To execute the SQL initialization script and manage the database.
4. **Git** – To clone the repository (optional if downloading the project directly).
5. **Postman** – To test the REST API endpoints.

# 5. Database Initialization

The project contains a dedicated `sql` folder in the root directory.

Inside this folder, the `database.sql` file contains all the SQL statements required to initialize the database.

The script performs the following operations:

1. Creates a database named `Student_Management_System`.
2. Selects the newly created database.
3. Creates a table named `students`.
4. Inserts five sample student records into the table.

### Database Schema

The `students` table contains the following columns:

| Column | Data Type | Constraints | Description |
|---|---|---|---|
| id | INT | Primary Key, Auto Increment | Unique student identifier |
| name | VARCHAR(100) | NOT NULL | Student's name |
| email | VARCHAR(100) | UNIQUE, NOT NULL | Student's email address |
| age | INT | NOT NULL | Student's age |
| course | VARCHAR(100) | NOT NULL | Student's course |

### Sample Records

The initialization script inserts five records:

| Name | Email | Age | Course |
|---|---|---:|---|
| Rahul | rahul@gmail.com | 22 | NodeJS |
| Priya | priya@gmail.com | 21 | ReactJS |
| Amit | amit@gmail.com | 23 | NodeJS |
| Neha | neha@gmail.com | 22 | Python |
| Karan | karan@gmail.com | 24 | Java |

### How to Import `database.sql` Using MySQL Workbench

Follow these steps to initialize the database using MySQL Workbench.

**Step 1: Open MySQL Workbench**

Launch MySQL Workbench on your system.

**Step 2: Connect to Your MySQL Server**

- Locate your existing MySQL connection on the home screen.
- Double-click the connection.
- Enter your MySQL password if prompted.

**Step 3: Open the SQL Script**

- Navigate to the top menu.
- Click `File`.
- Select `Open SQL Script`.
- Browse to your downloaded or cloned project directory.
- Open the following file:

```text
Student-Management-System-Intern-Task/sql/database.sql
```

**Step 4: Execute the SQL Script**

After opening the file:

- Verify that the complete SQL script is visible in the query editor.
- Click the lightning bolt icon (Execute).
- Alternatively, use the keyboard shortcut `Ctrl + Shift + Enter` to execute the entire script.

**Step 5: Verify Database Creation**

Once execution is complete:

- Navigate to the `SCHEMAS` panel on the left side.
- Click the refresh icon if the database is not immediately visible.
- Locate the database named `Student_Management_System`.
- Expand the database.
- Expand the `Tables` section.
- Locate the `students` table.

**Step 6: Verify the Inserted Records**

Open a new SQL query tab and execute:

```sql
USE Student_Management_System;

SELECT * FROM students;
```

You should now see the five sample student records inserted by the initialization script.

**Database initialization is now complete.**

> Note: The provided SQL script is intended for initial setup. Since it uses `CREATE DATABASE` and `CREATE TABLE` without `IF NOT EXISTS`, execute it against a fresh database setup rather than repeatedly running it after the database and table have already been created.

# 6. Environment Configuration

The application uses environment variables to manage database credentials and server configuration.

A sample environment configuration file named `.env.example` is provided in the root directory.

Before running the application, create your own `.env` file using the provided example.

### Steps to Configure Environment Variables

**Step 1:** Locate `.env.example` in the root directory.

**Step 2:** Rename or copy `.env.example` to `.env`.

**Step 3:** Open the `.env` file and update the values according to your local MySQL configuration.

The `.env.example` file contains the following configuration:

```env
# Update this file name from .env.example to .env

PORT="8000" # Use the same port or update it

DB_HOST="CONNECTION" # Use whatever your MySQL Workbench connection host is

DB_USER="SQL_USER" # Most of the cases the user is root

DB_NAME="DATABASE_NAME" # The database name, in this case, the database.sql file creates Student_Management_System, so DB_NAME="Student_Management_System"

DB_PASSWORD="YOUR_SQL_PASSWORD" # Use your MySQL Password
```

**Important configuration details:**

- `PORT`: The port on which the Express server will run. The default value is `8000`.
- `DB_HOST`: The hostname of your MySQL server. For a typical local installation, this is `localhost` or `127.0.0.1`. Use the actual hostname configured for your MySQL connection.
- `DB_USER`: Your MySQL username. In most local installations, this is `root`.
- `DB_NAME`: The database name. Use `Student_Management_System`, as created by the provided SQL script.
- `DB_PASSWORD`: Your MySQL user password.

**Important:** Do not commit your actual `.env` file or expose your database credentials publicly. The `.env` file is included in `.gitignore`.

# 7. Installation and Setup

After initializing the database and configuring the environment variables, follow these steps to install the project dependencies.

### Step 1: Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project directory:

```bash
cd Student-Management-System-Intern-Task
```

### Step 2: Install Dependencies

Execute:

```bash
npm install
```

This command installs all the dependencies specified in `package.json`.

The main dependencies include:

- express
- mysql2
- dotenv

Nodemon is installed as a development dependency.

### Step 3: Configure the Environment

Create the `.env` file using `.env.example` and update the database credentials.

Make sure the `DB_NAME` matches the database created through `database.sql`.

### Step 4: Verify Database Setup

Open MySQL Workbench and verify that:

- `Student_Management_System` exists.
- The `students` table exists.
- The five sample records are present.

# 8. Running the Application

After completing the installation and configuration steps, start the development server using:

```bash
npm run dev
```

The application uses Nodemon to automatically restart the server when changes are made to the source files.

If the configuration is correct, the terminal should display:

```text
MySQL Connected Successfully!
Server connected to PORT: 8000
```

The backend application will now be available at:

```text
http://localhost:8000
```

# 9. API Documentation

## Base URL

All API requests use the following base URL by default:

```text
http://localhost:8000
```

The port can be changed through the `PORT` environment variable.

## 9.1 Default Route

### Check Server Status

**Endpoint:**

```http
GET /
```

**Description:**

This is the default route of the application.

It is used to verify whether the Express server is running and responding to requests.

**Expected Status Code:**

`200 OK`

**Example Response:**

```json
{
  "success": true,
  "error": false,
  "message": "Server is Running."
}
```

This route does not perform any database operation.

## 9.2 Student Routes

All student-related endpoints are registered under a single `/students` route.

The course-based search endpoint is also defined inside the same student router as a sub-route.

The following operations are available:

| HTTP Method | Endpoint | Description |
|---|---|---|
| POST | `/students` | Create a new student |
| GET | `/students` | Retrieve all students |
| PUT | `/students/:id` | Update student details |
| DELETE | `/students/:id` | Delete a student by ID |
| GET | `/students/search?course=NodeJS` | Search students by course |

### 9.2.1 Create Student

**Endpoint:**

```http
POST /students
```

**Description:**

Creates a new student record in the MySQL database.

**Request Body:**

Select `Body` → `raw` → `JSON` in Postman.

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "age": 22,
  "course": "NodeJS"
}
```

**Working:**

1. Receives student details through the request body.
2. Extracts `name`, `email`, `age`, and `course`.
3. Validates the provided information using the reusable validation utility.
4. Checks for duplicate email addresses through the database's UNIQUE constraint.
5. Inserts the student record into the database using a parameterized SQL query.
6. Returns the newly created student information along with its generated ID.

**Expected Status Codes:**

| Status Code | Description |
|---|---|
| 201 | Student created successfully |
| 400 | Invalid or missing student information |
| 409 | Email address already exists |
| 500 | Internal server error |

**Example Success Response:**

```json
{
  "success": true,
  "error": false,
  "message": "Student Created Successfully.",
  "data": {
    "id": 6,
    "name": "John",
    "email": "john@gmail.com",
    "age": 22,
    "course": "NodeJS"
  }
}
```

### 9.2.2 Get All Students

**Endpoint:**

```http
GET /students
```

**Description:**

Retrieves all student records available in the database.

**Working:**

1. Receives a GET request.
2. Executes a SELECT query to fetch all records from the `students` table.
3. Checks whether any student records are available.
4. Returns all student records in JSON format.
5. If no records are available, returns a successful response with an empty array.

**Expected Status Codes:**

| Status Code | Description |
|---|---|
| 200 | Request processed successfully |
| 500 | Internal server error |

**Example Success Response:**

```json
{
  "success": true,
  "error": false,
  "message": "Students Fetched Successfully.",
  "data": [
    {
      "id": 1,
      "name": "Rahul",
      "email": "rahul@gmail.com",
      "age": 22,
      "course": "NodeJS"
    },
    {
      "id": 2,
      "name": "Priya",
      "email": "priya@gmail.com",
      "age": 21,
      "course": "ReactJS"
    }
  ]
}
```

**When No Student Records Are Available:**

```json
{
  "success": true,
  "error": false,
  "message": "No Student Record is Present in Database.",
  "data": []
}
```

### 9.2.3 Update Student

**Endpoint:**

```http
PUT /students/:id
```

**Description:**

Updates the details of an existing student using their unique student ID.

**Example:**

```http
PUT /students/1
```

**Request Body:**

```json
{
  "name": "Rahul Sharma",
  "email": "rahulsharma@gmail.com",
  "age": 23,
  "course": "NodeJS"
}
```

**Working:**

1. Receives the student ID through the URL parameter.
2. Validates the student ID.
3. Receives the updated student information through the request body.
4. Validates the provided information.
5. Checks whether the student exists in the database.
6. If the student exists, executes an UPDATE query using parameterized values.
7. Returns the updated student details.

**Expected Status Codes:**

| Status Code | Description |
|---|---|
| 200 | Student details updated successfully |
| 400 | Invalid student ID or student information |
| 404 | Student with the specified ID does not exist |
| 409 | Updated email already exists |
| 500 | Internal server error |

**Example Success Response:**

```json
{
  "success": true,
  "error": false,
  "message": "Student Details Updated Successfully.",
  "data": {
    "id": "1",
    "name": "Rahul Sharma",
    "email": "rahulsharma@gmail.com",
    "age": 23,
    "course": "NodeJS"
  }
}
```

### 9.2.4 Delete Student

**Endpoint:**

```http
DELETE /students/:id
```

**Description:**

Deletes an existing student record from the database using the student's unique ID.

**Example:**

```http
DELETE /students/1
```

**Working:**

1. Receives the student ID through the URL parameter.
2. Validates the provided ID.
3. Executes a DELETE query against the `students` table.
4. Checks the `affectedRows` property to determine whether a record was deleted.
5. Returns a success response if the record was deleted.
6. Returns a not-found response if no matching student record exists.

**Expected Status Codes:**

| Status Code | Description |
|---|---|
| 200 | Student deleted successfully |
| 400 | Invalid student ID |
| 404 | Student with the specified ID does not exist |
| 500 | Internal server error |

**Example Success Response:**

```json
{
  "success": true,
  "error": false,
  "message": "Student Record with ID 1 has been Deleted Successfully.",
  "data": []
}
```

### 9.2.5 Search Students by Course

**Endpoint:**

```http
GET /students/search?course=NodeJS
```

**Description:**

Searches for student records based on the course name provided through the query parameter.

**Query Parameter:**

| Parameter | Required | Description |
|---|---|---|
| course | Yes | Name of the course used to search for students |

**Example Requests:**

```http
GET /students/search?course=NodeJS
```

```http
GET /students/search?course=ReactJS
```

```http
GET /students/search?course=Python
```

**Working:**

1. Receives the course name through `req.query.course`.
2. Checks whether the query parameter is present and is not empty.
3. Trims unnecessary whitespace from the course name.
4. Executes a parameterized SELECT query to retrieve students belonging to the specified course.
5. Returns the matching student records in JSON format.
6. If no matching records are found, returns a successful response with an empty array.

**Expected Status Codes:**

| Status Code | Description |
|---|---|
| 200 | Search request processed successfully |
| 400 | Course query parameter is missing or empty |
| 500 | Internal server error |

**Example Success Response:**

```json
{
  "success": true,
  "error": false,
  "message": "Students Record Searched Successfully.",
  "data": [
    {
      "id": 1,
      "name": "Rahul",
      "email": "rahul@gmail.com",
      "age": 22,
      "course": "NodeJS"
    },
    {
      "id": 3,
      "name": "Amit",
      "email": "amit@gmail.com",
      "age": 23,
      "course": "NodeJS"
    }
  ]
}
```

**When No Matching Students Are Found:**

```json
{
  "success": true,
  "error": false,
  "message": "No Student Record Found for this Course.",
  "data": []
}
```

**When the Course Parameter Is Missing:**

```http
GET /students/search
```

Example error response:

```json
{
  "success": false,
  "error": true,
  "message": "Course Query Parameter is not Present.",
  "data": null
}
```

## 9.3 Invalid Route

**Description:**

The application includes a centralized fallback route to handle requests made to endpoints that are not defined in the application.

This route is registered after all valid routes in `src/index.js`.

For example, if a user requests:

```http
GET /invalid
```

or

```http
GET /unknown-endpoint
```

The application returns a `404 Not Found` response.

**Expected Status Code:**

`404 Not Found`

**Example Response:**

```json
{
  "success": false,
  "error": true,
  "message": "Invalid Routes."
}
```

This ensures that requests to undefined endpoints receive a consistent JSON error response instead of an unexpected default response.

# 10. Response Structure

The application uses reusable response handlers to maintain consistency across all API endpoints.

These handlers are implemented in:

```text
src/utils/responseHandler.js
```

Two reusable functions are provided:

- `successHandler()`
- `errorHandler()`

### Success Response Format

All successful API responses follow this structure:

```json
{
  "success": true,
  "error": false,
  "message": "Request Successful.",
  "data": {}
}
```

### Error Response Format

All error responses follow this structure:

```json
{
  "success": false,
  "error": true,
  "message": "Internal Server Error.",
  "data": null
}
```

This approach avoids repeating response formatting logic across multiple controllers and makes the API responses predictable.

# 11. Input Validation and Error Handling

The project uses a separate validation utility to validate student information before performing database operations.

The validation logic is implemented in:

```text
src/utils/validateData.js
```

### Validation Checks

The application performs the following checks:

- Ensures all required student fields are provided.
- Checks that the name, email, and course fields contain string values.
- Prevents empty or whitespace-only name, email, and course values.
- Validates email addresses using a regular expression.
- Checks that the age is greater than zero.

### Database Error Handling

The application also handles database-related errors.

**Duplicate Email Handling**

The `email` column has a UNIQUE constraint in MySQL.

If a user attempts to create or update a student with an email address that already exists, MySQL returns an `ER_DUP_ENTRY` error.

The application catches this error and responds with:

```http
409 Conflict
```

**Student Not Found**

When updating or deleting a student, the application checks whether the requested student exists.

If no matching record is found, it returns:

```http
404 Not Found
```

**Internal Server Errors**

Database and unexpected errors are caught using `try...catch` blocks.

The application logs the error in the server console and returns a generic `500 Internal Server Error` response to the client.

### SQL Injection Prevention

The application uses parameterized SQL queries through the MySQL2 library.

For example:

```javascript
await db.query(
  "SELECT * FROM students WHERE course = ?",
  [course.trim()]
);
```

Using placeholders instead of directly concatenating user input helps protect database queries against SQL injection.

# 12. Postman Testing

The project includes an exported Postman collection and screenshots demonstrating the API functionality.

The Postman collection is available in:

```text
postman collection/
```

The API screenshots are available in:

```text
postman screenshots/
```

### Available Postman Tests

| Test | Endpoint | Method |
|---|---|---|
| Create Student | `/students` | POST |
| Get All Students | `/students` | GET |
| Update Student | `/students/:id` | PUT |
| Delete Student | `/students/:id` | DELETE |
| Search Students | `/students/search?course=NodeJS` | GET |

### How to Import the Postman Collection

1. Open Postman.
2. Click the **Import** button.
3. Select the exported collection file from the `postman collection` folder.
4. Import the collection.
5. Open the imported collection.
6. Configure the request URLs using your local server address.
7. Start the backend application.
8. Execute the requests and verify the responses.

All requests should be tested after the database and environment variables have been configured correctly.

# 13. Environment Variables Reference

For quick reference, the following environment variables are required:

| Variable | Description | Example |
|---|---|---|
| `PORT` | Express server port | `8000` |
| `DB_HOST` | MySQL server hostname | `localhost` / `127.0.0.1` |
| `DB_USER` | MySQL username | `root` |
| `DB_NAME` | Database name | `Student_Management_System` |
| `DB_PASSWORD` | MySQL password | Your MySQL password |

---