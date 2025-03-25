import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesService } from "../../services/categories";
import { ACTION_TYPE } from "../../enums/action-types.enum";

export const fetchCategories = createAsyncThunk(
  ACTION_TYPE.FETCH_CATEGORIES,
  async (_, { rejectWithValue }) => {
    try {
      const data = await CategoriesService.fetchCategories();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  }
);
