/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { AppDispatch, RootState } from '../app/store';
import { getMyRecipes } from '../state/recipe/recipeSlice';
import SavedRecipeCard from '../components/SavedRecipeCard';
import SelectedRecipeOverlay from '../components/SelectedRecipeOverlay';

function Profile() {
  const { recipes } = useSelector((state:RootState) => state.recipe);
  const user = useSelector((state:RootState) => state.auth).user.result;
  const overlay = useSelector((state: RootState) => state.overlay).showOverlay;
  const { selectedRecipe } = useSelector((state: RootState) => state.selectedRecipe);

  const dispatch = useDispatch<AppDispatch>();

  const [showRecipe, setShowRecipe] = useState<boolean>(false);

  const toggleShowRecipe = () => {
    setShowRecipe(!showRecipe);
  };
  useEffect(() => {
    // console.log(user);
    const data = {
      userId: user._id,
    };
    dispatch(getMyRecipes(data));
  }, []);
  useEffect(() => {
    document.body.style.overflow = overlay ? 'hidden' : 'visible';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [overlay]);
  return (
    <>
      {overlay
        ? (
          <SelectedRecipeOverlay
            ingredients={selectedRecipe.ingredients}
            directions={selectedRecipe.directions}
          />
        )
        : <div />}
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
