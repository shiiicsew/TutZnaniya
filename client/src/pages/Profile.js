import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Avatar,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
  Divider,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import SchoolIcon from '@mui/icons-material/School';
import { resourcesData } from '../data/resourcesData';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '15px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}));

const BookmarkCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
}));

function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Максим',
    lastName: 'Петров',
    email: 'makc@example.com',
    group: 'ИСТ-ИТ-21',
    role: 'Студент',
  });
  const [editedData, setEditedData] = useState({ ...userData });
  const [bookmarkDetails, setBookmarkDetails] = useState([]);

  useEffect(() => {
    const fetchBookmarks = () => {
      try {
        // Получаем закладки из localStorage
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        
        // Получаем детали закладок из resourcesData
        const details = bookmarks
          .map(bookmarkId => ({
            ...resourcesData[bookmarkId],
            id: bookmarkId // Сохраняем оригинальный ID
          }))
          .filter(Boolean); // Фильтруем undefined значения
        
        setBookmarkDetails(details);
      } catch (error) {
        console.error('Ошибка при загрузке закладок:', error);
      }
    };

    fetchBookmarks();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({ ...userData });
  };

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({ ...userData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookmarkClick = (bookmarkId) => {
    if (bookmarkId) {
      navigate(`/resource/${bookmarkId}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {/* Основная информация */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 2,
                bgcolor: 'primary.main',
              }}
            >
              {userData.firstName[0]}
              {userData.lastName[0]}
            </Avatar>
            {isEditing ? (
              <Box component="form" sx={{ mt: 2, width: "300px" }}>
                <TextField
                  fullWidth
                  label="Имя"
                  name="firstName"
                  value={editedData.firstName}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Фамилия"
                  name="lastName"
                  value={editedData.lastName}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={editedData.email}
                  onChange={handleChange}
                  margin="normal"
                />
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                    sx={{ mr: 1 }}
                  >
                    Сохранить
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={handleCancel}
                  >
                    Отмена
                  </Button>
                </Box>
              </Box>
            ) : (
              <>
                <Typography variant="h5" gutterBottom>
                  {userData.firstName} {userData.lastName}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {userData.email}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Группа: {userData.group}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Роль: {userData.role}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={handleEdit}
                  sx={{ mt: 2 }}
                >
                  Редактировать профиль
                </Button>
              </>
            )}
          </Paper>
        </Grid>

        {/* Статистика и закладки */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Статистика
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4">{bookmarkDetails.length}</Typography>
                  <Typography color="textSecondary">Закладок</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4">45</Typography>
                  <Typography color="textSecondary">Скачанных материалов</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4">8</Typography>
                  <Typography color="textSecondary">Комментариев</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Мои закладки
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {bookmarkDetails.length > 0 ? (
              bookmarkDetails.map((bookmark) => (
                <BookmarkCard
                  key={bookmark.id}
                  onClick={() => handleBookmarkClick(bookmark.id)}
                >
                  <ListItem>
                    <ListItemIcon>
                      <SchoolIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={bookmark.title}
                      secondary={`${bookmark.type} • ${bookmark.subject}`}
                    />
                    <IconButton 
                      edge="end" 
                      aria-label="view"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmarkClick(bookmark.id);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </ListItem>
                </BookmarkCard>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                У вас пока нет закладок
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>

      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: '0px', 
          left: 0, 
          width: '100%', 
          zIndex: -1 
        }}
      >
        <img 
          src="/images/wave.png" 
          alt="Wave" 
          style={{ 
            width: '100%', 
            height: 'auto',
            display: 'block'
          }} 
        />
      </Box>
    </Container>
  );
}

export default Profile; 