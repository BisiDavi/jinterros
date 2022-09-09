/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  year: "",
};

const birthYearSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateAge(state, action: PayloadAction<string>) {
      state.year = action.payload;
    },
  },
});

export const { updateAge } = birthYearSlice.actions;
export default birthYearSlice.reducer;
