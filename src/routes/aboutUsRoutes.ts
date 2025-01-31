// aboutUsRoutes.ts
import express from 'express';
import { getAllAboutUsHandler, createAboutUsHandler, updateAboutUsHandler, deleteAboutUsHandler } from '../controllers/aboutUsController';

const router = express.Router();

// Wrapper untuk menangani Promise di route handler
const asyncHandler = (fn: Function) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Routes untuk About Us
router.get('/about-us', asyncHandler(getAllAboutUsHandler));
router.post('/about-us', asyncHandler(createAboutUsHandler));
router.put('/about-us/:id', asyncHandler(updateAboutUsHandler));
router.delete('/about-us/:id', asyncHandler(deleteAboutUsHandler));

export default router;
