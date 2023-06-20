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
    resetOverlay: (state:any) => {
      state.showOverlay = false;
    },
  },
});

export const { setShowOverlay, resetOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;
