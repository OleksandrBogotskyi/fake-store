import { Product } from "../../types/product.type";
import { Nullable, NullableString } from "../../types/utils";

export interface ProductsState {
    products: Product[];
    currentProduct: Nullable<Product>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: NullableString;
}