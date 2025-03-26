import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products.filteredProducts;
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectSearchQuery = (state: RootState) => state.products.searchQuery;

