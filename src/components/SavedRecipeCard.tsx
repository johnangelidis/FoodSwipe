import React, { useState } from 'react';
import {
  Button, Card, CardContent, CardHeader, CardMedia,
} from '@mui/material';
import Overlay from './Overlay';

function SavedRecipeCard({
  id, title, author, imageUrl, ingredients, directions, onUpdate,
}: any) {
  const [showRecipe, setShowRecipe] = useState<boolean>(false);
  const toggleShowRecipe = () => {
    setShowRecipe(!showRecipe);
    onUpdate();
  };

  return (
    <div>
      {showRecipe
      && (
      <Overlay
        ingredients={ingredients}
        directions={directions}
        showRecipe={showRecipe}
        setShowRecipe={setShowRecipe}
      />
      )}
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
