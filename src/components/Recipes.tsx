/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useSelector } from 'react-redux';
import Recipe from '../models/Recipe';
import RecipeCard from './RecipeCard';
import {
  getRecipes, filterRecipes, parseRecipes,
} from '../services/RecipeService';

function Recipes() {
  const isSwipeable = useSelector((state: any) => state.swipe.isSwipeable);
  console.log(isSwipeable);
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
      {!recipes.length ? 'Loading...' : recipes.map((recipe) => (
        <div className={`card ${isSwipeable ? '' : 'no-drag'}`}>
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={isSwipeable ? ['up', 'down'] : ['up', 'down', 'left', 'right']}
          >
            <RecipeCard {...recipe} key={recipe.id} />
          </TinderCard>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
