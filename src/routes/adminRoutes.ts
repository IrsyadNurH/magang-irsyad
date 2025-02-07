import express, { Router, Request, Response } from "express";
import { findAllAdmins } from "../models/adminModel";  // Pastikan path-nya benar
import pool from '../config/database';

const router: Router = express.Router();

// Endpoint untuk login
router.post('/admins', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Periksa apakah admin ada dalam database
    const admin = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);

    if (admin.rows.length === 0) {
     res.status(404).json({ message: 'Email not found' });
     return;
    }

    // Cek apakah password sesuai dengan data (menggunakan plain password comparison untuk sementara)
    if (password !== admin.rows[0].password) {
      res.status(401).json({ message: 'Invalid password' });
      return;
    }

    // Login berhasil
    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Endpoint untuk mengambil daftar admin
router.get("/admins", async (req: Request, res: Response): Promise<void> => {
  try {
    // Ambil semua data admin dari database
    const admins = await findAllAdmins();  // Mengambil semua admin

    if (admins.length === 0) {
      console.log("No admins found");  // Log ketika tidak ada admin ditemukan
      res.status(404).json({ error: "No admins found" });
      return;
    }

    // Menambahkan log untuk menunjukkan bahwa admins berhasil ditemukan
    console.log("Admins found:", admins);  // Log daftar admin yang ditemukan
    res.status(200).json({ admins });
  } catch (error) {
    console.error("Error:", error);  // Log error jika terjadi kesalahan
    res.status(500).json({ error: "Something went wrong" });
  }
});



export default router;
