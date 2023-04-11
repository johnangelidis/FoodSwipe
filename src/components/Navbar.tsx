import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { logout, reset } from '../state/auth/authSlice';

function Navbar() {
  const currentUser = useSelector((state:any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="navItem">
              FoodSwipe
            </Link>
          </Typography>
          {!currentUser.user ? (
            <div>
              <Link to="/login" className="navItem">
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/register" className="navItem">
                <Button color="inherit">Register</Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/profile" className="navItem">
                <Button color="inherit">Profile</Button>
              </Link>
              <Link to="/login" onClick={onLogout} className="navItem">
                <Button color="inherit">Logout</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
