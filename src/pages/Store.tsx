import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProducts } from "../store/products/actions";
import { selectProducts, selectProductsStatus, selectProductsError } from "../store/products/selectors";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

function Store() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        {status === "loading" && <p>Loading products...</p>}
        {status === "failed" && <p className="text-red-500">Error: {error}</p>}
        {status === "succeeded" && <ProductList products={products} />}
      </div>
    </>
  );
}

export default Store;
