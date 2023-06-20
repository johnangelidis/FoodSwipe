import React from 'react';
import {
  Button, Card, CardContent, CardHeader, CardMedia,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setShowOverlay } from '../state/overlay/overlaySlice';
import { setSelectedRecipe } from '../state/recipe/selectedRecipeSlice';

function SavedRecipeCard({
  title, author, imageUrl, ingredients, directions, onUpdate,
}: any) {
  const dispatch = useDispatch();
  const overlay = useSelector((state: RootState) => state.overlay).showOverlay;
  // const { selectedRecipe } = useSelector((state: RootState) => state.selectedRecipe);

  const toggleShowRecipe = () => {
    dispatch(setSelectedRecipe({
      ingredients,
      directions,
    }));
    dispatch(setShowOverlay(!overlay));
    onUpdate();
  };

  return (
    <div>
      <Card className="profileRecipeCard">
        <CardHeader
          title={title}
          subheader={`by ${author}`}
          className="profileRecipeCardHeader"
        />
        <CardMedia
          sx={{ height: 300, width: 500 }}
          image={imageUrl}
          title="img"
        />
        <CardContent className="recipeCardButtons">
          <Button variant="text" onClick={toggleShowRecipe}>View recipe</Button>
        </CardContent>
      </Card>

    </div>
  );
}

export default SavedRecipeCard;
