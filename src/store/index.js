import { configureStore } from "@reduxjs/toolkit";
import selectionSortSlice from "./selection-sort-slice";
import stackSlice from "./stack-slice";

const store = configureStore({
  reducer: {
    selectionSort: selectionSortSlice.reducer,
    stack: stackSlice.reducer,
  },
});

export default store;
