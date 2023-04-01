import { configureStore } from "@reduxjs/toolkit";
import products from "./products/slice";
import cart from "./cart/slice";

export const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
