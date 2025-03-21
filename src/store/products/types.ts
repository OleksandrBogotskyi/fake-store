import { ProductsState } from "../../types/product.type";

export const initialState: ProductsState = {
  products: [],
  categories: [],
  status: "idle",
  error: null,
};
