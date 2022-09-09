import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import UIReducer from "@/redux/ui-slice";
import CartReducer from "@/redux/cart-slice";

const reducers = combineReducers({
  UI: UIReducer,
  cart: CartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["UI"],
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
