// aboutUsController.ts
import { Request, Response } from 'express';
import { getAllAboutUs, createAboutUs, updateAboutUs, deleteAboutUs } from '../models/aboutUsModel';
import client from '../config/database';


// Mengambil semua data About Us
export const getAllAboutUsHandler = async (req: Request, res: Response) => {
  try {
    const aboutUsData = await getAllAboutUs();
    res.status(200).json(aboutUsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch About Us data' });
  }
};

// Menambahkan data About Us
export const createAboutUsHandler = async (req: Request, res: Response) => {
  const { contentType, content } = req.body;

  if (!contentType || !content) {
    return res.status(400).json({ error: 'ContentType and Content are required' });
  }

  try {
    const newAboutUs = await createAboutUs(contentType, content);
    res.status(201).json(newAboutUs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create About Us data' });
  }
};

// Memperbarui data About Us berdasarkan query string
export const updateAboutUsHandler = async (req: Request, res: Response) => {
    const { id, content } = req.query;
  
    // Pastikan ID dan content ada
    if (!id || !content) {
      return res.status(400).json({ error: 'ID and content are required' });
    }
  
    try {
      // Jalankan query update di PostgreSQL
      const result = await client.query(
        'UPDATE about_us SET content = $1 WHERE id = $2 RETURNING *',
        [content, id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      // Jika berhasil, kirim data yang telah diperbarui
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error updating About Us:', error);  // Cek error yang terjadi di server
      res.status(500).json({ error: 'Failed to update About Us data' });
    }
  };
  

// Menghapus data About Us berdasarkan ID
export const deleteAboutUsHandler = async (req: Request, res: Response) => {
    const { id } = req.query;
  
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  
    try {
      const deletedAboutUs = await deleteAboutUs(Number(id));
      if (!deletedAboutUs) {
        return res.status(404).json({ error: 'Data not found' });
      }
      res.status(200).json({ message: 'Data deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete About Us data' });
    }
  };
  
