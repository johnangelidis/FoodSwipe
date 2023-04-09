/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TinderCard from 'react-tinder-card';
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
  const onSwipe = (direction: any) => {
    console.log(`You swiped: ${direction}`);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(`${myIdentifier} left the screen`);
  };
  return (
    <div className="recipesDiv">
      {/* <Typography variant="h3">FoodSwipe</Typography> */}
      {!recipes.length ? 'Loading...' : recipes.map((recipe) => (
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
          <RecipeCard {...recipe} key={recipe.id} />
        </TinderCard>
      ))}

    </div>
  );
}

export default Recipes;
