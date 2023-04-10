/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button/Button';
import Card from '@mui/material/Card/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent/CardContent';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import User from '../models/User';
import { register } from '../state/auth/authSlice';

function Register() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user, isLoading, isError, isSuccess, message,
  } = useSelector((state:any) => state.auth);
  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const {
    name, email, password, passwordConfirmation,
  } = formData;

  const onChange = (e:any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e:any) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      passwordConfirmation,
    };

    // dispatch(register(userData));
  };
  return (
    <form onSubmit={onSubmit}>
      <Card className="formContainer">
        <Typography variant="h4" sx={{ textAlign: 'center' }}>Register</Typography>
        <CardContent className="formContent">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="standard"
            value={name}
            onChange={onChange}
            sx={{ margin: '5px' }}
          />
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
          <TextField
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="Confirm Password"
            variant="standard"
            value={passwordConfirmation}
            onChange={onChange}
            sx={{ margin: '5px' }}
            type="password"
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ margin: '5px' }}
            disabled={
              name === ''
              || email === ''
              || password === ''
              || passwordConfirmation === ''
              || password !== passwordConfirmation
            }
          >
            Register
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}

export default Register;
