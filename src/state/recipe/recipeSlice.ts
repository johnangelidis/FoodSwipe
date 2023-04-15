/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { saveRecipe, removeRecipe, getUserRecipes } from '../../services/RecipeApiService';
import Recipe from '../../models/Recipe';

interface RecipeState {
    recipes: Recipe[];
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
  }

const initialState: RecipeState = {
  recipes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getRecipes = createAsyncThunk('recipe/getRecipes', async (data: any, thunkAPI) => {
  try {
    return await getUserRecipes(data);
  } catch (error:any) {
    const message = (error.response && error.response.data && error.response.data.message)
      || error.message
      || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const addRecipe = createAsyncThunk('recipe/addRecipe', async (data: any, thunkAPI) => {
  try {
    return await saveRecipe(data);
  } catch (error: any) {
    const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteRecipe = createAsyncThunk('recipe/deleteRecipe', async (data: any, thunkAPI) => {
  try {
    return await removeRecipe(data);
  } catch (error: any) {
    const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recipes = action.payload.data;
      })
      .addCase(getRecipes.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recipes.push(action.payload.data);
      })
      .addCase(addRecipe.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload
      })
      .addCase(deleteRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recipes = state.recipes.filter(
          (recipe) => recipe.id !== action.payload.data.id,
        );
      })
      .addCase(deleteRecipe.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        // state.message = action.payload;
      });
  },
});

export const { reset } = recipeSlice.actions;
export default recipeSlice.reducer;
