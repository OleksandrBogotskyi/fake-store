import { Category } from "../../types/category.types";
import { Product } from "../../types/product.type";

export interface ProductsState {
    products: Product[];
    categories: Category[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}