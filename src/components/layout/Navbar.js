import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Стилизованные компоненты
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

const LogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '20px',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = true; // Здесь должна быть проверка аутентификации
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Здесь должна быть логика выхода
    handleClose();
    navigate('/login');
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <LogoText onClick={() => navigate('/')}>ТУтЗнания</LogoText>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? (
              <IconButton
                onClick={handleMenu}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={Boolean(anchorEl) ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
              >
                <Avatar sx={{ width: 35, height: 35, bgcolor: 'primary.main' }}>
                  <img src="/images/avatar.png" alt="" style={{ width: '80%', height: '80%' }} />
                </Avatar>
              </IconButton>
            ) : (
              <Button 
                color="primary" 
                onClick={() => navigate('/login')}
                sx={{ ml: 2 }}
              >
                Войти
              </Button>
            )}

            <Menu
              sx={{ 
                '& .MuiPaper-root': {
                  background: 'rgba(43,76,126,1)',
                  color: '#FFFFFF',
                },
              }}
              id="account-menu"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: isMobile ? 'bottom' : 'bottom',
                horizontal: isMobile ? 'right' : 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: isMobile ? 'top' : 'top',
                horizontal: isMobile ? 'right' : 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  minWidth: 180,
                  '& .MuiMenuItem-root': {
                    px: 2,
                    py: 1,
                  },
                },
              }}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'rgba(43,76,126,1)',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={() => navigate('/profile')}>Профиль</MenuItem>
              <MenuItem onClick={handleLogout}>Выйти</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar; 