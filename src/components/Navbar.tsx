import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const navItems = ['login', 'register', 'profile', 'logout'];
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="navItem">
              FoodSwipe
            </Link>
          </Typography>
          {navItems.map((item) => (
            <Link to={`/${item}`} className="navItem">
              <Button color="inherit">{item}</Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
