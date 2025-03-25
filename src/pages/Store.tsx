import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchProducts,
  fetchProductsByCategory,
  selectProducts,
  selectProductsStatus,
  selectProductsError,
} from '../store/products';
import { fetchCategories, selectCategories } from '../store/categories';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import { Category } from '../types/category.types';
import { Nullable } from '../types/utils';

function Store() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);
  const [selectedCategory, setSelectedCategory] =
    useState<Nullable<Category>>(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchProductsByCategory(selectedCategory.id));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, selectedCategory]);

  return (
    <div className="container mx-auto p-4">
      {status === 'loading' && <p>Loading products...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      {status === 'succeeded' && (
        <>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onChangeCategory={setSelectedCategory}
          />
          <ProductList products={products} />
        </>
      )}
    </div>
  );
}

export default Store;
