/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type cartType = {
  title: string;
  price: number;
  quantity: number;
};

type initialStateType = {
  deliveryFee: number;
  cart: cartType[] | null;
};

const initialState: initialStateType = {
  cart: null,
  deliveryFee: 0,
};

const CartSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateCartQuantity(
      state,
      action: PayloadAction<{ title: string; type: "inc" | "dec" }>
    ) {
      const { title, type } = action.payload;
      if (state.cart !== null) {
        const cartItemIndex = state.cart?.findIndex(
          (item) => item.title === title
        );
        if (type === "inc") {
          const cartItemIndex = state.cart.findIndex(
            (item) => item.title === title
          );
          state.cart[cartItemIndex].quantity += 1;
        } else if (type === "dec" && state.cart[cartItemIndex].quantity > 0) {
          state.cart[cartItemIndex].quantity -= 1;
        }
      }
    },
    addToCart(state, action: PayloadAction<cartType>) {
      if (state.cart === null) {
        state.cart = [action.payload];
      } else if (state.cart !== null) {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeCartItem(state, action: PayloadAction<{ title: string }>) {
      const { title } = action.payload;
      if (state.cart !== null) {
        const cartItemIndex = state.cart?.findIndex(
          (item) => item.title === title
        );
        const tempCart = state.cart;
        tempCart.splice(cartItemIndex, 1);
        state.cart = tempCart;
      }
    },
    resetCart(state) {
      state.cart = null;
    },
    updateDeliveryFee(state, action) {
      state.deliveryFee = action.payload;
    },
  },
});

export const {
  updateCartQuantity,
  removeCartItem,
  addToCart,
  resetCart,
  updateDeliveryFee,
} = CartSlice.actions;
export default CartSlice.reducer;
