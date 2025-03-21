export interface Category {
    id: number;
    name: string;
  }
  
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
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  