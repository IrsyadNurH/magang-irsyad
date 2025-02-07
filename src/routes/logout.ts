import express from 'express';

const router = express.Router();

// Rute untuk logout
router.post('/logout', (req, res) => {
  // Menghancurkan sesi pengguna
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error during logout');
    }
    return res.status(200).send('Logged out successfully');
  });
});

export default router;
