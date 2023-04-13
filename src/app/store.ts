/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../state/auth/authSlice';
import swipeReducer from '../state/swipe/swipeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    swipe: swipeReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch