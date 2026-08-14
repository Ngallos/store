import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

store.subscribe(() => {
  try {
    const { cartItems } = store.getState().app;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch {
    // ignore persistence errors
  }
});
