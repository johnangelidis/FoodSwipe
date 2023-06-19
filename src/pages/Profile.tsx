/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { AppDispatch, RootState } from '../app/store';
import { getMyRecipes } from '../state/recipe/recipeSlice';
import SavedRecipeCard from '../components/SavedRecipeCard';
import Overlay from '../components/Overlay';
import { setShowOverlay } from '../state/overlay/overlaySlice';

function Profile() {
  const { recipes } = useSelector((state:RootState) => state.recipe);
  const user = useSelector((state:RootState) => state.auth).user.result;
  const overlay = useSelector((state: RootState) => state.overlay).showOverlay;

  const dispatch = useDispatch<AppDispatch>();

  const [showRecipe, setShowRecipe] = useState<boolean>(false);

  const toggleShowRecipe = () => {
    setShowRecipe(!showRecipe);
  };
  useEffect(() => {
    console.log(user);
    const data = {
      userId: user._id,
    };
    dispatch(getMyRecipes(data));
  }, []);
  return (
    <>
      {overlay ? <div style={{ background: 'black', height: '100vh', opacity: '0.2' }}>.</div> : <div />}
      <div>
        {user && !overlay
          ? (
            <Typography variant="h3">
              {user.name}
              &apos;s recipes
            </Typography>
          )
          : <div />}
      </div>
      <div className={overlay ? 'ghost' : 'profileRecipes'}>
        {recipes.length === 0
          ? <Typography variant="h6">You have no recipes saved</Typography>
          : recipes.map((recipe) => (
            <SavedRecipeCard
              id={recipe.id}
              title={recipe.title}
              author={recipe.author}
              imageUrl={recipe.imageUrl}
              ingredients={recipe.ingredients}
              directions={recipe.directions}
              onUpdate={toggleShowRecipe}
            />
          ))}
      </div>

    </>
  );
}

export default Profile;
