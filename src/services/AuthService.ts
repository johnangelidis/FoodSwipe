import axios from 'axios';
import User from '../models/User';

const REACT_APP_REGISTER_API = process.env.REACT_APP_REGISTER_API || '';
const REACT_APP_LOGIN_API = process.env.REACT_APP_LOGIN_API || '';
const registerUser = async (user: User) => {
  const response = await axios.post(REACT_APP_REGISTER_API, user);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const loginUser = async (userData: any) => {
  const response = await axios.post(REACT_APP_LOGIN_API, userData);
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
