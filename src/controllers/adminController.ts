import { Request, Response } from 'express';
import { findAdminByEmail } from '../models/adminModel';
import { verifyRecaptcha } from '../utils/verifyRecaptcha';

// Fungsi untuk login admin
export const loginAdmin = async (req: Request, res: Response) => {
  const { email, password, recaptchaToken } = req.body;

  if (!email || !password || !recaptchaToken) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Verifikasi reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return res.status(400).json({ message: 'Invalid reCAPTCHA' });
    }

    // Cari admin berdasarkan email
    const admin = await findAdminByEmail(email);
    if (!admin) {
      return res.status(404).json({ message: 'Email not found' });
    }

    // Verifikasi password secara langsung
    if (password !== admin.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Jika semua valid, kirim respons sukses
    res.status(200).json({ message: 'Login successful', admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Fungsi untuk mendapatkan admin berdasarkan email
export const getAdminByEmail = async (req: Request, res: Response) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const admin = await findAdminByEmail(email as string);
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
