/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const overlaySlice = createSlice({
  name: 'overlay',
  initialState: {
    showOverlay: false,
  },
  reducers: {
    setShowOverlay: (state: any, action) => {
      state.showOverlay = action.payload;
    },
  },
});

export const { setShowOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
