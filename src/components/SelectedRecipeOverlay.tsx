import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';
import { useDispatch } from 'react-redux';
import RecipeInstructions from '../models/RecipeInstructions';
import { AppDispatch } from '../app/store';
import { reset } from '../state/recipe/selectedRecipeSlice';
import { resetOverlay } from '../state/overlay/overlaySlice';

function SelectedRecipeOverlay({ ingredients, directions } : RecipeInstructions) {
  const dispatch = useDispatch<AppDispatch>();

  const handleOverlay = () => {
    dispatch(reset());
    dispatch(resetOverlay());
  };

  return (
    <div className="overlay-bg">
      <Card className="overlay-card">
        <div className="overlay-scrollable">
          <CardContent>
            <Typography variant="h6">Ingredients</Typography>
            <List>
              {ingredients.map((ingredient) => (
                <ListItem disablePadding>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
              <Divider />
              <Typography variant="h6">Directions</Typography>
              {directions.map((step) => (
                <ListItem disablePadding>
                  <ListItemText primary={step} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </div>
        <CardActions>
          <Button variant="contained" onClick={handleOverlay}>Close</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default SelectedRecipeOverlay;
