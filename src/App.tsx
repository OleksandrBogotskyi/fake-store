import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import ProductPage from "./pages/ProductPage"; 
import { AppRoutes } from "./enums/routes.enum";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full min-h-screen bg-backgroundColor">
      <Header />
      <Routes>
        <Route path={AppRoutes.HOME} element={<Store />} />
        <Route path={AppRoutes.PRODUCT_DETAILS} element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;