import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from "../../services/products";
import { ACTION_TYPE } from "../../enums/action-types.enum";

export const fetchProducts = createAsyncThunk(
  ACTION_TYPE.FETCH_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const data = await ProductsService.fetchProducts();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

export const fetchCategories = createAsyncThunk(
  ACTION_TYPE.FETCH_CATEGORIES,
  async (_, { rejectWithValue }) => {
    try {
      const data = await ProductsService.fetchCategories();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  ACTION_TYPE.FETCH_PRODUCTS_BY_CATEGORY,
  async (categoryId: number, { rejectWithValue }) => {
    try {
      const data = await ProductsService.fetchProductsByCategory(categoryId);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch products by category");
    }
  }
);
