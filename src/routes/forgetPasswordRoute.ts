import express, { Request, Response } from "express";
import pool from "../config/database";  // Pastikan path ini sesuai dengan file konfigurasi database Anda

const router = express.Router();

// Endpoint untuk memverifikasi email saat lupa password
router.post("/admins/reset-password/request",  async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    // Cek apakah email ada di dalam database
    const result = await pool.query("SELECT * FROM admins WHERE email = $1", [email]);

    if (result.rows.length === 0) {
       res.status(404).json({ message: "Email tidak ditemukan" });
       return;
    }

    // Jika email ditemukan, buat token reset password atau tindakan lainnya
    // Misalnya, bisa buat token untuk dikirim ke email pengguna

  // Menambahkan token ke dalam respon
    const resetToken = "generated-reset-token";  // Ganti dengan logika token, misalnya JWT atau token acak
    res.status(200).json ({
      message: "Email ditemukan, token reset dikirim",
      resetToken: resetToken,  // Kirim token ke frontend
    });

    // Kirim token melalui email atau simpan di database untuk verifikasi
    // Misalnya, kirim token ke email menggunakan nodemailer (implementasi email not included here)


  } catch (error) {
    console.error("Error saat verifikasi email:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// Endpoint untuk reset password
router.post("/admins/reset-password/confirm", async (req: Request, res: Response) => {
    const { email, password, resetToken } = req.body;
  
    if (!email || !password || !resetToken) {
      res.status(400).json({ message: "Email, password, and reset token are required" });
      return;
    }
  
    try {
      // Periksa apakah admin ada dalam database berdasarkan email
      const admin = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
  
      if (admin.rows.length === 0) {
        res.status(404).json({ message: "Email not found" });
        return; // Jangan lanjutkan setelah response pertama
      }
  
      // Lakukan validasi token reset password (misalnya bisa menggunakan token yang dikirimkan sebelumnya)
      // Pastikan token sesuai (bisa disesuaikan dengan cara pengelolaan token Anda)
      if (resetToken !== "some-predefined-token") {
        res.status(400).json({ message: "Invalid reset token" });
        return; // Jangan lanjutkan setelah response pertama
      }
  
      // Update password di database
      await pool.query('UPDATE admins SET password = $1 WHERE email = $2', [password, email]);
  
      // Kembali respon sukses
      res.status(200).json({ message: "Password reset successfully" }); // Pastikan menggunakan return untuk menghentikan eksekusi
      return;
    } catch (error) {
      console.error("Error during reset password:", error);
      res.status(500).json({ message: "Server error" }); // Tambahkan return untuk menghindari pengiriman response ganda
      return;
    }
  });
  
export default router;