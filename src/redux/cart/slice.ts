import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "./types";
import { axiosInstance } from "../../utils/axios";
import { CartSliceState, Status } from "./types";

const initialState: CartSliceState = {
  cartItems: [],
  status: Status.LOADING,
  error: null,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
