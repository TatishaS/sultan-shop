import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceState, ICartItem } from "./types";
import { getCartFromLS } from "../../utils/getDataFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

const { cartItems, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
  cartItems,
  totalPrice,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const isItemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        isItemInCart.count++;
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload, count: 1 }];
      }
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    decreaseCartItem: (state, action: PayloadAction<number>) => {
      const items = [
        ...state.cartItems.map((item) =>
          item.id === action.payload && item.count > 1 ? item.count-- : item
        ),
      ];
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const items = [
        ...state.cartItems.filter((item) => item.id !== action.payload),
      ];
      state.cartItems = items;
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  setCart,
  addToCart,
  decreaseCartItem,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
