import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import RootReducer from "@/redux/rootReducer";

const store = configureStore({
  reducer: RootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

export type AppState = ReturnType<typeof store.getState>;
