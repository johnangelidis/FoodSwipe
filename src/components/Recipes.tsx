/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Recipe from '../models/Recipe';
import RecipeCard from './RecipeCard';
import {
  getRecipes, filterRecipes, parseRecipes,
} from '../services/RecipeService';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    getRecipes().then((res) => {
      const filteredRecipes = filterRecipes(res);
      const recipesFinal: Recipe[] = parseRecipes(filteredRecipes);
      setRecipes(recipesFinal);
    });
  }, []);
  return (
    <div className="recipesDiv">
      <Typography variant="h3">FoodSwipe</Typography>
      {!recipes.length ? 'Loading...' : recipes.map((recipe) => (
        <RecipeCard {...recipe} />
      ))}

    </div>
  );
}

export default Recipes;
