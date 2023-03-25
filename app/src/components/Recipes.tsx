/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import Recipe from '../models/Recipe';
import getRecipes from '../services/RecipeService';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    getRecipes().then((res) => {
      const filteredRecipes = res.data.children.filter((recipe: any, index: number) => index >= 2 || !recipe.data.title.startsWith('['));
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
