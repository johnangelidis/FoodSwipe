import React, { useState } from 'react';
import {
  Button, Card, CardContent, CardHeader, CardMedia,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Overlay from './Overlay';
import { RootState } from '../app/store';
import { setShowOverlay } from '../state/overlay/overlaySlice';
import { setSelectedRecipe } from '../state/recipe/selectedRecipeSlice';

function SavedRecipeCard({
  id, title, author, imageUrl, ingredients, directions, onUpdate,
}: any) {
  const [showRecipe, setShowRecipe] = useState<boolean>(false);
  const dispatch = useDispatch();
  const overlay = useSelector((state: RootState) => state.overlay).showOverlay;
  const { selectedRecipe } = useSelector((state: RootState) => state.selectedRecipe);
  console.log(selectedRecipe);
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
      {/* {showRecipe
      && (
      <Overlay
        ingredients={ingredients}
        directions={directions}
        showRecipe={showRecipe}
        setShowRecipe={setShowRecipe}
      />
      )} */}
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
