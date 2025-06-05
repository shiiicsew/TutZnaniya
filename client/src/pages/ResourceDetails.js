import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { resourcesData } from '../data/resourcesData';

const BookmarkButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const ResourceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [subject, setSubject] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [openCheat, setOpenCheat] = useState(false);
  const [cheatImg, setCheatImg] = useState({ src: '', title: '' });

  useEffect(() => {
    const fetchData = () => {
      // Получаем данные о ресурсе из локального объекта
      const resourceData = resourcesData[id];
      
      if (resourceData) {
        setSubject(resourceData);
        
        // Проверяем, есть ли ресурс в закладках
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        setIsBookmarked(bookmarks.includes(id));
      } else {
        setSubject(null);
      }
    };

    fetchData();
  }, [id]);

  const handleBookmarkToggle = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    let newBookmarks;
    
    if (isBookmarked) {
      newBookmarks = bookmarks.filter(bookmarkId => bookmarkId !== id);
    } else {
      newBookmarks = [...bookmarks, id];
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  // Получаем данные ресурса по id
  const resource = resourcesData[id] || {
    title: 'Ресурс не найден',
    description: 'Запрашиваемый ресурс не существует.',
    type: 'Курс',
    subject: 'Неизвестно',
    tags: [],
    author: {
      name: 'Неизвестно',
      avatar: '/images/avatar.jpg',
      role: 'Преподаватель'
    },
    uploadDate: 'Неизвестно',
    downloads: 0,
    rating: 0,
    materials: {
      pdf: [],
      presentations: [],
      cheatsheets: [],
      videos: []
    }
  };

  const handleDownload = (materialPath) => {
    window.open(materialPath, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена');
    }
  };

  if (!subject) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ресурс не найден
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            К сожалению, запрашиваемый ресурс не существует или был удален.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mt: 2 }}
          >
            Вернуться на главную
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {/* Основная информация о ресурсе */}
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2, mb: { xs: 2, sm: 3 } }}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'flex-start' },
              mb: { xs: 2, sm: 3 }
            }}>
              <Box sx={{ mb: { xs: 2, sm: 0 } }}>
                <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: { xs: '1.3rem', sm: '2.125rem' } }}>
                  {resource.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                  {resource.type} • {resource.subject}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton onClick={handleShare} sx={{ color: '#cb9b52' }}>
                  <ShareIcon fontSize="small" />
                </IconButton>
                <BookmarkButton onClick={handleBookmarkToggle}>
                  {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </BookmarkButton>
              </Box>
            </Box>

            <Typography variant="body2" paragraph sx={{ fontSize: { xs: '0.98rem', sm: '1rem' } }}>
              {resource.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              {resource.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" sx={{ mb: { xs: 0.5, sm: 0 } }} />
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar src={resource.author.avatar} alt={resource.author.name} sx={{ width: { xs: 36, sm: 48 }, height: { xs: 36, sm: 48 } }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}>{resource.author.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  {resource.author.role}
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Загружено: {resource.uploadDate} • Скачиваний: {resource.downloads} • Рейтинг: {resource.rating}
            </Typography>
          </Paper>
        </Grid>

        {/* Список материалов */}
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Paper sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
              Учебные материалы
            </Typography>
            <Box>
              {/* PDF */}
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>PDF</Typography>
              <List sx={{ width: '100%', p: 0 }}>
                {resource.materials?.pdf ? (
                  resource.materials.pdf.map((material) => (
                    <ListItem
                      key={material.id}
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        '&:last-child': {
                          borderBottom: 'none'
                        },
                        px: 0,
                        py: { xs: 1, sm: 1.5 }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
                        <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                          <PictureAsPdfIcon sx={{ color: '#cb9b52', fontSize: { xs: 22, sm: 28 } }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={material.title}
                          sx={{ 
                            flex: 1,
                            minWidth: 0,
                            '& .MuiListItemText-primary': {
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              fontSize: { xs: '0.95rem', sm: '1rem' }
                            }
                          }}
                        />
                      </Box>
                      <Button
                        variant="outlined"
                        startIcon={<DownloadIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />}
                        onClick={() => handleDownload(material.path)}
                        sx={{
                          color: '#cb9b52',
                          borderColor: '#cb9b52',
                          ml: 2,
                          flexShrink: 0,
                          fontSize: { xs: '0.8rem', sm: '1rem' },
                          minWidth: { xs: 36, sm: 100 },
                          px: { xs: 1, sm: 2 },
                          '&:hover': {
                            borderColor: '#b88a41',
                            background: 'rgba(203, 155, 82, 0.04)',
                          },
                        }}
                      >
                        <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>Скачать</Box>
                        <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Скачать</Box>
                      </Button>
                    </ListItem>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">Нет PDF материалов</Typography>
                )}
              </List>

              {/* Презентации */}
              <Typography variant="subtitle1" sx={{ mt: 3, mb: 1, fontWeight: 500 }}>Презентации</Typography>
              {!resource.materials?.presentations || resource.materials.presentations.length === 0 ? (
                <Typography variant="body2" color="text.secondary">Нет презентаций</Typography>
              ) : (
                <List sx={{ width: '100%', p: 0 }}>
                  {resource.materials.presentations.map((presentation) => (
                    <ListItem
                      key={presentation.id}
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        '&:last-child': {
                          borderBottom: 'none'
                        },
                        px: 0,
                        py: { xs: 1, sm: 1.5 }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
                        <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                          <SlideshowIcon sx={{ color: '#cb9b52', fontSize: { xs: 22, sm: 28 } }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={presentation.title}
                          sx={{ 
                            flex: 1,
                            minWidth: 0,
                            '& .MuiListItemText-primary': {
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              fontSize: { xs: '0.95rem', sm: '1rem' }
                            }
                          }}
                        />
                      </Box>
                      <Button
                        variant="outlined"
                        startIcon={<DownloadIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />}
                        onClick={() => handleDownload(presentation.path)}
                        sx={{
                          color: '#cb9b52',
                          borderColor: '#cb9b52',
                          ml: 2,
                          flexShrink: 0,
                          fontSize: { xs: '0.8rem', sm: '1rem' },
                          minWidth: { xs: 36, sm: 100 },
                          px: { xs: 1, sm: 2 },
                          '&:hover': {
                            borderColor: '#b88a41',
                            background: 'rgba(203, 155, 82, 0.04)',
                          },
                        }}
                      >
                        <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>Скачать</Box>
                        <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Скачать</Box>
                      </Button>
                    </ListItem>
                  ))}
                </List>
              )}

              {/* Шпаргалки */}
              <Typography variant="subtitle1" sx={{ mt: 3, mb: 1, fontWeight: 500 }}>Шпаргалки</Typography>
              {!resource.materials?.cheatsheets || resource.materials.cheatsheets.length === 0 ? (
                <Typography variant="body2" color="text.secondary">Нет шпаргалок</Typography>
              ) : (
                <List sx={{ width: '100%', p: 0 }}>
                  {resource.materials.cheatsheets.map((cheat) => (
                    <ListItem
                      key={cheat.id}
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        '&:last-child': {
                          borderBottom: 'none'
                        },
                        px: 0,
                        py: { xs: 1, sm: 1.5 }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
                        <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                          <ImageIcon sx={{ color: '#cb9b52', fontSize: { xs: 22, sm: 28 } }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={cheat.title}
                          sx={{ 
                            flex: 1,
                            minWidth: 0,
                            '& .MuiListItemText-primary': {
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              fontSize: { xs: '0.95rem', sm: '1rem' }
                            }
                          }}
                        />
                      </Box>
                      <Button
                        variant="outlined"
                        startIcon={<ImageIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />}
                        onClick={() => { setCheatImg({ src: cheat.path, title: cheat.title }); setOpenCheat(true); }}
                        sx={{
                          color: '#cb9b52',
                          borderColor: '#cb9b52',
                          ml: 2,
                          flexShrink: 0,
                          fontSize: { xs: '0.8rem', sm: '1rem' },
                          minWidth: { xs: 36, sm: 100 },
                          px: { xs: 1, sm: 2 },
                          '&:hover': {
                            borderColor: '#b88a41',
                            background: 'rgba(203, 155, 82, 0.04)',
                          },
                        }}
                      >
                        <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>Открыть</Box>
                        <Box sx={{ display: { xs: 'inline', sm: 'none' } }}>Открыть</Box>
                      </Button>
                    </ListItem>
                  ))}
                </List>
              )}

              {/* Полезные видео */}
              <Typography variant="subtitle1" sx={{ mt: 3, mb: 1, fontWeight: 500 }}>Полезные видео</Typography>
              {!resource.materials?.videos || resource.materials.videos.length === 0 ? (
                <Typography variant="body2" color="text.secondary">Нет полезных видео</Typography>
              ) : (
                <Box sx={{ mt: 2 }}>
                  {resource.materials.videos.map((video) => (
                    <Box key={video.id} sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>{video.title}</Typography>
                      <Box sx={{ 
                        position: 'relative',
                        paddingTop: '50.25%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& iframe': {
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: {
                            xs: '100%',
                            sm: '480px',
                            md: '960px'
                          },
                          height: {
                            xs: 'auto',
                            sm: '270px',
                            md: '540px'
                          },
                          borderRadius: 1
                        }
                      }}>
                        <div dangerouslySetInnerHTML={{ __html: video.embed }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
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

      {/* Диалог для просмотра шпаргалок */}
      <Dialog 
        open={openCheat} 
        onClose={() => setOpenCheat(false)} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle sx={{ 
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          pb: 2
        }}>
          {cheatImg.title}
        </DialogTitle>
        <DialogContent sx={{ 
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& img': {
            maxWidth: '100%',
            maxHeight: '70vh',
            borderRadius: 1,
            objectFit: 'contain'
          }
        }}>
          <img src={cheatImg.src} alt={cheatImg.title} />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ResourceDetails; 