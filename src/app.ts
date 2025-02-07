import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes";  // Pastikan path-nya benar
import aboutUsRoutes from './routes/aboutUsRoutes';
import authRoutes from './routes/authRoutes';
import logoutRouter from './routes/logout'; 
import forgetPasswordRoute from "./routes/forgetPasswordRoute"; // Sesuaikan path dengan lokasi file
import konsultasiRoutes from './routes/konsultasiroute';
import projectBimbleRoutes from './routes/projectBimbleRoutes';
import { Request, Response, NextFunction } from 'express';
import footerRoutes from './routes/footerRoutes'; // Add this import


dotenv.config();

const app = express();
app.use(express.json()); 
app.use(aboutUsRoutes);

app.use(cors({
  origin: 'http://localhost:3000',  // Alamat frontend Anda
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,  // Jika ingin menggunakan cookies atau session
  allowedHeaders: ['Content-Type']

}));

// Middleware untuk parsing JSON request body
app.use(bodyParser.json());


// Routes API
app.get('/about-us', (req, res) => {
  res.json([{ id: 1, contentType: 'text', content: 'About Us content' }]);
});

// Menggunakan rute admin
app.use("/api", adminRoutes,aboutUsRoutes,authRoutes,logoutRouter,forgetPasswordRoute,konsultasiRoutes,projectBimbleRoutes,footerRoutes);  // Pastikan rute /api terhubung ke adminRoutes/aboutUsRoutes

// Error handler untuk menangani kesalahan yang tidak tertangani
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error received:', err);
  console.error('Request details:', req.body);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;

export default app;
