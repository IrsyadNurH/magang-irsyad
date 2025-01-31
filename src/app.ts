import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes";  // Pastikan path-nya benar
import aboutUsRoutes from './routes/aboutUsRoutes';


dotenv.config();

const app = express();
app.use(express.json()); 
app.use(aboutUsRoutes);

app.use(cors({
  origin: 'http://localhost:3000',  // Alamat frontend Anda
  methods: ['GET', 'POST'],  // Metode HTTP yang diizinkan
  credentials: true,  // Jika ingin menggunakan cookies atau session
}));

// Middleware untuk parsing JSON request body
app.use(bodyParser.json());

// Menggunakan rute admin
app.use("/api", adminRoutes,aboutUsRoutes);  // Pastikan rute /api terhubung ke adminRoutes/aboutUsRoutes


export default app;
