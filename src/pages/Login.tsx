import {
  Button, Card, CardContent, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';

function Login() {
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
