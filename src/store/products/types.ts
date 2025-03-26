import { Product } from "../../types/product.type";
import { NullableString } from "../../types/utils";

export interface ProductsState {
    products: Product[];
    filteredProducts: Product[];
    searchQuery: string;  
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: NullableString;
}