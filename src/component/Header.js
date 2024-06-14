import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonBase from '@mui/material/ButtonBase';

const theme = createTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#26c6da',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    h3: {
      fontWeight: 600,
      fontSize: '2.125rem',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '0 8px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          },
        },
      },
    },
  },
});

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar style={{ minHeight: '120px' }}>

          {/* Logo */}
          <img 
            src="/carousel/JASS.JPG" 
            alt="Logo" 
            style={{ marginRight: 20, height: '54px', cursor: 'pointer' }} // Adjust the size as needed
            onClick={() => navigate('/')}
          />
          <Typography 
            variant="h3" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer' }} 
            onClick={() => navigate('/')}
          >
            JADIA ASSOCIATES
          </Typography>
          {isMobile ? (
            <>
              <IconButton color="secondary" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                  <ListItem component={ButtonBase} onClick={() => handleNavigate('/')}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem component={ButtonBase} onClick={() => handleNavigate('/projects')}>
                    <ListItemText primary="Projects" />
                  </ListItem>
                  <ListItem component={ButtonBase} onClick={() => handleNavigate('/services')}>
                    <ListItemText primary="Services" />
                  </ListItem>
                  <ListItem component={ButtonBase} onClick={() => handleNavigate('/about')}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem component={ButtonBase} onClick={() => handleNavigate('/contact')}>
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Button color="secondary" onClick={() => navigate('/')}>Home</Button>
              <Button color="secondary" onClick={() => navigate('/projects')}>Projects</Button>
              <Button color="secondary" onClick={() => navigate('/services')}>Services</Button>
              {/* <Button color="secondary" onClick={() => navigate('/about')}>About</Button> */}
              <Button color="secondary" onClick={() => navigate('/contact')}>Contact Us</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
