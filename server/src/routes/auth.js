const express = require('express');
const router = express.Router();

// Временные маршруты для демонстрации
router.post('/login', (req, res) => {
  res.json({ message: 'Маршрут входа' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Маршрут регистрации' });
});

module.exports = router; 