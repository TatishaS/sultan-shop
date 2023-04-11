import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  activeCategory: null,
  sortBy: "по умолчанию",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setActiveCategory, setSortBy } = filterSlice.actions;

export default filterSlice.reducer;
