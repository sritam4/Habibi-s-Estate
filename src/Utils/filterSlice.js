import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterOptions: {
      category: 4,
      price: "",
      beds: 1,
      baths: 1,
      sort: "city-level-score",
    },
  },
  reducers: {
    updateFilterSlice: (state, action) => {
      state.filterOptions = action.payload;
    },
  },
});

export const { updateFilterSlice } = filterSlice.actions;
export default filterSlice.reducer;
