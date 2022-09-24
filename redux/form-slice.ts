/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { FormStateType } from "@/types/redux-types";

const initialState: FormStateType = {
  resetEditableContent: false,
};

const FormSlice = createSlice({
  name: "FormSlice",
  initialState,
  reducers: {
    resetEditable(
      state,
      action: PayloadAction<FormStateType["resetEditableContent"]>
    ) {
      state.resetEditableContent = action.payload;
    },
  },
});

export const { resetEditable } = FormSlice.actions;
export default FormSlice.reducer;
