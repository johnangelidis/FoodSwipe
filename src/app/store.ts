/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../state/auth/authSlice';
import swipeReducer from '../state/swipe/swipeSlice';
import recipeReducer from '../state/recipe/recipeSlice';
import overlayReducer from '../state/overlay/overlaySlice';
import selectedRecipeReducer from '../state/recipe/selectedRecipeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    swipe: swipeReducer,
    recipe: recipeReducer,
    overlay: overlayReducer,
    selectedRecipe: selectedRecipeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      // ignoredActions: ['your/action/type'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['payload.headers', 'payload.config.transformRequest.0', 'payload.config.transformResponse.0', 'payload.config.env.FormData', 'payload.config.env.Blob', 'payload.config.validateStatus', 'payload.config.headers', 'payload.request'],
      // Ignore these paths in the state
      // ignoredPaths: ['items.dates'],
    },
  }),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
