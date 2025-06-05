import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Components
import Navbar from './components/layout/Navbar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ResourceDetails from './pages/ResourceDetails';
import NotFound from './pages/NotFound';

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#cb9b52',
    },
    secondary: {
      main: '#333333',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: 'relative',
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
            zIndex: -1,
          }
        }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/resource/:id" element={<ResourceDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
