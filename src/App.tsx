import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";

 function App() {
  return (
    <div className="w-full min-h-screen bg-backgroundColor">
      <Routes>
        <Route path='/' element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
