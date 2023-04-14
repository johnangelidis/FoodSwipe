import axios from 'axios';
import { REACT_APP_GET_RECIPES_API, REACT_APP_REMOVE_RECIPE_API, REACT_APP_SAVE_RECIPE_API } from '../configVariables';

const getUserRecipes = async (data: any) => {
  const response = await axios.get(REACT_APP_GET_RECIPES_API, data);
  return response;
};

const saveRecipe = async (data: any) => {
  const response = await axios.put(REACT_APP_SAVE_RECIPE_API, data);
  return response;
};

const removeRecipe = async (data: any) => {
  const response = await axios.delete(REACT_APP_REMOVE_RECIPE_API, data);
  return response;
};

export {
  getUserRecipes,
  saveRecipe,
  removeRecipe,
};
