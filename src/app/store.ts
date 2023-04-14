/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../state/auth/authSlice';
import swipeReducer from '../state/swipe/swipeSlice';
import recipeReducer from '../state/recipe/recipeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    swipe: swipeReducer,
    recipe: recipeReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
