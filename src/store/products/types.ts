import { Product } from "../../types/product.type";

export interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}