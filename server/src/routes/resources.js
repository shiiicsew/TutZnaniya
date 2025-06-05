const express = require('express');
const router = express.Router();

// Временные маршруты для демонстрации
router.get('/', (req, res) => {
  res.json({ message: 'Список ресурсов' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Создание ресурса' });
});

module.exports = router; 