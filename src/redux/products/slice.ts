import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../../types";
import { axiosInstance } from "../../utils/axios";
import { ProductsSliceState, Status } from "./types";

const initialState: ProductsSliceState = {
  products: [],
  status: Status.LOADING,
  error: null,
};

export const fetchProducts = createAsyncThunk<IProductItem[]>(
  "products/fetchTableData",
  async () => {
    const response = await axiosInstance.get("/");
    console.log(response.data);

    return response.data.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProductItem[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products = [];
        state.status = Status.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = Status.SUCCESS;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products = [];
        state.status = Status.ERROR;
      });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
