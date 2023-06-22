import axios from 'axios';

const REACT_APP_GET_RECIPES_API = process.env.REACT_APP_GET_RECIPES_API || '';
const REACT_APP_SAVE_RECIPE_API = process.env.REACT_APP_SAVE_RECIPE_API || '';
const REACT_APP_REMOVE_RECIPE_API = process.env.REACT_APP_REMOVE_RECIPE_API || '';

const getUserRecipes = async (data: any) => {
  const response = await axios.get(REACT_APP_GET_RECIPES_API, {
    params: data,
  });
  return response;
};

const saveRecipe = async (data: any) => {
  const response = await axios.put(REACT_APP_SAVE_RECIPE_API, data);
  return response;
};

const removeRecipe = async (data: any) => {
  const response = await axios.post(REACT_APP_REMOVE_RECIPE_API, data);
  return response;
};

export {
  getUserRecipes,
  saveRecipe,
  removeRecipe,
};
