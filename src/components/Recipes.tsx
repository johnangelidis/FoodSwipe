/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Recipe from '../models/Recipe';
import RecipeCard from './RecipeCard';
import {
  getRecipes, filterRecipes, processRecipes, getPostComments, extractInstructions,
} from '../services/RecipeService';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    getRecipes().then((res) => {
      const filteredRecipes = filterRecipes(res);
      const recipesFinal: Recipe[] = processRecipes(filteredRecipes);
      setRecipes(recipesFinal);

      recipesFinal.forEach((recipe) => {
        getPostComments(recipe.id).then((response) => {
          const instructions: string = extractInstructions(response);
          console.log(instructions);
        });
      });
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
