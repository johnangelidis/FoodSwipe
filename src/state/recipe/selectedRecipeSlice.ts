/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import RecipeInstructions from '../../models/RecipeInstructions';

interface RecipeState {
    selectedRecipe: RecipeInstructions;
  }

const initialState: RecipeState = {
  selectedRecipe: {
    ingredients: [],
    directions: [],
  },
};

const selectedRecipeSlice = createSlice({
  name: 'selectedRecipe',
  initialState,
  reducers: {
    setSelectedRecipe: (state: any, action) => {
      state.selectedRecipe = action.payload;
    },
    reset: (state: any) => {
      state.selectedRecipe = {
        ingredients: [],
        directions: [],
      };
    },
  },
});

export const { setSelectedRecipe, reset } = selectedRecipeSlice.actions;

export default selectedRecipeSlice.reducer;
