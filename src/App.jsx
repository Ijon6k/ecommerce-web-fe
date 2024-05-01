import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import ProductPage from "./Pages/ProductPage";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
    return (
        <>
            <Routers>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/products' element={<ProductPage />} />
                    <Route path='/products/detail' element={<ProductDetail />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/login' element={<LoginPage/>} />
                </Routes>
            </Routers>
        </>
    )
}

export default App