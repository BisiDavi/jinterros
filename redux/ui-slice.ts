/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { UIStateType } from "@/types/redux-types";

const initialState: UIStateType = {
  policies: "your-privacy",
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updatePolicies(state, action: PayloadAction<UIStateType["policies"]>) {
      state.policies = action.payload;
    },
  },
});

export const { updatePolicies } = UISlice.actions;
export default UISlice.reducer;
