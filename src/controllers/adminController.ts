import { Request, Response } from "express";
import { findAdminByEmail } from "../models/adminModel";

// Mengambil admin berdasarkan email yang sudah ada di database
export const getAdminByEmail = async (req: Request, res: Response) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const admin = await findAdminByEmail(email as string);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

