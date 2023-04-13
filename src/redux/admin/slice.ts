import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";
import { AdminSliceState, Status } from "./types";
import { IProductItem } from "../products/types";
import { getAdminFromLS } from "../../utils/getCartFromLS";

const { adminItems } = getAdminFromLS();

const initialState: AdminSliceState = {
  adminItems,
  status: Status.LOADING,
  error: null,
};

export const fetchAdminItems = createAsyncThunk<IProductItem[]>(
  "admin/fetchAdminItems",
  async () => {
    const response = await axiosInstance.get("/");
    return response.data;
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminItems: (state, action: PayloadAction<IProductItem[]>) => {
      state.adminItems = action.payload;
      console.log(state.adminItems);
    },
    deleteAdminItem: (state, action: PayloadAction<number>) => {
      state.adminItems = state.adminItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminItems.pending, (state) => {
        state.adminItems = [];
        state.status = Status.LOADING;
      })
      .addCase(fetchAdminItems.fulfilled, (state, action) => {
        state.adminItems = action.payload;
        state.status = Status.SUCCESS;
        state.error = null;
      })
      .addCase(fetchAdminItems.rejected, (state) => {
        state.adminItems = [];
        state.status = Status.ERROR;
      });
  },
});

export const { setAdminItems, deleteAdminItem } = adminSlice.actions;

export default adminSlice.reducer;
