import {
  Button, Card, CardContent, TextField, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../app/store';
import { login, reset } from '../state/auth/authSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    user, isError, isSuccess, message,
  } = useSelector((state:any) => state.auth);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e:any) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  return (
    <form onSubmit={onSubmit}>
      <Card className="formContainer">
        <Typography variant="h4" sx={{ textAlign: 'center' }}>Login</Typography>
        <CardContent className="formContent">
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            value={email}
            onChange={onChange}
            sx={{ margin: '5px' }}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={onChange}
            sx={{ margin: '5px' }}
            type="password"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ margin: '5px' }}
            disabled={email === '' || password === ''}
          >
            Login
          </Button>
        </CardContent>
      </Card>

    </form>
  );
}

export default Login;
