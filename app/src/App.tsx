/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import getRecipes from './services/RecipeService';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState<any[]>([]);
  useEffect(() => {
    getRecipes().then((res) => {
      // console.log(res.data.children[10].data.preview.images[0].source.width);
      const filteredRecipes = res.data.children.filter((recipe: any, index: number) =>
        index >= 2 || !recipe.data.title.startsWith('['));
      setRecipes(filteredRecipes);
    });
  }, []);
  return (
    <div>
      <h1>FoodSwipe</h1>
      {!recipes.length ? 'Loading...' : recipes.map((recipe) => (
        <div>
          <p key={recipe.data.id}>{recipe.data.title}</p>
          <img src={recipe.data.url} alt="recipe img" width={250} height={250} />
        </div>
      ))}
    </div>
  );
}

export default App;
