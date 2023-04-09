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

function Overlay({ ingredients, directions } : RecipeInstructions) {
  return (
    <div className="overlay-bg">
      <Button variant="contained">Back</Button>
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
