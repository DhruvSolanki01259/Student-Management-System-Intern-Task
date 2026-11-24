import mysql from "mysql2/promise";
import "dotenv/config";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

try {
  const connection = await db.getConnection();
  console.log("MySQL Connected Successfully!");

  connection.release();
} catch (error) {
  console.error("Database Connection Failed:", error.message);
}

export default db;
