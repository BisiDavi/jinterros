/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

const CartSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateCart(state, action: PayloadAction<"inc" | "dec">) {
      if (action.payload === "inc") {
        state.cart = state.cart + 1;
      } else if (action.payload === "dec") {
        state.cart = state.cart + 1;
      }
    },
  },
});

export const { updateCart } = CartSlice.actions;
export default CartSlice.reducer;
