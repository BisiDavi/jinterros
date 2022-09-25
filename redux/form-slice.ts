/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { FormStateType } from "@/types/redux-types";

const initialState: FormStateType = {
  resetEditableContent: false,
  uploadMediaStatus: null,
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
    uploadMedia(state, action) {
      state.uploadMediaStatus = action.payload;
    },
  },
});

export const { resetEditable, uploadMedia } = FormSlice.actions;
export default FormSlice.reducer;
