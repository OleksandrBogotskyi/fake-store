import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectCategories = (state: RootState) => state.products.categories;
