import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Grid,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';

// Стилизованные компоненты
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  borderRadius: '15px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  background: '#FFFFFF',
}));

const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(203,155,82,1)',
  borderRadius: '50%',
  padding: '12px',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '24px',
  color: 'rgba(43,76,126,1)',
  marginBottom: '24px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    fontFamily: 'Montserrat',
    '& fieldset': {
      borderColor: 'rgba(131,138,164,0.5)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(203,155,82,0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(203,155,82,1)',
    },
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Montserrat',
    color: 'rgba(131,138,164,1)',
    '&.Mui-focused': {
      color: 'rgba(203,155,82,1)',
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Montserrat',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '16px',
  padding: '10px 0',
  borderRadius: '10px',
  backgroundColor: 'rgba(203,155,82,1)',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: 'rgba(203,155,82,0.8)',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '14px',
  color: 'rgba(43,76,126,1)',
  '&:hover': {
    color: 'rgba(203,155,82,1)',
  },
}));

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    // После успешной авторизации:
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <StyledPaper elevation={0}>
          <IconBox>
            <LockOutlinedIcon sx={{ color: 'white', fontSize: 28 }} />
          </IconBox>
          <PageTitle>Вход в систему</PageTitle>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <StyledTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChange}
            />
            <StyledTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </StyledButton>
            <Grid container justifyContent="flex-end"> 
              <Grid item>
                <StyledLink component={RouterLink} to="/register">
                  {"Регистрация"}
                </StyledLink>
              </Grid>
            </Grid>
          </Box>
        </StyledPaper>
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
}

export default Login; 