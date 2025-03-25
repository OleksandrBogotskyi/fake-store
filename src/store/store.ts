import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import categoriesReducer from "./categories/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
