import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

// Стилизованные компоненты
const StyledCard = styled(Card)(({ theme, backgroundimage }) => ({
  height: '220px',
  width: '400px',
  background: `url(${backgroundimage})`,
  backgroundSize: '40%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '15px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(43,76,126,0.9) 0%, rgba(43,76,126,0.98) 100%)',
    zIndex: 1,
  },
}));

const StyledCardContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '32px',
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontFamily: 'Montserrat',
  fontWeight: 700,
  fontSize: '16px',
  textAlign: 'left',
  marginBottom: '62px',
  textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  minHeight: '54px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const CardSubtitle = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '16px',
  textAlign: 'left',
  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
}));

const SearchBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '75px',
  background: 'rgba(27,46,75,0.75)',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
}));

const SearchButton = styled(Button)(({ theme }) => ({
  width: '100px',
  height: '45px',
  background: '#cb9b52',
  borderRadius: '10px',
  color: '#FFFFFF',
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '14px',
  '&:hover': {
    background: '#b88a47',
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: '20px',
  paddingBottom: '20px',
  minHeight: 'calc(100vh - 64px)', // Вычитаем высоту навбара
  display: 'flex',
  flexDirection: 'column',
}));

const SearchSection = styled(Box)(({ theme }) => ({
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

const FiltersSection = styled(Box)(({ theme }) => ({
  marginBottom: '20px',
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
}));

const ItemsGrid = styled(Grid)(({ theme }) => ({
  flex: 1,
  marginBottom: '20px',
  overflow: 'auto',
}));

const ItemCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '15px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    '& fieldset': {
      borderColor: 'rgba(203,155,82,0.5)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(203,155,82,0.8)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(203,155,82,1)',
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Montserrat',
    color: '#333333',
    '&::placeholder': {
      color: 'rgba(131,138,164,1)',
    },
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(203,155,82,0.5)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(203,155,82,0.8)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(203,155,82,1)',
  },
  '& .MuiSelect-select': {
    fontFamily: 'Montserrat',
    color: '#333333',
  },
  '& .MuiSelect-icon': {
    color: 'rgba(203,155,82,1)',
  },
}));

// Временные данные для демонстрации
const subjects = [
  {
    id: 1,
    title: 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ',
    teacher: 'Преподаватель: Штрафина Е. Д.',
    image: '/images/ai.jpg',
    department: 'Информационные технологии',
    resources: [
      { id: 101, title: 'Введение в ИИ', type: 'document', description: 'Базовые концепции искусственного интеллекта' },
      { id: 102, title: 'Машинное обучение', type: 'video', description: 'Основы машинного обучения' },
    ],
  },
  {
    id: 2,
    title: 'ФИЛОСОФИЯ',
    teacher: 'Преподаватель: Гусева И. И.',
    image: '/images/philosophy.jpg',
    department: 'Гуманитарные науки',
    resources: [
      { id: 201, title: 'История философии', type: 'document', description: 'Обзор основных философских течений' },
      { id: 202, title: 'Этика', type: 'pdf', description: 'Основы этики и морали' },
    ],
  },
  {
    id: 3,
    title: 'МАТ. АНАЛИЗ',
    teacher: 'Преподаватель: Погодина Ю. А.',
    image: '/images/math.jpg',
    department: 'Математика',
    resources: [
      { id: 301, title: 'Дифференциальное исчисление', type: 'document', description: 'Основы дифференциального исчисления' },
      { id: 302, title: 'Интегральное исчисление', type: 'video', description: 'Основы интегрального исчисления' },
    ],
  },
  {
    id: 4,
    title: 'ЛИНЕЙНАЯ АЛГЕБРА',
    teacher: 'Преподаватель: Самаров Е. К.',
    image: '/images/linear.jpg',
    department: 'Математика',
    resources: [
      { id: 401, title: 'Матрицы и определители', type: 'document', description: 'Основы работы с матрицами' },
      { id: 402, title: 'Векторные пространства', type: 'pdf', description: 'Векторные пространства и линейные операторы' },
    ],
  },
  {
    id: 5,
    title: 'УПРАВЛЕНИЕ КАЧЕСТВОМ',
    teacher: 'Преподаватель: Попова Ю. С.',
    image: '/images/quality.jpg',
    department: 'Менеджмент',
    resources: [
      { id: 501, title: 'Основы управления качеством', type: 'document', description: 'Введение в управление качеством' },
      { id: 502, title: 'ISO 9000', type: 'link', description: 'Стандарты ISO 9000' },
    ],
  },
  {
    id: 6,
    title: 'ОПЕРАЦИОННЫЕ СИСТЕМЫ',
    teacher: 'Преподаватель: Исаева Г. Н.',
    image: '/images/os.jpg',
    department: 'Информационные технологии',
    resources: [
      { id: 601, title: 'Архитектура ОС', type: 'document', description: 'Основы архитектуры операционных систем' },
      { id: 602, title: 'Процессы и потоки', type: 'video', description: 'Управление процессами и потоками' },
    ],
  },
];

