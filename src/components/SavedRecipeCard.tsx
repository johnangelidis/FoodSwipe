/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Button, Card, CardContent, CardHeader, CardMedia,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppDispatch, RootState } from '../app/store';
import { setShowOverlay } from '../state/overlay/overlaySlice';
import { setSelectedRecipe } from '../state/recipe/selectedRecipeSlice';
import { deleteRecipe } from '../state/recipe/recipeSlice';

function SavedRecipeCard({
  id, title, author, imageUrl, ingredients, directions, onUpdate,
}: any) {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state:RootState) => state.auth).user.result;
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

  const handleDelete = () => {
    const data = {
      userId: user._id,
      id,
    };
    console.log(data);
    dispatch(deleteRecipe(data));
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
          <Button
            variant="contained"
            onClick={handleDelete}
            style={{ backgroundColor: 'red', borderRadius: '50px' }}
          >
            <DeleteIcon />
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}

export default SavedRecipeCard;
