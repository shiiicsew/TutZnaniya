import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: 3
        }}
      >
        <Typography variant="h1" component="h1" color="#cb9b52" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Страница не найдена
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Извините, запрашиваемая страница не существует.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          sx={{
            background: '#cb9b52',
            '&:hover': {
              background: '#b88a47',
            },
          }}
        >
          Вернуться на главную
        </Button>
      </Box>
      
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
};

export default NotFound; 