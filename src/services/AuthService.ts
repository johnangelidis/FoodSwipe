import axios from 'axios';
import User from '../models/User';

const REGISTER_API = `${process.env.REACT_APP_API_URL}/api/register`;
const LOGIN_API = `${process.env.REACT_APP_API_URL}/api/login`;

const registerUser = async (user: User) => {
  const response = await axios.post(REGISTER_API, user);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (userData: any) => {
  const response = await axios.post(LOGIN_API, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem('user');
};

export {
  registerUser,
  loginUser,
  logoutUser,
};
