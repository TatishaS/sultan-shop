import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";
import { ProductsSliceState, Status, IProductItem } from "./types";

const initialState: ProductsSliceState = {
  products: [],
  status: Status.LOADING,
  error: null,
};

export const fetchProducts = createAsyncThunk<IProductItem[]>(
  "products/fetchProducts",
  async () => {
    const response = await axiosInstance.get("/");
    console.log(response.data);

    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProductItem[]>) => {
      state.products = action.payload;
    },
    setProductsSorted: (state, action: PayloadAction<string>) => {
      const sortedProducts = [...state.products].sort((a, b) => {
        switch (action.payload) {
          case "по цене (сначала дешевые)": {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          }
          case "по цене (сначала дорогие)": {
            if (b.price > a.price) {
              return 1;
            }
            if (b.price < a.price) {
              return -1;
            }
            return 0;
          }
          case "по названию (А - Я)": {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          }

          case "по названию (Я - А)": {
            if (b.title > a.title) {
              return 1;
            }
            if (b.title < a.title) {
              return -1;
            }
            return 0;
          }
          default: {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          }
        }
      });

      state.products = sortedProducts;
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

export const { setProducts, setProductsSorted } = productsSlice.actions;

export default productsSlice.reducer;
