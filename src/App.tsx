import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import { AppRoutes } from "./enums/routes.enum";

function App() {
  return (
    <div className="w-full min-h-screen bg-backgroundColor">
      <Routes>
        <Route path={AppRoutes.HOME} element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
