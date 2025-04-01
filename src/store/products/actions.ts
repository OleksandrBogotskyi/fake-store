import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from "../../services/products";
import { ACTION_TYPE } from "../../enums/action-types.enum";

export const fetchProducts = createAsyncThunk(
  ACTION_TYPE.FETCH_PRODUCTS,
  async (filters: { title?: string; categoryId?: number} = {}, { rejectWithValue }) => {
    try {
      const data = await ProductsService.fetchProducts(filters);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

export const fetchProductById = createAsyncThunk(
  ACTION_TYPE.FETCH_PRODUCT_BY_ID,
  async (id: number, { rejectWithValue }) => {
    try {
      const data = await ProductsService.fetchProductById(id);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch product by ID");
    }
  }
);


