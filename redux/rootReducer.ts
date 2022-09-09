import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import UIReducer from "@/redux/ui-slice";
import CartReducer from "@/redux/cart-slice";
import AgeReducer from "@/redux/age-slice";

const reducers = combineReducers({
  UI: UIReducer,
  cart: CartReducer,
  age: AgeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["UI"],
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
