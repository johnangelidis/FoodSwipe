import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Recipes from '../components/Recipes';
import { RootState } from '../app/store';

function Home() {
  const {
    user,
  } = useSelector((state:RootState) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  return (
    <Recipes />
  );
}

export default Home;
