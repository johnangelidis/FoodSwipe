import axios from 'axios';

const getRecipes = async () => {
  const res = await axios.get('https://www.reddit.com/r/recipes/hot.json?limit=10');
  return res.data;
};
// test
const filterRecipes = (recipesJSON: any) => recipesJSON.data.children.filter((recipe: any, index: number) => index >= 2 || !recipe.data.title.startsWith('['));

export {
  getRecipes,
  filterRecipes,
};
