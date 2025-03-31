import { Product } from "../../types/product.type";
import { Nullable, NullableString } from "../../types/utils";

export interface ProductsState {
    products: Product[];
    product: Nullable<Product>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: NullableString;
}