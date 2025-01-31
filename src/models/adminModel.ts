// src/models/adminModel.ts
import client from '../config/database';

// Fungsi untuk mengambil admin berdasarkan email
export const findAdminByEmail = async (email: string) => {
  try {
    const result = await client.query("SELECT * FROM admins WHERE email = $1", [email]);
    return result.rows[0];  // Mengembalikan admin yang ditemukan berdasarkan email
  } catch (error: unknown) {
    // Menangani error dengan tipe yang benar
    if (error instanceof Error) {
      console.error("Error finding admin by email:", error.message);
    }
    throw new Error("Database query failed");
  }
};

// Fungsi untuk mengambil semua admin
export const findAllAdmins = async () => {
  try {
    const result = await client.query("SELECT * FROM admins");
    return result.rows;  // Mengembalikan semua admin yang ada
  } catch (error: unknown) {
    // Menangani error dengan tipe yang benar
    if (error instanceof Error) {
      console.error("Error finding all admins:", error.message);
    }
    throw new Error("Database query failed");
  }
};