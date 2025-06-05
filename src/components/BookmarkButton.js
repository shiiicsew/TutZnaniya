import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import axios from 'axios';

const BookmarkButton = ({ subjectId, userId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmarkStatus = async () => {
      if (userId) {
        try {
          const response = await axios.get(`/api/users/${userId}/bookmarks`);
          setIsBookmarked(response.data.includes(subjectId));
        } catch (error) {
          console.error('Ошибка при проверке статуса закладки:', error);
        }
      } else {
        // Проверяем локальное хранилище для неавторизованных пользователей
        const localBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        setIsBookmarked(localBookmarks.includes(subjectId));
      }
    };

    checkBookmarkStatus();
  }, [subjectId, userId]);

  const handleBookmarkClick = async () => {
    if (userId) {
      try {
        if (isBookmarked) {
          await axios.delete(`/api/users/${userId}/bookmarks/${subjectId}`);
        } else {
          await axios.post(`/api/users/${userId}/bookmarks`, { subjectId });
        }
        setIsBookmarked(!isBookmarked);
      } catch (error) {
        console.error('Ошибка при обновлении закладки:', error);
      }
    } else {
      // Для неавторизованных пользователей используем localStorage
      const localBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      if (isBookmarked) {
        const newBookmarks = localBookmarks.filter(id => id !== subjectId);
        localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      } else {
        localBookmarks.push(subjectId);
        localStorage.setItem('bookmarks', JSON.stringify(localBookmarks));
      }
      setIsBookmarked(!isBookmarked);
    }
  };

  return (
    <IconButton
      onClick={handleBookmarkClick}
      sx={{
        color: isBookmarked ? '#cb9b52' : 'rgba(255, 255, 255, 0.5)',
        '&:hover': {
          color: '#cb9b52',
        },
      }}
    >
      {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};

export default BookmarkButton; 