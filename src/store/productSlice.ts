import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../services/api";
import { ReactNode } from "react";

export interface Product {
  category: any;
  description: ReactNode;
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Початковий стан
const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProductsThunk = createAsyncThunk("products/fetchProducts", async () => {
  const data = await fetchProducts();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
