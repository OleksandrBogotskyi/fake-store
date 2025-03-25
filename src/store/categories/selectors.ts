import { RootState } from "../store";

export const selectCategories = (state: RootState) => state.categories.categories;
export const selectCategoriesStatus = (state: RootState) => state.categories.status;
export const selectCategoriesError = (state: RootState) => state.categories.error;
