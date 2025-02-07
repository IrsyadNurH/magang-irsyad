import { Router } from 'express';
import { TestimonialModel } from '../models/TestimonialModel';

const router = Router();

// Get all testimonials
router.get('/testimonial', async (req, res) => {
  try {
    const testimonials = await TestimonialModel.findAll();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

// Create testimonial
router.post('/testimonial', async (req, res) => {
  try {
    const newTestimonial = await TestimonialModel.create(req.body);
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create testimonial' });
  }
});

// Update testimonial
router.put('/testimonial/:id', async (req, res) => {
  try {
    const updatedTestimonial = await TestimonialModel.update(
      parseInt(req.params.id),
      req.body
    );
    if (!updatedTestimonial) {
       res.status(404).json({ error: 'Testimonial not found' });
       return;
    }
    res.json(updatedTestimonial);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update testimonial' });
  }
});

// Delete testimonial
router.delete('/testimonial/:id', async (req, res) => {
  try {
    const deleted = await TestimonialModel.delete(parseInt(req.params.id));
    if (!deleted) {
       res.status(404).json({ error: 'Testimonial not found' });
       return;
    }
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
});

export default router;