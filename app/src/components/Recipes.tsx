/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Recipe from '../models/Recipe';
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
    <div>
      {!recipes.length ? 'Loading...' : recipes.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.imageUrl} alt="recipe img" width={250} height={250} />
        </div>
      ))}
    </div>
  );
}

export default Recipes;
