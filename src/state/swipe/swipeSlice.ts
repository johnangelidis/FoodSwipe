/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const swipeSlice = createSlice({
  name: 'swipe',
  initialState: {
    isSwipeable: true,
  },
  reducers: {
    setIsSwipeable: (state: any, action) => {
      state.isSwipeable = action.payload;
    },
  },
});

export const { setIsSwipeable } = swipeSlice.actions;

export default swipeSlice.reducer;
