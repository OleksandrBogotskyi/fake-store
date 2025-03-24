import { Category } from './category.types';

export interface Product {
    category: Category;
    description: string;
    id: number;
    title: string;
    price: number;
    images: string[];
}

export interface ProductsState {
    products: Product[];
    categories: Category[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export const initialState: ProductsState = {
    products: [],
    categories: [],
    status: "idle",
    error: null,
  };