const departments = [
  'Все направления',
  'Информационные технологии',
  'Математика',
  'Гуманитарные науки',
  'Менеджмент',
];

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('Все направления');
  const [page, setPage] = useState(1);
  const subjectsPerPage = 6;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSubjectClick = (subjectId) => {
    navigate(`/resource/${subjectId}`);
  };

  // Фильтрация предметов
  const filteredSubjects = subjects.filter((subject) => {
    const matchesSearch = subject.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) || 
      subject.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      selectedDepartment === 'Все направления' ||
      subject.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1600px', margin: '0 auto' }}>
        <Box sx={{ width: '100%' }}>
          <Typography
            variant="h1"
            sx={{
              color: 'rgba(203,155,82,1)',
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              fontSize: '40px',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Ищи, что угодно
          </Typography>

          {/* Поиск и фильтры */}
          <Paper elevation={0} sx={{ p: 3, borderRadius: '20px', width: '100%' }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                <SearchBox>
                  <TextField
                    fullWidth
                    placeholder="Введите запрос"
                    variant="standard"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: 'rgba(131,138,164,1)' }} />
                        </InputAdornment>
                      ),
                      sx: {
                        color: '#FFFFFF',
                        fontFamily: 'Montserrat',
                        fontSize: '20px',
                        width: '100%',
                        '&::placeholder': {
                          color: 'rgba(131,138,164,1)',
                        },
                      },
                    }}
                    sx={{ width: '100%', flex: 1 }}
                  />
                  <SearchButton>Поиск</SearchButton>
                </SearchBox>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Select
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  displayEmpty
                  sx={{
                    width: '300px',
                    height: '50px',
                    backgroundColor: '#cb9b52',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    '& .MuiSelect-icon': {
                      color: '#FFFFFF',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: 'rgba(27,46,75,0.95)',
                        color: '#FFFFFF',
                        '& .MuiMenuItem-root': {
                          color: '#FFFFFF',
                          '&:hover': {
                            backgroundColor: 'rgba(203,155,82,0.2)',
                          },
                          '&.Mui-selected': {
                            backgroundColor: 'rgba(203,155,82,0.3)',
                            color: '#cb9b52',
                            fontWeight: 'bold',
                            '&:hover': {
                              backgroundColor: 'rgba(203,155,82,0.4)',
                            },
                          },
                        },
                      },
                    },
                  }}
                >
                  {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                      {department}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Paper>

          {/* Список предметов */}
          <Grid container spacing={3} sx={{ 
            width: '90%', 
            margin: '0 auto', 
            mt: 0, 
            mb: 4, 
            justifyContent: 'center',
            padding: '0 24px'
          }}>
            {filteredSubjects.map((subject) => (
              <Grid item key={subject.id} sx={{ 
                padding: '12px !important', 
                display: 'flex', 
                justifyContent: 'center',
                width: '370px'
              }}>
                <StyledCard 
                  onClick={() => navigate(`/resource/${subject.id}`)}
                  backgroundimage={subject.image}
                >
                  <StyledCardContent>
                    <Box>
                      <CardTitle>{subject.title}</CardTitle>
                      <CardSubtitle>{subject.teacher}</CardSubtitle>
                    </Box>
                    <Box>
                      <CardSubtitle>{subject.department}</CardSubtitle>
                    </Box>
                  </StyledCardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
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

export default Home; 