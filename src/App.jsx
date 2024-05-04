import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />

          {/* id diambil dari component card product yang ditekan user di product page */}
          <Route path="/products/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* 404 page  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Routers>
    </>
  );
};

export default App;
