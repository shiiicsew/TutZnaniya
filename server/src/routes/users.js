const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// Получить закладки пользователя (только ID)
router.get('/:userId/bookmarks', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .select('bookmarks')
      .lean();
    
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    
    res.json(user.bookmarks);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Добавить закладку
router.post('/:userId/bookmarks', auth, async (req, res) => {
  try {
    const { subjectId } = req.body;
    const user = await User.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    if (!user.bookmarks.includes(subjectId)) {
      user.bookmarks.push(subjectId);
      await user.save();
    }

    res.json(user.bookmarks);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Удалить закладку
router.delete('/:userId/bookmarks/:subjectId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    user.bookmarks = user.bookmarks.filter(
      bookmark => bookmark.toString() !== req.params.subjectId
    );
    
    await user.save();
    res.json(user.bookmarks);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router; 