import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Recipes from '../components/Recipes';

function Home() {
  const {
    user,
  } = useSelector((state:any) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  console.log(user);
  return (
    <Recipes />
  );
}

export default Home;
