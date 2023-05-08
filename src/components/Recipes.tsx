/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Recipe from '../models/Recipe';
import RecipeCard from './RecipeCard';
import {
  getRecipes, filterRecipes, parseRecipes,
} from '../services/RecipeService';
import { AppDispatch, RootState } from '../app/store';
import { getMyRecipes } from '../state/recipe/recipeSlice';

function Recipes() {
  const myRecipes = useSelector((state:RootState) => state.recipe).recipes;
  const user = useSelector((state:RootState) => state.auth).user?.message;
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const dispatch = useDispatch<AppDispatch>();

  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    if (user) {
      const data = {
        userId: user._id,
      };
      dispatch(getMyRecipes(data));
      getRecipes().then((res) => {
        const filtered = filterRecipes(res);
        setFilteredRecipes(filtered);
      });
    }
  }, []);
  useEffect(() => {
    const fetchRecipes = async () => {
      const parsedRecipes = await parseRecipes(filteredRecipes);
      const res = parsedRecipes.filter((recipe) =>
        !myRecipes.some((myRecipe) => myRecipe.id === recipe.id));
      setRecipes([...myRecipes, ...res]);
    };
    fetchRecipes();
    setTimeout(() => {
      setRender(true);
    }, 3000);
  }, [filteredRecipes]);

  return (
    <div className="recipesDiv">
      {!render ? 'Loading...' : recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}

export default Recipes;
