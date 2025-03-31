import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchProductById,
  selectProduct,
  selectProductsStatus,
} from '../store/products';
import { FaArrowLeft } from 'react-icons/fa';
import ImageGallery from '../components/ImageGallery';

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);
  const status = useAppSelector(selectProductsStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(Number(id)));
    }
  }, [dispatch, id]);

  const handleGoBack = () => navigate(-1);

  if (status === 'loading') return <p>Loading product...</p>;
  if (!product) return <p className="text-red-500">Product not found</p>;

  return (
    <div className="container mx-auto p-4 text-white">
      <button
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-20 cursor-pointer"
        onClick={handleGoBack}
      >
        <FaArrowLeft /> Back
      </button>
      <div className="flex items-center">
        <ImageGallery images={product.images} />
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <span className="bg-gray-900 text-white inline-block border border-gray-700 py-2 px-3 font-semibold text-xs rounded-full my-4">
            {product.category.name}
          </span>
          <p className="text-gray-400 text-m mt-8">{product.description}</p>
          <div className="flex items-center justify-between mt-8">
            <p className="text-lg font-semibold">
              Price: <span className="text-2xl">${product.price}</span>
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
