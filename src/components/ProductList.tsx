import ProductCard from './ProductCard';
import { Product } from '../types/product.type';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
}

function ProductList({ products, isLoading }: ProductListProps) {
  return (
    <div className="grid grid-cols-3 gap-4 relative">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {isLoading && (
        <>
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"></div>
          <div className="absolute top-44 left-1/2 -translate-x-1/2 w-36 h-36 border-10 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </>
      )}
    </div>
  );
}

export default ProductList;
