/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { FormStateType } from "@/types/redux-types";

const initialState: FormStateType = {
  resetEditableContent: false,
  media: null,
  previewMedia: "",
  paymentForm: {
    data: null,
    completed: false,
  },
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
      state.media = action.payload;
    },
    uploadPreviewMedia(state, action) {
      state.previewMedia = action.payload;
    },
    updatePaymentForm(
      state,
      action: PayloadAction<FormStateType["paymentForm"]>
    ) {
      state.paymentForm = action.payload;
    },
  },
});

export const {
  resetEditable,
  uploadMedia,
  uploadPreviewMedia,
  updatePaymentForm,
} = FormSlice.actions;
export default FormSlice.reducer;
