import pool from '../config/database';

export interface TestimonialData {
  id: number;
  name: string;
  image_url: string;
  university: string;
  testimonial: string;
}

export const TestimonialModel = {
  findAll: async () => {
    const result = await pool.query('SELECT * FROM testimonial ORDER BY id');
    return result.rows;
  },

  create: async (data: Omit<TestimonialData, 'id'>) => {
    const result = await pool.query(
      'INSERT INTO testimonial (name, image_url, university, testimonial) VALUES ($1, $2, $3, $4) RETURNING *',
      [data.name, data.image_url, data.university, data.testimonial]
    );
    return result.rows[0];
  },

  update: async (id: number, data: Partial<TestimonialData>) => {
    const result = await pool.query(
      `UPDATE testimonial 
       SET name = COALESCE($1, name),
           image_url = COALESCE($2, image_url),
           university = COALESCE($3, university),
           testimonial = COALESCE($4, testimonial),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $5 
       RETURNING *`,
      [data.name, data.image_url, data.university, data.testimonial, id]
    );
    return result.rows[0];
  },

  delete: async (id: number) => {
    const result = await pool.query(
      'DELETE FROM testimonial WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};