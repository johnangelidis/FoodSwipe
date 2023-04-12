/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import TinderCard from 'react-tinder-card';
import Recipe from '../models/Recipe';
import Overlay from './Overlay';
import { setIsSwipeable } from '../state/swipe/swipeSlice';
import { AppDispatch } from '../app/store';

function RecipeCard({
  id, title, author, imageUrl, ingredients, directions,
} : Recipe) {
  const dispatch = useDispatch<AppDispatch>();
  const isSwipeable = useSelector((state:any) => state.swipe.isSwipeable);
  const [showRecipe, setShowRecipe] = useState<boolean>(false);

  const toggleShowRecipe = () => {
    setShowRecipe(!showRecipe);
    dispatch(setIsSwipeable(!isSwipeable));
  };
  const onSwipe = (direction: any) => {
    console.log(`You swiped: ${direction}`);
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(`${myIdentifier} left the screen`);
  };
  return (
    <div className="recipeCardContainer">
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen(id)}
      >
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
      </TinderCard>
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
