/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Recipe from '../models/Recipe';
import RecipeCard from './RecipeCard';
import {
  getRecipes, filterRecipes, parseRecipes,
} from '../services/RecipeService';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((res) => {
      const filtered = filterRecipes(res);
      setFilteredRecipes(filtered);
    });
  }, []);
  useEffect(() => {
    const fetchRecipes = async () => {
      const parsedRecipes = await parseRecipes(filteredRecipes);
      setRecipes(parsedRecipes);
    };
    fetchRecipes();
  }, [filteredRecipes]);

  return (
    <div className="recipesDiv">
      {!recipes.length ? 'Loading...' : recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}

export default Recipes;
