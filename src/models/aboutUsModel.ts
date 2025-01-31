// aboutUsModel.ts
import pool from '../config/database';  // Import koneksi dari database.ts

// Fungsi untuk mengambil semua data AboutUs
export const getAllAboutUs = async () => {
  const result = await pool.query('SELECT * FROM about_us');
  return result.rows;
};

// Fungsi untuk membuat data AboutUs baru
export const createAboutUs = async (contentType: string, content: string) => {
  const result = await pool.query(
    'INSERT INTO about_us (content_type, content) VALUES ($1, $2) RETURNING *',
    [contentType, content]
  );
  return result.rows[0];
};

// Fungsi untuk memperbarui data AboutUs berdasarkan ID
export const updateAboutUs = async (id: number, contentType: string, content: string) => {
  const result = await pool.query(
    'UPDATE about_us SET content_type = $1, content = $2 WHERE id = $3 RETURNING *',
    [contentType, content, id]
  );
  return result.rows[0];
};

// Fungsi untuk menghapus data AboutUs berdasarkan ID
export const deleteAboutUs = async (id: number) => {
  const result = await pool.query('DELETE FROM about_us WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};
