import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  searchValue: "",
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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      console.log(state.searchValue);
    },
  },
});

export const { setActiveCategory, setSortBy, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
