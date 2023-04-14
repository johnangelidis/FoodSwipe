import axios from 'axios';
import User from '../models/User';
import { REACT_APP_LOGIN_API, REACT_APP_REGISTER_API } from '../configVariables';

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
