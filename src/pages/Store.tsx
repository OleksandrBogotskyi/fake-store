import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts, fetchCategories } from "../store/products/actions";
import { selectProducts, selectProductsStatus, selectProductsError, selectCategories } from "../store/products/selectors";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import CategoryFilter from "../components/CategoryFilter";
import { Category } from "../types/product.type";

function Store() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category.id === selectedCategory.id)
    : products;

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        {status === "loading" && <p>Loading products...</p>}
        {status === "failed" && <p className="text-red-500">Error: {error}</p>}
        {status === "succeeded" && (
          <>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onChangeCategory={setSelectedCategory}
            />
            <ProductList products={filteredProducts} />
          </>
        )}
      </div>
    </>
  );
}

export default Store;
