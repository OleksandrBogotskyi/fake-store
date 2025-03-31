import { Link } from 'react-router-dom';
import { Product } from '../types/product.type';
import { getProductRoute } from '../helpers/route.helpers';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-7 border border-gray-800 rounded-xl w-full justify-center justify-items-center justify-self-center">
      <Link to={getProductRoute(product.id)}>
        <img
          className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
          src={product.images[0]}
          alt={product.title}
        />
      </Link>
      <div className="w-full text-white">
        <p className="font-semibold text-xl mb-2 h-auto">{product.title}</p>
        <p className="text-gray-500 text-xs max-w-60 truncate">{product.description}</p>
        <span className="bg-gray-900 text-white inline-block border border-gray-700 py-2 px-3 font-semibold text-xs rounded-full my-4">
          {product.category.name}
        </span>
      </div>
      <div className="flex justify-between items-center w-full mt-4 text-white">
        <div>
          <p className="text-xs">Price</p>
          <p className="font-semibold text-lg">
            ${product.price.toLocaleString()}
          </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
