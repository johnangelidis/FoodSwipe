/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { AppDispatch, RootState } from '../app/store';
import { getMyRecipes } from '../state/recipe/recipeSlice';

function Profile() {
  const { recipes } = useSelector((state:RootState) => state.recipe);
  const user = useSelector((state:RootState) => state.auth).user.message;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    console.log(user);
    const data = {
      userId: user._id,
    };
    dispatch(getMyRecipes(data));
  }, []);
  return (
    <>
      <div>
        <Typography variant="h3">
          Hello,
          {' '}
          {user.name}
        </Typography>

      </div>
      <div>
        {recipes.length === 0
          ? <Typography variant="h6">You have no recipes saved</Typography>
          : recipes.map((recipe) => (
            <p>{recipe.title}</p>
          ))}
      </div>

    </>
  );
}

export default Profile;
