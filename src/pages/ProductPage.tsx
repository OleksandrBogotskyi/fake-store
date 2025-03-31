import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchProducts,
  selectProducts,
  selectProductsStatus,
} from '../store/products';
import { Product } from '../types/product.type';
import { Nullable, NullableString } from '../types/utils';
import { FaArrowLeft } from 'react-icons/fa';
import classNames from 'classnames';

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const status = useAppSelector(selectProductsStatus);
  const [product, setProduct] = useState<Nullable<Product>>(null);
  const [selectedImage, setSelectedImage] = useState<NullableString>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchProducts({ id: Number(id) }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === Number(id));
      setProduct(foundProduct || null);
      if (foundProduct?.images.length) {
        setSelectedImage(foundProduct.images[0]);
      }
    }
  }, [products, id]);

  if (status === 'loading') return <p>Loading product...</p>;
  if (!product) return <p className="text-red-500">Product not found</p>;

  return (
    <div className="container mx-auto p-4 text-white">
      <button
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-20 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back
      </button>
      <div className="flex items-center">
        <div className="flex flex-col gap-6 items-center mr-20">
          {product.images.slice(0, 3).map((img, index) => (
            <img
              key={index}
              className={classNames(
                'w-25 h-25 rounded-md cursor-pointer object-cover border transition',
                {
                  'brightness-30': selectedImage === img, 
                  'hover:brightness-70': selectedImage !== img,
                }
              )}
              src={img}
              alt={`Product Photo ${index + 1}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <img
          className="w-120 h-120 rounded-lg object-cover mr-40"
          src={selectedImage || product.images[0]}
          alt={product.title}
        />
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
