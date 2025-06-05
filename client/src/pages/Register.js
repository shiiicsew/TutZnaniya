import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
  position: 'relative',
  marginBottom: '100px',
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

const StyledFormControl = styled(FormControl)(({ theme }) => ({
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
  '& .MuiSelect-select': {
    fontFamily: 'Montserrat',
  },
}));

const DepartmentSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  height: '56px',
  borderRadius: '10px',
  fontFamily: 'Montserrat',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(131,138,164,0.5)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(203,155,82,0.5)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(203,155,82,1)',
  },
  '& .MuiSelect-select': {
    fontFamily: 'Montserrat',
    padding: '16px 14px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  height: '45px',
  background: '#cb9b52',
  borderRadius: '10px',
  color: '#FFFFFF',
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '20px',
  '&:hover': {
    background: '#b88a47',
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

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    group: '',
    role: 'student',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    console.log('Form submitted:', formData);
  };

  const departments = [
    'Информационные технологии',
    'Математика',
    'Физика',
    'Химия',
    'Экономика',
  ];

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <StyledPaper elevation={0}>
          <IconBox>
            <PersonAddIcon sx={{ color: 'white', fontSize: 28 }} />
          </IconBox>
          <PageTitle>Регистрация</PageTitle>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledTextField
                  required
                  fullWidth
                  id="firstName"
                  label="Имя"
                  name="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Фамилия"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledTextField
                  fullWidth
                  id="middleName"
                  label="Отчество"
                  name="middleName"
                  autoComplete="middle-name"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledTextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledTextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledTextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Подтвердите пароль"
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledTextField
                  fullWidth
                  id="group"
                  label="Группа"
                  name="group"
                  value={formData.group}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ width: '47%' }}>
                <StyledFormControl fullWidth>
                  <InputLabel id="role-label">Роль</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    name="role"
                    value={formData.role}
                    label="Роль"
                    onChange={handleChange}
                  >
                    <MenuItem value="student">Студент</MenuItem>
                    <MenuItem value="teacher">Преподаватель</MenuItem>
                  </Select>
                </StyledFormControl>
              </Grid>
            </Grid>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегистрироваться
            </StyledButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <StyledLink component={RouterLink} to="/login">
                  Уже есть аккаунт
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

export default Register; 