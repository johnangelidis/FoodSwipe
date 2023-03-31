/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Recipe from '../models/Recipe';
import RecipeCard from './RecipeCard';
import { getRecipes, filterRecipes } from '../services/RecipeService';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    getRecipes().then((res) => {
      const filteredRecipes = filterRecipes(res);
      const recipesFinal: Recipe[] = filteredRecipes?.map((recipe: any) => ({
        id: recipe.data.id,
        title: recipe.data.title,
        author: recipe.data.author,
        imageUrl: recipe.data.url,
        imageWidth: recipe.data.preview.images[0].source.width,
        imageHeight: recipe.data.preview.images[0].source.height,
      }));
      setRecipes(recipesFinal);
      console.log(recipesFinal);
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
