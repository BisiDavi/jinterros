/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  year: "",
};

const AgeSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateAge(state, action: PayloadAction<string>) {
      state.year = action.payload;
    },
  },
});

export const { updateAge } = AgeSlice.actions;
export default AgeSlice.reducer;
