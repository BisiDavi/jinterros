/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UIStateType } from "@/types/redux-types";

const initialState: UIStateType = {
  policies: "your-privacy",
  mobileMenu: false,
  slideCart: false,
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updatePolicies(state, action: PayloadAction<UIStateType["policies"]>) {
      state.policies = action.payload;
    },
    updateMobileMenu(state, action: PayloadAction<boolean>) {
      state.mobileMenu = action.payload;
    },
    updateSlideCart(state, action: PayloadAction<boolean>) {
      state.slideCart = action.payload;
    },
  },
});

export const { updatePolicies, updateMobileMenu, updateSlideCart } =
  UISlice.actions;
export default UISlice.reducer;
