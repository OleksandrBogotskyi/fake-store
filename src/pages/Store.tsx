import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchProducts,
  selectProducts,
  selectProductsStatus,
  selectProductsError,
} from '../store/products';
import { fetchCategories, selectCategories } from '../store/categories';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import { Category } from '../types/category.types';
import { Nullable } from '../types/utils';
import { GetProductsDto } from '../types/get-products.dto';

function Store() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);

  const [selectedCategory, setSelectedCategory] =
    useState<Nullable<Category>>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const filters: GetProductsDto = {};

    if (selectedCategory?.id) {
      filters.categoryId = selectedCategory.id;
    }
    if (searchQuery.trim()) {
      filters.title = searchQuery.trim();
    }

    setIsLoading(true);
    dispatch(fetchProducts(filters)).finally(() => setIsLoading(false));
  }, [dispatch, selectedCategory, searchQuery]);

  return (
    <div className="container mx-auto p-4">
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChangeCategory={setSelectedCategory}
      />
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
}

export default Store;
