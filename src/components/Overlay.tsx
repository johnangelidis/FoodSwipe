import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';
import RecipeInstructions from '../models/RecipeInstructions';

type OverlayProps = RecipeInstructions & {
  showRecipe: boolean;
  setShowRecipe: React.Dispatch<React.SetStateAction<boolean>>;
};
function Overlay({
  ingredients, directions, showRecipe, setShowRecipe,
} : OverlayProps) {
  const handleOverlay = () => {
    setShowRecipe(!showRecipe);
  };
  return (
    <div className="overlay-bg">
      <Button variant="contained" onClick={handleOverlay}>Back</Button>
      <Card className="overlay-card">
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
      </Card>
    </div>
  );
}

export default Overlay;
