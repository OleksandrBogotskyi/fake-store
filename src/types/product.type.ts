import { Category } from './category.types';
export interface Product {
    category: Category;
    description: string;
    id: number;
    title: string;
    price: number;
    images: string[];
}

