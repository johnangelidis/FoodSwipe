/* eslint-disable no-underscore-dangle */
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
import { AppDispatch, RootState } from '../app/store';
import { addRecipe } from '../state/recipe/recipeSlice';

function RecipeCard({
  id, title, author, imageUrl, ingredients, directions,
} : Recipe) {
  const dispatch = useDispatch<AppDispatch>();
  const isSwipeable = useSelector((state:RootState) => state.swipe.isSwipeable);
  const user = useSelector((state: RootState) => state.auth).user.message;
  const [showRecipe, setShowRecipe] = useState<boolean>(false);
  const toggleShowRecipe = () => {
    setShowRecipe(!showRecipe);
    dispatch(setIsSwipeable(!isSwipeable));
  };
  // console.log(user._id);
  const onSwipe = (direction: any) => {
    if (direction === 'right') {
      const recipe: Recipe = {
        id,
        title,
        author,
        imageUrl,
        ingredients,
        directions,
      };
      const data = {
        userId: user._id,
        recipe,
      };
      dispatch(addRecipe(data));
    }
  };

  const onCardLeftScreen = (myIdentifier: any) => {
    console.log(`${myIdentifier} left the screen`);
  };
  return (
    <div className="recipeCardContainer">
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen(id)}
        preventSwipe={['up', 'down']}
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
