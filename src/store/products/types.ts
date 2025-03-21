import { ProductsState } from "../../types/product.type";

export const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};
