import express, { Router, Request, Response } from "express";
import { findAllAdmins } from "../models/adminModel";  // Pastikan path-nya benar

const router: Router = express.Router();


// Endpoint untuk menambahkan admin
router.post("/admin", async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);  // Menambahkan log untuk mengecek data request body
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }
    res.status(201).json({
      message: "Admin created successfully",
      data: { email, password },
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
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
