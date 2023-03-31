/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Recipe from '../models/Recipe';

function RecipeCard({
  title, author, imageUrl,
} : Recipe) {
  return (
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
      <CardContent>
        <CardActions className="recipeCardButtons">
          <IconButton aria-label="dislike" color="error">
            <ThumbDownIcon />
          </IconButton>
          <IconButton aria-label="like" color="success">
            <ThumbUpIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
