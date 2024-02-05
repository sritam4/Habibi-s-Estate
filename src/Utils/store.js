import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    search: searchSlice,
  },
});

export default store;
