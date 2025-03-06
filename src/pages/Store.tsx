import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchProductsThunk } from "../store/productSlice";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

function Store() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk());
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
