import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from "../../services/products";
import { ACTION_TYPE } from "../../enums/action-types.enum";

export const fetchProducts = createAsyncThunk(
  ACTION_TYPE.FETCH_PRODUCTS,
  async () => {
    return await ProductsService.fetchProducts();
  }
);

export const fetchCategories = createAsyncThunk(
  ACTION_TYPE.FETCH_CATEGORIES,
  async () => {
    return await ProductsService.fetchCategories();
  }
);
