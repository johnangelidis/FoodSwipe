import axios from 'axios';
import Recipe from '../models/Recipe';

const getRecipes = async () => {
  const res = await axios.get('https://www.reddit.com/r/recipes/hot.json?limit=10');
  return res.data;
};

const filterRecipes = (recipesJSON: any) => recipesJSON.data.children.filter((recipe: any, index: number) => index >= 2 || !recipe.data.title.startsWith('['));

const processRecipes = (filteredRecipes: any) : Recipe[] => filteredRecipes?.map((recipe: any) => ({
  id: recipe.data.id,
  title: recipe.data.title,
  author: recipe.data.author,
  imageUrl: recipe.data.url,
  imageWidth: recipe.data.preview.images[0].source.width,
  imageHeight: recipe.data.preview.images[0].source.height,
}));

const getPostComments = async (postId: string) => {
  const res = await axios.get(`https://www.reddit.com/r/recipes/comments/${postId}.json`);
  return res.data;
};

const extractIngredients = (commentsJSON: any) => commentsJSON[1].data.children[0].data.body;

export {
  getRecipes,
  filterRecipes,
  processRecipes,
  getPostComments,
  extractIngredients,
};
