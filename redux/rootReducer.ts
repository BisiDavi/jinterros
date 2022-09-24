import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import UIReducer from "@/redux/ui-slice";
import CartReducer from "@/redux/cart-slice";
import AgeReducer from "@/redux/birth-year-slice";
import FormReducer from "@/redux/form-slice";

const reducers = combineReducers({
  UI: UIReducer,
  cart: CartReducer,
  birth: AgeReducer,
  form: FormReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["UI", "form"],
};

const RootReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
