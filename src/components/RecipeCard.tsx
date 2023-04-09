/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button/Button';
import Recipe from '../models/Recipe';
import Overlay from './Overlay';

function RecipeCard({
  title, author, imageUrl, ingredients, directions,
} : Recipe) {
  const [showRecipe, setShowRecipe] = useState<boolean>(false);

  const toggleShowRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  return (
    <div className="recipeCardContainer">
      <Card className="recipeCard">
        <CardHeader
          title={title}
          subheader={`by ${author}`}
        />
        <CardMedia
          sx={{ height: 400, width: 600 }}
          image={imageUrl}
          title="img"
        />
        <CardContent className="recipeCardButtons">
          <Button variant="text" onClick={toggleShowRecipe}>View recipe</Button>
        </CardContent>
      </Card>
      {showRecipe
      && (
      <Overlay
        ingredients={ingredients}
        directions={directions}
        showRecipe={showRecipe}
        setShowRecipe={setShowRecipe}
      />
      )}
    </div>
  );
}

export default RecipeCard;
